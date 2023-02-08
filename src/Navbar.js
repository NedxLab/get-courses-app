import React from "react";
import logo from "./assets/images/logo.png";

const Navbar = () => {
  return (
    // <!--================= Header Section Start Here =================--> */}

    <header id="back-header" className="back-header">
      <div className="menu-part">
        <div className="container">
          {/* <!--================= Back Menu Start Here =================--> */}
          <div className="back-main-menu">
            <nav>
              {/* <!--================= Menu Toggle btn =================--> */}
              <div className="menu-toggle">
                <div className="logo">
                  <a href="index.html" className="logo-text">
                    {" "}
                    <img
                      src={logo}
                      alt="logo"
                      style={{ width: "108px" }}
                    />{" "}
                  </a>
                </div>
                <button type="button" id="menu-btn">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              {/* <!--================= Menu Structure =================-->  */}
              <div className="back-inner-menus">
                <ul id="backmenu" className="back-menus back-sub-shadow">
                  <li>
                    {" "}
                    <a href="#">Home</a>
                    <ul>
                      <li>
                        {" "}
                        <a href="index.html">Home One</a>
                      </li>
                      <li>
                        {" "}
                        <a href="index-two.html">Home Two</a>
                      </li>
                      <li>
                        {" "}
                        <a href="index-three.html">Home Three</a>
                      </li>
                      <li>
                        {" "}
                        <a href="index-four.html">Home Four</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Pages</a>
                    <ul>
                      <li>
                        {" "}
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        {" "}
                        <a href="instructor.html">Instructor</a>
                      </li>
                      <li>
                        {" "}
                        <a href="profile.html">Profile</a>
                      </li>
                      <li>
                        {" "}
                        <a href="login.html">Sign In</a>
                      </li>
                      <li>
                        {" "}
                        <a href="signup.html">Sign Up</a>
                      </li>
                      <li>
                        {" "}
                        <a href="404.html">Error 404</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    <a href="coureses-grid.html">Courses</a>
                    <ul>
                      <li>
                        <a href="coureses-grid.html">Courses</a>
                        <ul>
                          <li>
                            <a href="coureses-grid.html">Classic</a>
                          </li>
                          <li>
                            <a href="coureses-left-sidebar.html">
                              Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="coureses-right-sidebar.html">
                              Right Sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="coureses-list.html">Courses List</a>
                      </li>
                      <li>
                        <a href="coureses-single.html">Courses Single</a>
                        <ul>
                          <li>
                            <a href="coureses-single.html">Classic</a>
                          </li>
                          <li>
                            <a href="coureses-single-left.html">Left Sidebar</a>
                          </li>
                          <li>
                            <a href="coureses-single-right.html">
                              Right Sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    <a href="blog.html">Blog</a>
                    <ul>
                      <li>
                        <a href="blog.html">Blog</a>
                        <ul>
                          <li>
                            <a href="blog.html">Classic</a>
                          </li>
                          <li>
                            <a href="blog-left-sidebar.html">Left Sidebar</a>
                          </li>
                          <li>
                            <a href="blog-right-sidebar.html">Right Sidebar</a>
                          </li>
                          <li>
                            <a href="blog-fullwidth.html">Full Width</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Single</a>
                        <ul>
                          <li>
                            <a href="blog-details.html">Classic</a>
                          </li>
                          <li>
                            <a href="blog-details-left.html">Left Sidebar</a>
                          </li>
                          <li>
                            <a href="blog-details-right.html">Right Sidebar</a>
                          </li>
                          <li>
                            <a href="blog-details-full.html">Full Width</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>

                <div className="searchbar-part">
                  <ul className="back-category-menu">
                    <li>
                      <a href="#">
                        Categories <i className="arrow_carrot-down"></i>
                      </a>
                      <ul>
                        <li>
                          <a href="#">English Book</a>
                        </li>
                        <li>
                          <a href="#">Math Book</a>
                        </li>
                        <li>
                          <a href="#">Story Book</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <form className="search-form">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Search Course"
                    />
                    <button type="submit" className="form-button">
                      submit
                    </button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
          {/* <!--=================  Back Menu End Here  =================--> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
