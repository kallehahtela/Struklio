import React from "react";

type ButtonProps = {
    title: string;
    className?: string;
};

const Button:React.FC<ButtonProps> = ({ title, className }) => {
    return (
        <div className='flex w-full justify-center pt-6'>
            <button 
                className={`rounded-md w-3/5 mt-10 bg-sky-600 text-white font-semibold p-2 ${className ||''}`}
            >
                {title}
            </button>
        </div>
    );
};

export default Button;