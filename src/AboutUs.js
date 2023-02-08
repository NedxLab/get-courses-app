import React from "react";
import signature from "./assets/images/about/signature.png";
import lesson from "./assets/images/about/learners-lesson.jpg";

const AboutUs = () => {
  return (
    <div className="about__area p-relative mb-5 pt-5">
      <div className="container about__area-width">
        <div className="row about-shadow">
          <div className="col-lg-6">
            <div className="about__image">
              <img src={lesson} alt="About" />
            </div>
          </div>
          <div className="col-lg-6 pl-5 md-pl-15">
            <div className="about__content">
              <h2 className="about__title">
                About <br /> Our University
              </h2>
              <p className="about__paragraph">
                This University offers a range of free online taster courses and
                Massive Open Online Courses (MOOCs).
                <br />
                Many of our courses are developed in collaboration and
                academically supported by world experts at University of
                London's reputable member institutions.
              </p>
              <img
                className="about__signature img-responsive"
                src={signature}
                alt="Signature"
                style={{ width: "150px" }}
              />
              <div className="about__btn md-mb-60">
                <a href="about.html" className="back-btn">
                  {" "}
                  University Overview
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
