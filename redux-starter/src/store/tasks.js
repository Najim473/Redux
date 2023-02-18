import { createAction } from "@reduxjs/toolkit";
const test = createAction("ADD_TASK");
console.log(test({ task: 'Task create actions' }))
// Action Types
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const COMPLETED_TASK = "COMPLETED_TASK";
// ACTIONS
export const addTask = (task) => {
    return { type: ADD_TASK, payload: { task: task } };
};

export const removeTask = (id) => {
    return { type: REMOVE_TASK, payload: { id: id } };
};

export const completedTask = (id) => {
    return { type: COMPLETED_TASK, payload: { id: id } };
};

// REDUCER
let id = 0;
export default function reducer(state = [], action) {
    switch (action.type) {
        case ADD_TASK: {
            return [
                ...state,
                {
                    id: ++id,
                    task: action.payload.task,
                    completed: false,
                },
            ];
        }
        case REMOVE_TASK: {
            return state.filter((task) => task.id !== action.payload.id);
        }
        case COMPLETED_TASK: {
            return state.map((task) =>
                task.id === action.payload.id
                    ? {
                        ...task,
                        completed: true,
                    }
                    : task
            );
        }
        default:
            return state;
    }
}
