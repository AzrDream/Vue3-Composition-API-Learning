<template>
    <div>
        {{state.total}} <button @click="update()">更新toRaw数据</button><br/>
        {{reactiveMarkState}} <button @click="updateMarkState()">更新markRaw数据</button>
    </div>
</template>

<script lang="ts">
    import { defineComponent,markRaw,reactive,toRaw} from 'vue';
    export default defineComponent({
        name:'raw',
        setup(){
            let state=reactive({
                total:0
            });
            let update=()=>{
                //toRaw将响应式对象转成普通对象
                let stateRaw=toRaw(state);
                stateRaw.total+=1;
                console.log(stateRaw);
            };
            //markRaw标记一个永久的普通对象
            let markState=markRaw({
                goods:["羊肉串","啤酒","花生"]
            });
            let reactiveMarkState=reactive(markState);
            console.log(reactiveMarkState);
            let updateMarkState=()=>{
                reactiveMarkState.goods.push("毛豆");
            }
            return {
                state,
                update,
                updateMarkState,
                reactiveMarkState
            }
        }
    })
</script>

<style scoped>
</style>