export interface commonType {
    isLoading: boolean,
    message: string,
}

export interface taskData {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

// TASK REDUCER TYPE
export interface taskListInterface {
    fetchData: commonType & { data: taskData[] },
    addData: commonType & { data: taskData | null },
    updateData: commonType & { data: taskData | null }
    deleteData: commonType
}

// DATA TYPE FROM API RESPONSE
export interface FetchResponse {
    success: boolean,
    data: taskData[]
}
export interface AddFetchResponse {
    success: boolean,
    data: taskData
}
export interface DeleteFetchResponse {
    success: boolean
}