import React from "react";
import Sidebar from "./Sidebar";

const Company = () => {
    return (
        <>
            <Sidebar />
            <div className='profileside'>
                <div class="container">

                    <div class="form-sec">
                        <h4>Company Informations</h4>

                        <form name="qryform" id="qryform" method="post" action="mail.php" onsubmit="return(validate());" novalidate="novalidate">
                            <div class="form-group">

                                <input type="text" class="form-control" id="name" placeholder="Business Name" name="name" />
                            </div>
     

                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Select</option>
                                    <option>company</option>
                                    <option>hotels</option>
                                    <option>college</option>
                                    <option>unversity</option>
                                    <option>hospital</option>
                                    <option>unversity</option>
                                    <option>transport</option>
                                    <option>secondary schools</option>
                                    <option>primary schools</option>
                                    <option>international Schools</option>
                                    <option>medical schools</option>
                                    <option>day care</option>
                                    <option>theology schools</option>
                                    <option>vocation schools</option>
                                    <option>sports schools</option>
                                    <option>langeuage schools</option>

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
                                    <option>status</option>
                                    <option>private</option>
                                    <option>public</option>
                                    <option>others</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>District</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <input type="text" class="form-control" id="name" placeholder="Town" name="subject" />
                            </div>
                            <button type="submit" class="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div> 
            </div>
        </>
    )

}

export default Company