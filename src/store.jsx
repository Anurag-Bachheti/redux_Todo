// Create Global Store
import {createStore} from "redux";

//Action Types
const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const CLEAR_TASK = "task/clear";

//Load Saved state from LocalStorage
const loadState = () => {
    try {
        const saved = localStorage.getItem("tasks")
        return saved ? JSON.parse(saved) : [];
    } catch (error) {
        return [];
    }
}

//Already saved from previous sessions.
const initialState = {
    task: loadState(),
}

// Reducer Function
//receives old state, receives actions, returns new State.
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return{
                ...state, //old state should remain same (copy)
                //never mutate old data.
                task: [...state.task, action.payload] //old data + new tasks
            }
    
        case DELETE_TASK:
            const updatedTask  = state.task.filter((_, index)=> {
                return index !== action.payload; //planning to send id to action.payload
            })
            return{
                ...state, 
                task: updatedTask
            }
        case CLEAR_TASK:
            return{
                ...state, 
                task: []
            }

        default: return state;
    }
};

//Create Redux Store(global store with reducer)
export const store = createStore(taskReducer)

// Save state to Local Storage on every change
store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("tasks", JSON.stringify(state.task));
});


// const addTask = (data) => {
//     return {type: ADD_TASK, payload: data}
// }

// const deleteTask = (id) => {
//     return {type: DELETE_TASK, payload: id }
// }


// store.dispatch(addTask("Buy Fruits"));

// store.dispatch(addTask("Buy Vegetables"));

// store.dispatch(addTask("Buy Dal"));

// store.dispatch(deleteTask(0));