import React from "react";
import search from "../asset/services/optimization.svg";
import website from "../asset/services/website.svg";
import writting from "../asset/services/writting.svg";
import social from "../asset/services/social.svg";
const Services = () => {
  return (
    <div className="services">
      <div className="row text-center justify-content-center">
        <div className="col-lg-6 col-md-8">
          <h2 className="heading">Our Services</h2>
          <p className="paragraph mt-4">
            Our team of creative professionals are experienced in crafting
            custom digital solutions that drive customer engagement and loyalty.{" "}
          </p>
        </div>
      </div>

      <div className="row justify-content-center mt-5 gy-4">
        <div className="col-md-6 col-lg-3">
          <div className="service-wrapper">
            <img src={search} width="45" alt="" />
            <p className="mt-2">Branding</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="service-wrapper">
            <img src={writting} width="45" alt="" />
            <p className="mt-2">Content Writing</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="service-wrapper">
            <img src={search} width="45" alt="" />
            <p className="mt-2">Search Engine Optimization</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="service-wrapper">
            <img src={website} width="45" alt="" />
            <p className="mt-2">Website design & Development</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="service-wrapper">
            <img src={social} width="45" alt="" />
            <p className="mt-2">Graphics & Social media Marketing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
