import React from "react";
// Animation
import { AnimateSharedLayout } from "framer-motion";
import { fade } from "../animation";
import { useScroll } from "./useScroll";
// Styles
import styled from "styled-components";
import { About } from "../styles";
// Components
import Toggle from "./Toggle";

function FaqSection() {
  const [element, controls] = useScroll();

  return (
    <Faq variants={fade} animate={controls} initial="hidden" ref={element}>
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I get started?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              nesciunt.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </Toggle>

        <Toggle title="Can you book multiple hotels for us?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              nesciunt.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </Toggle>

        <Toggle title="Do you offer any travel insurance?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              nesciunt.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </Toggle>

        <Toggle title="How much does each service cost?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              nesciunt.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
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
