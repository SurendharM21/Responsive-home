import React from "react";
import "../index.css"
function Banner ()
{
    // const url="https://preview.colorlib.com/theme/personalportfolio/assets/img/hero/h1_hero.jpg.webp"
//     const myStyle = {
//         // backgroundImage: `url(${url})`,
// //         backgroundSize: "cover",
// //    backgroundPosition: "center",
// //         marginTop: "-70px",
// //         backgroundRepeat: "no-repeat",
//        background:'white'
      
    // };
    return(
        <div className="img-fluid bg-c bg-c">
            <div className="row px-5 py-5 mx-5">
                <div className="col-12 col-md-8 col-lg-6 justify-content-start">
                 <div className="px-3 py-5 mt-5">
                    <p className="text-danger">Get Every Single Solutions.</p>
                    <h1 style={{color:"#002d5b",width:'60%'}} className="text-wrap fs-1 ">I’m Designer Haris F. Watson</h1>
                    <p className="py-3" style={{fontFamily:'sans-serif'}}>jhorem rfpsum golor sidt amet, consectetur adipiscing elit, eiusmod tempor incididunt utcjhg labore bet dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    <div>
                        <button className="button2"><b>Learn more</b></button>
                        <button className="button1 ms-md-1 mt-md-2 mt-md-0 mt-2" ><b style={{zIndex:"999"}} >Hire me</b></button>
                    </div>
                 </div>
                </div>
            </div>
        </div>
    )
}
export default Banner