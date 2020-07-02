import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto mx-3">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline className="mr-5">
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Cart</Button>
      </Form>
    </Navbar>
  );
};

export default MyNavbar;
