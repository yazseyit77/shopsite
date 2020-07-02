import React from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Router>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto mx-3">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
        </Nav>
        <Form inline className="mr-1">
          <Link to="/cart">
            <img
              className="w-25"
              src="https://image.flaticon.com/icons/svg/833/833572.svg"
              alt=""
            />
          </Link>
        </Form>
      </Navbar>
    </Router>
  );
};

export default MyNavbar;
