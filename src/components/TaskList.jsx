import { useContext } from "react";
import { GlobalInfo } from "../App";
import { AnimatePresence } from "framer-motion";
import Task from "./Task";


const TaskList = () => {
    const { tasks } = useContext(GlobalInfo);



    return (
        <ul>
            <AnimatePresence mode="poplayout">
                {tasks.map((task, index) => (
                    <Task completed={task.completed} text={task.text} index={index} key={index} />
                ))}
            </AnimatePresence>
        </ul>
    )
}

export default TaskList