import React from "react";
import Marquee, { Motion, randomIntFromInterval,Box } from "react-marquee-slider";
import times from "lodash/times";
import blue from "../images/blue.png";
import video1 from "../images/Video 1.mp4";
import video2 from "../images/Video 2.mp4";
import video3 from "../images/Video 3.mp4";
import video4 from "../images/Video 4.mp4";




const Digital = () => {
  return (
    <>

    <section id="sec1">

      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className="h1digital">Digital Experiences,<br></br> Made <span className="better">Better.</span> </h1>
            <p className="pwe">
              We're a full-service creative agency made up of intentional
              creators who deliver innovative solutions,<br></br> remarkable brands, and
              highly thoughtful experiences.
            </p>


          </div>
        </div>
      </div>


      </section>


      <div className="container-fluid">
        <div className="row">
<div className="col-12"  style={{padding:"0px"}}>

<div className="mainVideo" style={{ }}>
  
  <Marquee velocity={12} minScale={0.7}  >
    {times(2, Number).map((id) => (
   
        <div
          style={{
          
          }}
        >


<video   controls={false}
          muted
          autoPlay={"autoplay"}
          
          loop  >
  <source className="video1" src={video1} type="video/mp4"/>
</video>

<video   controls={false}
          muted
          autoPlay={"autoplay"}
          
          loop  >
  <source className="video2" src={video2} type="video/mp4"/>
</video>

<video   controls={false}
          muted
          autoPlay={"autoplay"}
          
          loop  >
  <source className="video3" src={video3} type="video/mp4"/>
</video>

<video   controls={false}
          muted
          autoPlay={"autoplay"}
          
          loop  >
  <source className="video4" src={video4} type="video/mp4"/>
</video>


        </div>
    ))}
  </Marquee>
</div>

</div>
 




        

        </div>

      </div>

    </>
  );
};

export default Digital;
