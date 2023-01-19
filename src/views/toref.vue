<template>
    <div>
        {{state.total}} <button @click="update()">更新</button>
    </div>
</template>

<script lang="ts">
    import { defineComponent,reactive,toRef} from 'vue';
    export default defineComponent({
        name:'toref',
        setup(){
            let state=reactive({
                total:10
            });
            let update=()=>{
                // let total=state.total;//直接赋值给变量total，对total进行值的更新，视图不会更新
                let total=toRef(state,"total");//使用toRef进行引用，改变total的值，视图会更新
                // let total=toRef({total:10},"total") //如果通过toRef创建的数据修改时，并不会触发视图界面的更新
                total.value++;
            }
            return {
                state,
                update
            }
        }
    })
</script>

<style scoped>
</style>