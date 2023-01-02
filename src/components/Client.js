import React from "react";
import one from "../images/one.png";
import two from "../images/two.png"
import syper from"../images/Sypher.png";
import icon from "../images/icon.png"


const Client = () => {
  return (
    <>
      <section id="sec5">

        
        <div className="container">
          <h1 className="clienth1">Our Client</h1>
          <div className="row gap">

            

          
            <div className="col-lg-3">
              <img className="mob992" src={one} />
            </div>

            <div className="col-lg-3">
              <img className="mob992" src={two} />
            </div>

            <div className="col-lg-3">
              <img className="mob992" src={syper} />
            </div>

            <div className="col-lg-3">
              <img className="mob992" src={two} />
            </div>


            <div className="col-lg-3 gap1">
              <img className="mob9922" src={two} />
            </div>

            <div className="col-lg-3 gap1">
              <img className="mob9922" src={one} />
            </div>

            <div className="col-lg-3 gap1">
              <img className="mob9922" src={two} />
            </div>

            <div className="col-lg-3 gap1">
              <img className="mob9922" src={syper} />
            </div>


    
            

          </div>
        </div>
      </section>
    </>
  );
};

export default Client;
