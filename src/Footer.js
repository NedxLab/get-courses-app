import React from "react";
import instagram1 from "./assets/images/instagram/1.jpg";
import instagram2 from "./assets/images/instagram/2.jpg";
import instagram3 from "./assets/images/instagram/3.jpg";
import instagram4 from "./assets/images/instagram/4.jpg";
import instagram5 from "./assets/images/instagram/5.jpg";
import instagram6 from "./assets/images/instagram/6.jpg";
import logo from "./assets/images/logo.png";
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="back-footer" className="back-footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 md-mb-30">
              <div className="footer-widget footer-widget-1">
                <div className="footer-logo white">
                  <a href="index.html" className="logo-text">
                    {" "}
                    <img src={logo} alt="logo" />
                  </a>
                </div>
                <h5 className="footer-subtitle">
                  We have lots of courses and programs from the main market
                  experts.
                </h5>
                <h6 className="back-follow-us">Follow us</h6>
                <ul className="social-links">
                  <li>
                    <a href="/">
                      <span aria-hidden="true" className="social_facebook">
                        <FaFacebook />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span aria-hidden="true" className="social_twitter">
                        <FaTwitter />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span aria-hidden="true" className="social_linkedin">
                        <FaLinkedinIn />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 md-mb-30">
              <div className="footer-widget footer-widget-2">
                <h3 className="footer-title">About Us</h3>
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="coureses-grid.html">Courses</a>
                    </li>
                    <li>
                      <a href="/">Events</a>
                    </li>
                    <li>
                      <a href="/">Career</a>
                    </li>
                    <li>
                      <a href="profile.html">Become a Teacher</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 md-mb-30">
              <div className="footer-widget footer-widget-2">
                <h3 className="footer-title">Quick links</h3>
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="/">Browse Library</a>
                    </li>
                    <li>
                      <a href="/">Library</a>
                    </li>
                    <li>
                      <a href="/">Partners</a>
                    </li>
                    <li>
                      <a href="blog.html">News & Blog</a>
                    </li>
                    <li>
                      <a href="/">FAQ</a>
                    </li>
                    <li>
                      <a href="/">Tutorials</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget footer-widget-3">
                <h3 className="footer-title">Instagram</h3>
                <ul className="back-instagram">
                  <li>
                    <a href="/">
                      <img src={instagram1} alt="Instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={instagram2} alt="Instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={instagram3} alt="Instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={instagram4} alt="Instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={instagram5} alt="Instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={instagram6} alt="Instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <div className="back-copy-left">
            Copyright &#169; {new Date().getFullYear()} All Rights Reserved.
            With ❤️ from <a href="mailTo:odoc047@gmail.com">Nedxlab</a>
          </div>
          <div className="back-copy-right">
            <ul>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Terms And Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
