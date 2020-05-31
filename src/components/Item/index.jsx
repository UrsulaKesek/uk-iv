import React from "react";
import NumericInput from 'react-numeric-input'
import bottlei from "../Images/bottlei.png";
import "./Item.css" 

const Item = ({ image, name, price,update}) => {
  return (
    <>
    <div className="cart-base-item">
      <div className="img">
        {image}
        <img src={bottlei} alt="perfume-bottle" />
      </div>
        <h2>{name}Scent 1:Poets</h2>
        <p>{price}£185.00</p>

      <div className="bin">
        <h2 className="update">{update}Update Cart</h2>
      <NumericInput className="cartqty" required type="number" min="1" max="100" label="quantity"/>
        <button className="remove">
          Remove from cart
        </button>
      </div>
      </div>
    </>
  );
};

export default Item;
