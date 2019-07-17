// ListTodo 组件用于展示列表，并可以删除某一项内容，它有 noDeltodo 两个属性，上文已经提到过
// 它的基本逻辑是：遍历todo 的内容，生成数据列表和删除按钮
// 对某一项执行删除时，想将todo 中的数据删除，
// 然后通过 onDel 事件调用 TodoList 的 handleChange 来更新state，然后react自动render
import React from "react";
class ListTodo extends React.Component{
    handleDel(index) {
        //this.props.onDel(this.props.todo);
        console.log(index)
        var array = []
        for (var i = 0; i <this.props.todo.length; i++) {
            if (i !== index) {
                array.push(this.props.todo[i]);
            }
        }
        console.log(array)
        this.props.onDel(array)
    }
    render() {
        return (
            <div >
                    <h2>子组件2</h2>
                <div>
                    { this.props.todo.map((item,index)=>{
                        return <li key={index}>{item}<button onClick={()=>this.handleDel(index)}>删除</button> </li>})}
                </div>
            </div>
        );
    }
}
export default  ListTodo;