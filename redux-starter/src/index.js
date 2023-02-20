import store from "./store/configureStore";
import { loadTasks } from "./store/tasks";
// console.log(getTasks());

store.dispatch(loadTasks());
