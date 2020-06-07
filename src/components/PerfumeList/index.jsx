import React from "react";
import './PerfumeList.css';
import {Perfume} from '..';

const PerfumeList = ({ className, listOfPerfumes }) => (
  <table className={`perfume-list-base${className ? `${className}` : ""}`}>
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
    {listOfPerfumes.map((perfume)=>(
        <Perfume {...perfume}/>
    ))}

    </>
    </tbody>
  </table>
);
export default PerfumeList;
