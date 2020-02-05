import React, { Component } from 'react';
import './CssReset.css'
import SearchTodo from './components/SearchTodo'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import BottomBar from './components/BottomBar'


class App extends Component {

  state = {
    todos: [
      { id: 1, content: 'Buy some milk', done: false },
      { id: 2, content: 'Play mario cart', done: true }
    ]
  }

  addTodo = (textTodo) => {
    if (textTodo.trim()) {
      const newTodo = { content: textTodo, id: Math.random(), done: false }
      const todos = [...this.state.todos, newTodo]
      this.setState({
        todos
      })
    }
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    })

    this.setState({ todos: todos });
  }

  changeState = (id) => {

    const todos = this.state.todos.map((todo) => todo.id == id ? todo.done = !todo.done : todo.done)

    this.setState(todos)
  }


  filteringTodos = (className) => {
    let todos = this.state.todos;
    if (className == "all-button") {
      todos.forEach(todo => todo.className = "new-todo")
    }
    else if (className == "active-button") {
      todos.forEach(todo => todo.done ? todo.className = "hide-todo" : todo.className = "new-todo")
    }
    else if (className == "completed-button") {
      todos.forEach(todo => todo.done ? todo.className = "new-todo" : todo.className = "hide-todo")
    }
    console.log(todos)
    this.setState([...todos])
  }


  render() {
    return (
      <div className="App">
        <main className="main-container">
          <h1 className="main-text">todos</h1>
          <div className="input-area">
            <SearchTodo />
            <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} changeState={this.changeState} />
            <AddTodo addTodo={this.addTodo} />
            <BottomBar filteringTodos={this.filteringTodos} />
          </div>
        </main>
      </div>
    )
  }

}

export default App;
