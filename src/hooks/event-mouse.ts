import {ref,onMounted,onBeforeUnmount} from "vue";
//自定义hook，hook就是钩子函数，命名规范通常用use开头
export function useMousePosition(){
    //初始化坐标
    let x=ref(0);
    let y=ref(0);

    //用于收集鼠标点击坐标的函数
    let updatePosition=(event:MouseEvent)=>{
        x.value=event.pageX;
        y.value=event.pageY;
    };

    //挂载后绑定事件
    onMounted(()=>{
        document.addEventListener("click",updatePosition);
    });
    //页面离开时卸载绑定的事件
    onBeforeUnmount(()=>{
        document.removeEventListener("click",updatePosition);
    })
    return {x,y}
}