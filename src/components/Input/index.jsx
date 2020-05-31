import React from 'react'

const Input =({label,className,type})=>{
    return(
        <>
        <label htmlFor={label}>QTY: </label>
        <input className={className} type={type} ></input>
        </>
    )
}
export default Input;