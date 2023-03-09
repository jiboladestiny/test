import React from 'react'
import Navbar from './Navbar'
import eclispse from '../asset/Ellipse 408.svg'
import intersection from '../asset/Intersection 5.svg'
import greencircle from '../asset/Intersection 7.svg'
import google from "../asset/Group 501.svg";
import rectblue from "../asset/Rectangle 351.svg";
import facebook from "../asset/Path 2336.svg";
import rectpurple from "../asset/Rectangle 353.svg";
import slack from "../asset/2993744_slack_social media_icon.svg";
import rectred from "../asset/Rectangle 352.svg";





const Herosection = () => {
  return (
    <>
      <Navbar />
      <div className="herosection">
        <img src={greencircle} className="greencircle" alt='' />
        <div className="container row justify-content-between align-items-center">
          <div className="col-md-10 col-lg-5 left">
            <h2 className="heading">Transform your online presence</h2>

            <p className="paragraph mt-4">
              At Maraya we create solutions that drive our business growth and
              success. Our team of experts specializes in crafting unique
              digital marketing strategies, engaging customer experiences and
              memorable brand identities
            </p>

            <button className="general-btn mt-3">Contact us</button>
          </div>
          <div className="col-md-6 right">
            <div>
              <img src={eclispse} alt="" className="main-img" />
              <img src={intersection} className="intersection" alt="" />
              <img src={google} className="google" alt="" />
              <img src={rectblue} className="rectblue" alt="" />
              <img src={facebook} className="facebook" alt="" />
              <img src={rectpurple} className="rectpurple" alt="" />
              <img src={slack} className="slack" alt="" />
              <img src={rectred} className="rectred" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosection