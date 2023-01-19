<template>
    <div>{{acceptMessage}}，我是grandson组件</div>
</template>

<script lang="ts">
    import { defineComponent,inject} from 'vue';
    export default defineComponent({
        name:'grandson',
        setup(){
            let acceptMessage=inject<any>("message");
            console.log(acceptMessage.value);
            return {
                acceptMessage
            }
        }
    })
</script>

<style scoped>
</style>