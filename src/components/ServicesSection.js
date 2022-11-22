import React from "react";
// Icons
import { FaPlane, FaClock, FaMoneyBillAlt, FaGlobe } from "react-icons/fa";
// Image
import mapHand from "../img/mapHand.jpg";
// Styles
import styled from "styled-components";
import { About, Description, Image } from "../styles";

function ServicesSection() {
  return (
    <Services>
      <Description>
        <h2>
          Our <span>services include many things</span>
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <FaPlane />
              <h3>Find flight</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>

          <Card>
            <div className="icon">
              <FaClock />
              <h3>24 hour support</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>

          <Card>
            <div className="icon">
              <FaMoneyBillAlt />
              <h3>Money exchange</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>

          <Card>
            <div className="icon">
              <FaGlobe />
              <h3>Discover destinations</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={mapHand} alt="Planning trip with map" />
      </Image>
    </Services>
  );
}

// Styles
const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
