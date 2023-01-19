<template>
    <div>
    <input type="text" v-model.trim="title" />
    <button type="button" @click="addItem()">添加</button>
    <div v-if="listData.length>0">
        <table width="100%" border="1" cellspacing="0" cellpadding="0">
            <tr style="color: #ffffff">
                <td height="40" bgcolor="#3399FF" align="center">
                <label><input type="checkbox" :checked="isAll" @click="allSelect()" />全选</label>
                </td>
                <td height="40" bgcolor="#3399FF" align="center">标题</td>
                <td height="40" bgcolor="#3399FF" align="center">管理</td>
            </tr>
            <tr v-for="(item,index) in listData" :key="index">
                <td height="40" align="center">
                <input type="checkbox" :checked="item.checked" @click="selectItem(index)" />
                </td>
                <td height="40" align="center" :class="{red:item.checked}">{{item.title}}</td>
                <td height="40" align="center">
                <span @click="delItem(index)">删除</span>
                </td>
            </tr>
            <tr>
                <td height="40" colspan="3">
                <button type="button" @click="allDelItem()">批量删除</button>
                <button type="button" @click="submitData()">提交</button>
                </td>
            </tr>
            </table>
            提交后的数据：{{lastData}}
    </div>
  </div>
</template>

<script lang="ts">
    interface IListData{
        title:string;
        checked:boolean;
    }
    import { defineComponent,ref,reactive} from 'vue';
    export default defineComponent({
        name:'todolist',
        setup(){
            let title=ref(""); 
            let isAll=ref(false);
            let lastData=ref("");
            let listData=reactive<IListData[]>([]);
            //添加数据
            let addItem=()=>{
                listData.push({title:title.value,checked:false});
            }
            //选择数据
            let selectItem=(index:number)=>{
                listData[index].checked=!listData[index].checked;
                checkedAllSelect();
            }
            //检测是否全选
            let checkedAllSelect=()=>{
                let tmpIsAll=true;
                if(listData.length>0){
                    for(let i=0;i<listData.length;i++){
                        if(!listData[i].checked){
                            tmpIsAll=false;
                            break;
                        }
                    }
                }
                isAll.value=tmpIsAll;
            }
            //全选
            let allSelect=()=>{
                isAll.value=!isAll.value;
                if(listData.length>0){
                    for(let i=0;i<listData.length;i++){
                        listData[i].checked=isAll.value;
                    }
                }
            }
            //删除数据
            let delItem=(index:number)=>{
                if(window.confirm("确认要删除吗？")){
                    listData.splice(index,1);
                }
            }
            //批量删除
            let allDelItem=()=>{
                if(listData.length>0){
                    if(window.confirm("确认要删除吗？")){
                        let isSelectItem=false;
                        for(let i=0;i<listData.length;i++){
                            if(listData[i].checked){
                                listData.splice(i--,1);
                                isSelectItem=true;
                            }
                        }
                        if(!isSelectItem){
                            alert("请选择要删除的数据！")
                        }
                    }
                }
            }
            //提交数据
            let submitData=()=>{
                let data=[];
                if(listData.length>0){
                    for(let i=0;i<listData.length;i++){
                        if(listData[i].checked){
                            data.push(listData[i]);
                        }
                    }
                    lastData.value=JSON.stringify(data);
                }
            }
            return {
                title,
                addItem,
                listData,
                selectItem,
                isAll,
                allSelect,
                delItem,
                allDelItem,
                submitData,
                lastData
            }
        }
    })
</script>

<style scoped>
    .red{color:#FF0000}
</style>