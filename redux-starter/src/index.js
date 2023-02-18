import store from "./store/configureStore";
import { addTask, removeTask, completedTask } from "./store/tasks.js";
import { addEmployee } from "./store/employees";
// const unSubscribe = store.subscribe(() => {
//     console.log("Updated", store.getState());
// });
// console.log(addEmployee())
// store.dispatch(addTask({ task: "Task 01" }));
// store.dispatch(addTask({ task: "Task 02" }));
// console.log(store.getState());
// unSubscribe();
// store.dispatch(completedTask({ id: 2 }));
// store.dispatch(removeTask({ id: 1 }));
// console.log(store.getState());
////////// EMPLOYEE ////////////
// store.dispatch(addEmployee({ employee: "Najim" }))
store.dispatch(({ type: "SHOW_ERROR", payload: { error: "user not found" } }))
// console.log(store.getState)