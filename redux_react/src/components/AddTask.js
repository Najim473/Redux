import { useState } from "react"
import { useDispatch } from "react-redux"
import { addNewTask } from "../store/tasks"
export const AddTask = () => {
    const [task, setTask] = useState("")
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addNewTask({ task: task }))
        // CLEAN INPUT 
        setTask('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                name="task"
                placeholder="Enter a task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type='submit'>Add Task</button>
        </form>
    )
}