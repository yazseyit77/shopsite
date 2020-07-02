import React, { useContext } from "react";
import { CartContext } from "./cartContext";

const Cart = (props) => {
  const [cart] = useContext(CartContext);
  const totalPrice = cart.reduce((a, b) => b.price + a, 0);
  return (
    <div>
      <h2>Cart Items: {cart.length}</h2>
      <br />
      <h4>Total: {totalPrice}</h4>
      <br />
      <hr />
      {cart.map((item) => (
        <h6>
          {item.name} - {item.price}
        </h6>
      ))}
      <hr />
    </div>
  );
};

export default Cart;
