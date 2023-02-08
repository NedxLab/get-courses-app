import React from "react";

const Counter = () => {
  return (
    <div className="count__area pt-5 pb-5">
      <div className="container count__width">
        <div className="row">
          <div className="col-xxl-11 col-xl-11 col-lg-11 offset-lg-1">
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                <div className="count__content">
                  <h3 className="count__content--title-1 counter">10</h3>
                  <h3 className="count__content--title-2">K</h3>
                  <span className="count__content--plus">+</span>
                  <p className="count__content--paragraph">
                    Students worldwide
                  </p>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                <div className="count__content">
                  <h3 className="count__content--title-1 counter">45</h3>
                  <h3 className="count__content--title-2">K</h3>
                  <span className="count__content--plus">+</span>
                  <p className="count__content--paragraph">
                    University worldwide
                  </p>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                <div className="count__content">
                  <h3 className="count__content--title-1 counter">28</h3>
                  <h3 className="count__content--title-2">K</h3>
                  <span className="count__content--plus">+</span>
                  <p className="count__content--paragraph">
                    Academic worldwide
                  </p>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                <div className="count__content">
                  <h3 className="count__content--title-1 counter">74</h3>
                  <h3 className="count__content--title-2">K</h3>
                  <span className="count__content--plus">+</span>
                  <p className="count__content--paragraph">Total worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
