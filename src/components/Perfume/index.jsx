import React from "react";
import NumericInput from "react-numeric-input";
import bottle from "../Images/bottle.png";
import {Button} from "..";
import "./Perfume.css"; 

const Perfume = ({
  objectID,
  item,
  description,
  image,
  price,
  addToCart}) =>  
   {
    return (<tr key={objectID}>
      <td className="item">{item}</td>
      <td className="image">
        {image}
        <img src={bottle} alt="perfume-bottle" />
      </td>
      <td className="desc">{description}</td>
      <td className="price">£{price}</td>
      <td className="atc">
        QTY:
        <NumericInput className="qty" required type="number" min={0} max={100} label="quantity" />
        <Button className="add" addToCart={()=> addToCart(item)}>Add To Cart</Button>
      </td>
    </tr>);
  };
export default Perfume;
