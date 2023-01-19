<template>
    <input type="text" placeholder="子组件的input" @input="setValue" />
</template>

<script lang="ts">
    import { defineComponent} from 'vue';
    export default defineComponent({
        name:'my-input',
        setup(props:any,conText:any){
            //实现组件的双向绑定
            let setValue=(e:any)=>{
                // console.log(e.target.value);
                conText.emit("update:modelValue",e.target.value);//获取父组件v-model的modelValue
            }
            return {
                setValue
            }
        }
    })
</script>

<style scoped>
</style>
