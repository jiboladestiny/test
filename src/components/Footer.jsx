import React from 'react'
// import logo from '../asset/marketing agency 1.svg'
import facebook from '../asset/footer/facebook.svg'
import linkedin from '../asset/footer/linkedin.svg'
import twitter from '../asset/footer/twitter.svg'
import youtube from "../asset/footer/youtube.svg";



const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container py-5">
  
          <div className="row gy-4">
            <div className="col-md-4">
              <p className="paragraph">
                We provide the best strategies to develop excellent branding to
                set you apart from competitors
              </p>

              <div className="icon-cont d-flex gap-3 mt-3">
                <img src={facebook} width={25} alt="" />
                <img src={linkedin} width={25} alt="" />
                <img src={twitter} width={25} alt="" />
                <img src={youtube} width={25} alt="" />
              </div>
            </div>
            <div class="col-md-4">
              <h4 className="green-header">COMPANY</h4>
              <ul class="nav flex-column paragraph">
                <li class="nav-item mb-2">About</li>
                <li class="nav-item mb-2">Services</li>
                <li class="nav-item mb-2">Latest work</li>
                <li class="nav-item mb-2">Testimonial</li>
                <li class="nav-item ">Blog</li>
              </ul>
            </div>
  
          </div>
        </div>
        <hr />
        <div className="copyright py-3 container">
          <div className="row">
            <div className="col-md-8">
              <p>
                © 2023 MARAYA Insurance Inc. Patent Pending. All Rights
                Reserved.
              </p>
            </div>
            <div className="col-md-3">
              {" "}
              <p className="text-end">
                <span  className='privacy'>Privacy</span> | Terms of Service
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer
