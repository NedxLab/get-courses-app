import React from "react";
import academic1 from "./assets/images/academic/1.jpg";
import academic2 from "./assets/images/academic/2.jpg";
import academic3 from "./assets/images/academic/3.jpg";
import academic4 from "./assets/images/academic/4.jpg";
import acadicon1 from "./assets/images/academic/icon/1.png";
import acadicon2 from "./assets/images/academic/icon/2.png";
import acadicon3 from "./assets/images/academic/icon/3.png";
import acadicon4 from "./assets/images/academic/icon/4.png";

const Programs = () => {
  return (
    <div className="academic__area p-relative pb-65">
      <div className="container academic__width">
        <div className="row">
          <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-6 offset-lg-3">
            <div className="academic__title-wrapper text-center mb-60">
              <h6 className="academic__pre-subtitle">Academics Programs</h6>
              <h2 className="academic__title">Our Academics Programs</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
            <div className="academic__container mb-50">
              <div className="academic__wrapper">
                <div className="academic__wrapper--image m-img">
                  <img
                    className="academic__wrapper--image-display"
                    src={academic1}
                    alt="Three people are standing"
                  />
                </div>
                <div className="academic__wrapper--icon-1">
                  <img
                    className="academic__wrapper--icon-1-middle"
                    src={acadicon1}
                    alt="icon"
                  />
                </div>
              </div>
              <div className="academic__round-area-title text-center">
                <h6 className="academic__round-area-title-1">Undergraduate</h6>
                <p className="academic__round-area-title-2">
                  Online guitar coaching now offers
                  <br />
                  you an approachable.
                </p>
                <a className="academic__round-area-title-3" href="contact.html">
                  Apply Now
                  <i className="arrow_right academic__round-area-title-3--icon"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 mb-50">
            <div className="academic__container text-center">
              <div className="academic__wrapper">
                <div className="academic__wrapper--image m-img">
                  <img src={academic2} alt="Three people are standing" />
                </div>
                <div className="academic__wrapper--icon-2">
                  <img
                    className="academic__wrapper--icon-2-middle-2"
                    src={acadicon2}
                    alt="icon"
                  />
                </div>
              </div>
              <div className="academic__round-area-title text-center">
                <h6 className="academic__round-area-title-1">PhD Program</h6>
                <p className="academic__round-area-title-2">
                  Online guitar coaching now offers
                  <br />
                  you an approachable.
                </p>
                <a className="academic__round-area-title-3" href="contact.html">
                  Apply Now
                  <i className="arrow_right academic__round-area-title-3--icon"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 mb-50">
            <div className="academic__container text-center">
              <div className="academic__wrapper">
                <div className="academic__wrapper--image m-img">
                  <img src={academic3} alt="Three people are standing" />
                </div>
                <div className="academic__wrapper--icon-3">
                  <img
                    className="academic__wrapper--icon-3-middle-3"
                    src={acadicon3}
                    alt="icon"
                  />
                </div>
              </div>
              <div className="academic__round-area-title text-center">
                <h6 className="academic__round-area-title-1">Postgraduate</h6>
                <p className="academic__round-area-title-2">
                  Online guitar coaching now offers <br /> you an approachable.
                </p>
                <a className="academic__round-area-title-3" href="contact.html">
                  Apply Now
                  <i className="arrow_right academic__round-area-title-3--icon"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 mb-50">
            <div className="academic__container text-center">
              <div className="academic__wrapper">
                <div className="academic__wrapper--image m-img">
                  <img src={academic4} alt="Three people are standing" />
                </div>
                <div className="academic__wrapper--icon-4">
                  <img
                    className="academic__wrapper--icon-4-middle-4"
                    src={acadicon4}
                    alt="icon"
                  />
                </div>
              </div>
              <div className="academic__round-area-title text-center">
                <h6 className="academic__round-area-title-1">
                  Continuing Education
                </h6>
                <p className="academic__round-area-title-2">
                  Online guitar coaching now offers <br /> you an approachable.
                </p>
                <a className="academic__round-area-title-3" href="contact.html">
                  Apply Now
                  <i className="arrow_right academic__round-area-title-3--icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
