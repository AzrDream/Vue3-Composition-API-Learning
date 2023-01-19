<template>
    <div>
        <my-input v-model="inputVal"></my-input> {{inputVal}}
    </div>
</template>

<script lang="ts">
    import { defineComponent,ref} from 'vue';
    import MyInput from "../components/myinput.vue";
    export default defineComponent({
        name:'model',
        setup(){
            let inputVal=ref("");
            return {
                inputVal
            }
        },
        components:{
            MyInput
        }
    })
</script>

<style scoped>
</style>