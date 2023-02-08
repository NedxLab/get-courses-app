import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter__area">
      <div className="container newsletter__width">
        <div className="row">
          <div className="col-xxl-12">
            <div className="newsletter__wrapper">
              <div className="newsletter__content">
                <h2 className="newsletter__title">
                  Newsletter to get <br /> in touch
                </h2>
              </div>
              <div className="newsletter__form">
                <form>
                  <input type="email" placeholder="Your Email" />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
