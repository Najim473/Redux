import store from "./store";
import { addTask, removeTask } from "./action";
const unSubscribe = store.subscribe(() => {
    console.log("Updated", store.getState());
});
store.dispatch(addTask("Task 01"));
console.log(store.getState());
store.dispatch(removeTask(1));
unSubscribe()
store.dispatch(removeTask(2));
console.log(store.getState());
