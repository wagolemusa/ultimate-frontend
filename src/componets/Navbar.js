import React from 'react'
import f from './f.png'
import { Link } from "react-router-dom";

import {  useSelector } from 'react-redux'
function Navbar() {

    const auth = useSelector(state => state.auth)

    // const dispatch = useDispatch();

    // const logout = () => {

    //     const res =  axios.post(`https://ultimatebackend.herokuapp.com/users/api/signout`);
    //     if(res.status == 200){
    //         localStorage.clear();
    //         return window.location('/')
    //     } 
    // }

    // const handleLogout = () => {
    //     dispatch({ type: "LOGOUT" });
    //   };

    const logout = () => {
        window.localStorage.clear();
        
        window.location.replace("/dashboard")
    }

    const renderLoggedInLinks = () => {
        return(
            <span type="button" class="btn btn-danger" onClick={logout}>Signout</span>
        )
    }

    const renderNonLoggedInLinks = () => {
        return (
            <>
        <Link to="/register" className='nav-link'>Register</Link>
         <Link to="/login" type="button" class="btn btn-primary">Login</Link>
            </>
        )
    }



    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">

                <div class="container-fluid">

                    <button
                        class="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <a class="navbar-brand mt-2 mt-lg-0" href="/">
                            <img src={f} alt="logo" />
                        </a>

                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                {/* <a class="nav-link" href="#"></a> */}
                               
                            </li>
                         
                        </ul>

                    </div>

                    <div class="d-flex align-items-center">

                    {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}

                   
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;