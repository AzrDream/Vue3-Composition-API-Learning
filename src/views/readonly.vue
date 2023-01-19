<template>
    <div></div>
</template>

<script lang="ts">
    import { defineComponent,readonly,shallowReadonly} from 'vue';
    export default defineComponent({
        name:'readonly',
        setup(){
            //深层只读
            let readState=readonly({
                a:1,
                b:2,
                c:{
                    d:4
                }
            });
            // readState.c.d+=1;//不能修改
            // delete readState.c.d;//不能删除
           //浅层只读
            let shallowReadState=shallowReadonly({
                a:1,
                b:2,
                c:{
                    d:4
                }
            })
            // shallowReadState.a+=1;//浅层不能修改
            // shallowReadState.c.d+=1;//深层可以修改
            delete shallowReadState.c.d;//深层可以删除
        }
    })
</script>

<style scoped>
</style>