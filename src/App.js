import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Inventory from "./components/inventory";
import Cart from "./components/cart";
import { CartProvider } from "./components/cartContext";
// import Carousel from "./components/styleComponents/Carousel";
import MyNavbar from "./components/styleComponents/Navbar";
import "./style.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <CartProvider>
            <MyNavbar />
            <div className="app m-5">
              {/* <Carousel /> */}
              <Cart />
              <Inventory />
              <Inventory />
            </div>
          </CartProvider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
