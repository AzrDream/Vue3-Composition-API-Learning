<template>
    <div>
        <ul>
            <li v-for="item in category" :key="item.id">
                {{item.title}}
            </li>
        </ul>
        <button @click="addData">添加数据</button>
    </div>
</template>

<script lang="ts">
    import { defineComponent,reactive} from 'vue';
    export default defineComponent({
        name:'reactive',
        setup(){
            let category=reactive([
                {
                    id:1,
                    title:"羊肉串"
                },
                {
                    id:2,
                    title:"啤酒"
                },
                {
                    id:3,
                    title:"花生"
                }
            ]);
            function addData(){
                category.push({id:4,title:"毛豆"});
                console.log(category);
            }
            return{
                category,
                addData
            }
        }
    })
</script>

<style scoped>
</style>