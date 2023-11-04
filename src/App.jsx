import { createContext, useState } from 'react';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';
import { containerVariants } from './components/animate';
import { motion } from 'framer-motion';

//react createContext hook created a GlobalInfo variable which will store other variables
export const GlobalInfo = createContext();

const localTasks = JSON.parse(localStorage.getItem('tasks'));

function App() {
  const [tasks, setTasks] = useState(localTasks);






  return (
    <GlobalInfo.Provider value={{ tasks, setTasks }} >
      <main className='container mx-auto min-w-[280px]'>
        <motion.div
          className="bg-gray-100 min-h-screen p-4 flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          <h1 className="sm:text-2xl text-xl font-bold mb-6">Task Management App</h1>

          {/*component where you can create task through input*/}
          <CreateTask />

          {/*component where added Task got handeled*/}
          <TaskList />

        </motion.div>
      </main>
    </GlobalInfo.Provider>
  );
}

export default App;
