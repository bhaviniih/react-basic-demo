import React from "react";
import { TextFieldInterface } from "../Utils/Types";

const TextField: React.FC<TextFieldInterface & React.InputHTMLAttributes<HTMLInputElement>> = ({ lable, type, onChnage, value = null, name, ...rest }) => {
    return (
        <div className="flex flex-col">
            <span className="text-sm">{lable}</span>
            <input type={type} name={name} value={value as string} onChange={onChnage} {...rest} className="rounded-md text-[black] p-2 border-2 border-black hover:border-violet-light focus:border-violet-dark" />
        </div>
    )
}

export default TextField