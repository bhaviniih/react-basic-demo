import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import SingUp from "../Pages/SignUp";
import Home from "../Pages/Home";

const route = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/sign-up",
        element: <SingUp />
    },
    {
        path: "/",
        element: <Home />
    },
    {
        path: "*",
        element: <> Not Found</>
    }
])

export default route