<template>
    <div></div>
</template>

<script lang="ts">
    import { defineComponent,isRef,ref,isReactive,reactive,isReadonly,readonly,isProxy} from 'vue';
    export default defineComponent({
        name:'isrespond',
        setup(){
            console.log(isRef(ref("")));
            console.log(isReactive(reactive({})));
            console.log(isReadonly(readonly({})));
            console.log(isProxy(readonly({})));
        }
    })
</script>

<style scoped>
</style>