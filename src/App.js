import React,{useState} from "react";
import "./App.css";
import { PerfumeList,Cart} from "./components";

const App =() =>{
  const [perfumes] = useState([
    {
      objectID:1,
      item: "Scent1",
      description:
        "Poets of Berlin:A blend of wild green orris,vanilla,blueberry,lemon and vetiver",
      image: "",
      price: "185.00",
      quantity:"",
      addToCart: "",
    },
    {
      objectID:2,
      item: "Scent2",
      description:
        "Basso Continuo in Noto:A blend of Marsala cask whiskey,sandalwood,vetiver,leather",
      image: "",
      price: "145.00",
      quantity:"",
      addToCart: "",
    },
    {
      objectID:3,
      item: "Scent3",
      description:
        "Toamasina Ensemble:An island blend of grapefruit,cardomom,vetiver and vanilla",
      image: "",
      price: "150.00",
      quantity:"",
      addToCart: "",
    },
    {
      objectID:4,
      item: "Scent4",
      description: "Jazz New York:A classic blend of patchouli,cedar and lime",
      image: "",
      price: "165.00",
      quantity:"",
      addToCart: "",
    },
  ]);
  
  return (
    <div className="app">
      <h1>SCENT EXPLORERS</h1>
      <PerfumeList listOfPerfumes={perfumes}/> 
      <Cart/>

    </div>
  );
};

export default App;
