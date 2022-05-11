import React from "react";
import Nav from "./Nav/Nav";
import classes from "./styles.module.css";
import logo from "../../../assets/sj-logo.svg";
import MobileNav from "./MobileNav/MobileNav";

const NavBar = () => {
  return (
    <div className={classes.navContainer}>
      <img className={classes.logo} src={logo} alt="logo" />
      <Nav className={classes.nav} />
      <MobileNav className={classes.mobileNav} />
    </div>
  );
};

export default NavBar;
