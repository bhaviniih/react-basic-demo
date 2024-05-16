import React from "react";

interface TextFieldInterface {
    lable?: string,
    type: string,
    onChnage: (event: React.ChangeEvent<HTMLInputElement>) => void,
    value: string | number | null,
    name: string,
}

const TextField: React.FC<TextFieldInterface & React.InputHTMLAttributes<HTMLInputElement>> = ({ lable, type, onChnage, value = null, name, ...rest }) => {
    return (
        <div className="flex flex-col">
            <span className="text-sm">{lable}</span>
            <input type={type} name={name} value={value as string} onChange={onChnage} {...rest} className="rounded-md text-[black] p-2 border-2 border-black hover:border-violet-light focus:border-violet-dark" />
        </div>
    )
}

export default TextField