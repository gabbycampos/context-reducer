import React from 'react';
import './App.css';

import TaskContextProvider from './contexts/TaskContext';
import Navbar from './components/Navbar';
import AuthContextProvider from './contexts/AuthContext';
import NewTaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import MemberContextProvider from './contexts/MemberContext';
import MembersList from './components/MemberList';
import NewMemberForm from './components/NewMemberForm';

function App() {
  return (
    <div className="hooks-list">
      <AuthContextProvider>
        <TaskContextProvider>
          <Navbar />

          <NewTaskForm />
          <TaskList />

        </TaskContextProvider>
        
        <MemberContextProvider>
          <NewMemberForm />
          <MembersList />
        </MemberContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
