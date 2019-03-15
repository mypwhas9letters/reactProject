import React from 'react';

const ToDoItem = (props) => {
  return (
    <div className="item">
      <div className="content">
        <h3 className="header">{props.item.task}</h3>
        <button className="ui button red right floated" onClick={() => props.onDelete(props.item.id)}>X</button>
      </div>
    </div>
  )
}

export default ToDoItem
