<template>
  <div class="home">
      {{msg}},{{showMessage()}}<br/>
      <button @click="goPage('/ref')">ref的使用</button><br/>
      <button @click="goPage('/reactive')">reactive的使用</button><br/>
      <button @click="goPage('/setup_params')">setup的参数</button><br/>
      <button @click="goPage('/torefs')">toRefs</button><br/>
      <button @click="goPage('/computed')">computed计算属性</button><br/>
      <button @click="goPage('/watch')">watch与watchEffect</button><br/>
      <button @click="goPage('/life')">生命周期</button><br/>
      <button @click="goPage('/dom')">获取DOM与nextTick</button><br/>
      <button @click="goPage('/hook')">自定义hook</button><br/>
      <button @click="goPage('/shallow')">shallowReactive与shallowRef</button><br/>
      <button @click="goPage('/readonly')">readonly与shallowReadonly</button><br/>
      <button @click="goPage('/raw')">toRaw与markRaw</button><br/>
      <button @click="goPage('/toref')">toRef</button><br/>
      <button @click="goPage('/customref')">customRef</button><br/>
      <button @click="goPage('/provide')">provide和inject实现组件通讯</button><br/>
      <button @click="goPage('/isrespond')">响应式数据的判断</button><br/>
      <button @click="goPage('/teleport')">teleport传送api</button><br/>
      <button @click="goPage('/model')">组件之间实现双向绑定</button><br/>
      <button @click="goPage('/store')">在setup函数内vuex的使用</button><br/>
      <button @click="goPage('/todolist')">todoList案例</button><br/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {useRouter} from "vue-router"
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  // data(){
  //   return {
  //     msg:"hello world"
  //   }
  // },
  setup(){
    let msg="hello world";
    function showMessage(){
      return "大家好";
    }
    let router=useRouter();
    let goPage=(url:string)=>{
      router.push(url);
    }
    return {
      msg,
      showMessage,
      goPage
    }
  },
  // beforeRouteEnter (to, from, next) {
  //   next();
  // },
  // methods:{
  //     showMessage(){
  //       return "大家好";
  //     }
  // },
  components: {
    HelloWorld,
  },
  created(){
    // console.log(this.$router)
  }
});
</script>
