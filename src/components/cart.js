import React, { useContext } from "react";
import { CartContext } from "./cartContext";

const Cart = (props) => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((a, b) => b.price + a, 0);
  return (
    <div>
      <h2>Cart Items: {cart.length}</h2>
      <br />
      <h4>Total: {totalPrice}</h4>
      <br />
      <hr />
    </div>
  );
};

export default Cart;
