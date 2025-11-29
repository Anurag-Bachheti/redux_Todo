import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import { getLocalStorageTodoData, setLocalStorageTodoData } from "./TodoLocalStorage";

const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageTodoData());

  // handle form submit
  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return; //dont add empty
    const ifTodoMatched = task.find(
      (currTask) => currTask.content === content
    );
    if (ifTodoMatched) return;
    setTask((prevTask) => [...prevTask, { id, content, checked }])
  }

  //todo add to localstorage
  setLocalStorageTodoData(task);

  //handle delete todo
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((currTask) => currTask.content !== value);
    setTask(updatedTask)
  }

  //handle clear all todos
  const handleClearAllTodos = () => {
    setTask([]);
  }

  //handle checked todo
  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((currTask) => {
      if (currTask.content === content) {
        return { ...currTask, checked: !currTask.checked };
      } else {
        return currTask;
      }
    })
    setTask(updatedTask);
  }

  return (
    <>
      <div className='container'>
        <header>
          <h1>Todo List</h1>
        </header>
      </div>

      <TodoForm onAddTodo={handleFormSubmit} />

      <div>
        <div className='unorderedList'>
          <ul>
            {task.map((currTask) => {
              return (
                <TodoList
                  key={currTask.id}
                  data={currTask.content}
                  checked={currTask.checked}
                  onHandleDeleteTodo={handleDeleteTodo}
                  onHandleCheckedTodo={handleCheckedTodo}
                />
              );
            })}
          </ul>
        </div>

        <div>
          <button className='clearAll' onClick={handleClearAllTodos}>Clear All</button>
        </div>
      </div>

    </>
  )
}

export default Todo;