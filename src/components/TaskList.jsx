import { useContext, useEffect } from "react";
import { GlobalInfo } from "../App";
import { AnimatePresence } from "framer-motion";
import { CgCloseR } from 'react-icons/cg';
import { slideAnimateVariants } from "./animate";
import { motion } from 'framer-motion';


const TaskList = () => {
    const { tasks, setTasks } = useContext(GlobalInfo);



    const toggleTaskCompletion = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    const removeTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])


    return (
        <ul>
            <AnimatePresence mode="poplayout">
                {tasks?.map((task, index) => (
                    <motion.li
                        layout
                        key={index}
                        className="bg-white px-3 py-2 mb-3 flex items-center justify-between gap-5"
                        variants={slideAnimateVariants}
                        initial="initial"
                        animate="animate"
                        exit={{ opacity: 0, x: 100 }}
                    >
                        <label className="flex items-center  space-x-2 sm:w-[280px] w-[180px] flex-1">
                            <span className="flex">
                                <input
                                    type="checkbox"
                                    checked={task?.completed}
                                    onChange={() => toggleTaskCompletion(index)}
                                    className="form-checkbox w-5 h-5 accent-[#8BDB81]"
                                />
                            </span>
                            <span
                                className={
                                    task?.completed
                                        ? 'line-through text-gray-400 break-all '
                                        : 'text-black break-all '
                                }
                            >
                                {task?.text}
                            </span>
                        </label>
                        <button
                            onClick={() => removeTask(index)}
                            className="ml-2 bg-[#F31559] text-white text-2xl  transition-colors duration-300 hover:scale-95 active:scale-95 rounded"
                        >
                            <CgCloseR />
                        </button>
                    </motion.li>

                ))}
            </AnimatePresence>
        </ul>
    )
}

export default TaskList