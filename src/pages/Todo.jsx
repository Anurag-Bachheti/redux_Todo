import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, clearTask } from './Actions'

const Todo = () => {

  const tasks = useSelector((state) => state.task);
  const dispatch = useDispatch();

  // handle form submit
  const handleFormSubmit = (inputValue) => {
    const content = inputValue.content;
    if (!content) return; //dont add empty

    const alreadyExists = tasks.some(
      (t) => t.toLowerCase() === content.toLowerCase()
    );

    if (alreadyExists) {
      alert("Task already exists!");
      return;
    }

    dispatch(addTask(content));
  }

  const handleDeleteTodo = (value) => {
    dispatch(deleteTask(value));
  }

  //handle checked todo
  const handleCheckedTodo = (index) => {
    const item = tasks[index];
    const isChecked = item.includes("✓")
    const cleaned = item.replace("✓", "")
    dispatch(deleteTask(index));
    dispatch(addTask(isChecked ? cleaned : cleaned + " ✓"));

  }

  const handleClearAllTodos = () => {
    dispatch(clearTask());
  };

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
            {tasks.map((task, index) => {
              return (
                <TodoList
                  key={index}
                  data={task}
                  checked={task.includes("✓")}
                  onHandleDeleteTodo={() => handleDeleteTodo(index)}
                  onHandleCheckedTodo={() => handleCheckedTodo(index)}
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