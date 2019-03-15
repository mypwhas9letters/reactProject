import React, { Component } from 'react';
import AddToDos from './AddToDos';
import ToDoItem from './toDoItem'

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


  onClickAdd = (toDo) => {
    let newArr = [...this.state.toDos, toDo]
    this.setState({toDos: newArr})
  }

  onDeleteTask = (deleteKey) => {
    let newArr = [...this.state.toDos].filter(toDo => toDo.id !== deleteKey)
    this.setState({toDos: newArr})
  }

  render(){
    const arr = this.state.toDos.map(todo => <ToDoItem key={todo.id} item={todo} onDelete={this.onDeleteTask}/>)
    return(
      <div>
        <h1>List of To Dos</h1>
        <AddToDos onClickAdd={this.onClickAdd}/>
        <div className='ui relaxed divided list'>
          { arr }
        </div>
      </div>
    )
  }
}

export default Todos
