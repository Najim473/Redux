import store from "./store/configureStore";
import { addTask, removeTask, completedTask } from "./store/tasks.js";
// const unSubscribe = store.subscribe(() => {
//     console.log("Updated", store.getState());
// });
store.dispatch(addTask({ task: "Task 01" }));
store.dispatch(addTask({ task: "Task 02" }));
console.log(store.getState());
// unSubscribe();
store.dispatch(completedTask({ id: 2 }));
store.dispatch(removeTask({ id: 1 }));
console.log(store.getState());
