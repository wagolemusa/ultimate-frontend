import React from "react";
import Sidebar from "./Sidebar";

const Admin = () => {
    
    return (
        <>
        <Sidebar />
       <div className='profileside'>
           <div class="container">
                
        <div class="row mb-3">
          <div class="col-xl-3 col-lg-6">
            <div class="card card-inverse1 card-success">
              <div class="card-block">
                <div class="rotate">
                <i class="fab fa-avianex"></i>
                </div>
                
                <h1 class="display-1">134</h1>
                <h6 class="text-uppercase">Business</h6>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6">
            <div class="card card-inverse2 card-danger">
              <div class="card-block">
                <div class="rotate">
                <i class="fas fa-signal"></i>
                </div>
                <h1 class="display-1">87</h1>
                <h6 class="text-uppercase">companies</h6>

              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6">
            <div class="card card-inverse3 card-info">
              <div class="card-block">
                <div class="rotate">
                <i class="fas fa-star-and-crescent"></i>
                </div>
                <h1 class="display-1">125</h1>
                <h6 class="text-uppercase">Peolple</h6>

              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6">
            <div class="card card-inverse4 card-warning">
              <div class="card-block">
                <div class="rotate">
                <i class="fas fa-om"></i>
                </div>
                <h1 class="display-1">36</h1>
                <h6 class="text-uppercase">Users</h6>

              </div>
            </div>
          </div>
        </div>
     
           </div>
       </div>
   </>
    )
}

export default Admin;

