import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  a {
    padding: 6px;
  }

  a:after {
    content: "";
    position: absolute;
    left: 0;
    top: 100%;
    width: 0;
    height: 3px;
    background-color: #fff;
    transition: width 0.3s ease-in-out;
  }

  a:hover:after {
    width: 100%;
  }

  a:hover {
    cursor: pointer;
  }

  li {
    padding: 0 5px;
    margin: 10px;
    font-size: 2.5rem;
    position: relative;
  }
  transform: ${({ open }) => (open ? "translateY(100vh)" : "translateY(0)")};
  z-index: 2;
  flex-flow: column nowrap;
  background-color: rgba(80, 80, 80, 0.9);
  position: fixed;
  top: -100vh;
  height: 100vh;
  width: 100%;
  padding-top: 3.5rem;
  transition: transform 0.4s ease-in-out;
  li {
    color: #fff;
  }
`;

const RightNav = ({ open, handleNavClick }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="#my-approach" onClick={handleNavClick}>
          My Approach
        </a>
      </li>
      <li>
        <a href="#about" onClick={handleNavClick}>
          About
        </a>
      </li>
      <li>
        <a href="#projects" onClick={handleNavClick}>
          Projects
        </a>
      </li>
      <li>
        <a href="#contact" onClick={handleNavClick}>
          Contact
        </a>
      </li>
    </Ul>
  );
};

export default RightNav;
