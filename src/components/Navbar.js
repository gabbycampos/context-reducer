import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { TaskContext } from '../contexts/TaskContext';

const Navbar = () => {
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const { tasks } = useContext(TaskContext);

    return (
        <div className="navbar">
            <nav>
                <div className="log" onClick={toggleAuth}>
                    {isAuthenticated ? 'Logged in' : 'Logged out'}
                </div>
                <p>You currently have {tasks.length} items to complete...</p>
            </nav>
        </div>
    )
}
export default Navbar;

