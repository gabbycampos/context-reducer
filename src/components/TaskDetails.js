import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const TaskDetails = ({ task }) => {
    const { dispatch } = useContext(TaskContext);
    return (
        <li className="details" onClick={() => dispatch({ type: 'REMOVE_TASK', id: task.id })}>
            <div>{task.title}</div>
            <div>By: {task.creator}</div>
        </li>
    );
}

export default TaskDetails;