import React from 'react'



const BottomBar = ({ filteringTodos }) => {
  return (
    <div className="bottom-menu">
      <div className="bottom-buttons">
        <h2 className="all-button" onClick={(e) => { filteringTodos(e.target.className) }}>All</h2>
        <h2 className="active-button" onClick={(e) => { filteringTodos(e.target.className) }}>Active</h2>
        <h2 className="completed-button" onClick={(e) => { filteringTodos(e.target.className) }}>Completed</h2>
      </div>
    </div>
  )
}



export default BottomBar