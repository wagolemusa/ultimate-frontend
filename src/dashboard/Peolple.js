import React from "react";
import Sidebar from "./Sidebar";

const People = () => {


    return (
        <>
            <Sidebar />
            <div className='profileside'>
                <div class="container">

                    <div class="form-sec">
                        <h4>People Informations</h4>

                        <form name="qryform" id="qryform" method="post" action="mail.php" onsubmit="return(validate());" novalidate="novalidate">
                            <div class="form-group">

                                <input type="text" class="form-control" id="name" placeholder="Name" name="name" />
                            </div>
                 
                            <div class="form-group">
                                <input type="number" class="form-control" id="phone" placeholder="Phone Number" name="phone" />
                            </div>

                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Status</option>
                                    <option>vip</option>
                                    <option>middle</option>
                                    <option>local</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>District</option>
                                    <option>kampala</option>
                                    <option>wakiso</option>
                                    <option>mukono</option>
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

export default People;
