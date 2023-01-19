<template>
    <div>
        鼠标的位置：x:{{x}}，y:{{y}}
    </div>
</template>

<script lang="ts">
    import { defineComponent} from 'vue';
    import {useMousePosition} from "../hooks/event-mouse";
    export default defineComponent({
        name:'hook',
        setup(){
           let {x,y}=useMousePosition();
           return {
               x,
               y
           }
        }
    })
</script>

<style scoped>
</style>