import React from "react";
import styled from "styled-components";
import travelLuggage from "../img/travelLuggage.jpg";

function AboutSection() {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>Title</h2>
          </Hide>
          <Hide>
            <h2>
              Another title <span>for this website</span>
            </h2>
          </Hide>
          <Hide>
            <h2>Title 3</h2>
          </Hide>
          <p>Contact us for any help traveling</p>
          <button>Contact Us</button>
        </div>
      </Description>
      <Image>
        <img
          src={travelLuggage}
          alt="Waiting in airport with luggage watching plane"
        />
      </Image>
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

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
