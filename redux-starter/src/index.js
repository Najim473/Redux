import store from "./store/configureStore";
import { getTasks } from "./store/tasks";
import { apiCallBegan } from "./store/api";
// console.log(getTasks());

store.dispatch(
    apiCallBegan({
        url: "/tasks",
        onStart: "tasks/apiRequested",
        onSuccess: "tasks/getTasks",
        onError: "tasks/apiRequestFailed",

    })
);
