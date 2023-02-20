import store from "./store/configureStore";
import {
    loadTasks,
    addNewTask,
    updateCompleted,
    deleteTask,
} from "./store/tasks";
// console.log(getTasks());

store.dispatch(loadTasks());
store.dispatch(addNewTask({ task: "complete This exercise 6" }));
store.dispatch(updateCompleted({ id: 11, completed: true }));
store.dispatch(deleteTask({ id: 8 }));
store.dispatch(deleteTask({ id: 10 }));
