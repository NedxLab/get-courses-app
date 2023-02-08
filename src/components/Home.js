import React from "react";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Blog from "./Blog";
import CampusInfo from "./CampusInfo";
import Counter from "./Counter";
import Courses from "./Courses";
import Events from "./Events";
import Newsletter from "./Newsletter";
import PopularTopics from "./PopularTopics";
import Programs from "./Programs";

const Home = () => {
  return (
    <>
      {/* <div id="back__preloader">
        <div id="back__circle_loader"></div>
        <div className="back__loader_logo">
          <img src="./assets/images/preload.png" alt="Preload" />
        </div>
      </div> */}

      <div className="back-wrapper">
        <div className="back-wrapper-inner">
          <Banner />
          <PopularTopics />
          <AboutUs />
          <Courses />
          <Events />
          <Programs />
          <CampusInfo />
          <Counter />
          <Blog />
        </div>
      </div>
      <Newsletter />

      {/* <!--================= Scroll to Top Start =================--> */}
      <div id="backscrollUp">
        <span aria-hidden="true" className="arrow_carrot-up"></span>
      </div>
    </>
  );
};

export default Home;
