import axios from 'axios';

const API_BASE_URL = 'https://localhost:7132/api';

export const getAllTasks = (page, pageSize) => {
    return axios.get(`${API_BASE_URL}/Task`, { params: { page, pageSize } });
};

export const getTaskById = (id) => {
    return axios.get(`${API_BASE_URL}/Task/${id}`);
};

export const createTask = (task) => {
    return axios.post(`${API_BASE_URL}/Task`, task);
};

export const updateTask = (id, task) => {
    return axios.put(`${API_BASE_URL}/Task/${id}`, task);
};

export const deleteTask = (id) => {
    return axios.delete(`${API_BASE_URL}/Task/${id}`);
};
