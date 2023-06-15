import React, { useEffect, useState } from "react";
import doe from "../asset/testimonials/blackman1.jpeg";
import blk2 from "../asset/testimonials/blackman2.webp";
import blk3 from "../asset/testimonials/blackman3.webp";

const Testimonials = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
      useEffect(() => {
        const handleScroll = () => {
          setScrollPosition(window.scrollX);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  // const containerRef = useRef(null);
  // const [scrollPosition, setScrollPosition] = useState(0);

  // const handleScroll = () => {
  //   const newPosition = containerRef.current.scrollLeft;
  //   if (newPosition !== scrollPosition) {
  //     setScrollPosition(newPosition);
  //   }
  // };

  // const handleScrollBackward = () => {
  //   containerRef.current.scrollBy({
  //     left: -500,
  //     behavior: "smooth",
  //   });
  // };

  // const handleScrollForward = () => {
  //   containerRef.current.scrollBy({
  //     left: 500,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <section className="tesimonials" id="testimonial">
      <div className="container">
        <h2 className="heading-2 mb-4">Testimonial</h2>

        <div
          className="testimonial-wrapper gap-4"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          <div className="testimonial-container">
            <div className="d-flex align-items-center detail">
              <div>
                <img src={blk2} width={44} height={44} alt="" />
              </div>
              <div className="ms-3 right">
                <h2>Solomon. B</h2>
                <p>Client</p>
              </div>
            </div>
            <p className="paragraph">
              I can't thank Maraya Web Development Agency enough for their
              outstanding work. They truly understood our brand and brought it
              to life with a visually stunning website
            </p>
          </div>
          <div className="testimonial-container">
            <div className="d-flex align-items-center detail">
              <div>
                <img src={doe} width={44} height={44} alt="" />
              </div>
              <div className="ms-3 right">
                <h2>Richard. M</h2>
                <p>Client</p>
              </div>
            </div>
            <p className="paragraph">
              Working with Maraya Web Development Agency was a breeze. Their team
              took the time to listen to our needs and delivered a website that
              exceeded our expectations
            </p>
          </div>
          <div className="testimonial-container">
            <div className="d-flex align-items-center detail">
              <div>
                <img src={blk3} width={44} height={44} alt="" />
              </div>
              <div className="ms-3 right">
                <h2>Shola. A</h2>
                <p>Client</p>
              </div>
            </div>
            <p className="paragraph">
              "Maraya Web Development Agency made the whole process enjoyable.
              Their team was attentive, patient, and turned our ideas into a
              beautiful website."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
