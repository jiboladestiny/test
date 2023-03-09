import React from 'react'
import newimg  from '../asset/testimonials/svgnew.svg'

const Nesletter = () => {
  return (
    <div className="newsletter container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-8">
          <div className="inner-cont">
            <div className="">
              <p className="paragraph-3">Subscribe to our newsletter</p>
            </div>
            <div className="form-cont">
              <input type="text" placeholder="Enter your email" />{" "}
              <button className="general-btn">Subscribe </button>
            </div>
            <div className='img-cont'>
              <img src={newimg} className="letter-img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nesletter
