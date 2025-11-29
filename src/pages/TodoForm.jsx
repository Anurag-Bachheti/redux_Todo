import { useState } from 'react';

const TodoForm = ({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState({});

    //handle input change
    const handleInputChange = (value) => {
        setInputValue({ id: value, content: value, checked: false });
    }

    // handle form submit
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue({ id: "", content: "", checked: false });
    }

    return (
        <div>
            <form className='form' onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    className='todo-input'
                    autoComplete='off'
                    value={inputValue.content}
                    onChange={(event) => handleInputChange(event.target.value)}
                />
                <button type="submit" className='to-do-button'>Add Task</button>
            </form>
        </div>
    )
}

export default TodoForm;