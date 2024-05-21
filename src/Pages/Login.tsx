import React, { useState } from "react";
import TextField from "../Component/TextField";
import Button from "../Component/Button";
import { useNavigate } from "react-router-dom";

interface LoginInterface { }

// TYPE DECLARATION FOR STATE
interface loginCredentialsInterface {
    username: string,
    password: string
}

const Login: React.FC<LoginInterface> = () => {

    // FOR REDIRECT TO ANOTHER URL 
    const navigate = useNavigate()

    const [loginCredentials, setLoginCredentials] = useState<loginCredentialsInterface>({
        username: "",
        password: ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target

        setLoginCredentials({
            ...loginCredentials,
            [name]: value
        })
    }

    const handleSubmit = () => {
        console.log(loginCredentials)
        navigate("/")
    }
    return (
        <div className="flex flex-col justify-center h-screen m-auto max-w-[500px] gap-5">
            <div className="text-3xl text-center">Login</div>
            <TextField lable="Username" name="username" type="text" onChnage={handleChange} value={loginCredentials.username} />
            <TextField lable="Password" name="password" type="text" onChnage={handleChange} value={loginCredentials.password} />
            <Button lable="Submit" onClick={handleSubmit} />
        </div>
    )
}

export default Login