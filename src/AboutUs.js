import React from "react";
import signature from "./assets/images/about/signature.png";
import lesson from "./assets/images/about/learners-lesson.jpg";

const AboutUs = () => {
  return (
    <div className="about__area p-relative mb-120">
      <div className="container about__area-width">
        <div className="row about-shadow">
          <div className="col-lg-6">
            <div className="about__image">
              <img src={lesson} alt="About" />
            </div>
          </div>
          <div className="col-lg-6 pl-50 md-pl-15">
            <div className="about__content">
              <h2 className="about__title">
                About <br /> Dlear University
              </h2>
              <p className="about__paragraph">
                Me old mucker he nicked it barmy happy days super at public
                <br />
                school David, cheeky so I said excuse my French Eaton wellies{" "}
                <br /> owt to do with me bum bag.
              </p>
              <img
                className="about__signature"
                src={signature}
                alt="Signature"
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
