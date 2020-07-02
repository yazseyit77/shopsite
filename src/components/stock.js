import React, { useContext } from "react";
import { CartContext } from "./cartContext";

const Stock = (props) => {
  const [cart, setCart] = useContext(CartContext);
  const addToCart = () => {
    console.log("clicked");
  };

  return (
    <div>
      <h2>{props.name}</h2>
      <h4>{props.price}</h4>
      <button onClick={addToCart}>Add to cart</button>
      <br />
    </div>
  );
};

export default Stock;
