import store from "./store";
import { addTask, removeTask, completedTask } from "./action";
const unSubscribe = store.subscribe(() => {
    console.log("Updated", store.getState());
});
store.dispatch(addTask("Task 01"));
store.dispatch(addTask("Task 02"));
console.log(store.getState());

unSubscribe()
store.dispatch(completedTask(2))
store.dispatch(removeTask(1));
console.log(store.getState());
