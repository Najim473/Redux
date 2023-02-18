import { configureStore } from "@reduxjs/toolkit";
import reducer from "./tasks.js";
const store = configureStore({ reducer });

export default store;
