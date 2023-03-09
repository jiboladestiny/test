import {useState} from 'react'
import blogimg from '../asset/blog/newblogimg.svg'
import green from '../asset/blog/green.svg'
import virtual from '../asset/blog/virtual.svg'
import traffic from "../asset/blog/traffic.svg";
const Blog = () => {
    const [show, setShow] = useState(0);

    
  return (
    <div className="blog container">
      <div className="control gap-3">
        <div className={show === 0 ? "active" : ""} onClick={() => setShow(0)}>
          <i class="bx bx-chevron-left"></i>
        </div>
        <div className={show === 1 ? "active" : ""} onClick={() => setShow(1)}>
          <i class="bx bx-chevron-right"></i>
        </div>
      </div>
      <h2 className="heading text-center">Blog</h2>

      {show === 0 ? (
        <div className="row mt-4 gy-3">
          <div className="col-lg-6">
            <div className="d-flex blog-cont align-items-center">
              <div className="">
                <img src={blogimg} className="img-fluid" alt="" srcset="" />
              </div>
              <div className="ms-4">
                <h2 className="paragraph-2">19 Feb, 2022/ By Admin</h2>
                <h2 className="paragraph-3 mt-3">UI/UX design Tips</h2>
                <p className="paragraph mt-3">
                  Promotion World has once placed PageTraffic among the top.
                </p>

                <span className="d-flex align-items-center">
                  Read more <i class="bx bx-right-arrow-alt mt-1 ms-1"></i>
                </span>
              </div>
            </div>
          </div>{" "}
          <div className="col-lg-6">
            <div className="d-flex blog-cont align-items-center">
              <div className="">
                <img src={green} className="img-fluid" alt="" srcset="" />
              </div>
              <div className="ms-4">
                <h2 className="paragraph-2">19 Feb, 2022/ By Admin</h2>
                <h2 className="paragraph-3 mt-3">UI/UX design Tips</h2>
                <p className="paragraph mt-3">
                  Promotion World has once placed PageTraffic among the top.
                </p>

                <span className="d-flex align-items-center">
                  Read more <i class="bx bx-right-arrow-alt mt-1 ms-1"></i>
                </span>
              </div>
            </div>
          </div>{" "}
          <div className="col-lg-6">
            <div className="d-flex blog-cont align-items-center">
              <div className="">
                <img src={blogimg} className="img-fluid" alt="" srcset="" />
              </div>
              <div className="ms-4">
                <h2 className="paragraph-2">19 Feb, 2022/ By Admin</h2>
                <h2 className="paragraph-3 mt-3">UI/UX design Tips</h2>
                <p className="paragraph mt-3">
                  Promotion World has once placed PageTraffic among the top.
                </p>

                <span className="d-flex align-items-center">
                  Read more <i class="bx bx-right-arrow-alt mt-1 ms-1"></i>
                </span>
              </div>
            </div>
          </div>{" "}
          <div className="col-lg-6">
            <div className="d-flex blog-cont align-items-center">
              <div className="">
                <img src={green} className="img-fluid" alt="" srcset="" />
              </div>
              <div className="ms-4">
                <h2 className="paragraph-2">19 Feb, 2022/ By Admin</h2>
                <h2 className="paragraph-3 mt-3">UI/UX design Tips</h2>
                <p className="paragraph mt-3">
                  Promotion World has once placed PageTraffic among the top.
                </p>

                <span className="d-flex align-items-center">
                  Read more <i class="bx bx-right-arrow-alt mt-1 ms-1"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row mt-4 gy-3">
          <div className="col-lg-6">
            <div className="d-flex blog-cont align-items-center">
              <div className="">
                <img src={virtual} className="img-fluid" alt="" srcset="" />
              </div>
              <div className="ms-4">
                <h2 className="paragraph-2">19 Feb, 2022/ By Admin</h2>
                <h2 className="paragraph-3 mt-3">UI/UX design Tips</h2>
                <p className="paragraph mt-3">
                  Promotion World has once placed PageTraffic among the top.
                </p>

                <span className="d-flex align-items-center">
                  Read more <i class="bx bx-right-arrow-alt mt-1 ms-1"></i>
                </span>
              </div>
            </div>
          </div>{" "}
          <div className="col-lg-6">
            <div className="d-flex blog-cont align-items-center">
              <div className="">
                <img src={traffic} className="img-fluid" alt="" srcset="" />
              </div>
              <div className="ms-4">
                <h2 className="paragraph-2">19 Feb, 2022/ By Admin</h2>
                <h2 className="paragraph-3 mt-3">UI/UX design Tips</h2>
                <p className="paragraph mt-3">
                  Promotion World has once placed PageTraffic among the top.
                </p>

                <span className="d-flex align-items-center">
                  Read more <i class="bx bx-right-arrow-alt mt-1 ms-1"></i>
                </span>
              </div>
            </div>
          </div>{" "}
          <div className="col-lg-6">
            <div className="d-flex blog-cont align-items-center">
              <div className="">
                <img src={virtual} className="img-fluid" alt="" srcset="" />
              </div>
              <div className="ms-4">
                <h2 className="paragraph-2">19 Feb, 2022/ By Admin</h2>
                <h2 className="paragraph-3 mt-3">UI/UX design Tips</h2>
                <p className="paragraph mt-3">
                  Promotion World has once placed PageTraffic among the top.
                </p>

                <span className="d-flex align-items-center">
                  Read more <i class="bx bx-right-arrow-alt mt-1 ms-1"></i>
                </span>
              </div>
            </div>
          </div>{" "}
          <div className="col-lg-6">
            <div className="d-flex blog-cont align-items-center">
              <div className="">
                <img src={traffic} className="img-fluid" alt="" srcset="" />
              </div>
              <div className="ms-4">
                <h2 className="paragraph-2">19 Feb, 2022/ By Admin</h2>
                <h2 className="paragraph-3 mt-3">UI/UX design Tips</h2>
                <p className="paragraph mt-3">
                  Promotion World has once placed PageTraffic among the top.
                </p>

                <span className="d-flex align-items-center">
                  Read more <i class="bx bx-right-arrow-alt mt-1 ms-1"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blog
