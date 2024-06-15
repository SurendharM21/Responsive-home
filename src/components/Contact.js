import React from "react";

function Contact(){
    return(
        <div className="container mt-5  pt-5">
            <div className="row d-flex justify-content-around">
                <div className=" col-12 col-md-6">
                    <div>
                        <h1 className="text-wrap fs-1" style={{width:'80%'}}>If Not Now, When? Let’s Work Together!</h1>
                        <p className="my-4">Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra.</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 ps-md-5">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Any Message</label>
                            <textarea type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact