// =========================== **** COMMON TYPE **** =========================== 
export interface commonType {
    isLoading: boolean,
    message: string,
    isSuccess?: boolean
}

// =========================== **** REDUCER TYPE **** ===========================

// TASK 
export interface taskData {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
export interface taskListInterface {
    fetchData: commonType & { data: taskData[] },
    addData: commonType & { data: taskData | null },
    updateData: commonType & { data: taskData | null }
    deleteData: commonType
}

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

// =========================== **** COMPONENT TYPE **** ===========================

// BUTTON 
export interface ButtonInterface {
    type?: 'submit' | 'reset' | 'button',
    lable: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    isLoading?: Boolean
}

// TEXTFIELD 
export interface TextFieldInterface {
    lable?: string,
    type: string,
    onChnage: (event: React.ChangeEvent<HTMLInputElement>) => void,
    value: string | number | null,
    name: string,
}

// =========================== **** LOCAL STATE TYPE **** ===========================

// SING-UP
export interface signUpDetailsInterface {
    username: string,
    first_name: string,
    last_name: string,
    mobile_number: number | null,
    password: string
}

// LOGIN 
export interface loginCredentialsInterface {
    username: string,
    password: string
}