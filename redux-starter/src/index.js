import store from "./store";
import { addTask, removeTask } from "./action";
store.dispatch(addTask("Task 01"));
store.dispatch(addTask("Task 02"));
store.dispatch(addTask("Task 03"));
store.dispatch(removeTask(1));
console.log(store.getState());
