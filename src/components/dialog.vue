<template>
    <div class="dialog">
        我是dialog组件
    </div>
</template>

<script lang="ts">
    import { defineComponent} from 'vue';
    export default defineComponent({
        name:'my-dialog'
    })
</script>

<style scoped>
    .dialog{width:100px;height:100px;background-color:#000000;font-size:16px;color:#FFFFFF;position: absolute;left:0px;top:0px;z-index:10;}
</style>