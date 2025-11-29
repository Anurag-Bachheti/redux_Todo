const todoKey = "reactTodo";

const getLocalStorageTodoData = () => {
    const rawTodos = localStorage.getItem(todoKey);
    if (!rawTodos) return [];
    return JSON.parse(rawTodos);
}

const setLocalStorageTodoData = (task) => {
    return localStorage.setItem(todoKey, JSON.stringify(task));
}

export { getLocalStorageTodoData, setLocalStorageTodoData };