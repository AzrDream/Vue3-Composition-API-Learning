export default{
    namespaced:true,
    state:{
        count:1,
        users:[
            {name:"张三",age:18},
            {name:"李四",age:22},
            {name:"王五",age:12}
        ]
    },
    getters:{
        getUsers(state:{users:Array<object>},getters:any,rootState:any){
            let users=state.users.filter((res:any)=>{
                return res.age>=18;
            })
            return users;
        }
    },
    mutations:{
        ["INC_COUNT"](state:{count:number},payload:any){
            state.count++;
        },
        ["SET_COUNT"](state:{count:number},payload:{count:number}){
            state.count=payload.count;
        }
    },
    actions:{
        async setCount(conText:any,payload:{count:number}){
            let count= await new Promise((resolve:Function,reject:Function)=>{
                setTimeout(()=>{
                    resolve(payload.count)
                },1000);
            })
            conText.commit("SET_COUNT",{count:count})
            return Promise.resolve(count);
        }
    }
}