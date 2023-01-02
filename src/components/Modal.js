import React, { useState } from "react";

const Modal = () => {
  const [popup, setpop] = useState(false);
  const handleClickOpen = () => {
    setpop(!popup);
  };

  const closepopup = () => {
    setpop(false);
  };

  return (
    <>
      <button onClick={handleClickOpen}>open popup</button>
      <div>
        {popup ? (
          <div className="main">
            <div className="popup">


              <div className="content">

                <h1 onClick={closepopup} className="cross">
                  X
                </h1>

                <div className="">
                  <h1>Have an Idea?</h1>
                  <h4>Tell us about it</h4>

                  <p>hello@omnacreative.com</p>

                  <p>
                    Rashid minhas road, Gulshan Iqbal 10<br></br>
                    karachi, Pakistan
                  </p>
                </div>

                <div className="">
                  <h1>Start Your Project</h1>

                  <div>
                    <input placeholder="Enter your name" />
                  </div>

                  <div>
                    <input placeholder="Enter your email" />
                  </div>

                  <div>
                    <input placeholder="Upload File " />
                  </div>

                  <div>
                    <textarea placeholder="Enter your message" />
                  </div>

                  <div>
                    <button>SEND</button>
                  </div>
              
              
                </div>
             
              </div>
            
            
            
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Modal;
