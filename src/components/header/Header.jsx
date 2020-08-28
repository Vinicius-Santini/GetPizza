import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../pizza-logo.svg";

export default function Header() {
  return (
    <>
      <Navbar bg="danger" className="justify-content-center">
        <Navbar.Brand className="d-flex">
          <img src={logo} width="50" height="50" />
          <h1 className="font-weight-bold navBarTitle">GetPizza</h1>
        </Navbar.Brand>
      </Navbar>
    </>
  );
}
