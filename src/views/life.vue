<template>
    <div>生命周期 {{name}} <button @click="name='李四'">修改姓名</button> <router-link to="/">跳转首页</router-link></div>
</template>

<script lang="ts">
    import { defineComponent,ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted,onActivated,onDeactivated} from 'vue';
    export default defineComponent({
        name:'life',
        setup(){
            let name=ref("张三");
            console.log("setup相当于created和beforeCreate");
            onBeforeMount(()=>{
                console.log("onBeforeMount")
            })
            onMounted(()=>{
                console.log("onMounted")
            })
            onBeforeUpdate(()=>{
                console.log("onBeforeUpdate")
            })
            onUpdated(()=>{
                console.log("onUpdated")
            })
            onBeforeUnmount(()=>{
                console.log("onBeforeUnmount")
            })
            onUnmounted(()=>{
                console.log("onUnmounted")
            })
            onActivated(()=>{
                console.log("onActivated")
            })
            onDeactivated(()=>{
                console.log("onDeactivated")
            })
            return {
                name
            }
        }
    })
</script>

<style scoped>
</style>