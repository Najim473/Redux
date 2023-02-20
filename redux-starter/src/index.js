import store from "./store/configureStore";
import { loadTasks, addNewTask } from "./store/tasks";
// console.log(getTasks());

store.dispatch(loadTasks());
store.dispatch(addNewTask({ task: "complete This exercise 4" }));