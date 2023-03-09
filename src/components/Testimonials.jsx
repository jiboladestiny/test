import React, { useState, useRef } from "react";
import testimg1 from "../asset/testimonials/testimg1.svg";
import doe from "../asset/testimonials/doe.svg";
import zoe from "../asset/testimonials/zoe.svg";

const Testimonials = () => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const newPosition = containerRef.current.scrollLeft;
    if (newPosition !== scrollPosition) {
      setScrollPosition(newPosition);
    }
  };

  const handleScrollBackward = () => {
    containerRef.current.scrollBy({
      left: -500,
      behavior: "smooth",
    });
  };

  const handleScrollForward = () => {
    containerRef.current.scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };

  return (
    <div className="tesimonials">
      <div className="container">
        <h2 className="heading-2 mb-4">Testimonial</h2>

        <div
          className="testimonial-wrapper gap-4"
          ref={containerRef}
          onScroll={handleScroll}
        >
          <div className="testimonial-container">
            <div className="d-flex align-items-center detail">
              <div>
                <img src={testimg1} width="44" alt="" />
              </div>
              <div className="ms-3 right">
                <h2>Zoe Matins</h2>
                <p>Founder, Alpha Group</p>
              </div>
            </div>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod
            </p>
          </div>
          <div className="testimonial-container">
            <div className="d-flex align-items-center detail">
              <div>
                <img src={doe} width="44" alt="" />
              </div>
              <div className="ms-3 right">
                <h2>Zoe Matins</h2>
                <p>Founder, Alpha Group</p>
              </div>
            </div>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod
            </p>
          </div>
          <div className="testimonial-container">
            <div className="d-flex align-items-center detail">
              <div>
                <img src={zoe} width="44" alt="" />
              </div>
              <div className="ms-3 right">
                <h2>Zoe Matins</h2>
                <p>Founder, Alpha Group</p>
              </div>
            </div>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod
            </p>
          </div>
          <div className="testimonial-container">
            <div className="d-flex align-items-center detail">
              <div>
                <img src={testimg1} width="44" alt="" />
              </div>
              <div className="ms-3 right">
                <h2>Zoe Matins</h2>
                <p>Founder, Alpha Group</p>
              </div>
            </div>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod
            </p>
          </div>
          <div className="testimonial-container">
            <div className="d-flex align-items-center detail">
              <div>
                <img src={testimg1} width="44" alt="" />
              </div>
              <div className="ms-3 right">
                <h2>Zoe Matins</h2>
                <p>Founder, Alpha Group</p>
              </div>
            </div>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod
            </p>
          </div>
          <div className="testimonial-container">
            <div className="d-flex align-items-center detail">
              <div>
                <img src={doe} width="44" alt="" />
              </div>
              <div className="ms-3 right">
                <h2>Zoe Matins</h2>
                <p>Founder, Alpha Group</p>
              </div>
            </div>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod
            </p>
          </div>
        </div>

        <div className="scroll-controller gap-2">
          <div onClick={handleScrollBackward}></div>
          <div onClick={handleScrollForward}></div>
          <div onClick={handleScrollForward}></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
