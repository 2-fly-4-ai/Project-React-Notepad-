//12:35
import React from 'react'

export default function Todo({ todo, toggleTodo }) {

  function handleTodoClick(){
    toggleTodo(todo.id)
  }
  return (
    <div>
        <label>
        <input type="checkbox"
        checked = {todo.complete}
        onChange= {handleTodoClick}
        //onChange={ this.checkboxHandler } 
        />
        {todo.name}
        </label>
    </div>
  )
}

