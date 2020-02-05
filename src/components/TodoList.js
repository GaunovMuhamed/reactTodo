import React, { Component } from 'react'

const TodoList = ({ todos, deleteTodo, changeState }) => {



  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <li id={todo.id} className={todo.done ? "new-todo-done" : "new-todo"} key={todo.id} onClick={(e) => { changeState(e.target.parentElement.id) }}>
          <input checked={todo.done} type="checkbox" className="checkbox"></input>
          <span className="custom-checkbox"></span>
          <h2 className="todo-text">{todo.content}</h2>
          <div className="delete-button" onClick={() => { deleteTodo(todo.id) }}></div>
        </li>
      )
    })
  ) : (
      <div></div>
    );


  return (
    <ul className="todo-list">
      {todoList}
    </ul>
  )
}



export default TodoList