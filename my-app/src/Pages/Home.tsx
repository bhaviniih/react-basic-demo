import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletTodosList, todosList, updateTodosList } from "../Redux/AddTaskReducer";
import { AppDispatch, RootState } from "../App";
import { commonType, taskData } from "../Utils/Types";
import Button from "../Component/Button";

interface HomeInterface { }

const Home: React.FC<HomeInterface> = () => {

    // FOR DISPATCH ACTION 
    const dispatch = useDispatch<AppDispatch>()

    // FOR GETTING DATA FROM REDUX STORE
    const taskList: commonType & { data: taskData[] } = useSelector((state: RootState) => state.task.fetchData)
    const taskDeleteLoading: boolean = useSelector((state: RootState) => state.task.deleteData.isLoading)
    const taskUpdateLoading: boolean = useSelector((state: RootState) => state.task.updateData.isLoading)

    useEffect(() => {
        dispatch(todosList())
    }, [dispatch])

    const handleEdit = (data: taskData) => {
        dispatch(updateTodosList(data))
    }

    const handleDelete = (id: number) => {
        dispatch(deletTodosList(id))
    }
    return (
        <div>
            <table className="border-2 border-violet-light w-full">
                <thead>
                    <tr className="border-2 border-violet-light text-2xl ">
                        <td>Is Task completed</td>
                        <td>Id</td>
                        <td>Title</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {taskList.isLoading ? (
                        <tr className="text-center text-2xl">
                            <td colSpan={3}>Loading...</td>
                        </tr>
                    ) :
                        taskList.data.map((data: taskData) => (
                            <tr>
                                <td>
                                    <input type="checkbox" checked={data.completed} />
                                </td>
                                <td>{data.id}</td>
                                <td>{data.title}</td>
                                <td>
                                    <Button lable="Edit" isLoading={taskUpdateLoading} onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleEdit(data)} />
                                    <Button lable="Delete" isLoading={taskDeleteLoading} onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleDelete(data.id)} />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home