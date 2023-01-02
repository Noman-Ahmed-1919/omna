import React, {useState} from "react";

import logo from "../images/logo.png";
import Modal from "./Modal";
import icon from "../images/icon.png"


const Header = () => {


  const [popup, setpop] = useState(false);
  const handleClickOpen = ()=>{
setpop(!popup)
  }

  const closepopup =()=>{
      setpop(false);
  }
    return(
        <>
        
        <section  id='hide' className='container-fluid'>

<nav className="navbar navbar-expand-lg navbar-light"  >

  <a className="navbar-brand" href="#" id="stico" style={{ color: "white", textShadow: "2px 2px 0px rgba(0, 0, 0, 0.7)" }}>
    <img id='logo' src={logo} width={135} height={35} className="d-inline-block align-top" alt="" />
    

  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse homenav" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto" id="headerrnava" >
      <li className="nav-item active">
        <a to="/"   id="aboutaa" style={{ color: "Black",  }} className="nav-link" >
             Home
        </a>
      </li>
   
      <li className="nav-item">
        <a to="/Stico"  id="abouta" style={{ color: "Black"  }} className="nav-link" >   About</a>
      </li>
      <li className="nav-item">
        <a  id="abouta1" style={{ color: "Black"  }} className="nav-link" href="#services"> Services</a>
      </li>
      <li className="nav-item">
        <a  id="abouta2" style={{ color: "Black"  }} className="nav-link" href="#sec4">  Portfolio</a>
      </li>
      <li className="nav-item">
        <a  id="abouta3" style={{ color: "Black"  }} className="nav-link" href="#utility">  Blogs</a>
      </li>
      <li className="nav-item">
        <a  id="abouta4" style={{ color: "Black"  }}  className="nav-link con" href="#utility">  Contact</a>
      </li>

      
     
    </ul>
    <div id="btnnns">

  

    <div>
    <a id="btn1header2"  className=" my-2 my-sm-0" onClick={handleClickOpen} > Let's talk</a>
    </div>
    
    </div>
  </div>
</nav>

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
    )
}

export default Header;