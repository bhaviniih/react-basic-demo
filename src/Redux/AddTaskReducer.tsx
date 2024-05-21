import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddFetchResponse, DeleteFetchResponse, FetchResponse, taskData, taskListInterface } from "../Utils/Types";
import { deleteM, get, put } from "../Api";

export const todosList = createAsyncThunk<FetchResponse>('todosLists', async () => {
    const res = await get("/todos");
    return res;
})

export const updateTodosList = createAsyncThunk<AddFetchResponse, taskData>('updateTodoList', async (data: taskData) => {
    const res = await put(`posts/${data.id}`, null, data)
    return res
})

export const deletTodosList = createAsyncThunk<DeleteFetchResponse, number>('deleteTodoList', async (id: number) => {
    const res = await deleteM(`posts/${id}`)
    return res
})

const initialState: taskListInterface = {
    fetchData: {
        isLoading: false,
        message: "",
        data: [],
    },
    addData: {
        isLoading: false,
        message: "",
        data: null,
    },
    updateData: {
        isLoading: false,
        message: "",
        data: null
    },
    deleteData: {
        isLoading: false,
        message: ""
    }
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
                    fetchData: {
                        ...state.fetchData,
                        isLoading: true
                    }
                }
            })
            .addCase(todosList.fulfilled, (state, action: PayloadAction<FetchResponse>) => {
                return {
                    ...state,
                    fetchData: {
                        isLoading: false,
                        message: "List fetch successfully",
                        data: action.payload.data
                    }
                }
            })
            .addCase(todosList.rejected, (state, action) => {
                return {
                    ...state,
                    fetchData: {
                        isLoading: false,
                        message: "Something went wrong",
                        data: []
                    }
                }
            })
            .addCase(updateTodosList.pending, (state, action) => {
                return {
                    ...state,
                    updateData: {
                        isLoading: true,
                        message: "",
                        data: null
                    }
                }
            })
            .addCase(updateTodosList.fulfilled, (state, action: PayloadAction<AddFetchResponse>) => {
                return {
                    ...state,
                    updateData: {
                        isLoading: false,
                        message: "Data updated successfully !",
                        data: action.payload.data
                    }
                }
            })
            .addCase(updateTodosList.rejected, (state, action) => {
                return {
                    ...state,
                    updateData: {
                        isLoading: false,
                        message: "Something went wrong",
                        data: null
                    }
                }
            })
            .addCase(deletTodosList.pending, (state, action) => {
                return {
                    ...state,
                    deleteData: {
                        isLoading: true,
                        message: ""
                    }
                }
            })
            .addCase(deletTodosList.fulfilled, (state, action: PayloadAction<DeleteFetchResponse>) => {
                return {
                    ...state,
                    deleteData: {
                        isLoading: false,
                        message: "Data delete successfully !"
                    }
                }
            })
            .addCase(deletTodosList.rejected, (state, action) => {
                return {
                    ...state,
                    deleteData: {
                        isLoading: false,
                        message: "Something went wrong"
                    }
                }
            })
    }
})

export default taskSlice.reducer 