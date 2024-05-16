import React, { useState } from "react";
import TextField from "../Component/TextField";
import Button from "../Component/Button";
import { useNavigate } from "react-router-dom";

interface SingUpInterface { }

// TYPE DECLARATION FOR STATE
interface signUpDetailsInterface {
    username: string,
    first_name: string,
    last_name: string,
    mobile_number: number | null,
    password: string
}
const SingUp: React.FC<SingUpInterface> = () => {

    // FOR REDIRECT TO ANOTHER URL 
    const navigate = useNavigate()

    const [signUpDetails, setSignUpDetails] = useState<signUpDetailsInterface>({
        username: "",
        first_name: "",
        last_name: "",
        mobile_number: null,
        password: ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target

        setSignUpDetails({
            ...signUpDetails,
            [name]: value
        })
    }

    const handleSubmit = () => {
        console.log(signUpDetails);
        navigate("/")
    }

    return (
        <div className="flex flex-col justify-center h-screen m-auto max-w-[500px] gap-5">
            <div className="text-3xl text-center">Sign Up</div>
            <TextField lable="Username" name="username" type="text" value={signUpDetails.username} onChnage={handleChange} />
            <TextField lable="First Name" name="first_name" type="text" value={signUpDetails.first_name} onChnage={handleChange} />
            <TextField lable="Last Name" name="last_name" type="text" value={signUpDetails.last_name} onChnage={handleChange} />
            <TextField lable="Mobile Number" name="mobile_number" maxLength={10} minLength={10} type="number" value={signUpDetails.mobile_number as number} onChnage={handleChange} />
            <TextField lable="Password" name="password" type="password" value={signUpDetails.password} onChnage={handleChange} />
            <Button lable="Submit" onClick={handleSubmit} />
        </div>
    )
}

export default SingUp