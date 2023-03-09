import { useState } from "react";
import logo from "../asset/marketing agency 1.svg";

function Navbar() {
  const [nav, setNav] = useState(0);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

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
            <li class="nav-item p-2 ms-3">About</li>
            <li class="nav-item p-2 ms-3">Services</li>
            <li class="nav-item p-2 ms-3">Latest work</li>
            <li class="nav-item p-2 ms-3">Testimonial</li>
            <li class="nav-item p-2 ms-3">
              <button className="general-btn">Contact us</button>
            </li>
          </ul>
        </div>
        <div className="nav-center">
          <ul className="gap-5 list-unstyle ">
            <li className="text-right">About Us</li>
            <li>Services</li>
            <li>Latest Work</li>
            <li>Testimonials</li>
          </ul>
        </div>

        <div className="nav-end">
          {" "}
          <button className="general-btn">Contact us</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
