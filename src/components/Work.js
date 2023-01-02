import React from "react";
import orange from "../images/orange.png";
import lime from "../images/lime.png";
import red from "../images/red.png";
import on from "../images/on.png";
import mobile from "../images/mobile.png";
import lemon from "../images/lemon.png";


const Work = () => {
  return (
    <>
      <section id="sec4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="h1work">
                OUR<br></br> WORK
              </h1>
            </div>

            <div className="col-lg-6">
              <h1 className="creativeh1">Creative-work for Creative brands</h1>
            </div>

<div className="col-lg-6">
 
 <div id="unique">

 <img className="width"  src={orange}/>

 <div className="imageoverlay1" >

      <div className="imagetitle1">Orange -
      <span className="contentimg1"> A fitness and Wellness brand</span>
      </div>

    </div>

 </div>

  

</div>


<div className="col-lg-6">
  
  <div id="unique2">
  <img className="width"   src={lime}/>

    <div className="imageoverlay" >

      <div className="imagetitle">LEMON -
      <span className="contentimg"> A fitness and Wellness brand</span>
      </div>

    </div>
    </div>

</div>


<div className="col-lg-6">
    <img className="width" id="imggape" src={red}/>

</div>

<div className="col-lg-6">

  <div id="imggape" >
  <img className="width" src={on}/>

  <div className="imageoverlay" >

<div className="imagetitle">LEMON -
<span className="contentimg"> A fitness and Wellness brand</span>
</div>

</div>

  </div>


</div>


<div className="col-lg-6">
    <img className="width" id="unique3" src={mobile}/>

</div>

<div className="col-lg-6">
    <img className="width" id="imggape" src={lemon}/>

</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
