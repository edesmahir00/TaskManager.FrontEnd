import React, { useEffect, useState } from 'react';
import { getAllTasks, deleteTask } from '../services/api';
import { TaskStatus, TaskStatusLabels } from "../constants/taskStatus";
import { Table, Button, Container, Alert } from 'react-bootstrap';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [page, setPage] = useState(1);
    const pageSize = 5;
    const [error, setError] = useState('');

    useEffect(() => {
        fetchTasks();
    }, [page]);

    const fetchTasks = async () => {
        try {
            const response = await getAllTasks(page, pageSize);
            setTasks(response.data);
        } catch (error) {
            setError('Error fetching tasks');
            console.error('Error fetching tasks:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteTask(id);
            fetchTasks();
        } catch (error) {
            setError('Error deleting task');
            console.error('Error deleting task:', error);
        }
    };

    return (
        <>

            <Container className="mt-5">
                <h1 className="text-center mb-4">Task List</h1>

                {error && <Alert variant="danger">{error}</Alert>}

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks && tasks.length > 0 ? (
                            tasks.map((task) => (
                                <tr key={task.id}>
                                    <td>{task.title}</td>
                                    <td>{task.description}</td>
                                    <td>
                                        <span
                                            style={{
                                                color: TaskStatusLabels[task.status]?.color || 'black',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {TaskStatusLabels[task.status]?.label || 'Unknown'}
                                        </span>
                                    </td>
                                    <td>
                                        <Button
                                            variant="danger"
                                            onClick={() => handleDelete(task.id)}
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">
                                    No tasks found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>

                <div className="d-flex justify-content-between">
                    <Button
                        variant="secondary"
                        onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => setPage(page + 1)}
                    >
                        Next
                    </Button>
                </div>
            </Container>
        </>
    );
};

export default TaskList;
