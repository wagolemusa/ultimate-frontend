import axios from "axios";
import React, { useState } from "react";

function ForgetPassord() {

    const [email, setEmail] = useState("")
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        const response = await axios.put("https://ultimatebackend.herokuapp.com/users/api/reset-password", {
            email
        })
            .catch((err) => {
                console.log(err.response.data)
                if (err && err.response) setError(err.response.data.message);
                setSuccess("");
            });

        if (response && response.data) {
            setError("");
            setSuccess(response.data.message);
        }
        // if (response.status === 201) {
        //     window.location.replace("/")
        // }

        if (response?.data?.errors) {
            const messages = response.data.errors.map(item => item.msg)

            setError(messages)
        }
    };


    return (
        <div>
            <div class="container login-container">
                <div class="row">
                    <div class="login-form-1">
                        <h3>Request to change  password</h3>
                        
                        {!error && <div className='suc'>{success ? success : ""}</div>}

                        {!success && Array.isArray(error) ? error.map((item, i) => (
                            <div class="notice notice-danger alert fade show" role="alert">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                                <h4 key={i}> {item} </h4>
                            </div>
                        )) : 
                        
                        <p>{error} </p>
                        }

                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Your Email"
                                    onChange={e => setEmail(e.target.value)} />
                            </div><br />
                            <div class="form-group">
                                <button type="submit" class="btnSubmit">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassord;


