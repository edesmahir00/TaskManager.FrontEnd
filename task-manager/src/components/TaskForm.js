import React, { useState } from "react";
import { TaskStatus, TaskStatusLabels } from "../constants/taskStatus";

const TaskForm = ({ onAddTask }) => {

  
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        status: TaskStatus.New, 
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === "status" ? parseInt(value) : value,
        });
    };

    // Formu gönderme
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.title.trim() === "" || formData.description.trim() === "") {
            alert("Title and Description are required!");
            return;
        }
        onAddTask(formData); 
        setFormData({
            title: "",
            description: "",
            startDate: "",
            endDate: "",
            status: TaskStatus.New, 
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Start Date:</label>
                <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>End Date:</label>
                <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Status:</label>
                <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                >
                    {Object.entries(TaskStatusLabels).map(([key, { label }]) => (
                        <option key={key} value={key}>
                            {label}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
