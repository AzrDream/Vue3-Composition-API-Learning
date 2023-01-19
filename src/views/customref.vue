<template>
    <div>
        <input type="text" v-model="keywords" />
    </div>
</template>

<script lang="ts">
    import { defineComponent} from 'vue';
    import {useDebounced} from "../hooks/debounced"
    export default defineComponent({
        name:'customref',
        setup(){
            let keywords=useDebounced<string>("",500,(val:string)=>{
                //写业务逻辑比如使用ajax请求数据
                console.log("输入的值",val);
            })
            return {
                keywords
            }
        }
    })
</script>

<style scoped>
</style>