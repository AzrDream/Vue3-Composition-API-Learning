<template>
    <div>
        {{count}} <button @click="increase()" type="button">+</button>
    </div>
</template>

<script lang="ts">
    import { defineComponent,ref} from 'vue';
    export default defineComponent({
        name:'ref',
        setup(){
            let count=ref(1);
            let increase=()=>{
                count.value++;
                console.log(count.value);
            }
            return {
                count,
                increase
            }
        }
    })
</script>

<style scoped>
</style>