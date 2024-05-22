import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletTodosList, todosList, updateTodosList } from "../Redux/AddTaskReducer";
import { AppDispatch, RootState } from "../App";
import { commonType, taskData } from "../Utils/Types";
import Button from "../Component/Button";

const Home: React.FC = () => {

    // FOR DISPATCH ACTION 
    const dispatch = useDispatch<AppDispatch>()

    // FOR GETTING DATA FROM REDUX STORE
    const taskList: commonType & { data: taskData[] } = useSelector((state: RootState) => state.task.fetchData)

    // LOCAL STATE
    const [updateLoading, setUpdateLoading] = useState<number[]>([])
    const [deleteLoading, setDeleteLoading] = useState<number[]>([])

    useEffect(() => {
        dispatch(todosList())
    }, [dispatch])

    const handleEdit = (data: taskData) => {
        setUpdateLoading([...updateLoading, data.id])
        dispatch(updateTodosList(data))
    }

    const handleDelete = (id: number) => {
        setDeleteLoading([...deleteLoading, id])
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
                                    <Button lable="Edit" isLoading={updateLoading.includes(data.id)} onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleEdit(data)} />
                                    <Button lable="Delete" isLoading={deleteLoading.includes(data.id)} onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleDelete(data.id)} />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home