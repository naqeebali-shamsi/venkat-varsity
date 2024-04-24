import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import tasks1 from './tasks';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

function App() {
  const [show, setShow] = useState(false);
  const [tasks, setTasks] = useState(tasks1);
  useEffect(() => {
    setTasks(tasks1);
  })
  
  return (
    <div className="App">
      <h1>Tasks</h1>      
      <TaskList tasks={tasks} setTasks={setTasks} anotherpropname="List of tasks"/>
      <Button variant="primary" onClick={() => setShow(true)}>Add Task</Button>
      {/* The part inside the {} is called a callback function.
      A callback function is a function that is passed as an argument to another function. */}
      <TaskForm show={show} setShow={setShow} tasks={tasks} setTasks={setTasks} /> {/* This technique of passing props from parent to child is called prop drilling */}
    </div>
  );
}

export default App;