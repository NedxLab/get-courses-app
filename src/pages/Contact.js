import React from "react";
import breadcrumbs from "../assets/images/breadcrumbs/1.jpg";
import map from "../assets/images/contact/1.jpg";
import contact2 from "../assets/images/contact/2.png";
import contact3 from "../assets/images/contact/3.png";
import contact4 from "../assets/images/contact/4.png";

const Contact = () => {
  return (
    <>
      <div className="back-wrapper">
        <div className="back-wrapper-inner">
          {/* <!--================= Back Breadcrumbs Section Start Here =================--> */}
          <div className="back-breadcrumbs">
            <div className="breadcrumbs-wrap">
              <img className="desktop" src={breadcrumbs} alt="Breadcrumbs" />
              <img className="mobile" src={breadcrumbs} alt="Breadcrumbs" />
              <div className="breadcrumbs-inner">
                <div className="container">
                  <div className="breadcrumbs-text">
                    <h1 className="breadcrumbs-title">Contact Us</h1>
                    <div className="back-nav">
                      <ul>
                        <li>
                          <a href="index.html">Home</a>
                        </li>
                        <li>Contact Us</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--================= Back Breadcrumbs Section End Here =================--> */}

          <div id="back-contact" className="back-contact-page pt-6 mt-5 pb-7">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {/* <!--================= Form Section Start Here =================--> */}
                  <div className="back-blog-form">
                    <div className="back-title-sec">
                      <h2>
                        Let’s work <br /> and learn together.
                      </h2>
                    </div>
                    <div className="row pt-5">
                      <div className="col-lg-3 back-address">
                        <strong>Call Us</strong>
                        <br />
                        <a href="tel:(404)888123456"> (404) 888 123 456 </a>
                        <br />
                        <a href="tel:(204)888234674"> (204) 888 234 674 </a>
                        <br />

                        <strong className="pt-5">Email Address</strong>
                        <br />
                        <a href="mailto:info@gmail.com">info@gmail.com</a>
                      </div>
                      <div className="col-lg-9">
                        <div id="blog-form" className="blog-form">
                          <div id="form-messages"></div>
                          <form id="contact-form">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="back-input">
                                  <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                  />
                                </div>
                              </div>

                              <div className="col-lg-6 pdl-5">
                                <div className="back-input">
                                  <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                  />
                                </div>
                              </div>

                              <div className="col-lg-6">
                                <div className="back-input">
                                  <input
                                    id="subject"
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                  />
                                </div>
                              </div>

                              <div className="col-lg-6 pdl-5">
                                <div className="back-input">
                                  <input
                                    id="phone"
                                    type="text"
                                    name="phone"
                                    placeholder="Phone"
                                  />
                                </div>
                              </div>

                              <div className="col-lg-12">
                                <div className="back-textarea">
                                  <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Message"
                                  ></textarea>
                                </div>
                              </div>

                              <div className="col-lg-12">
                                <button type="submit" className="back-btn">
                                  Send your Message
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--================= Form Section End Here =================--> */}

                  {/* <!--=================  Map Section Start Here =================--> */}
                  <div className="back-contacts pt-5 ">
                    <div className="back-image-maping">
                      <img src={map} alt="Map" />
                      <div className="back-ripple back-tooltip1">
                        <div className="box">
                          <span>New York</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--================= Map Section End Here =================--> */}

                  {/* <!--================= Address Section Start Here =================--> */}
                  <div className="back-address-area pt-5 mt-5">
                    <div className="container">
                      <div className="back__title__section text-center">
                        <h6 className="back__subtitle">Our offices</h6>
                        <h2 className="back__tittle">
                          {" "}
                          We’re Global and Growing{" "}
                        </h2>
                      </div>
                      <img
                        className="back___shape"
                        src="assets/images/contact/5.png"
                        alt="shape"
                      />
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="inner-locate">
                            <img src={contact2} alt="icon" />
                            <h4>United States</h4>
                            <p>Washington Base, Trump road, California.</p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="inner-locate">
                            <em>Main Office</em>
                            <img className="pt-18" src={contact3} alt="icon" />
                            <h4>Australia</h4>
                            <p>Adolf Hitler Road, Germany.</p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="inner-locate">
                            <img src={contact4} alt="icon" />
                            <h4>United Kingdom</h4>
                            <p>55/123 Beside Chief Palace, Sydney NSW 2000.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--================= Address Section End Here =================--> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
