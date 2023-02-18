import { configureStore } from "@reduxjs/toolkit";
import log from "./middleware/log";
import employeeReducer from "./employees";
import tasksReducer from "./tasks";
import logger from 'redux-logger'
import error from "./middleware/error";

const store = configureStore({
    reducer: {
        tasks: employeeReducer,
        employees: tasksReducer
    },
    // WE CAN ALSO APPLY THIS WAY 
    // middleware: [log]
    // ALTERNATIVE WAY 
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger, error]
});

export default store;
