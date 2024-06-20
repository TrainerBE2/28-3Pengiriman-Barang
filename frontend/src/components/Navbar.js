import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  height: 60px;
  background: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: #fff;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 15px;
`;

const LoginButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  color: #333;
  background: orange;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background: yellow;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <h1>DeliveFree</h1>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/features">Features</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">
          <LoginButton>Login</LoginButton>
        </NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;