import React from 'react'
import Sidebar from './Sidebar';
import { RiMailStarLine } from "react-icons/ri";
import { RiPhoneLine } from "react-icons/ri";
import { RiUsbFill } from "react-icons/ri";
const Profile = () => {
    return (
        <>
            <Sidebar />
            <div className='profileside'>
                <div className='profileStyle'>
                    <div class="container">
                        <div class="row">
                        <div className='col-md-6'>
                            <button type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                                Edit Profile
                            </button>&nbsp;&nbsp;
                            <button type="button" class="btn btn-success" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                                Add Social Medial
                            </button>
                            </div>
                            <div className='col-md-6'>
                            <h1>Wagole musa Alshaddul</h1>
                            </div>
                            <br/><br/><br/>
                        </div>
                        <div class="row">
                        <div className='col-md-6'>
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/047.webp"
                                    class="img-fluid rounded"
                                    alt="Townhouses and Skyscrapers"
                                />
                            </div>
                            <div className='col-md-6'>
                                <h2><RiMailStarLine style={{ color: "#00B74A" }} /> <span>  &nbsp; Wagolemusa@gmail.com</span></h2>
                                <h2><RiPhoneLine style={{ color: "#00B74A" }} /> <span>  &nbsp;254725696042 </span></h2>
                                <h2><RiUsbFill style={{ color: "#00B74A" }} /> <span>  &nbsp; 546565665</span></h2>

                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className='iconstyle'>
                        <i class="fab fa-facebook-f" style={{ color: "#3b5998" }}></i> &nbsp;<span>dffddf</span>
                        &nbsp;&nbsp;&nbsp;


                        <i class="fab fa-twitter" style={{ color: "#55acee" }}></i> &nbsp;<span>dffddf</span>
                        &nbsp;&nbsp;&nbsp;

                        <i class="fab fa-linkedin-in" style={{ color: "#1266f1" }}></i> &nbsp;<span>dffddf</span>
                        &nbsp;&nbsp;&nbsp;


                        <i class="fab fa-instagram" style={{ color: "#ac2bac" }}></i> &nbsp;<span>dffddf</span>
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
export default Profile;