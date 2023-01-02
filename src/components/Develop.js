import React from "react";
import brand from "../images/branding.png";
import website from "../images/website.png";
import marketing from "../images/marketing.png";

const Develop = () => {
  return (
    <>
      <section id="services">
        <section id="sec3">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="ourser">OUR SERVICES</h1>
                <h1 className="h1develop">
                  Develop results-driven products for brands, startups, and
                  enterprises with a leading creative agency.
                </h1>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-4">

                <div className="hover">
                  <img className="brandinvert" style={{ width: "100%" }} src={brand} />
                </div>

              </div>

              <div className="col-md-4">
                <div className="hover">
                  <img className="brandinvert" style={{ width: "100%" }} src={website} />
                </div>
              </div>

              <div className="col-md-4">
                <div className="hover">
                  <img  className="brandinvert"style={{ width: "100%" }} src={marketing} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Develop;
