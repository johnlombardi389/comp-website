import React from "react";
import { Link } from "react-router-dom";
// Styles
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
} from "../animation";
import { useScroll } from "../components/useScroll";
// Images
import italyMain from "../img/italyMain.jpg";
import japanMain from "../img/japanMain.jpg";
import vietnamMain from "../img/vietnamMain.jpg";
import koreaMain from "../img/koreaMain.jpg";
import mexicoMain from "../img/mexicoMain.jpg";

function Destinations() {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();

  return (
    <StyledWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Locations>
        <motion.h2 variants={fade}>Italy</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link>
          <Hide>
            <motion.img variants={photoAnimation} src={italyMain} alt="Italy" />
          </Hide>
        </Link>
      </Locations>

      <Locations
        variants={fade}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <h2>Japan</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link>
          <img src={japanMain} alt="Japan" />
        </Link>
      </Locations>

      <Locations
        variants={fade}
        animate={controls2}
        initial="hidden"
        ref={element2}
      >
        <h2>Vietnam</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link>
          <img src={vietnamMain} alt="Vietnam" />
        </Link>
      </Locations>

      <Locations
        variants={fade}
        animate={controls3}
        initial="hidden"
        ref={element3}
      >
        <h2>South Korea</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link>
          <img src={koreaMain} alt="South Korea" />
        </Link>
      </Locations>

      <Locations
        variants={fade}
        animate={controls4}
        initial="hidden"
        ref={element4}
      >
        <h2>Mexico</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link>
          <img src={mexicoMain} alt="Mexico" />
        </Link>
      </Locations>
    </StyledWork>
  );
}

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Locations = styled(motion.div)`
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

const Hide = styled.div`
  overflow: hidden;
`;

export default Destinations;
