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
    transform: ${({ open }) => open ? 'translateX(-300px)' : 'translateX(0px)'}; 
    z-index: 2;
    flex-flow: column nowrap;
    background-color: rgba(80, 80, 80, 0.9);
    position: fixed;
    top: 0;
    right: -300px;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
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