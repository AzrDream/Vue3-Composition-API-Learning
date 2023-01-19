<template>
    <div>姓名：{{name}},年龄：{{age}}<br/>
        <div v-for="(item,index) in slotsDefault" :key="index">
            {{item.children}}
        </div>
        <button @click="sendVal">给父组件传值</button>
    </div>
</template>

<script lang="ts">
    import { defineComponent} from 'vue';
    export default defineComponent({
        name:'child',
        props:{
            name:{
                type:String,
                default:""
            },
            age:{
                type:Number,
                default:0
            }
        },
        setup(props,conText:any) {
            // console.log(props.name,props.age);
            // console.log(conText.attrs["gender"]);
            // console.log(conText.slots.default());
            let slotsDefault=conText.slots.default();
            let sendVal=()=>{
                conText.emit("sendVal","我是child组件")
            }
            return {
                slotsDefault,
                sendVal
            }
        },
        // created(){
        //     // console.log("this.$attrs:",this.$attrs.gender);
        //     console.log((this as any).$slots.default());
        // }
    })
</script>

<style scoped>
</style>