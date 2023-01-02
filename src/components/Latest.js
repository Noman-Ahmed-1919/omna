import React from "react";
import exp1 from "../images/exp1.png";
import exp2 from "../images/exp2.png";
import exp3 from "../images/exp3.png";


const Latest = () => {
    return(
        <>

        <section id="sec6">
         

        <div className="container">
            <h1 className="latesth1">Latest Articles</h1>
            <div className="row">

                <div className="col-lg-4 ">

                    <div className="border">

                
                    <img style={{width:"100%"}} src={exp1}/>

                    <h4 className="h4exp">EXPERTISE</h4>
                    <h5 className="h5exp">07 signs you probably need a new website.</h5>

                    </div>
                </div>



                
                <div className="col-lg-4 ">

                    <div className="border">

                
                    <img style={{width:"100%"}} src={exp2}/>

                    <h4 className="h4exp">EXPERTISE</h4>
                    <h5 className="h5exp1">How long does it take to design and build a brand?</h5>

                    </div>
                </div>




                
                <div className="col-lg-4 ">

                    <div className="border">

                
                    <img style={{width:"100%"}} src={exp3}/>

                    <h4 className="h4exp">EXPERTISE</h4>
                    <h5 className="h5exp">10 must-have features for startup brands</h5>

                    </div>
                </div>

            </div>

        </div>
        
           
        </section>
        </>
    )
}

export default Latest;