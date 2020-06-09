import React,{useState} from "react";
import "./App.css";
import { PerfumeList,Cart,Header} from "./components";

const  App=()=>{

  const [perfumes,setPerfumes] = useState([
    {
      objectID:0,
      item: "Scent1",
      description:
        "Poets of Berlin:A blend of wild green orris,vanilla,blueberry,lemon and vetiver",
      image: "",
      price: "185.00",
      quantity:"",
      addToCart: "",
    },
    {
      objectID:1,
      item: "Scent2",
      description:
        "Basso Continuo in Noto:A blend of Marsala cask whiskey,sandalwood,vetiver,leather",
      image: "",
      price: "145.00",
      quantity:"",
      addToCart: "",
    },
    {
      objectID:2,
      item: "Scent3",
      description:
        "Toamasina Ensemble:An island blend of grapefruit,cardomom,vetiver and vanilla",
      image: "",
      price: "150.00",
      quantity:"",
      addToCart: "",
    },
    {
      objectID:3,
      item: "Scent4",
      description: "Jazz New York:A classic blend of patchouli,cedar and lime",
      image: "",
      price: "165.00",
      quantity:"",
      addToCart: "",
    },
  ]);
  const [cart,SetCart]=useState([]);
  const addToCart = (Perfume)=>{
    SetCart(previousCart => [...previousCart,perfumes]);
  };

  return (
    <div className="app">
      <Header/>
      <PerfumeList listOfPerfumes={perfumes} /> 
      <Cart  
       addToCart={addToCart}
      // RemoveItem={removeItem}
      // cart={totalCart(cart)}
      />

    </div>
  );
};

export default App;
