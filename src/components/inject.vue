<template>
    <div>{{acceptMessage}},我是injec组件
        <grandson></grandson>
    </div>
</template>

<script lang="ts">
    import { defineComponent,inject} from 'vue';
    import Grandson from "../components/grandson.vue";
    export default defineComponent({
        name:'inject',
        setup(){
            let acceptMessage=inject<any>("message");
            console.log(acceptMessage.value);
            return {
                acceptMessage
            }
        },
        components:{
            Grandson
        }
    })
</script>

<style scoped>
</style>