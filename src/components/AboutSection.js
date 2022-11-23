import React from "react";
// Animation
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../animation";
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
            <motion.h2 variants={titleAnimation}>
              We make traveling easy and effortless.
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              Let us plan <span>your dream vacation</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              and turn it into reality.
            </motion.h2>
          </Hide>
          <motion.p variants={fade}>
            The fun begins here! Our agency specialists are here for you before,
            during, and after your trip. From booking flights to negotiating the
            best hotel prices, our goal is to remove all the stress from
            planning your dream vacation.
          </motion.p>
          <motion.button variants={fade}>Contact Us</motion.button>
        </motion.div>
      </Description>
      <Image>
        <motion.img
          variants={photoAnimation}
          src={travelLuggage}
          alt="Waiting in airport with luggage watching plane"
        />
      </Image>
    </About>
  );
}

export default AboutSection;
