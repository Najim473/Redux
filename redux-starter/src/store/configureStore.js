import { configureStore } from "@reduxjs/toolkit";
// import log from "./middleware/log";
import employeeReducer from "./employees";
import tasksReducer from "./tasks";
// import logger from 'redux-logger'
import error from "./middleware/error";
import api from "./middleware/api";

const store = configureStore({
    reducer: {
        tasks: employeeReducer,
        employees: tasksReducer
    },
    // WE CAN ALSO APPLY THIS WAY 
    // middleware: [log]
    // ALTERNATIVE WAY 
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api, error]
});

export default store;
