import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
// Styles
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";

function Nav() {
  const { pathname } = useLocation();

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
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <NavLink to={"/destinations"}>Destinations</NavLink>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/destinations" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          />
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
  position: sticky;
  top: 0;
  z-index: 10;
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
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 1rem;
    #logo {
      display: inline-block;
      margin-bottom: 2rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    opacity: 0;
  }
`;

export default Nav;
