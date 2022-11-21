import React from "react";
import travelLuggage from "../img/travelLuggage.jpg";

function AboutSection() {
  return (
    <div>
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
    </div>
  );
}

export default AboutSection;
