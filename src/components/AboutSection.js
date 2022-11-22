import React from "react";
import travelLuggage from "../img/travelLuggage.jpg";
// Styles
import { About, Description, Image, Hide } from "../styles";

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

export default AboutSection;
