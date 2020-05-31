import React, { useState } from "react";
import Perfume from "../Perfume";
import "./Counter.css";

const Counteri = () => {
  const [subTotal, setSubTotal] = useState(0);

  return (
    <>
      <td>
        <button
          className="add2"
          onClick={() => setSubTotal((subTotal - 1) * Perfume.price)}
        >
          -
        </button>
        {subTotal}

        <button
          className="minus2"
          onClick={() => setSubTotal((subTotal + 1) * Perfume.price)}
        >
          +
        </button>
      </td>
    </>
  );
};
export default Counteri;
