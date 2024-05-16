export interface commonType {
    isLoading: boolean,
    message: string,
}

interface taskData {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface taskListInterface extends commonType {
    data: taskData[]
}