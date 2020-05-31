import React from "react";
import "./Cart.css";
import { Item } from "..";

const Cart = ({ className, name, subtotal }) => {
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
          <h3>Subtotal:</h3>
          <h3>Delivery Charges:</h3>
          <h2>Total:</h2>
        </div>

        <div className="checkout">
          <span>Total price : </span>
          <button>Checkout</button>
        </div>
        <div className="footer">footer</div>
      </div>
    </div>
  );
};

export default Cart;
