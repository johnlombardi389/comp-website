import React from "react";
import { Link } from "react-router-dom";
// Styles
import styled from "styled-components";
// Images

function Destinations() {
  return (
    <StyledWork>
      <Locations>
        <h2>Italy</h2>
        <div className="line"></div>
        <Link>
          <img src="" alt="" />
        </Link>
      </Locations>
    </StyledWork>
  );
}

const StyledWork = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Locations = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default Destinations;
