import React from "react";
import { NavLink } from "react-router-dom";
// Styles
import styled from "styled-components";

function Nav() {
  return (
    <StyledNav>
      <h1>
        <NavLink id="logo" to={"/"}>
          Website
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to={"/"}>About Us</NavLink>
        </li>
        <li>
          <NavLink to={"/destinations"}>Destinations</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
}

// Styles
const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default Nav;
