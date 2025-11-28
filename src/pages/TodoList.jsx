import { MdCheck, MdDeleteForever } from "react-icons/md";

const TodoList = ({data, checked, onHandleDeleteTodo, onHandleCheckedTodo}) => {
    return (
        <div>
            <li>
                <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
                <button className='check-btn' onClick={()=> onHandleCheckedTodo(data)}><MdCheck /></button>
                <button className='delete-btn' onClick={() => onHandleDeleteTodo(data)}><MdDeleteForever /></button>
            </li>
        </div>
    )
}

export default TodoList