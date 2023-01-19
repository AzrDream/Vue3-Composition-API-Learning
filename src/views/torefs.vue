<template>
    <div>
        {{title}}，{{price}}<br/>
        <button @click="setState">更新数据</button>
    </div>
</template>

<script lang="ts">
    import { defineComponent,reactive,toRefs} from 'vue';
    export default defineComponent({
        name:'torefs',
        setup() {
            let state=reactive({
                title:"羊肉串",
                price:"5"
            });
            let setState=()=>{
                state.title="鸡肉串";
                state.price="3";
                console.log(state);
            }
            return {
                ...toRefs(state),//使用扩展运算符，这时state内部的属性并不是响应式的，使用toRefs可以将对象内部的属性转换成响应式数据
                setState
            }
        }
    })
</script>

<style scoped>
</style>