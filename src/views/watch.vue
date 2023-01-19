<template>
    <div>
        {{name}}，<button @click="setName">修改姓名</button><br/>
        {{area.province}},{{area.city}} <button @click="setArea">修改省市</button>
    </div>
</template>

<script lang="ts">
    import { defineComponent,ref,watch,reactive, watchEffect} from 'vue';
    export default defineComponent({
        name:'watch',
        setup(){
            let name=ref("张三");
            let setName=()=>{
                name.value="李四";
            };
            //监听ref
            watch(name,(newVal,oldVal)=>{
                console.log(newVal,oldVal);
            });
            let area=reactive({
                province:"山西",
                city:"大同"
            })
            //监听reactive
            let setArea=()=>{
                area.province="辽宁";
                area.city="沈阳";
            };
            // watch(()=>area.province,(newVal,oldVal)=>{
            //     console.log(newVal,oldVal);
            // })
            //监听多个数据
            // watch([()=>area.province,()=>area.city],(newVal,oldVal)=>{
            //     console.log(newVal[0],newVal[1],oldVal[0],oldVal[1]);
            // },{
            //     immediate:true,//初始化执行一次
            //     deep:true //深度监听
            // })
            watchEffect(()=>{
                console.log(area.province,area.city,name.value)
            })
            return {
                name,
                setName,
                area,
                setArea
            }
        }
    })
</script>

<style scoped>
</style>