import React from "react";
import Navbar from "./Navbar";
// import eclispse from "../asset/Ellipse 408.svg";
// import intersection from "../asset/Intersection 5.svg";
import greencircle from "../asset/Intersection 7.svg";
// import google from "../asset/Group 501.svg";
// import rectblue from "../asset/Rectangle 351.svg";
// import facebook from "../asset/Path 2336.svg";
// import rectpurple from "../asset/Rectangle 353.svg";
// import slack from "../asset/2993744_slack_social media_icon.svg";
// import rectred from "../asset/Rectangle 352.svg";
import phone from "../asset/phone.png";

const Herosection = () => {
  return (
    <>
      <Navbar />
      <div className="herosection">
        <img src={greencircle} className="greencircle" alt="" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-7 col-xl-6 left">
              <h2 className="hero-heading">
                We help ambitious brands build sustainable and scalable growth
              </h2>

              <p className="paragraph mt-4 hero-paragraph">
                At Maraya we create solutions that drive our business growth and
                success. Our team of experts specializes in crafting unique
                digital marketing strategies, engaging customer experiences and
                memorable brand identities
              </p>

              <button
                className="hero-btn mt-3 d-flex align-item-center"
                onClick={(event) => {
                  event.preventDefault();
                  window.location.href = "https://wa.me/08155199463";
                }}
              >
                Request Consultation
              </button>
            </div>

            <img src={phone} alt="" className="main-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
