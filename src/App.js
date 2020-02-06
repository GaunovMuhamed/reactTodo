import React, { useState } from 'react';
import './CssReset.css'
import SearchTodo from './components/SearchTodo'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import BottomBar from './components/BottomBar'


const App = () => {

  const [todos, setTodos] = useState([{ id: 1, content: 'buy milk', status: false }, { id: 2, content: 'go shopping', status: true }]);

  const [searchKey, setSearchKey] = useState('')

  const [showFilteredTodos, setShowFiltered] = useState('all')

  console.log(showFilteredTodos)

  //let filteredTodos = todos.filter(todo => todo.content.toLowerCase().includes(searchKey.toLowerCase()));
  let filteredTodos = todos.filter(todo => {
    if (todo.content.toLowerCase().includes(searchKey.toLowerCase())) {
      if (showFilteredTodos === 'completed' && todo.status === true) {
        return todo
      }
      else if (showFilteredTodos === 'active' && todo.status === false) {
        return todo
      }
      else if (showFilteredTodos === 'all') {
        return todo
      }

    }


  })



  const addTodo = (textTodo) => {
    if (textTodo.trim()) {
      const newTodo = { id: Math.random(), content: textTodo, status: false }
      setTodos([...todos, newTodo])
    }
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos([...newTodos]);
  }

  const changeStatus = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.status = !todo.status
      }
      return todo
    })
    console.log(newTodos)
    setTodos([...newTodos]);
  }

  const getSearchKey = (gotSearchKey) => {

    setSearchKey(gotSearchKey)
  }

  const showAll = () => {
    console.log('all')
    filteredTodos = todos;
    setShowFiltered('all')
  }

  const showActive = () => {
    console.log('active')
    filteredTodos = todos.filter(todo => todo.status === true)
    setShowFiltered('active')
  }

  const showCompleted = () => {
    console.log('completed')
    filteredTodos = todos.filter(todo => todo.status === false)
    setShowFiltered('completed')
  }


  return (
    <div className="App">
      <main className="main-container">
        <h1 className="main-text">todos</h1>
        <div className="input-area">
          <SearchTodo getSearchKey={getSearchKey} />
          <TodoList todos={filteredTodos} deleteTodo={deleteTodo} changeStatus={changeStatus} />
          <AddTodo addTodo={addTodo} />
          <BottomBar showAll={showAll} showActive={showActive} showCompleted={showCompleted} />
        </div>
      </main>
    </div>
  )

}

export default App;
