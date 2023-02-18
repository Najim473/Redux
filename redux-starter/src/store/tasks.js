import { createAction, createReducer } from "@reduxjs/toolkit";
// ACTIONS
export const addTask = createAction("ADD_TASK");
export const removeTask = createAction("REMOVE_TASK");
export const completedTask = createAction("COMPLETED_TASK");
// REDUCER
let id = 0;
export default createReducer([], {
    [addTask.type]: (state, action) => {
        state.push({
            id: ++id,
            task: action.payload.task,
            completed: false
        })
    },
    [removeTask.type]: (state, action) => {
        const index = state.findIndex(task => task.id === action.payload.id)
        state.splice(index, 1)
    },
    [completedTask.type]: (state, action) => {
        const index = state.findIndex(task => task.id === action.payload.id)
        state[index].completed = true;
    }
}) 