import store from "./store";
store.dispatch({ type: "ADD_TASK", payload: { task: "This is task 01" } });
store.dispatch({ type: "ADD_TASK", payload: { task: "This is task 02" } });
store.dispatch({ type: "ADD_TASK", payload: { task: "This is task 03" } });
store.dispatch({ type: "REMOVE_TASK", payload: { id: 1 } });
console.log(store.getState());
