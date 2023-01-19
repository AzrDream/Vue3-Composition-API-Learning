<template>
    <div>
        <child name="张三" :age="20" gender="男" @sendVal="geChildVal">
            <div>我是child组件的内容1</div>
            <div>我是child组件的内容2</div>
        </child>
    </div>
</template>

<script lang="ts">
    import { defineComponent} from 'vue';
    import Child from "../components/child.vue";
    export default defineComponent({
        name:'setup-params',
        setup(){
            let geChildVal=(val:string)=>{
                console.log(val);
            }
            return {
                geChildVal
            }
        },
        components:{
            Child
        }
    })
</script>

<style scoped>
</style>