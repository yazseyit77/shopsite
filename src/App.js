import React from "react";
import Inventory from "./components/inventory";
import Cart from "./components/cart";
import "./style.css";
import { CartProvider } from "./components/cartContext";

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Cart />
        <Inventory />
      </div>
    </CartProvider>
  );
}

export default App;
