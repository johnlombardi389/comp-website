import React from "react";
// Framer Motion
import { motion } from "framer-motion";
// Images
import travelLuggage from "../img/travelLuggage.jpg";
// Styles
import { About, Description, Image, Hide } from "../styles";

function AboutSection() {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>We make traveling easy and effortless.</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              Let us plan <span>your dream vacation</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>and turn it into reality.</motion.h2>
          </Hide>
          <p>
            The fun begins here! Our agency specialists are here for you before,
            during, and after your trip. From booking flights to negotiating the
            best hotel prices, our goal is to remove all the stress from
            planning your dream vacation.
          </p>
          <button>Contact Us</button>
        </motion.div>
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
