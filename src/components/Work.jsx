import { useState } from "react";
import image1 from "../asset/works/image 8.svg";
import image2 from "../asset/works/image 9.svg";
import image3 from "../asset/works/image 12.svg";
import image4 from "../asset/works/image 11.svg";

const Work = () => {
  const [show, setShow] = useState(0);
  // const works = [
  //   {
  //     id: 1,
  //     category: "website",
  //     image: image1,
  //   },
  //   {
  //     id: 2,

  //     category: "website",
  //     image: image1,
  //   },
  //   {
  //     id: 3,

  //     category: "website",
  //     image: image1,
  //   },
  //   {
  //     id: 4,

  //     category: "mobile",
  //     image: image2,
  //   },
  //   {
  //     id: 5,

  //     category: "mobile",
  //     image: image2,
  //   },
  //   {
  //     id: 6,

  //     category: "mobile",
  //     image: image2,
  //   },
  //   {
  //     id: 7,

  //     category: "branding",
  //     image: image3,
  //   },
  //   {
  //     id: 8,
  //     category: "branding",
  //     image: image3,
  //   },
  //   {
  //     id: 9,

  //     category: "branding",
  //     image: image3,
  //   },
  //   {
  //     id: 10,

  //     category: "ui",
  //     image: image4,
  //   },
  //   {
  //     id: 11,

  //     category: "ui",
  //     image: image4,
  //   },
  //   {
  //     id: 12,

  //     category: "ui",
  //     image: image4,
  //   },
  // ];

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

  // const website = works.filter((item) => {
  //   return item.category === "website";
  // });

  // const design = works.filter((item) => {
  //   return item.category === "design";
  // });

  // const branding = works.filter((item) => {
  //   return item.category === "branding";
  // });
  // const ui = works.filter((item) => {
  //   return item.category === "ui";
  // });

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

      <div className="d-flex justify-content-center">
        <button className="general-btn mt-5">See more</button>
      </div>
    </div>
  );
};

export default Work;
