import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input: React.FC<InputProps> = (props) => {
    return (
        <input
            {...props}
            className={`mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder-blue-300 text-blue-600 ${props.className || ""}`}
        />
    );
};

export default Input;