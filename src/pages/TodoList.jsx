import { MdCheck, MdDeleteForever } from "react-icons/md";
import '../App.css';

const TodoList = ({ data, checked, onHandleDeleteTodo, onHandleCheckedTodo }) => {
    return (
        <div>
            <li>
                <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
                <button className='check-btn' onClick={() => onHandleCheckedTodo()}><MdCheck /></button>
                <button className='delete-btn' onClick={() => onHandleDeleteTodo()}><MdDeleteForever /></button>
            </li>
        </div>
    )
}

export default TodoList