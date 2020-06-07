import React,{useState} from 'react';
import './Counter.css';

    const Counter  = () =>{

    const [quantity,setQuantity]=useState(0);
    
    return(
        <>
        <button className="add2" onClick = {()=> setQuantity (quantity - 1)}>-</button>
        <td>{quantity}</td>
        <button className="minus2" onClick = {()=> setQuantity (quantity + 1)}>+</button>
         </>
    )
 }
 export default Counter;