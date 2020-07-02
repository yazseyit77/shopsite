import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Inventory from "./components/inventory";
import Cart from "./components/cart";
import { CartProvider } from "./components/cartContext";
// import Carousel from "./components/styleComponents/Carousel";
import MyNavbar from "./components/styleComponents/Navbar";
import "./style.css";

function App() {
  return (
    <CartProvider>
      <MyNavbar />
      <div className="app m-5">
        {/* <Carousel /> */}
        <Cart />
        <Inventory />
        <Inventory />
      </div>
    </CartProvider>
  );
}

export default App;
