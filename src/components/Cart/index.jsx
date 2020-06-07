import React from "react";
import "./Cart.css";
import Button from "../Button";
import {Counter} from "..";
import {Item} from "..";

const Cart = ({ className, name, }) => {
  return (
    <div className={`cart-base${className ? `${className}` : ""}`}>
      <div>
        <h1>Items in Cart</h1>
        <div className="items">
          {name}
          <Item />
          <Item />
        </div>
        <div className="cart-total">
          <h3>Subtotal:{Counter}</h3>
          <h3>Delivery Charges:</h3>
          <h2>Total:</h2>
        </div>

        <div className="checkout">
          <span>Total price : </span>
          <Button
            className="checkout"
            text="Let's Go"
            onClick={function () {
              alert("Byeeeee!  Come back soon");
            }}
          ></Button>
        </div>
        <div className="footer">footer</div>
      </div>
    </div>
  );
};

export default Cart;
