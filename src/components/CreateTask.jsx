import { useContext, useState } from "react";
import { GlobalInfo } from "../App";
import { CgAddR } from 'react-icons/cg';
import { motion } from "framer-motion";
import { slideAnimateVariants } from "./animate";


const CreateTask = () => {
    const [newTask, setNewTask] = useState('');
    const { setTasks, tasks } = useContext(GlobalInfo);

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            addTask();
        }

    }


    return (
        <motion.div
            className="mb-4 flex items-center justify-between bg-white px-3 pl-5 gap-2 shadow-sm sm:w-[440px] w-[270px] py-3 rounded-md"
            variants={slideAnimateVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true,
            }}
        >
            <input
                type="text"
                placeholder="Add a new task"
                className="border-none outline-none ml-2 focus:ml-0 flex-1 transition-all duration-300 "
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}

                /*when user press enter*/
                onKeyDown={handleEnter}
            />
            <button
                className="ml-2 active:bg-[#5800FF] xl:hover:bg-[#5800FF] text-white text-2xl bg-[#000000] transition-colors duration-300 active:scale-95 rounded"

                /*when user click the button*/
                onClick={addTask}

            >
                <CgAddR />
            </button>
        </motion.div>
    )
}

export default CreateTask