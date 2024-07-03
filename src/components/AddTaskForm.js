import React, { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;

    const newTask = {
      id: Date.now(),
      title,
      completed: false,
      important: false,
    };

    addTask(newTask);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        placeholder="Add a new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
