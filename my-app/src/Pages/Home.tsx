import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosList } from "../Redux/AddTaskReducer";

interface HomeInterface { }

const Home: React.FC<HomeInterface> = () => {

    // FOR DISPATCH ACTION 
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(todosList())
    },[dispatch])

    return (
        <>
            This is home page
        </>
    )
}

export default Home