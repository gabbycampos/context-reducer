import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import TaskDetails from './TaskDetails';

const TaskList = () => {
    const { tasks } = useContext(TaskContext);
    return tasks.length ? (
        <div className="tasks">
            <ul>
                {tasks.map(task => {
                    return (<TaskDetails task={task} key={task.id} />);
                })}
            </ul>
        </div>
    ) : (
            <div className="nothing">Nothing to do</div>
        )
}

export default TaskList;