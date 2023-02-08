import React from "react";
import icon from "../assets/images/icon/icon.png";
import icon2 from "../assets/images/icon/2.png";
import icon3 from "../assets/images/icon/3.png";
import icon4 from "../assets/images/icon/4.png";

const PopularTopics = () => {
  return (
    <div className="back_popular_topics pt-5 pb5">
      <div className="container">
        <div className="back__title__section text-center">
          <h6 className="back__subtitle">Browse Categories</h6>
          <h2 className="back__tittle"> Popular Topics to Learn</h2>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="item__inner">
              <div className="icon">
                <img src={icon} alt="Icon " />
              </div>
              <div className="back-content">
                <h3 className="back-title">
                  <a href="/courses">
                    Environmental <br /> Sciences
                  </a>
                </h3>
                <p>5 Courses</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="item__inner">
              <div className="icon">
                <img src={icon2} alt="Icon " />
              </div>
              <div className="back-content">
                <h3 className="back-title">
                  <a href="/courses">
                    Data Science & <br /> Analytics
                  </a>
                </h3>
                <p>8 Courses</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="item__inner">
              <div className="icon">
                <img src={icon3} alt="Icon" />
              </div>
              <div className="back-content">
                <h3 className="back-title">
                  <a href="/courses">
                    Business <br /> & Management
                  </a>
                </h3>
                <p>14 Courses</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="item__inner">
              <div className="icon">
                <img src={icon4} alt="Icon" />
              </div>
              <div className="back-content">
                <h3 className="back-title">
                  <a href="/courses">
                    Learning <br /> Management
                  </a>
                </h3>
                <p>7 Courses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pt-20">
        <a href="/courses" className="back-btn-border">
          {" "}
          Browse more Courses
        </a>
      </div>
    </div>
  );
};

export default PopularTopics;
