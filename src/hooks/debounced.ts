import {customRef} from "vue";
export function useDebounced<T>(value:T,delay=300,callback:Function){
    let timer:any=null;
    return customRef((track:any,trigger:any)=>{
        return {
            get(){
                track();//告诉vue追踪数据
                return value;
            },
            set(newVal:T){
                //使用clearTimeout和setTimeout实现防抖函数
                clearTimeout(timer);
                timer=setTimeout(()=>{
                    value=newVal;
                    callback(newVal);
                    trigger();//告诉Vue去更新页面
                },delay);
            }
        }
    })
}
