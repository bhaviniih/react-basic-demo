import React from "react";

interface ButtonInterface {
    type?: 'submit' | 'reset' | 'button',
    lable: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    isLoading?: Boolean
}

const Button: React.FC<ButtonInterface> = ({ type = "submit", lable, onClick = () => { }, isLoading = false }) => {
    return (
        <button className="border-violet-light border-2 hover:border-violet-dark rounded-md bg-violet-200 p-2" type={type} onClick={onClick}>{isLoading ? "Loading..." : lable}</button>
    )
}

export default Button