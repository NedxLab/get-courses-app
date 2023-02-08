import React from "react";
import icon1 from "./assets/images/cta/icon/1.png";
import icon2 from "./assets/images/cta/icon/2.png";
import icon3 from "./assets/images/cta/icon/3.png";

const CampusInfo = () => {
  return (
    <>
      <div
        className="cta__area p-relative m-img pt-12 pb-8"
        style={{ paddingBottom: "155px", paddingTop: "120px" }}
      >
        <div className="container cta__width">
          <div className="row">
            <div className="col-xxl-12">
              <div className="cta__wrapper text-center">
                <h6 className="cta__pre-subtitle">University logs</h6>
                <h2 className="cta__title">Campus Information</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feature__area">
        <div className="container feature__width">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="feature__item mb-30 transition-3 white-bg">
                <div className="feature__icon mb-30">
                  <img src={icon1} alt="icon" />
                </div>
                <div className="feature__content">
                  <h3 className="feature__title-1">
                    <a href="contact.html">Student Life</a>
                  </h3>
                  <p className="feature__paragraph">
                    The modified parameters will be pulled <br /> panel
                    automatically.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="feature__item  feature__item2  mb-30 transition-3 white-bg">
                <div className="feature__icon mb-30">
                  <img src={icon2} alt="icon" />
                </div>
                <div className="feature__content">
                  <h3 className="feature__title-1">
                    <a href="contact.html">Arts & Clubs</a>
                  </h3>
                  <p className="feature__paragraph">
                    The modified parameters will be pulled <br /> panel
                    automatically.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="feature__item feature__item3  mb-30  transition-3 white-bg">
                <div className="feature__icon mb-30">
                  <img src={icon3} alt="icon" />
                </div>
                <div className="feature__content">
                  <h3 className="feature__title-1">
                    <a href="contact.html">Sports and Fitness</a>
                  </h3>
                  <p className="feature__paragraph">
                    The modified parameters will be pulled <br /> panel
                    automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampusInfo;
