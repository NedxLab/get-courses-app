import React from "react";
import breadcrumbs from "../assets/images/breadcrumbs/1.jpg";
import course1 from "../assets/images/course/1.jpg";
import course2 from "../assets/images/course/2.jpg";
import course3 from "../assets/images/course/3.jpg";
import course4 from "../assets/images/course/4.jpg";
import course5 from "../assets/images/course/5.jpg";
import course6 from "../assets/images/course/6.jpg";
import small1 from "../assets/images/course/small-image/1.png";
import small2 from "../assets/images/course/small-image/2.png";
import small3 from "../assets/images/course/small-image/3.png";
import small4 from "../assets/images/course/small-image/4.png";
import small5 from "../assets/images/course/small-image/5.png";
import related from "../assets/images/related-course/1.jpg";
import related2 from "../assets/images/related-course/2.jpg";
import related3 from "../assets/images/related-course/3.jpg";
import { IoStarOutline } from "react-icons/io5";

const Courses = () => {
  var names = ["cate-1", "cate-2", "cate-3", "cate-4", "cate-5", "cate-6"];
  var random = Math.floor(Math.random() * names.length);
  var randomName = names[random];

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
    <>
      <div className="back-wrapper">
        <div className="back-wrapper-inner">
          <div className="back-breadcrumbs">
            <div className="breadcrumbs-wrap">
              <img className="desktop" src={breadcrumbs} alt="Breadcrumbs" />
              <img className="mobile" src={breadcrumbs} alt="Breadcrumbs" />
              <div className="breadcrumbs-inner">
                <div className="container">
                  <div className="breadcrumbs-text">
                    <h1 className="breadcrumbs-title">Courses</h1>
                    <div className="back-nav">
                      <ul>
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>Courses</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="back__course__area back__course__page_grid pt-120 pb-115">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="row align-items-center back-vertical-middle shorting__course mb-50">
                    <div className="col-md-6">
                      <div className="all__icons">
                        <div className="grid__icons">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-grid"
                          >
                            <rect x="3" y="3" width="7" height="7"></rect>
                            <rect x="14" y="3" width="7" height="7"></rect>
                            <rect x="14" y="14" width="7" height="7"></rect>
                            <rect x="3" y="14" width="7" height="7"></rect>
                          </svg>
                        </div>
                        <div className="list__icons">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-list"
                          >
                            <line x1="8" y1="6" x2="21" y2="6"></line>
                            <line x1="8" y1="12" x2="21" y2="12"></line>
                            <line x1="8" y1="18" x2="21" y2="18"></line>
                            <line x1="3" y1="6" x2="3.01" y2="6"></line>
                            <line x1="3" y1="12" x2="3.01" y2="12"></line>
                            <line x1="3" y1="18" x2="3.01" y2="18"></line>
                          </svg>
                        </div>
                        <div className="result-count">Showing 1 - 3 of 74</div>
                      </div>
                    </div>
                    <div className="col-md-6 text-right">
                      <select className="from-control">
                        <option>Default sorting</option>
                        <option>Sort by popularity</option>
                        <option>Sort by average rating</option>
                        <option>Sort by lates</option>
                        <option>Sort by price: low to high</option>
                        <option>Sort by price: high to low</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    {featuredCourses.map((course, i) => (
                      <div className="col-lg-6" key={i}>
                        <div className="course__item mb-30">
                          <div className="course__thumb">
                            <a href="/">
                              <img src={course.image} alt="" />
                            </a>
                          </div>
                          <div className="course__inner">
                            <span
                              className={`${randomName} back-category cate-1`}
                            >
                              {course.tag}
                            </span>
                            <h3 className="back-course-title">
                              <a href="/">{course.title}</a>
                            </h3>
                            <div className="course__card-icon d-flex align-items-center">
                              <div className="course__card-icon--1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-user"
                                >
                                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                  <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                <span>{course.number}</span>
                              </div>
                              <div className="course__card-icon--2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-star"
                                >
                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
                                <span>{course.rating}</span>
                              </div>
                              <div className="back__user">
                                {course.price}
                                <img src={course.tutor} alt="user" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <ul className="back-pagination">
                    <li>
                      <a href="/">1</a>
                    </li>
                    <li>
                      <a href="/">2</a>
                    </li>
                    <li>
                      <a href="/">3</a>
                    </li>
                    <li className="back-next">
                      <a href="/">
                        Next<i className="arrow_carrot-right"></i>
                      </a>
                    </li>
                  </ul>
                  {/* <!--================= Pagination Section End Here =================--> */}
                </div>
                <div className="col-lg-4">
                  <div className="back-sidebar pl-30 md-pl-0 md-mt-60">
                    <div className="widget back-search">
                      <form>
                        <input
                          type="text"
                          name="input"
                          placeholder="Search..."
                        />
                        <button>
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-search"
                          >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          </svg>{" "}
                        </button>
                      </form>
                    </div>
                    <div className="widget back-category">
                      <h3 className="widget-title">Categories</h3>
                      <ul className="recent-category">
                        <li>
                          <input
                            type="checkbox"
                            id="fruit1"
                            name="fruit-1"
                            value="Featured"
                          />
                          <label htmlFor="fruit1">
                            Featured courses{" "}
                            <span className="category-count">(8)</span>
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="fruit2"
                            name="fruit-2"
                            value="Education"
                          />
                          <label htmlFor="fruit2">
                            Education{" "}
                            <span className="category-count">(5)</span>
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="fruit3"
                            name="fruit-3"
                            value="Business"
                          />
                          <label htmlFor="fruit3">
                            Business <span className="category-count">(3)</span>
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="fruit4"
                            name="fruit-4"
                            value="Management"
                          />
                          <label htmlFor="fruit4">
                            IT Management{" "}
                            <span className="category-count">(7)</span>
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="fruit5"
                            name="fruit-5"
                            value="Development"
                          />
                          <label htmlFor="fruit5">
                            Development{" "}
                            <span className="category-count">(6)</span>
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="fruit6"
                            name="fruit-6"
                            value="Creative"
                          />
                          <label htmlFor="fruit6">
                            Creative <span className="category-count">(2)</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className="widget back-category">
                      <h3 className="widget-title">Price Filter</h3>
                      <ul className="recent-category">
                        <li>
                          <input
                            type="checkbox"
                            id="fruit7"
                            name="fruit-7"
                            value="all"
                          />
                          <label htmlFor="fruit7">
                            All <span className="category-count">(209)</span>
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="fruit8"
                            name="fruit-8"
                            value="Free Courses"
                          />
                          <label htmlFor="fruit8">
                            Free Courses{" "}
                            <span className="category-count">(36)</span>
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="fruit9"
                            name="fruit-9"
                            value="Premium Courses"
                          />
                          <label htmlFor="fruit9">
                            Premium Courses{" "}
                            <span className="category-count">(185)</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className="widget back-category">
                      <h3 className="widget-title">Skill level</h3>
                      <ul className="recent-category">
                        <li>
                          <input
                            type="checkbox"
                            id="fruit10"
                            name="fruit-10"
                            value="All Levels"
                          />
                          <label htmlFor="fruit10">
                            All Levels{" "}
                            <span className="category-count">(50)</span>
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="fruit11"
                            name="fruit-11"
                            value="Beginner"
                          />
                          <label htmlFor="fruit11">
                            Beginner{" "}
                            <span className="category-count">(32)</span>
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="fruit12"
                            name="fruit-12"
                            value="Intermediate"
                          />
                          <label htmlFor="fruit12">
                            Intermediate
                            <span className="category-count">(17)</span>
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="fruit13"
                            name="fruit-13"
                            value="Expert"
                          />
                          <label htmlFor="fruit13">
                            Expert<span className="category-count">(2)</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className="widget back-post">
                      <h3 className="widget-title">Related courses</h3>
                      <ul className="related-courses">
                        <li>
                          <a href="/">
                            <span className="post-images">
                              <img src={related} alt="post" />
                            </span>
                          </a>
                          <div className="titles">
                            <div className="back-ratings">
                              <i className="icon_star">
                                <IoStarOutline />
                              </i>
                              <i className="icon_star">
                                <IoStarOutline />
                              </i>
                              <i className="icon_star">
                                <IoStarOutline />
                              </i>
                              <i className="icon_star">
                                <IoStarOutline />
                              </i>
                            </div>
                            <h4>
                              <a href="/">Expand business…</a>
                            </h4>
                            <span>$54.00</span>
                          </div>
                        </li>
                        <li>
                          <a href="/">
                            <span className="post-images">
                              <img src={related2} alt="post" />
                            </span>
                          </a>

                          <div className="titles">
                            <div className="back-ratings">
                              <i className="icon_star">
                                <IoStarOutline />
                              </i>
                              <i className="icon_star">
                                <IoStarOutline />
                              </i>
                              <i className="icon_star">
                                <IoStarOutline />
                              </i>
                            </div>
                            <h4>
                              <a href="/">Python and JS…</a>
                            </h4>
                            <span>$75.00</span>
                          </div>
                        </li>
                        <li>
                          <a href="/">
                            <span className="post-images">
                              <img src={related3} alt="post" />
                            </span>
                          </a>
                          <div className="titles">
                            <div className="back-ratings">
                              <i className="icon_star">
                                <IoStarOutline />
                              </i>
                              <i className="icon_star">
                                <IoStarOutline />
                              </i>
                              <i className="icon_star">
                                <IoStarOutline />
                              </i>
                              <i className="icon_star">
                                <IoStarOutline />
                              </i>
                              <i className="icon_star">
                                <IoStarOutline />
                              </i>
                            </div>
                            <h4>
                              <a href="/">The evolution of…</a>
                            </h4>
                            <span>Free</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
