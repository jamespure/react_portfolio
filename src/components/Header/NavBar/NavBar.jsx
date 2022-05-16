import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../../assets/sj-logo.svg";
import Links from "./Links";
import "./navBar.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="/" className="logo">
        <img className="img-fluid mx-auto" src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="navbar-toggler"
      >
        <div className="hamburgerLines">
          <input type="checkbox" className="checkbox" />
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
      </Navbar.Toggle>
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end nav-menu"
      >
        <Nav className="ms-auto font">
          <Links link="#Home">Home</Links>
          <Links link="#About">About Me</Links>
          <Links link="#Potfolio">Portfolio</Links>
          <Links link="#Contact">Contact</Links>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
