import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
let id = 0;
import axios from "axios";
export const fetchTasks = createAsyncThunk("fetchTasks", async () => {
    const response = await axios.get("http://localhost:5000/api/tasks")
    return { tasks: response.data }
});
const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        // action : function
        getTasks: (state, action) => {
            return action.payload.tasks;
        },
        addTask: (state, action) => {
            state.push({
                id: ++id,
                task: action.payload.task,
                completed: false,
            });
        },
        removeTask: (state, action) => {
            const index = state.findIndex((task) => task.id === action.payload.id);
            state.splice(index, 1);
        },
        completedTask: (state, action) => {
            const index = state.findIndex((task) => task.id === action.payload.id);
            state[index].completed = true;
        },
    },
});

console.log(taskSlice);
export const { getTasks, addTask, removeTask, completedTask } =
    taskSlice.actions;
export default taskSlice.reducer;
