import React from "react";
import Counter from "../Counter";
import bottlei from "../Images/bottlei.png";
import "./Item.css";
import Button from "../Button";
const Item = ({ id, image, name, price,update }) => {
  return (
    <>
      <div className="cart-base-item">
        <div className="img">
          {image}
          <img src={bottlei} alt="perfume-bottle" />
        </div>
        <h2>{id}</h2>
        <h2>{name}Scent:no.1</h2>
        <p>{price}£185.00</p>
        <h2 className="update">{update}Update Cart</h2>
          <div className="counter">
          <Counter/>
          </div>         
           <div className="remove">
          <Button
            className="remove"
            text="Remove"
            onClick={function () {
              alert("Item removed from cart");
            }}
          ></Button>
        </div>
      </div>
    </>
  );
};

export default Item;
