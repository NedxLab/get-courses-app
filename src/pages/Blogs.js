import React from "react";
import breadcrumbs from "../assets/images/breadcrumbs/1.jpg";
import blog1 from "../assets/images/blog-grid/1.jpg";
import blog2 from "../assets/images/blog-grid/2.jpg";
import blog3 from "../assets/images/blog-grid/3.jpg";
import course1 from "../assets/images/related-course/1.jpg";
import course2 from "../assets/images/related-course/2.jpg";
import user from "../assets/images/course-single/user.jpg";
import user2 from "../assets/images/course-single/user2.jpg";
import user3 from "../assets/images/course-single/user3.jpg";
import course3 from "../assets/images/related-course/3.jpg";
import blog4 from "../assets/images/blog-grid/4.jpg";

const Blogs = () => {
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
                    <h1 className="breadcrumbs-title">Our Blog </h1>
                    <div className="back-nav pt-20">
                      <ul>
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>Our Stories</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="back__blog__area back-blog-page pt-5 mt-3 pb-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="blog-grid">
                    <div className="single-blog">
                      <div className="inner-blog">
                        <div className="blog-img">
                          <img src={blog1} alt="Blog " />
                        </div>
                        <div className="blog-content">
                          <ul className="top-part">
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-user"
                              >
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                              </svg>{" "}
                              Nerte Gronw
                            </li>
                            <li className="date-part">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-clock"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>{" "}
                              October 10, 2022
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-message-circle"
                              >
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                              </svg>{" "}
                              2 Comment
                            </li>
                          </ul>

                          <h3 className="blog-title">
                            <a href="/">Those other Collage Expenses.</a>
                          </h3>
                          <p className="blog-desc">
                            Our goal has always been to motivate, encourage and
                            release our fellow creatives to do thei thing, so
                            we’ve lovingly crafted surface of…
                          </p>
                          <a href="/" className="back-btn-border">
                            Read More <i className="arrow_right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="single-blog">
                      <div className="inner-blog">
                        <div className="blog-img">
                          <img src={blog2} alt="Blog " />
                        </div>
                        <div className="blog-content">
                          <ul className="top-part">
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-user"
                              >
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                              </svg>{" "}
                              Kimas Pris
                            </li>
                            <li className="date-part">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-clock"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>{" "}
                              June 10, 2022
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-message-circle"
                              >
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                              </svg>{" "}
                              3 Comments
                            </li>
                          </ul>

                          <h3 className="blog-title">
                            <a href="/">Social media Strategies.</a>
                          </h3>
                          <p className="blog-desc">
                            Our goal has always been to motivate, encourage and
                            release our fellow creatives to do thei thing, so
                            we’ve lovingly crafted surface of…
                          </p>
                          <a href="/" className="back-btn-border">
                            Read More <i className="arrow_right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <blockquote>
                      Always check out new blog posts to stay alert and updated
                      with our latest developments. <em>The Proprietor</em>
                    </blockquote>
                    <div className="single-blog">
                      <div className="inner-blog">
                        <div className="blog-img">
                          <img src={blog3} alt="Blog " />
                        </div>
                        <div className="blog-content">
                          <ul className="top-part">
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-user"
                              >
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                              </svg>{" "}
                              Eleanor Fant
                            </li>
                            <li className="date-part">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-clock"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>{" "}
                              July 20, 2022
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-message-circle"
                              >
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                              </svg>{" "}
                              8 Comments
                            </li>
                          </ul>

                          <h3 className="blog-title">
                            <a href="/">Why do i need a Health Coach?</a>
                          </h3>
                          <p className="blog-desc">
                            Our goal has always been to motivate, encourage and
                            release our fellow creatives to do thei thing, so
                            we’ve lovingly crafted surface of…
                          </p>
                          <a href="/" className="back-btn-border">
                            Read More <i className="arrow_right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <blockquote className="block__link_q">
                      Very Useful information about our university and courses,
                      please give keen Attention.
                    </blockquote>
                    <div className="single-blog">
                      <div className="inner-blog">
                        <div className="blog-img">
                          <img src={blog4} alt="Blog " />
                        </div>
                        <div className="blog-content">
                          <ul className="top-part">
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-user"
                              >
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                              </svg>{" "}
                              Sapa bien merci
                            </li>
                            <li className="date-part">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-clock"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>{" "}
                              April 12, 2022
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-message-circle"
                              >
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                              </svg>{" "}
                              3 Comments
                            </li>
                          </ul>

                          <h3 className="blog-title">
                            <a href="/">How to Enroll...</a>
                          </h3>
                          <p className="blog-desc">
                            Our goal has always been to motivate, encourage and
                            release our fellow creatives to join us and make the
                            world great...
                          </p>
                          <a href="/" className="back-btn-border">
                            Read More <i className="arrow_right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
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
                </div>
                <div className="col-lg-4">
                  <div className="back-sidebar pl-30 md-pl-0">
                    <div className="widget back-blog-search">
                      <h3 className="widget-title">Search</h3>
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
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-search"
                          >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          </svg>{" "}
                        </button>
                      </form>
                    </div>
                    <div className="widget back-recent-post">
                      <h3 className="widget-title">Recent posts</h3>
                      <ul className="recent-posts">
                        <li>
                          <a href="/">
                            <span className="post-images">
                              <img src={course1} alt="post" />
                            </span>
                          </a>
                          <div className="titles">
                            <h4>
                              <a href="/">
                                The next
                                <br /> generation leather{" "}
                              </a>
                            </h4>
                            <span>14 January, 2022</span>
                          </div>
                        </li>
                        <li>
                          <a href="/">
                            <span className="post-images">
                              <img src={course2} alt="post" />
                            </span>
                          </a>
                          <div className="titles">
                            <h4>
                              <a href="/">
                                Energize trees in <br />
                                paintings
                              </a>
                            </h4>
                            <span>12 March, 2022</span>
                          </div>
                        </li>
                        <li>
                          <a href="/">
                            <span className="post-images">
                              <img src={course3} alt="post" />
                            </span>
                          </a>
                          <div className="titles">
                            <h4>
                              <a href="/">
                                Pocket Sized <br /> Notebooks hold
                              </a>
                            </h4>
                            <span>16 April, 2022</span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="widget">
                      <h3 className="widget-title">Categories</h3>
                      <ul className="recent-category">
                        <li>
                          {" "}
                          <a href="/">
                            Business{" "}
                            <span className="category-count">4 posts</span>
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="/">
                            Case study{" "}
                            <span className="category-count">5 posts</span>
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="/">
                            Insights{" "}
                            <span className="category-count">8 posts</span>
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="/">
                            World{" "}
                            <span className="category-count">3 posts</span>
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="/">
                            Tax Solutions{" "}
                            <span className="category-count">7 posts</span>
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="/">
                            Creative{" "}
                            <span className="category-count">6 posts</span>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="widget back-recent-comments">
                      <h3 className="widget-title">Comments</h3>
                      <ul className="recent-comments">
                        <li>
                          <span className="post-images">
                            <img src={user} alt="post" />
                          </span>
                          <div className="titles">
                            <h4>John Doe</h4>
                            <span>14 January, 2022</span>
                            <p>
                              Having no content in post should have adverse..
                            </p>
                          </div>
                        </li>
                        <li>
                          <span className="post-images">
                            <img src={user2} alt="post" />
                          </span>
                          <div className="titles">
                            <h4>Chauffina Carr</h4>
                            <span>10 April, 2022</span>
                            <p>We use these tests all time! Killer stuff!</p>
                          </div>
                        </li>
                        <li>
                          <span className="post-images">
                            <img src={user3} alt="post" />
                          </span>
                          <div className="titles">
                            <h4>Jim Séchen</h4>
                            <span>16 July, 2022</span>
                            <p>Thanks for all the comments, everyone!</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="widget widget-tags">
                      <h3 className="widget-title">Tags</h3>
                      <ul className="tags">
                        <li>
                          <a href="/">Education</a>
                        </li>
                        <li>
                          <a href="/">SEO Marketing</a>
                        </li>
                        <li>
                          <a href="/">Business</a>
                        </li>
                        <li>
                          <a href="/">Solutions</a>
                        </li>
                        <li>
                          <a href="/">UX</a>
                        </li>
                        <li>
                          <a href="/">Case Study</a>
                        </li>
                        <li>
                          <a href="/">Creative</a>
                        </li>
                        <li>
                          <a href="/">Insights</a>
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

export default Blogs;
