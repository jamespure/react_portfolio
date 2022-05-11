import React from "react";
import NavLinks from "../NavLinks/NavLinks";
import classes from "./mobileStyles.module.css";

const MobileNav = ({ className }) => {
  return (
    <nav className={className}>
      <div className={classes.navContainer}>
        <NavLinks />
        <div className={`${classes.hamburgerLines}`}>
          <input className={classes.checkbox} type="checkbox" name="" id="" />
          <span className={`${classes.line} ${classes.line1}`}></span>
          <span className={`${classes.line} ${classes.line2}`}></span>
          <span className={`${classes.line} ${classes.line3}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
