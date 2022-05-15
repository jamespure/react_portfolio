import React from "react";
import { Nav } from "react-bootstrap";

const Links = ({ link, children }) => {
  return (
    <>
      <Nav.Link href={link}>{children}</Nav.Link>
    </>
  );
};

export default Links;
