import React, { Component} from 'react';

class AddToDos extends Component {
  state = {
    id: 3,
    task: ""
  }

  onValueChange = (e) => {
    this.setState({task: e.target.value})
  }

  onSubmitForm = (e) => {
    e.preventDefault()
    this.props.onClickAdd(this.state)
  }

  render(){
    return(
      <div>
        <form className="ui form" onSubmit={this.onSubmitForm}>
          <div className="field">
            <label>Add To Do</label>
            <input type='text' name='todo' placeholder="To Do" value={this.state.task} onChange={this.onValueChange}/>
          </div>
          <button className="ui primary button">Add</button>
        </form>
      </div>
    )
  }
}

export default AddToDos
