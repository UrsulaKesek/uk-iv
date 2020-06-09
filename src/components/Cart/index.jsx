import React from "react";
import "./Cart.css";
import Button from "../Button";
import {Counter} from "..";
import {Item} from "..";


const Cart = ({ className,item}) => {
  return (
    <div className={`cart-base${className ? `${className}` : ""}`}>
      <div>
        <h1>Items in Cart</h1>
        <div  key={Item.id} className="items">
           <Item item={item}/>
        </div>
        <div className="cart-total">
          <h3>Subtotal:</h3>
          <Counter/>
          <h3>Delivery Charges:</h3>
          <h2>Total:</h2>
        </div>

        <div className="checkout">
          <span>Total price : </span>
          <Button
            className="checkout"
            text="Let's Go"
            onClick={alert("Take this Item out of the Cart")} 
          ></Button>
        </div>
        <div className="footer">footer</div>
      </div>
    </div>
  );
};

export default Cart;
