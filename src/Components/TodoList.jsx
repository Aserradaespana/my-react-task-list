import { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    const newTask = { id: tasks.length + 1, text: task, completed: false };
    setTasks([...tasks, newTask]);
    setTask("");
  };

  function deleteTasks(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  const completeTask = (id) => {
    const updatedTasks = tasks.filter((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    console.log(updatedTasks);
    setTasks(updatedTasks);
  };

  return (
    <>
      <h1 className="MyTask"> My Tasks </h1>

      <TaskForm addTask={addTask} setTask={setTask} task={task} />
      <div>
        {tasks.map((task) => (
          <Task
            id={task.id}
            text={task.text}
            completed={task.completed}
            completeTask={completeTask}
            deleteTasks={deleteTasks}
          />
        ))}
      </div>
    </>
  );
}
