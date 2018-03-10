import React,{Component} from 'react';
import Input from "../../component/Input"
import List  from "../../component/List"

export default class ToDoBox extends Component {
  constructor(props,context){
    super(props,context)
    this.state = {
      data:[]
    }
  }

  render() {
    return (
      <div className="todo-list">
        <header className="todo-head">todoList</header>
        <Input submitFn={this.submitFn.bind(this)}/>
        <List data={this.state.data} deleteFn={this.deleteFn.bind(this)}/>
      </div>
    )
  }

  submitFn(value) {
      const id = this.state.data.length
      this.setState({
          data: this.state.data.concat({
              id: id,
              text: value
          })
      })
  }

  deleteFn(id) {
      let data = this.state.data
      this.setState({
          data: data.filter(item => {
              if(item.id !== id) {
                return item
              }
          })
      })
  }
}
