import React from "react";
import Programs from "../components/Programs";
import dots1 from "../assets/images/about/dots1.png";
import dots2 from "../assets/images/about/dots2.png";
import about from "../assets/images/about/about2.png";
import breadcrumbs from "../assets/images/breadcrumbs/1.jpg";
import { AiOutlineCheck } from "react-icons/ai";

const About = () => {
  return (
    <>
      {" "}
      <div className="back-breadcrumbs">
        <div className="breadcrumbs-wrap">
          <img className="desktop" src={breadcrumbs} alt="Breadcrumbs" />
          <img className="mobile" src={breadcrumbs} alt="Breadcrumbs" />
          <div className="breadcrumbs-inner">
            <div className="container">
              <div className="breadcrumbs-text">
                <h1 className="breadcrumbs-title">About Us</h1>
                <div className="back-nav">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Programs />
      <div className="about__area about2__area p-relative mb-120">
        <div className="container about__area-width">
          <div className="row">
            <div className="col-lg-5">
              <div className="about__image">
                <img className="back__shape__1" src={dots2} alt="Shape " />
                <img src={about} alt="About" />
                <img className="back__shape__2" src={dots1} alt="Shape " />
              </div>
            </div>
            <div className="col-lg-7 pl-70">
              <div className="about__content">
                <h6>Who we are!</h6>
                <h2 className="about__title">
                  Our Impressive Courses <br />
                  Audio, Video, & Live Classess
                </h2>
                <p className="about__paragraph">
                  Spend some time to visit our website or head office <br />
                  and discover our current courses.
                </p>
                <ul>
                  <li>
                    <i className="icon_check">
                      <AiOutlineCheck />
                    </i>{" "}
                    Best teaching
                  </li>
                  <li>
                    <i className="icon_check">
                      <AiOutlineCheck />
                    </i>{" "}
                    Flexible
                  </li>
                  <li>
                    <i className="icon_check">
                      <AiOutlineCheck />
                    </i>{" "}
                    Expert tutor
                  </li>
                  <li>
                    <i className="icon_check">
                      <AiOutlineCheck />
                    </i>{" "}
                    Affordable
                  </li>
                </ul>
                <div className="about__btn pt-30">
                  <a href="/" className="back-btn-border">
                    {" "}
                    View Courses{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
