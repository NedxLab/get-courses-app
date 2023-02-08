import React from "react";
import logo from "../assets/images/logo.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    // console.log(width);
  }, [width]);

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
                <button
                  type="button"
                  id="menu-btn"
                  onClick={() => setToggle(!toggle)}
                >
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              {/* <!--================= Menu Structure =================-->  */}
              <div className="back-inner-menus">
                <ul
                  id="backmenu"
                  className={
                    width < 991
                      ? toggle
                        ? "hide-menu back-menus back-sub-shadow"
                        : "back-menus back-sub-shadow"
                      : "back-menus back-sub-shadow"
                  }
                >
                  <li>
                    {" "}
                    <a href="/">Home</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/abouts">About Us</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/courses">Courses</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/blog">Blog</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/contact">Contact</a>
                  </li>
                </ul>

                <div className="searchbar-part">
                  <ul className="back-category-menu">
                    <li>
                      <a href="/">
                        Categories <i className="arrow_carrot-down"></i>
                      </a>
                      <ul>
                        <li>
                          <a href="/">English Book</a>
                        </li>
                        <li>
                          <a href="/">Math Book</a>
                        </li>
                        <li>
                          <a href="/">Story Book</a>
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
