import { useState } from "react";
import image1 from "../asset/works/image 8.svg";
import image2 from "../asset/works/image 9.svg";
import image3 from "../asset/works/image 12.svg";
import image4 from "../asset/works/image 11.svg";

const Work = () => {
  const [show, setShow] = useState(0);


  const tabs = [
    {
      name: "All",
    },
    {
      name: "Website Design",
    },
    {
      name: "Mobile App",
    },
    {
      name: "Design Branding",
    },
    {
      name: "UI/UX",
    },
  ];

 

  const tabses = tabs.map((item, i) => (
    <button
      onClick={() => {
        setShow(i);
      }}
      className={i === show ? "tab-btn me-2 active" : "tab-btn me-2"}
      key={item.name}
    >
      {item.name}
    </button>
  ));
  return (
    <div className="works">
      <h2 className="heading text-center">Latest Works</h2>

      <div className="d-flex justify-content-md-center mt-4">
        <div className="tab-wrapper">{tabses}</div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="tab-content-wrapper mt-5">
            {show === 0 && (
              <div className="tab-content">
                <div className="wrappers row gy-4 gx-4 justify-content-center">
                  <div className="col-md-4">
                    <img src={image1} className="img-fluid" alt="" />
                  </div>{" "}
                  <div className="col-md-4">
                    <img src={image2} className="img-fluid" alt="" />
                  </div>{" "}
                  <div className="col-md-4">
                    <img src={image3} className="img-fluid" alt="" />
                  </div>{" "}
                  <div className="col-md-4">
                    <img src={image4} className="img-fluid" alt="" />
                  </div>{" "}
                  <div className="col-md-4">
                    <img src={image2} className="img-fluid" alt="" />
                  </div>{" "}
                  <div className="col-md-4">
                    <img src={image3} className="img-fluid" alt="" />
                  </div>{" "}
                </div>
              </div>
            )}
            {show === 1 && (
              <div className="tab-content">
                <div className="wrappers row gy-4 gx-4 justify-content-center">
                  <div className="col-md-4">
                    <img src={image3} className="img-fluid" alt="" />
                  </div>{" "}
                  <div className="col-md-4">
                    <img src={image4} className="img-fluid" alt="" />
                  </div>{" "}
                  <div className="col-md-4">
                    <img src={image2} className="img-fluid" alt="" />
                  </div>{" "}
                  <div className="col-md-4">
                    <img src={image3} className="img-fluid" alt="" />
                  </div>{" "}
                </div>
              </div>
            )}{" "}
            {show === 2 && (
              <div className="tab-content">
                <div className="wrappers row gy-4 gx-4 justify-content-center">
                  <div className="col-md-4">
                    <img src={image1} className="img-fluid" alt="" />
                  </div>{" "}
                  <div className="col-md-4">
                    <img src={image2} className="img-fluid" alt="" />
                  </div>{" "}
                  <div className="col-md-4">
                    <img src={image2} className="img-fluid" alt="" />
                  </div>{" "}
                  <div className="col-md-4">
                    <img src={image3} className="img-fluid" alt="" />
                  </div>{" "}
                </div>
              </div>
            )}{" "}
            {show === 3 && (
              <div className="tab-content">
                <div className="wrappers row gy-4 gx-4 justify-content-center">
                  <div className="col-md-4">
                    <img src={image2} className="img-fluid" alt="" />
                  </div>{" "}
                  <div className="col-md-4">
                    <img src={image3} className="img-fluid" alt="" />
                  </div>{" "}
                  <div className="col-md-4">
                    <img src={image4} className="img-fluid" alt="" />
                  </div>{" "}
                  <div className="col-md-4">
                    <img src={image2} className="img-fluid" alt="" />
                  </div>{" "}
                </div>
              </div>
            )}
            {show === 4 && (
              <div className="tab-content">
                <div className="wrappers row gy-4 gx-4 justify-content-center">
                  <div className="col-md-4">
                    <img src={image2} className="img-fluid" alt="" />
                  </div>{" "}
                  <div className="col-md-4">
                    <img src={image3} className="img-fluid" alt="" />
                  </div>{" "}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <button className="general-btn">See more</button>
      </div>
    </div>
  );
};

export default Work;
