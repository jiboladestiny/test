import React, { useEffect, useState } from "react";
import logo from "../asset/marketing agency 1.svg";

function Navbar() {
  const [nav, setNav] = useState(0);
const [currentSection, setCurrentSection] = useState("");

useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (
        window.pageYOffset >= sectionTop - 50 &&
        window.pageYOffset < sectionTop + sectionHeight - 50
      ) {
        current = section.id;
      }
    });

    setCurrentSection(current);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (
    <div className="topnav">
      <div className="container">
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>
        <div>
          {nav === 0 ? (
            <i class="bx bx-menu-alt-right" onClick={() => setNav(1)}></i>
          ) : (
            <i class="bx bx-x" onClick={() => setNav(0)}></i>
          )}
        </div>
        <div className={nav === 1 ? "mobile-nav active" : "mobile-nav"}>
          <ul class="nav flex-column">
            <li class="nav-item p-2 ms-3" >About </li>
            <li class="nav-item p-2 ms-3">Services</li>
            <li class="nav-item p-2 ms-3">Latest work</li>
            <li class="nav-item p-2 ms-3">Testimonial</li>
            <li class="nav-item p-2 ms-3">
              <button className="hero-btn">Contact us</button>
            </li>
          </ul>
        </div>
        <div className="nav-center">
          <ul className="gap-5 list-unstyle ">
            <li className="text-right" >About Us</li>
            <li>Services</li>
            <li>Latest Work</li>
            <li>Testimonials</li>
          </ul>
        </div>

        <div className="nav-end">
          {" "}
          <button className="hero-btn">Contact us</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
