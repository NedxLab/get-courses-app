import React from "react";
import slide1 from "../assets/images/banner/slide1.jpg";
import banner1 from "../assets/images/banner/01.png";
import banner2 from "../assets/images/banner/02.png";
import banner3 from "../assets/images/banner/03.png";
import banner4 from "../assets/images/banner/04.png";
import banner5 from "../assets/images/banner/05.png";
import bannerx1 from "../assets/images/banner/1.jpg";
import thumb from "../assets/images/banner/thumb.jpg";
import { SlUser } from "react-icons/sl";
import { IoStarOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="home-banner-part">
      <div className="banner-img">
        <img className="desktop" src={slide1} alt="Banner " />
        <img className="back__shape__1" src={banner1} alt="Shape " />
        <img className="back__shape__2" src={banner2} alt="Shape" />
        <img className="back__shape__3" src={banner3} alt="Shape" />
        <img className="back__shape__4" src={banner4} alt="Shape" />
        <img className="back__shape__5" src={banner5} alt="Shape" />
        <div className="back__hero__card">
          <div className="back__thumb">
            <a href="/">
              <img src={bannerx1} alt="" style={{ width: "100%" }} />
            </a>
            <span className="back__price">$26</span>
          </div>
          <div className="hero__card-content">
            <a href="/" className="back-category">
              Copy-writing
            </a>
            <h3 className="back-course-title">
              <a href="/courses">Learning to write as a Professional.</a>
            </h3>
            <div className="hero__card-icon d-flex align-items-center">
              <div className="hero__card-icon--1">
                <SlUser />
                <span>500k+</span>
              </div>
              <div className="hero__card-icon--2">
                <IoStarOutline />
                <span>4.9</span>
              </div>
              <div className="back__user">
                <img src={thumb} alt="user" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-5">
        <div className="banner-content">
          <div className="back-sec-title">
            <h1 className="banner-title">
              The best
              <br /> University Courses <br />
              to get you started!
            </h1>
            <p className="banner-desc">
              Thousands of students are already studying with our
              <br /> University for ages!
            </p>
          </div>
          <div className="banner-btn pt-15">
            <a href="/courses" className="back-btn">
              Discover More Course
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
