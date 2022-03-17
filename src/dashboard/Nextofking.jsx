import React from "react";
import Sidebar from "./Sidebar";

const Nextofking = () => {
    return(
        <>
        <Sidebar />
        <div className='profileside'>
                <div className='profileStyle'>
                    <div class="container">
                        <div class="row">
                        </div>
                        <div class="row">
                            <div className='col-md-6'>
                                <h2> Full Names:<span>  &nbsp;Wagole musa </span></h2><br />
                                <h2>Email:<span> &nbsp; Wagolemusa@gmail.com</span></h2><br />
                                <h2>Phone:<span>  &nbsp;254725696042 </span></h2><br />
                                <h2>ID Number:<span>  &nbsp; 546565665</span></h2>

                            </div>

                            <div className='col-md-6'>
                            <button type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                                Edit Next of king
                            </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit</h5>
                            <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <div class="md-form">
                            <input type="text" id="form2Example1" class="form-control"  placeholder='First Name'/>
                            
                        </div><br/>  
                        <div class="md-form">
                            <input type="text" id="form2Example1" class="form-control"  placeholder='Last Name'/>
                            
                        </div><br/> 
                        <div class="md-form">
                            <input type="text" id="form2Example1" class="form-control"  placeholder='Middle Name'/>
                            
                        </div><br/> 
                        <div class="md-form">
                            <input type="number" id="form2Example1" class="form-control"  placeholder='Phone Number'/>
                            
                        </div><br/> 
                        <div class="md-form">
                            <input type="number" id="form2Example1" class="form-control"  placeholder='ID Number'/>
                            
                        </div><br/> 

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Nextofking;

