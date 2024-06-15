import React from "react";
import icon1 from "../../src/assets/pngwing.com.png"
import twitter from "../../src/assets/twitter-icon.png"

function Footer(){
    return(
        <div className="container-fluid " style={{background:'#080827'}}>
            <div className="d-flex justify-content-center mt-5">
            <div className="row py-5 mb-5">
                <div className="col-12">
                    <div>
                        <div className="d-flex justify-content-center mt-5">
                        <img src="https://preview.colorlib.com/theme/personalportfolio/assets/img/logo/logo2_footer.png" className=" "></img>
                        </div>
                        <h2 style={{color:'white'}} className="d-flex justify-content-center mt-5">hireme@portfolio.com</h2>
                        <p style={{color:'white'}} className="d-flex justify-content-center mt-5">221B Baker Street, Post office Box 353 </p>
                        <p style={{color:'white'}} className="d-flex justify-content-center mt-3">Park Road, USA - 215431</p>
                    </div>
                </div>
            </div>
            </div>
            <div className="row">
                <div className="d-flex justify-content-around col-12">
                    <p style={{color:'white'}} className="me-5">
                    Copyright © 2024 All rights reserved | This template is made with <img src={icon1}></img> by <a href='#' style={{textDecoration:'none',color:'red'}}>Colorlib</a></p>
                    <p style={{color:'#848493'}} className="d-flex align-items-center gap-2">stay connected  
     <i className="fab fa-twitter"></i>
      <i className="fab fa-instagram "></i>
      <i className="fab fa-facebook"></i> </p>
                </div>
            </div>
      
        </div>
    )
}
export default Footer