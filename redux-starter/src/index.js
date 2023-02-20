import store from "./store/configureStore"
import { getTasks } from "./store/tasks"
console.log(getTasks())
store.dispatch({
    type: "apiRequest",
    payload: {
        url: "/tasks",
        onSuccess: "tasks/getTasks",
        onError: "SHOW_ERROR"
    }
})