import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList'; 
import AddTask from './components/AddTask'; 
import NavigationBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<TaskList />} />
                <Route path="/add-task" element={<AddTask />} />
            </Routes>
        </Router>
    );
};

export default App;


