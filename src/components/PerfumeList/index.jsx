import React from "react";
import "./PerfumeList.css";
import { Perfume } from "..";
import { Button } from "..";

const PerfumeList = ({ className, listOfPerfumes, addToCart }) => {
  return (<table className={`perfume-list-base${className ? `${className}` : ""}`}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Image</th>
        <th>Description</th>
        <th>Price</th>
        <th>Add To Cart</th>
      </tr>
    </thead>
    <tbody>
      <>
        {listOfPerfumes.map((perfume) => (<Perfume key={perfume.objectID} {...perfume}>
          <Button className="add" onClick={addToCart}>
            Add To Cart
          </Button>
        </Perfume>))}
      </>
    </tbody>
  </table>);
};
export default PerfumeList;
