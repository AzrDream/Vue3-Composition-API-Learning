<template>
    <div>
        <InjectComp></InjectComp>
    </div>
</template>

<script lang="ts">
    import { defineComponent,provide,ref } from 'vue';
    import InjectComp from "../components/inject.vue";
    export default defineComponent({
        name:'provide',
        setup(){
            let text=ref("你好");
            provide("message",text)
        },
        components:{
            InjectComp
        }
    })
</script>

<style scoped>
</style>
