import React from "react";
import NumericInput from 'react-numeric-input'
import bottle from "../Images/bottle.png";

const Perfume = ({
  item,
  description,
  image,
  price,
  addToCart
}) =>
 { return (
    <tr>
      <td className="item">{item}</td>
      <td className="image">
        {image}
        <img src={bottle} alt="perfume-bottle" />
      </td>
      <td className="desc">{description}</td>
      <td className="price">£{price}</td>
      <td className="atc">
        QTY:
        <NumericInput className="qty" required type="number" min="0" max="100" label="quantity"/>
        <button className="add" onClick={addToCart}>
          Add to Cart
        </button>
      </td>
    </tr>
  );
};
export default Perfume;
