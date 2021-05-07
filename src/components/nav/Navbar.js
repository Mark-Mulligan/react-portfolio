import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import "./Navbar.css";

const Nav = styled.nav`
  width: 100%;
  /* border-bottom: 2px solid #f1f1f1; */
  /* padding: 0 20px 0 15px; */
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 1;
  .logo {
    padding: 15px 0;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <h1></h1>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
