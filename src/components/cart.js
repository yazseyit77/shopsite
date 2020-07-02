import React, { useContext } from "react";
import { CartContext } from "./cartContext";

const Cart = (props) => {
  const [cart, setCart] = useContext(CartContext);
  return (
    <div>
      <h2>Cart Items: {cart.length}</h2>
      <br />
      <h4>Total: 0</h4>
      <br />
      <hr />
    </div>
  );
};

export default Cart;
