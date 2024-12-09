export const TaskStatus = {
    New: 0,
    Completed: 1,
    InProgress: 2,
    NotCompleted: 3,
    Passive: 4,
};

export const TaskStatusLabels = {
    [TaskStatus.New]: { label: 'New', color: 'blue' },
    [TaskStatus.Completed]: { label: 'Completed', color: 'green' },
    [TaskStatus.InProgress]: { label: 'In Progress', color: 'orange' },
    [TaskStatus.NotCompleted]: { label: 'Not Completed', color: 'red' },
    [TaskStatus.Passive]: { label: 'Passive', color: 'gray' },
};
