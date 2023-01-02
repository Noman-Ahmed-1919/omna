import { useEffect } from "react";
import dappo from "../images/dappo.png";
import nft from "../images/nft.png";
import frag from "../images/frag.png";

const Animation = () =>{

    useEffect(() => {
        const scrollingDiv = document.getElementById("scrollContainer");
        const img1 = document.getElementById("img1");
    
        const left = document.querySelector(".container .left");
    
        left.onscroll = function (e) {
          console.log(e);
        };
    
        scrollingDiv.onscroll = function () {
          if (scrollingDiv.scrollTop < 250) {
            img1.src = dappo;
          }
    
          if (scrollingDiv.scrollTop > 500) {
            img1.src = nft;
          }
          if (scrollingDiv.scrollTop > 1000) {
            img1.src = frag;
          }
        };
      }, []);




    return(
        <>
        
      <div class="container">

     <div class="middle" id="scrollContainer">
       <div class="in-middle">
         <div class="in-in-middle" id="1">
           ONE
         </div>
         <div class="in-in-middle" id="2">
           TWO
         </div>
         <div class="in-in-middle" id="3">
           THREE
         </div>
       </div>
     </div>



     <div class="left">
        <img  id="img1" src={dappo}  alt="placeholder"/>
     </div>

    

   </div>


  
        </>
    )
}
export default Animation;