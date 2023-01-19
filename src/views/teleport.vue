<template>
    <div>
        <div class="header">页头</div>
        <div class="main">页体</div>
        <div class="footer">页脚</div>
        <button @click="teleport('.header')">传送到页头</button>
        <button @click="teleport('.main')">传送到页体</button>
        <button @click="teleport('.footer')">传送到页脚</button>
        <teleport :to="position" v-if="position">
            <my-dialog></my-dialog>
        </teleport>
    </div>
</template>

<script lang="ts">
    import { defineComponent,ref} from 'vue';
    import MyDialog from "../components/dialog.vue";
    export default defineComponent({
        name:'teleport',
        setup(){
            let position=ref("");
            let teleport=(val:string)=>{
                // console.log(val);
                position.value=val;
            }
            return {
                teleport,
                position
            }
        },
        components:{
            MyDialog
        }
    })
</script>

<style scoped lang="scss">
    .header{width:100%;height:100px;background-color:#FF0000;position: relative;font-size:16px;color:#FFFFFF;}
    .main{width:100%;height:400px;background-color:#0000FF;position: relative;font-size:16px;color:#FFFFFF;}
    .footer{width:100%;height:100px;background-color:#00FF00;position:relative;font-size:16px;color:#FF0000}
</style>