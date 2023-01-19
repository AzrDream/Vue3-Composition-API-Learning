<template>
    <div>
        {{obj}} <button @click="updateA">更新A的值</button> <button @click="updateC">更新C的值</button><br/>
        {{str}} <button @click="updateStr">更新str</button><br/>
        {{objRef}} <button @click="updateObj">更新obj</button>
    </div>
</template>

<script lang="ts">
    import { defineComponent,shallowReactive,shallowRef} from 'vue';
    export default defineComponent({
        name:'shallow',
        setup(){
            let obj=shallowReactive({a:1,b:{c:2}});
            let updateA=()=>{
                obj.a+=1; //浅层是响应式
            };
            let updateC=()=>{
                obj.b.c+=1;//深层不是响应式
            };
            let str=shallowRef("羊肉串");
            let updateStr=()=>{
                str.value="啤酒";//基本数据类型是响应式
            }
            let objRef=shallowRef({title:"花生"});
            let updateObj=()=>{
                objRef.value.title="毛豆";//引用类型不是响应式
            }
            return {
                obj,
                updateA,
                updateC,
                str,
                updateStr,
                objRef,
                updateObj
            }
        }
    })
</script>

<style scoped>
</style>