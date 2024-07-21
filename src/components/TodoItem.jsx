import React, { useContext, useState } from 'react';
import { UserContext } from '../App';

function TodoItem() {
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');
  const { todoList, setIodoList } = useContext(UserContext);

  const deleteItem = (index) => {
    const updatedTodoList = todoList.filter((_, i) => i !== index);
    setIodoList(updatedTodoList);
  };

  const editItem = (index) => {
    setEditIndex(index);
    setEditValue(todoList[index]);
  };

  const saveItem = (index) => {
    const updatedTodoList = todoList.map((item, i) =>
      i === index ? editValue : item
    );
    setIodoList(updatedTodoList);
    setEditIndex(null);
  };

  const cancelEdit = () => {
    setEditIndex(null);
  };

  return (
    todoList.length > 0 ? (
      todoList.map((todoItem, index) => (
        <div key={index} className='flex items-center justify-between rounded-md w-[400px] h-[50px] px-3 bg-gray-700 m-1'>
          {editIndex === index ? (
            <input
              type='text'
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className='bg-white text-black h-[60%] px-2'
            />
          ) : (
            <h3 className='font-semibold'>{todoItem}</h3>
          )}
          <div className='flex gap-3 h-[100%] items-center'>
            {editIndex === index ? (
              <>
                <button
                  type="button"
                  className="h-[70%] text-white bg-red-700 hover:bg-red-500 flex items-center"
                  onClick={() => saveItem(index)}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="h-[70%] text-white bg-blue-700 flex items-center hover:bg-blue-500"
                  onClick={cancelEdit}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="h-[70%] text-white bg-red-700 hover:bg-red-500 flex items-center"
                  onClick={() => deleteItem(index)}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="h-[70%] text-white bg-blue-700 flex items-center hover:bg-blue-500"
                  onClick={() => editItem(index)}
                >
                  Edit
                </button>
              </>
            )}
          </div>
        </div>
      ))
    ) : (
      <h1 className='text-lg text-gray-500'>No tasks available</h1>
    )
  );
}

export default TodoItem;
