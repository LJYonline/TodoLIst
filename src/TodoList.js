import React from "react";
import TypeNew from './TypeNew'
import ListTodo from './ListTodo'


class TodoList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list:[],
        }
        this.handleChange =this.handleChange.bind(this)
        this.handleDel = this.handleDel.bind(this)
    }
    handleChange (value) {
        this.setState({
            list:[...this.state.list, value],
        });
    }
    handleDel(value){
        this.setState(
            {
                list:value
            }
        )
    }

    render () {
        return (
            <div>
                <TypeNew onAdd={this.handleChange} todo={this.state.list} />
                <div><h1>子组件1过来的值为：{this.state.list}</h1></div>
                <ListTodo onDel={this.handleDel} todo={this.state.list} />
            </div>
        );
    }
}
export default  TodoList;
