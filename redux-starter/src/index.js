import store from "./store/configureStore"
import { getTasks } from "./store/tasks"
console.log(getTasks())
store.dispatch({
    type: "apiRequest",
    payload: {
        url: "/tasks",
        onStart: "tasks/apiRequested",
        onSuccess: "tasks/getTasks",
        onError: "tasks/apiRequestFailed"
    }
})