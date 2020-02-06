import React, { useState } from 'react';
import './CssReset.css'
import SearchTodo from './components/searchTodo/SearchTodo'
import TodoList from './components/todoList/TodoList'
import AddTodo from './components/addTodo/AddTodo'
import BottomBar from './components/bottomBar/BottomBar'


const App = () => {

  const [todos, setTodos] = useState([{ id: 1, content: 'buy milk', status: false }, { id: 2, content: 'go shopping', status: true }]);

  const [searchKey, setSearchKey] = useState('')

  let [showFilteredTodos, setShowFiltered] = useState('all')



  let filteredTodos = todos.filter(todo => todo.content.toLowerCase().includes(searchKey.toLowerCase()) &&
    ((showFilteredTodos === 'completed' && todo.status === true) ||
      (showFilteredTodos === 'active' && todo.status === false) ||
      (showFilteredTodos === 'all')))


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

  const changeStatus = (id, target, status) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.status = !todo.status
      }
      return todo
    })
    target.checked = !status;
    setTodos([...newTodos]);

  }

  const getSearchKey = (gotSearchKey) => {

    setSearchKey(gotSearchKey)
  }

  const showAll = () => {
    filteredTodos = todos;
    setShowFiltered('all')
  }

  const showActive = () => {
    filteredTodos = todos.filter(todo => todo.status === true)
    setShowFiltered('active')
  }

  const showCompleted = () => {

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
