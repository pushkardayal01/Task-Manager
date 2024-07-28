import React, { useState } from "react";
import Navbar from './Component/Navbar/Navbar';
import Heading from './Component/Heading/Heading';
import Task from './Component/Task/Task';
import Footer from "./Component/Footer/Footer";
import Project from "./Component/Project/Project";
import './App.css'; // Import the CSS file
import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";

function App() {
  const [task, setTask] = useState([
    {
      id: 1,
      status: 'Complete',
      Project: 'Project1',
      Type: 'Back-end Project',
      Name: 'Design Website',
      Created: '24 March 2024',
    },
    {
      id: 2,
      status: 'Complete',
      Project: 'Project2',
      Type: 'Back-end Project',
      Name: 'Design Website',
      Created: '24 March 2024',
    },
    {
      id: 3,
      status: 'Complete',
      Project: 'Project3',
      Type: 'Back-end Project',
      Name: 'Design Website',
      Created: '24 March 2024',
    },
    {
      id: 4,
      status: 'Complete',
      Project: 'Project4',
      Type: 'Back-end Project',
      Name: 'Design Website',
      Created: '24 March 2024',
    },
    {
      id: 5,
      status: 'Complete',
      Project: 'Project5',
      Type: 'Back-end Project',
      Name: 'Design Website',
      Created: '24 March 2024',
    },
    {
      id: 6,
      status: 'Complete',
      Project: 'Project6',
      Type: 'Back-end Project',
      Name: 'Design Website',
      Created: '24 March 2024',
    },
    {
      id: 7,
      status: 'Complete',
      Project: 'Project7',
      Type: 'Back-end Project',
      Name: 'Design Website',
      Created: '24 March 2024',
    },
  ]);

  const updateTask = (id, updatedTask) => {
    setTask(prevTasks =>
      prevTasks.map(task => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  };

  const deleteTask = (id) => {
    setTask(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const addTask = (newTask) => {
    setTask(prevTasks => [...prevTasks, newTask]);
  };

  return (
    <>
      <div className="container">
        <div className="main-content">
          <Navbar />
          {/* <Calendar/> */}
          <Heading />
          <Task/>
          <Project tasks={task} />
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
