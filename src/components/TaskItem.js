import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit, faTrash, faStar, faStarHalfAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

const TaskItem = ({ task, toggleTaskCompletion, deleteTask, markAsImportant, editTask }) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEdit = () => {
    if (newTitle.trim() !== '') {
      editTask(task.id, newTitle);
      setEditing(false);
    }
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      {editing ? (
        <div className="task-edit-form">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <>
          <span className="task-title">{task.title}</span>
          <button className='compl' onClick={() => toggleTaskCompletion(task.id)}>
            <FontAwesomeIcon icon={task.completed ? faTimes : faCheck} />
          </button>
          <button className='imp' onClick={() => markAsImportant(task.id)}>
            <FontAwesomeIcon icon={task.important ? faStar : faStarHalfAlt} />
          </button>
          <button className='edit' onClick={() => setEditing(true)}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button className='del' onClick={() => deleteTask(task.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
