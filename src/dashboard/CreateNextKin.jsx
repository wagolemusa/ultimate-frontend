import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from 'axios'
let token = localStorage.getItem('token')

function CreateNextKin () {

    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastname] = useState(null);
    const [email, setEmail] = useState(null);
    const [phonenumber, setPhonenumber] = useState(null);
    const [idnumber, setIdnumber] = useState(null);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const dataForm = {
            firstname,
            lastname,
            email,
            phonenumber,
            idnumber
        }
      
        const response = await axios.post("https://ultimatebackend.herokuapp.com/nextofking/api/next/king", dataForm, {
            headers: {
                'Authorization': token,
                 'Accept': 'application/json',
                'Content-Type': 'application/json'
                }
            })
            .catch((err) => {
                    console.log(err.response.data)
                    if (err && err.response) setError(err.response.data.message);
                    setSuccess(null);
                });

            if (response && response.data) {
                setError(null);
                setSuccess(response.data.message);
            }
            if (response.status === 201) {
                window.location.replace("/create-next-of-kin")
            }

            if (response?.data?.errors) {
                const messages = response.data.errors.map(item => item.msg)

                setError(messages)
            }
    }

    return (
        <>
            <Sidebar />
            <div className='profileside'>
                <div className='profileStyle'>
                    <div class="container">
                        
                        {!error && <div className='suc'>{success ? success : ""}</div>}

                        {!success && Array.isArray(error) ? error.map((item, i) => (
                            <div class="notice notice-danger alert fade show" role="alert">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                                <h4 key={i}> {item} </h4>
                            </div>
                        )) : <p>{error} </p>
                        }

                        <form onSubmit={handleSubmit}>
                            <div class="modal-content">
                                <div class="md-form">
                                    <input type="text" id="form2Example1" class="form-control" placeholder='First Name'
                                        onChange={(e) => setFirstname(e.target.value)}
                                    />

                                </div><br />
                                <div class="md-form">
                                    <input type="text" id="form2Example1" class="form-control" placeholder='Last Name'
                                        onChange={(e) => setLastname(e.target.value)}
                                    />

                                </div><br />
                                <div class="md-form">
                                    <input type="email" id="form2Example1" class="form-control" placeholder='Email'
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                </div><br />
                                <div class="md-form">
                                    <input type="number" id="form2Example1" class="form-control" placeholder='Phone Number'
                                        onChange={(e) => setPhonenumber(e.target.value)}
                                    />

                                </div><br />
                                <div class="md-form">
                                    <input type="number" id="form2Example1" class="form-control" placeholder='ID Number'
                                        onChange={(e) => setIdnumber(e.target.value)}
                                    />

                                </div><br />

                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary">Save changes</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}


export default CreateNextKin;

