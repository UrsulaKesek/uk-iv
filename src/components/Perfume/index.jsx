import React from "react";
import NumericInput from "react-numeric-input";
import bottle from "../Images/bottle.png";
import Button from "../Button";
import "./Perfume.css"; 

const Perfume = ({
  objectID,
  item,
  description,
  image,
  price,

}) => (<tr key={objectID}>
  <td className="item">{item}</td>
  <td className="image">
    {image}
    <img src={bottle} alt="perfume-bottle" />
  </td>
  <td className="desc">{description}</td>
  <td className="price">£{price}</td>
  <td className="atc">
    QTY:
    <NumericInput className="qty" required type="number" min="0" max="100" label="quantity" />
    <Button
            className="add"
            text="Add to Cart"
            onClick={function () {
              alert("Put me in the cart");
            }}
          ></Button>
  </td>
</tr>);
export default Perfume;
