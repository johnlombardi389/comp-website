import React from "react";
// Styles
import styled from "styled-components";
import { About } from "../styles";

function FaqSection() {
  return (
    <Faq>
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do I do something?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            nesciunt.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>How do I do something?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            nesciunt.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>How do I do something?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            nesciunt.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>

      <div className="question">
        <h4>How do I do something?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            nesciunt.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
}

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
