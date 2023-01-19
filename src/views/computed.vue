<template>
    <div>
        价格：{{price}}<br/>
        数量：<button @click="amount>1?amount--:1">+</button> {{amount}} <button @click="amount++">+</button><br/>
        小计：{{total}}
        <div>
            昵称：<input type="text" v-model="setNickName">{{nickname}}
        </div>
        <!--
            vue2：v-for优先级高于v-if
            vue3：v-if优先级高于v-for
        -->
        <div v-for="item in goodsComputed" :key="item.id">
            {{item.id}}、{{item.title}}
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent,ref,computed} from 'vue';
    export default defineComponent({
        name:'computed',
        setup(){
            let price=ref(10);
            let amount=ref(1);
            let total=computed(()=>{
                return price.value*amount.value;
            });
            let nickname=ref("");
            let setNickName=computed({
                get(){
                    return nickname.value;
                },
                set(val:string){
                    nickname.value=val;
                }
            });
            let goods=[
                {id:1,title:"羊肉串"},
                {id:2,title:"啤酒"},
                {id:3,title:"花生"},
                {id:4,title:"毛豆"}
            ]
            let goodsComputed=computed(()=>{
                let aGoods=goods.filter((val)=>{
                    return val.id>1;
                });
                return aGoods;
            })
            return {
                price,
                amount,
                total,
                nickname,
                setNickName,
                goods,
                goodsComputed
            }
        }
    })
</script>

<style scoped>
</style>