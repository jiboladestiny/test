// import { useState } from "react";
import logo from "../asset/marketing agency 1.svg";

function Navbar() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <div className="topnav">
      <div className="container">
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>

        <div className="nav-center">
          <ul className="gap-5 list-unstyle ">
            <li>About Us</li>
            <li>Services</li>
            <li>Latest Work</li>
            <li>Testimonials</li>
          </ul>
        </div>

        <div className="nav-end">
          <button className="general-btn">Contact us</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
