import React from 'react'
import { Link } from 'react-router-dom';
import classes from './styles.module.css'

const NavLinks = () => {
  return (
    <ul className={classes.menuItems}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Me</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}

export default NavLinks