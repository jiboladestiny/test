import React from 'react'
import logo from '../asset/marketing agency 1.svg'
import facebook from '../asset/footer/facebook.svg'
import linkedin from '../asset/footer/linkedin.svg'
import twitter from '../asset/footer/twitter.svg'
import youtube from "../asset/footer/youtube.svg";
import footerblog from "../asset/footer/footerblogimg.svg";


const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <img src={logo} className="img-fluid" alt="" />
          <div className="row gy-4">
            <div className="col-md-4">
              <p className="paragraph">
                We provide the best strategies to develop excellent branding to
                set you apart from competitors
              </p>

              <div className="icon-cont d-flex gap-3 mt-3">
                <img src={facebook} width={35} alt="" />
                <img src={linkedin} width={35} alt="" />
                <img src={twitter} width={35} alt="" />
                <img src={youtube} width={35} alt="" />
              </div>
            </div>
            <div class="col-md-4">
              <h4 className="green-header">COMPANY</h4>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">About</li>
                <li class="nav-item mb-2">Services</li>
                <li class="nav-item mb-2">Latest work</li>
                <li class="nav-item mb-2">Testimonial</li>
                <li class="nav-item ">Blog</li>
              </ul>
            </div>
            <div class="col-md-4 col-lg-3">
              <h4 className="green-header">LATEST NEWS</h4>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <div className="d-flex gap-2">
                    <div>
                      <img src={footerblog} alt="" srcset="" />
                    </div>
                    <div>
                      <h4 className="paragraph">Per Click Management</h4>
                      <p className="paragraph-2">
                        PageTraffic is a premier Search Engine Marketing ( SEM).
                      </p>
                      <p className="paragraph-4 d-flex align-items-center gap-1">
                        <i class="bx bxs-circle"></i> 15 April 2021
                      </p>
                    </div>
                  </div>
                </li>
                <li class="nav-item mb-2">
                  <div className="d-flex gap-2">
                    <div>
                      <img src={footerblog} alt="" srcset="" />
                    </div>
                    <div>
                      <h4 className="paragraph">Per Click Management</h4>
                      <p className="paragraph-2">
                        PageTraffic is a premier Search Engine Marketing ( SEM).
                      </p>
                      <p className="paragraph-4 d-flex align-items-center gap-1">
                        <i class="bx bxs-circle"></i> 15 April 2021
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="copyright py-3 container">
          <div className="row">
            <div className='col-md-8'>
              <p>
                © 2023 MARAYA Insurance Inc. Patent Pending. All Rights
                Reserved.
              </p>
            </div>
            <div className='col-md-3'>
              {" "}
              <p className='text-end'>Privacy | Terms of Service</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer
