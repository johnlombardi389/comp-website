import React from "react";
import { Link } from "react-router-dom";
// Styles
import styled from "styled-components";
// Images
import italyMain from "../img/italyMain.jpg";
import japanMain from "../img/japanMain.jpg";
import vietnamMain from "../img/vietnamMain.jpg";
import koreaMain from "../img/koreaMain.jpg";
import mexicoMain from "../img/mexicoMain.jpg";

function Destinations() {
  return (
    <StyledWork>
      <Locations>
        <h2>Italy</h2>
        <div className="line"></div>
        <Link>
          <img src={italyMain} alt="Italy" />
        </Link>
      </Locations>

      <Locations>
        <h2>Japan</h2>
        <div className="line"></div>
        <Link>
          <img src={japanMain} alt="Japan" />
        </Link>
      </Locations>

      <Locations>
        <h2>Vietnam</h2>
        <div className="line"></div>
        <Link>
          <img src={vietnamMain} alt="Vietnam" />
        </Link>
      </Locations>

      <Locations>
        <h2>South Korea</h2>
        <div className="line"></div>
        <Link>
          <img src={koreaMain} alt="South Korea" />
        </Link>
      </Locations>

      <Locations>
        <h2>Mexico</h2>
        <div className="line"></div>
        <Link>
          <img src={mexicoMain} alt="Mexico" />
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
