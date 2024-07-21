import React, { useState, createContext } from 'react'
import Todo from './components/Todo'

const UserContext = createContext();

function App() {

  const [value, setValue] = useState('');
  const [todoList, setIodoList] = useState([]);


  return (
    <div className='flex flex-col items-center gap-4'>
      <h1>TODO LIST</h1>
      <UserContext.Provider value={{ value, setValue, todoList, setIodoList }}>
        <Todo />
      </UserContext.Provider>
    </div>
  )
}

export default App
export { UserContext }