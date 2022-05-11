import React from "react";
import NavLinks from "../NavLinks/NavLinks";

const Nav = ({className}) => {
  return (
    <nav className={className}>
      <NavLinks />
    </nav>
  );
};

export default Nav;
