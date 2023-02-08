import React from "react";
import bannner from "./assets/images/event/bannner.jpg";

const Events = () => {
  return (
    <div className="event__area p-relative pb-100 pt-120">
      <div className="container event__width">
        <div className="row">
          <div className="col-lg-8 pr-80">
            <div className="event__section-wrapper">
              <div className="event__content-wrapper mb-45">
                <h2 className="event__title">
                  Join our <br /> Upcoming Events
                </h2>
                <p className="event__paragraph">
                  Learning is a life-long journey that in fact we never find the
                  terminate stop.{" "}
                </p>
              </div>
              <div className="event__card-wrapper">
                <div className="event__card">
                  <div className="event__card--date-area">
                    <span className="event__card--date-area-1">29</span>
                    <span className="event__card--date-area-2">Jun, 2022</span>
                  </div>
                  <div className="event__card--icon-area">
                    <span className="event__card--icon-area-1">
                      <i className="icon" data-feather="clock"></i>
                      11:50 am to 05:50 pm
                    </span>
                    <span className="event__card--icon-area-2">
                      <i className="icon" data-feather="map-pin"></i> New York
                    </span>
                    <p className="event__card--icon-area-3">
                      Global Conference for reducing.
                    </p>
                  </div>
                  <div className="event__card--btn">
                    <a href="contact.html" className="w-btn w-btn-8">
                      Tickets
                    </a>
                  </div>
                </div>
              </div>
              <div className="event__card-wrapper">
                <div className="event__card">
                  <div className="event__card--date-area">
                    <span className="event__card--date-area-1">12</span>
                    <span className="event__card--date-area-2">Aug, 2022</span>
                  </div>
                  <div className="event__card--icon-area">
                    <span className="event__card--icon-area-1">
                      <i className="icon" data-feather="clock"></i>
                      9:30 am to 11:30 pm
                    </span>
                    <span className="event__card--icon-area-2">
                      <i className="icon" data-feather="map-pin"></i> New York
                    </span>
                    <p className="event__card--icon-area-3">
                      Street Performance: Call for Art.
                    </p>
                  </div>
                  <div className="event__card--btn">
                    <a href="contact.html" className="w-btn w-btn-8">
                      Tickets
                    </a>
                  </div>
                </div>
              </div>
              <div className="event__card-wrapper">
                <div className="event__card">
                  <div className="event__card--date-area">
                    <span className="event__card--date-area-1">24</span>
                    <span className="event__card--date-area-2">May, 2022</span>
                  </div>
                  <div className="event__card--icon-area">
                    <span className="event__card--icon-area-1">
                      <i className="icon" data-feather="clock"></i>
                      4:50 am to 07:50 pm
                    </span>
                    <span className="event__card--icon-area-2">
                      <i className="icon" data-feather="map-pin"></i> New York
                    </span>
                    <p className="event__card--icon-area-3">
                      Global Conference for reducing.
                    </p>
                  </div>
                  <div className="event__card--btn">
                    <a href="contact.html" className="w-btn w-btn-8">
                      Tickets
                    </a>
                  </div>
                </div>
              </div>
              <p className="event__small-paragraph">
                Lorem ipsum dolor sit amet, consectetur adall.
              </p>
              <a className="event__small-paragraph--link" href="/">
                {" "}
                View all Event{" "}
                <i className="arrow_right event__small-paragraph--link-icon"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="event__video-btn text-end">
              <img
                className="m-img image-background"
                src={bannner}
                alt="Video "
              />
              <div className="event__video-btn--play">
                <a
                  href="../../watch.html?v=e5Hc2B50Z7c"
                  className="event__video-btn--play-btn popup-videos"
                >
                  <i className="arrow_triangle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
