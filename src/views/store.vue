<template>
    <div>
        <div>计数器：{{count}} <button @click="inc()">+</button></div>
        <div v-for="(item,index) in getUsers" :key="index">
            {{item.name}}，{{item.age}}
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent,computed} from 'vue';
    import {useStore} from "vuex";
    export default defineComponent({
        name:'store',
        setup(){
            let store=useStore();
            let count=computed(()=>store.state.counter.count);
            let getUsers=computed(()=>store.getters['counter/getUsers']);
            let inc=()=>{
                // store.commit("counter/INC_COUNT")
                store.dispatch("counter/setCount",{count:1000}).then((count:any)=>{
                    console.log("setCount执行成功，count的值为："+count)
                })
            }
            return {
                count,
                getUsers,
                inc
            }
        }
    })
</script>

<style scoped>
</style>
