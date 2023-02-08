import React from "react";
import shape1 from "./assets/images/course/shape/1.png";
import shape2 from "./assets/images/course/shape/02.png";
import course1 from "./assets/images/course/1.jpg";
import course2 from "./assets/images/course/2.jpg";
import course3 from "./assets/images/course/3.jpg";
import course4 from "./assets/images/course/4.jpg";
import course5 from "./assets/images/course/5.jpg";
import course6 from "./assets/images/course/6.jpg";
import small1 from "./assets/images/course/small-image/1.png";
import small2 from "./assets/images/course/small-image/2.png";
import small3 from "./assets/images/course/small-image/3.png";
import small4 from "./assets/images/course/small-image/4.png";
import small5 from "./assets/images/course/small-image/5.png";
import { SlUser } from "react-icons/sl";
import { IoStarOutline } from "react-icons/io5";

const Courses = () => {
  const featuredCourses = [
    {
      image: course1,
      tag: "UX Design",
      title: "Become a product Manager learn the skills & job.",
      number: "500k+",
      rating: "4.8",
      price: "$76.00",
      tutor: small1,
    },
    {
      image: course2,
      tag: "Web Development",
      title: "Open Programming Courses for Everyone Python.",
      number: "500k+",
      rating: "4.6",
      price: "$106.00",
      tutor: small2,
    },
    {
      image: course3,
      tag: "Copy-writing",
      title: "Learning to write as a Professional.",
      number: "500k+",
      rating: "4.8",
      price: "$86.00",
      tutor: small3,
    },
    {
      image: course6,
      tag: "Finance",
      title: "Personal Financial Literacy and Security Thinking.",
      number: "500k+",
      rating: "4.8",
      price: "$289.00",
      tutor: small5,
    },
    {
      image: course4,
      tag: "Communication",
      title: "Academic Listening and Note taking.",
      number: "500k+",
      rating: "4.9",
      price: "$176.00",
      tutor: small4,
    },
    {
      image: course5,
      tag: "Queries",
      title: "Master Query in a Short Period of Time.",
      number: "500k+",
      rating: "4.5",
      price: "$88.00",
      tutor: small1,
    },
  ];
  return (
    <div className="back__course__area pt-2 pb-5">
      <img className="back__shape__1" src={shape1} alt="shape" />
      <img className="back__shape__2" src={shape2} alt="shape" />
      <div className="container">
        <div className="back__title__section text-center">
          <h6 className="back__subtitle">Featured Courses</h6>
          <h2 className="back__tittle"> Choose Unlimited Options </h2>
        </div>
        <div className="row">
          {featuredCourses.map((courses, i) => (
            <div className="col-lg-4" key={i}>
              <div className="course__item mb-30">
                <div className="course__thumb">
                  <a href="coureses-single.html">
                    <img src={courses.image} alt="course" />
                  </a>
                </div>
                <div className="course__inner">
                  <span className="back-category cate-1">{courses.tag}</span>
                  <h3 className="back-course-title">
                    <a href="coureses-single.html">{courses.title}</a>
                  </h3>
                  <div className="course__card-icon d-flex align-items-center">
                    <div className="course__card-icon--1">
                      <SlUser />
                      <span>{courses.number}</span>
                    </div>
                    <div className="course__card-icon--2">
                      <IoStarOutline />
                      <span>{courses.rating}</span>
                    </div>
                    <div className="back__user">
                      {courses.price}
                      <img src={courses.tutor} alt="user" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
