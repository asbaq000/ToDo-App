import React, { useState, useEffect } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const markAsImportant = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task
      )
    );
  };

  const editTask = (id, newTitle) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
  };

  const filteredTasks = tasks
    .sort((a, b) => b.important - a.important)
    .sort((a, b) => a.completed - b.completed);

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <AddTaskForm addTask={addTask} />
      <TaskList
        tasks={filteredTasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
        markAsImportant={markAsImportant}
        editTask={editTask}
      />
    </div>
  );
};

export default App;
