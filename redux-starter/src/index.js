import axios from "axios";
import store from "./store/configureStore";
import { getTasks } from "./store/tasks";
const gettingTasks = async () => {
    // calling api
    const response = await axios.get("http://localhost:5000/api/tasks");
    console.log(response)
    // dispatch action
    store.dispatch(getTasks({ tasks: response.data }))
};
gettingTasks()