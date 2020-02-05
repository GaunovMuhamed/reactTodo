import React from 'react'

const SearchTodo = () => {
  return (
    <form className="search-todo-form">
      <input name="searchInput" className="input-field" placeholder="Search for your todos" autoComplete="off"></input>
    </form>
  )
}



export default SearchTodo