<template>
    <div>
        <div ref="myName">张三</div>
        <div :ref="goodsRefs">羊肉串</div>
        <div :ref="goodsRefs">啤酒</div>
        <div :ref="goodsRefs">花生</div>
    </div>
</template>

<script lang="ts">
    import { defineComponent,onMounted,ref,nextTick} from 'vue';
    export default defineComponent({
        name:'dom',
        setup(){
            //需要将ref设置一个any的泛型，这样就可以使用innerHTML
            let name=ref<any>(null);
            // onMounted(()=>{
            //     console.log(name.value.innerHTML)
            // })
            let eleGoods:any []=[];
            let goodsRefs=(el:any)=>{
                // console.log(el);
                eleGoods.push(el);
            }
            nextTick(()=>{
                console.log(name.value.innerHTML);
                console.log(eleGoods[0].innerHTML);
                console.log(eleGoods[1].innerHTML);
                console.log(eleGoods[2].innerHTML);
            })
            return {
                myName:name,
                goodsRefs
            }
        },
        created(){
            this.$nextTick(()=>{
                console.log((this as any).$refs['myName'].innerHTML)
            })
        }
    })
</script>

<style scoped>
</style>