export interface Project {
    id: string;
    name: string;
    description: string;
    startDate: Date;
    endDate?: Date;
    status: 'active' | 'completed' | 'on-hold';
}

export interface Task {
    id: string;
    projectId: string;
    title: string;
    description: string;
    assignedTo?: string;
    dueDate?: Date;
    status: 'pending' | 'in-progress' | 'completed';
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'member';
}