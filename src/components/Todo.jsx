import React from 'react'
import Add from './Add'
import TodoItem from './TodoItem'

function Todo() {
  return (
    <div className='w-[420px] border border-gray-600 rounded-md flex flex-col items-center py-3'>
      <Add />
      <TodoItem />

    </div>
  )
}

export default Todo