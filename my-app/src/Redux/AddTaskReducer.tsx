import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { taskListInterface } from "../Utils/Types";

export const todosList = createAsyncThunk('todosLists', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    return res.json()
})

const initialState: taskListInterface = {
    isLoading: false,
    message: "",
    data: []
}

export const taskSlice = createSlice({
    name: "task",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(todosList.pending, (state, action) => {
                return {
                    ...state,
                    isLoading: true
                }
            })
            .addCase(todosList.fulfilled, (state, action) => {
                return {
                    isLoading: false,
                    message: "List fetch successfully",
                    data: action.payload.data
                }
            })
            .addCase(todosList.rejected, (state, action) => {
                return {
                    isLoading: false,
                    message: "Something went wrong",
                    data: []
                }
            })
    }
})

export default taskSlice.reducer 