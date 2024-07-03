import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask, markAsImportant, editTask }) => {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
          markAsImportant={markAsImportant}
          editTask={editTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
