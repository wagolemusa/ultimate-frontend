import React, {  useState } from "react";
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
              if(response.status === 201){
                window.location.reload();
               }
  
               if (response?.data?.errors){
                   const messages = response.data.errors.map(item => item.msg)
                   
                   setError(messages)
               }   
    }

    return (
        <>
     
     <div class="container login-container">
            <div class="row"> 
            <div class="login-form-1">

                        <h5>Please Make sure that you provide your next of kin details</h5>
                 {!error && 
                        <div className='suc'>
                        {success ? success : ""}
                    </div>}

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
                          
                        <div class="form-group">
                                    <input type="text" class="form-control" placeholder='First Name' required
                                        onChange={(e) => setFirstname(e.target.value)}
                                    />

                                </div><br />
                                <div class="form-group">
                                    <input type="text"  class="form-control" placeholder='Last Name' required
                                        onChange={(e) => setLastname(e.target.value)}
                                    />

                                </div><br />
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder='Email' required
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                </div><br />
                                <div class="form-group">
                                    <input type="number"  class="form-control" placeholder='Phone Number' required
                                        onChange={(e) => setPhonenumber(e.target.value)}
                                    />

                                </div><br />
                                <div class="form-group">
                                    <input type="number"  class="form-control" placeholder='ID Number' required
                                        onChange={(e) => setIdnumber(e.target.value)}
                                    />

                                </div><br />

                         
                                <button type="submit" class="btnSubmit">Save Next of kin</button>
                                {/* <button type="submit" class="btn btn-primary">Save changes</button> */}
                        </form>
                    </div>
                </div>
                </div>
        </>
    )
}


export default CreateNextKin;

