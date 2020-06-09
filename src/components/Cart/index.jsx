import React from "react";
import "./Cart.css";
import Button from "../Button";
import { Counter } from "..";
import { Perfume } from "..";
import Item from "../Item";

const Cart = ({ className,onClick }) => {
  return (
    <div className={`cart-base${className ? `${className}` : ""}`}>
      <div>
        <h1>Items in Cart</h1>
        <div key={Perfume.objectID} className="items">
          <Item item={Item} />
        </div>
        <div className="cart-total">
          <h3>Subtotal:</h3>
          <Counter />
          <h3>Delivery Charges:</h3>
          <h2>Total:</h2>
        </div>

        <div className="checkout">
          <span>Total price : </span>
          <Button
            className="checkout"
            text="Let's Go"
            onClick={function () {
              alert("Byeeeee Come back soon!");
            }}
          ></Button>
        </div>
        <div className="footer">footer</div>
      </div>
    </div>
  );
};

export default Cart;
