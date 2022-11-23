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
            <h2>We make traveling easy and effortless.</h2>
          </Hide>
          <Hide>
            <h2>
              Let us plan <span>your dream vacation</span>
            </h2>
          </Hide>
          <Hide>
            <h2>and turn it into reality.</h2>
          </Hide>
          <p>
            The fun begins here! Our agency specialists are here for you before,
            during, and after your trip. From booking flights to negotiating the
            best hotel prices, our goal is to remove all the stress from
            planning your dream vacation.
          </p>
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
