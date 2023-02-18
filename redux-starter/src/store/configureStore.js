import { configureStore } from "@reduxjs/toolkit";
import log from "../middleware/log";
import employeeReducer from "./employees";
import tasksReducer from "./tasks";
import logger from 'redux-logger'
const store = configureStore({
    reducer: {
        tasks: employeeReducer,
        employees: tasksReducer
    },
    // WE CAN ALSO APPLY THIS WAY 
    // middleware: [log]
    // ALTERNATIVE WAY 
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), log]
});

export default store;
