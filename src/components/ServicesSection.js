import React from "react";
// Icons
import { FaPlane, FaClock, FaMoneyBillAlt, FaGlobe } from "react-icons/fa";
// Image
import mapHand from "../img/mapHand.jpg";

function ServicesSection() {
  return (
    <div className="services">
      <div className="description">
        <h2>
          Our <span>services include many things</span>
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <FaPlane />
              <h3>Find flight</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="card">
            <div className="icon">
              <FaClock />
              <h3>24 hour support</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="card">
            <div className="icon">
              <FaMoneyBillAlt />
              <h3>Money exchange</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="card">
            <div className="icon">
              <FaGlobe />
              <h3>Discover destinations</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={mapHand} alt="Planning trip with map" />
      </div>
    </div>
  );
}

export default ServicesSection;
