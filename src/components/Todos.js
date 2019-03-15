import React, { Component } from 'react';
import AddToDos from './AddToDos'

class Todos extends Component {
  state = {
    toDos: [{
      id: 1,
      task: "hi"
    }, {
      id:2,
      task: "hello"
    }]
  }

  buildList = (list) => {
    console.log(list)
    return list.toDos.map(item => <li key={item.id}>{item.task}</li>)
  }

  onClickAdd = (toDo) => {
    let newArr = this.state.toDos.push(toDo)
    this.setState({toDos: newArr})
    console.log(this.state)
  }

  render(){
    const arr = this.buildList(this.state)
    return(
      <div>
        <h1>List of To Dos</h1>
        { arr }
        <AddToDos onClickAdd={this.onClickAdd}/>
      </div>
    )
  }
}

export default Todos
