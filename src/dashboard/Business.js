import React from "react";
import Sidebar from "./Sidebar";


const Business = () => {
    return (
        <>
            <Sidebar />
            <div className='profileside'>
                <div class="container">

                    <div class="form-sec">
                        <h4>Business Informations</h4>

                        <form name="qryform" id="qryform" method="post" action="mail.php" onsubmit="return(validate());" novalidate="novalidate">
                            <div class="form-group">

                                <input type="text" class="form-control" id="name" placeholder="Business Name" name="name" />
                            </div>

                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Business Category</option>
                                    <option>Hardware</option>
                                    <option>Soloon</option>
                                    <option>Barber</option>
                                    <option>5</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <input type="number" class="form-control" id="phone" placeholder="Phone No1." name="phone" />
                            </div>
                            <div class="form-group">
                                <input type="number" class="form-control" id="phone" placeholder="Phone No2." name="phone" />
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" id="name" placeholder="Email-One" name="email" />
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" id="name" placeholder="Email-Two" name="email" />
                            </div>

                            <div class="form-group">
                                <input type="text" class="form-control" id="name" placeholder="WebSite Url" name="subject" />
                            </div>

                            <div class="form-group">
                                <input type="text" class="form-control" id="name" placeholder="Facebook" name="subject" />
                            </div>

                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>District</option>
                                    <option>kampala</option>
                                    <option>mukono</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <input type="text" class="form-control" id="name" placeholder="Town" name="subject" />
                            </div>

                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Business Status</option>
                                    <option>Big</option>
                                    <option>Wholesale</option>
                                    <option>Small</option>
                                </select>
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Business