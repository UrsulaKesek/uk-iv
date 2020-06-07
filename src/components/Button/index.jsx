import React from 'react'
import "./Button.css" 

const Button =({className,children,onClick,text=" ",}) => {
    return(
        <div className={`button-base${className ? `${className}` : ""}`}>
        <button className="add" onClick={onClick}>
        {children || text}
        </button>
        </div>
    );
};
export default Button;