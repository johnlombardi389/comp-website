import React from "react";
import styled from "styled-components";
import travelLuggage from "../img/travelLuggage.jpg";

function AboutSection() {
  return (
    <About>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Title</h2>
          </div>
          <div className="hide">
            <h2>
              Another title <span>for this website</span>
            </h2>
          </div>
          <div className="hide">
            <h2>Title 3</h2>
          </div>
          <p>Contact us for any help traveling</p>
          <button>Contact Us</button>
        </div>
        <div className="image">
          <img
            src={travelLuggage}
            alt="Waiting in airport with luggage watching plane"
          />
        </div>
      </div>
    </About>
  );
}

// Styled components
const About = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  color: white;
`;

export default AboutSection;
