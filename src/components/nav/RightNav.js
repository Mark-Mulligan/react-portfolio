import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-top: auto !important;
  margin-bottom: auto !important;

  span {
    padding: 6px
  }

  span:hover {
    border-bottom: 2px solid;
    cursor: pointer;
  }

  li {
    padding: 10px 20px;
    font-size: 17px;
  }
    transform: ${({ open }) => open ? 'translateY(100vh)' : 'translateY(0)'}; 
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
      <li><a href="#my-approach" onClick={handleNavClick}>My Approach</a></li>
      <li><a href="#about" onClick={handleNavClick}>About</a></li>
      <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
      <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
    </Ul>
  )
}

export default RightNav