import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const ToDo = () => {
  const [task, setTask] = useState([]);

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return; //dont add empty
    const ifTodoMatched = task.find(
      (currTask) => currTask.content === content
    );
    if (ifTodoMatched) return;
    setTask((prevTask) => [...prevTask, { id, content, checked }])
  }

  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((currTask) => currTask.content !== value);
    setTask(updatedTask)
  }

  const handleClearAllTodos = () => {
    setTask([]);
  }

  const handleCheckedTodo =(task)=> {
    
  }

  return (
    <>
      <div className='container'>
        <header>
          <h1>ToDo List</h1>
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
                  checked = {currTask.checked}
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

export default ToDo;