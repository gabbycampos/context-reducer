import React, { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const NewTaskForm = () => {
    const { dispatch } = useContext(TaskContext);
    const [title, setTitle] = useState('');
    const [creator, setCreator] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_TASK', task: {
                title, creator
            }
        });
        setTitle('');
        setCreator('');
    }

    return (
        <div className="form-bg">
            <h1>Make the list...</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="enter task" value={title}
                    onChange={(e) => setTitle(e.target.value)} required />

                <input type="text" placeholder="enter creator" value={creator}
                    onChange={(e) => setCreator(e.target.value)} required />

                <input className="button-form" type="submit" value="add task" />
            </form>
        </div>
    );
}

export default NewTaskForm;