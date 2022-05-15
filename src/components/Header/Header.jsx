import React from "react";
import classes from "./headerStyles.module.css";
import NavBar from "./NavBar/NavBar";

const Header = () => {
  return (
    <header className={`${classes.header}`}>
      <NavBar/>
    </header>
  );
};

export default Header;
