import React, { useContext } from 'react'
import { UserContext } from '../App'


function Add() {
  const { value, setValue, setIodoList, todoList } = useContext(UserContext)

  const inputValue = (e) => {
    setValue(e.target.value)
  }

  const addItem = () => {
    setIodoList([...todoList, value])
    setValue('')
  }
  return (
    <div className='w-[400px] flex flex-col gap-2 items-center'>
      <input type='text' placeholder='add task...' className='h-12 bg-white p-3 text-black w-full' value={value} onChange={inputValue} />

      <button type='button' className='h-10 w-[95%] bg-green-500 hover:bg-green-700 text-black text-lg flex justify-center items-center' onClick={addItem}>ADD</button>
      <hr className='border-gray-600 border w-full my-2' />
    </div>
  )
}

export default Add