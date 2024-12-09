import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { createTask } from '../services/api';
import { TaskStatus, TaskStatusLabels } from '../constants/taskStatus';

const AddTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [status, setStatus] = useState(TaskStatus.New); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        const task = { title, description, startDate, endDate, status };

        try {
            await createTask(task);
            alert('Task created successfully!');
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };

    return (
        <Container className="mt-5">
            <h1 className="text-center">Add Task</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter task title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter task description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formStartDate">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control
                        type="datetime-local"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEndDate">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control
                        type="datetime-local"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formStatus">
                    <Form.Label>Status</Form.Label>
                    <Form.Select
                        value={status}
                        onChange={(e) => setStatus(parseInt(e.target.value))}
                    >
                        {Object.entries(TaskStatusLabels).map(([key, { label }]) => (
                            <option key={key} value={key}>
                                {label}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add Task
                </Button>
            </Form>
        </Container>
    );
};

export default AddTask;
