// TypeNew 组件用于新增数据，它需要todo 和 onAdd 两个属性，上文已经提到过
// 基本逻辑是：当从 input 中获取数据时，将新数据 push 到todo中，
// 然后使用 onAdd 调用 TodoList 的 handleChange 来更新state，然后react自动render
import React from "react";
import {Button} from 'antd'

class TypeNew extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        inputdata:""
        }
        this.Inputdate=this.Inputdate.bind(this)
    }
    handleAdd (e) {
         console.log(e)
        if(this.state.inputdata) {
            this.props.onAdd(e);

                }

        else{
            alert('请输入')

        }
    }
    Inputdate(e){

       this.setState(
           {inputdata:e.target.value
           }
       )}
    render (){
        return (
            <div>
                <h2>子组件1</h2>
                 <input  placeholder="input todolist"  onChange={this.Inputdate} />
                {/*<button onClick={this.handleAdd.bind(this,this.state.inputdata)}>向父组件传值</button>*/}
                <Button onClick={()=>this.handleAdd(this.state.inputdata)}>向父组件传值</Button>
            </div>

        )
    }
}
export default TypeNew;