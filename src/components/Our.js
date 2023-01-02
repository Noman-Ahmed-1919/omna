import { useEffect } from "react";
import React, {useState} from "react";

import $ from 'jquery'
import dappo from "../images/dappo.webp";
import nft from "../images/nft.webp";
import frag from "../images/frag.webp";
import icon from "../images/icon.png"


const Our = () => {



  const [popup, setpop] = useState(false);
  const handleClickOpen = ()=>{
setpop(!popup)
  }

  const closepopup =()=>{
      setpop(false);
  }





  useEffect(() => {
    const scrollingDiv = document.getElementById("scrollContainer"); 
    const sec1 = document.getElementById("visible1"); 
    const sec2 = document.getElementById("visible2"); 
    const sec3 = document.getElementById("visible3"); 
    const showImg = document.getElementById("showImg1"); 
    const img1 = document.getElementById("img1");
    console.log(sec1);

    window.onscroll = function(e) {

      if (isInViewport(sec1)) {
        img1.src = dappo;
        console.log("img1");
      }
      else if (isInViewport1(sec2)) {
        img1.src = nft;

      }
      else if (isInViewport1(sec3)) {
        img1.src = frag;
 
      }
      console.log(showImg);
      console.log(isInViewport(showImg));
      if(!isInViewport(sec1) && !isInViewport1(sec2) && !isInViewport1(sec3)  ){
          img1.style.display="none"
        }else{
          img1.style.display="block"
      }
     

    }

   
  }, []);


function isInViewport(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
function isInViewport1(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop 

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}



  return (
    <>


    <section id="sec2">

  
      <div className="container">
          <div className="">
            
            <h4 className="h1our">
              Our creative agency designs and develops bespoke websites with 
           <span className="three"> three things in mind;</span>   
            </h4>

          </div>
          <div id="showImg1">
          <div className="row" >
  
          <div className="col-md-4" id="visible1">

            <h1 className="strath1" id="mobile1">Strategy</h1>
            <p className="wep" >We help brands & businesses gain a competitive advantage in the connected world.</p>
            <div className="mobcen">
            <button className="btn1" onClick={handleClickOpen} >Start Your Project</button>
            </div>
          </div>

          <div className="col-md-8">

          <img  className="dappoimage" src={dappo} id="img1" />
          </div>

          <div className="col-md-4 dappogap" id="visible2">

          <h1 className="strath1" id="minimob">Diversity</h1>
            <p className="wep">Designing tailor made solutions that resonate with your customers and drives them to act.</p>

          <div className="mobcen">
          <button className="btn2" onClick={handleClickOpen} >Start Your Project</button>
            </div> 
          
          
          </div>

            <div className="col-md-8 dappogap">

            {/* <img style={{width:"100%"}} src={nft}/> */}
            

            </div>

            <div className="col-md-4 dappogap" id="visible3">

              <h1 className="strath1">Reflective</h1>
              <p className="wep">Designing tailor made solutions that 
            resonate with your customers and drives 
            them to act.</p>

            <div className="mobcen">
            <button className="btn1" onClick={handleClickOpen} >Start Your Project</button>
            </div>

            </div>

            <div className="col-md-8 dappogap">

            {/* <img style={{width:"100%"}} id="frag" src={frag}/> */}
            </div>

          </div>
          </div>
      </div>















{/* 
<div className="container">
  <div className="row">
    <div className="col-12">

    <h4 className="h1our">
              Our creative agency designs and develops bespoke websites with 
           <span className="three"> three things in mind;</span>   
            </h4>

    </div>

  </div>

</div>





<div class="container">



<div class="middle" id="scrollContainer">
  <div class="in-middle">
    <div class="in-in-middle" id="1">

    <h1 className="strath1" id="mobile1">Strategy</h1>
  <p className="wep">We help brands & businesses gain a competitive advantage in the connected world.</p>
  <button className="btn1">Start Your Project</button>

    </div>

    <div class="in-in-middle" id="2">
    
    <h1 className="strath1" id="minimob">Diversity</h1>
  <p className="wep">Designing tailor made solutions that resonate with your customers and drives them to act.</p>
  <button className="btn2">Start Your Project</button>

    </div>
    <div class="in-in-middle" id="3">
      
    <h1 className="strath1">Reflective</h1>
  <p className="wep">Designing tailor made solutions that 
resonate with your customers and drives 
them to act.</p>


    </div>
  </div>
</div>



<div class="left">
   <img  id="img1" src={dappo}  alt="placeholder"/>
</div>



</div>
 */}


      </section>



      <section>


<div>
{popup?

<div className="main">
    <div className="popup"> 

    
      
    <div className="content">



<div className="divmodal1">
  <h1 className="havee">Have an Idea?</h1>
  <h4 className="abus">Tell us about it</h4>

  <p className="nomi">hello@omnacreative.com</p>

  <p className="min">
    Rashid minhas road, Gulshan Iqbal 10<br></br>
    karachi, Pakistan
  </p>
</div>

<div className="divmodal2">

  <div className="inpput">


  <h1 className="yourstar">Start Your Project</h1>

  <div style={{ textAlign:"center" }}>
    <input className="inp" type="text" placeholder="Enter your name" />
  </div>

  <div style={{ textAlign:"center" }}>
    <input className="inp" type="text"  placeholder="Enter your email" />
  </div>

  <div style={{ textAlign:"center" }} >
    <div>
<label  className="inp2"  for="myfile" placeholder="Upload File ">Upload File
    <input className="inp" id="myfile" placeholder="Upload File " style={{display:"none"}} type="file" accept="image/*,.pdf,.doc,.docx"/>
    </label> 
    <img src={icon}  className="flexxx"/>
      </div>
  
  </div>



  <div style={{ textAlign:"center" }}>
    <textarea className="inp1" type="text" placeholder="Enter your message" />
  </div>

  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  Subscribe to monthly newsletter from OMNA.
  </label>
</div>

  <div className="btnpop1">
    <button className="seeend">SEND</button>
  </div>

  <h1 onClick={closepopup} className="cross">
  X
</h1>
</div>


</div>
</div>





        </div>
      </div>:''}
   
      </div>


</section>




    </>
  );
};

export default Our;
