import React, { useEffect, useState } from "react";
import { loadTasks } from "../store/tasks";
import { useDispatch, useSelector } from "react-redux";
const Tasks = () => {
    // const [tasks, setTasks] = useState([]);
    const { tasks, loading } = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadTasks());
    }, []);
    console.log(tasks);
    return (
        <>
            {loading ? (
                <p>Loading....</p>
            ) : (
                <div>
                    {tasks.map((t) => (
                        <p key={t.id}>{t.task}</p>
                    ))}
                </div>
            )}
        </>
    )

};
export default Tasks;
