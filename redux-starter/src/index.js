import store from "./store/configureStore";
import { loadTasks, addNewTask, updateCompleted } from "./store/tasks";
// console.log(getTasks());

store.dispatch(loadTasks());
// store.dispatch(addNewTask({ task: "complete This exercise 4" }));
store.dispatch(updateCompleted({ id: 3, completed: true }))