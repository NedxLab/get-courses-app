import React from "react";
import academic1 from "../assets/images/academic/1.jpg";
import academic2 from "../assets/images/academic/2.jpg";
import academic3 from "../assets/images/academic/3.jpg";
import academic4 from "../assets/images/academic/4.jpg";
import acadicon1 from "../assets/images/academic/icon/1.png";
import acadicon2 from "../assets/images/academic/icon/2.png";
import acadicon3 from "../assets/images/academic/icon/3.png";
import acadicon4 from "../assets/images/academic/icon/4.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const Programs = () => {
  const programs = [
    {
      name: "Undergraduate",
      image: academic1,
      logo: acadicon1,
      desc: "Undergraduate programs of study. Open the doors to the future you. Find your passion, expand your horizons, prepare for a career. Whatever path you choose.",
    },
    {
      name: "PhD Program",
      image: academic2,
      logo: acadicon2,
      desc: "A Doctorate, or Doctoral Degree, is the highest level of academic degree awarded by a university. Register Now.",
    },
    {
      name: "Postgraduate",
      image: academic3,
      logo: acadicon3,
      desc: "Find out about different postgraduate course types and subject areas, then search for a course using our course search.",
    },
    {
      name: "Part-time studies",
      image: academic4,
      logo: acadicon4,
      desc: "With Part-Time Learning, you get the education you want, when and how you want. Advance your career with over 1300 courses and programs.",
    },
  ];
  return (
    <div className="academic__area p-relative pt-5 mt-5 pb-5">
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
          {programs.map((program, i) => (
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6" key={i}>
              <div className="academic__container mb-50">
                <div className="academic__wrapper">
                  <div className="academic__wrapper--image m-img">
                    <img
                      className="academic__wrapper--image-display"
                      src={program.image}
                      alt="Three people are standing"
                    />
                  </div>
                  <div className="academic__wrapper--icon-1">
                    <img
                      className="academic__wrapper--icon-1-middle"
                      src={program.logo}
                      alt="icon"
                    />
                  </div>
                </div>
                <div className="academic__round-area-title text-center">
                  <h6 className="academic__round-area-title-1">
                    {program.name}
                  </h6>
                  <p className="academic__round-area-title-2">{program.desc}</p>
                  <a className="academic__round-area-title-3" href="/">
                    Apply Now
                    <i className="arrow_right academic__round-area-title-3--icon">
                      <IoIosArrowRoundForward />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
