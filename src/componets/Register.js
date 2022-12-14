import React, { useState} from "react";
import axios from 'axios'


function Register () {
        
    const [firstname, setFirstname ] = useState('')
    const [lastname, setLastname ] = useState('')
    const [idnumber, setIdnumber ] = useState('')
    const [phonenumber, setPhonenumber ] = useState('')
    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const initialValues = {
            firstname,
            lastname,
            phonenumber,
            idnumber,
            email,
            password
        }
  
          const response = await axios.post("https://blockgold.onrender.com/users/api/register",initialValues)
         
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
                window.location.replace("/registerSuccessfully")
             }

             if (response?.data?.errors){
                 const messages = response.data.errors.map(item => item.msg)
                 
                 setError(messages)
             }
    }



    return (
        <div>
        <div class="container login-container">
            <div class="row"> 
                <div class="login-form-1">
                <h3>Create Account</h3>

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
                        <div class="form-group">
                            <input type="text" name="firstname" class="form-control" placeholder="First Name " required
                               onChange={(e) => setFirstname(e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <input type="text" name="lastname" class="form-control" placeholder="Last Name" required
                            onChange={(e) => setLastname(e.target.value)}
                             />
                        </div>
                  
                        <div class="form-group">
                            <input type="number" name="phonenumber" class="form-control" placeholder="Phone Number" required
                               onChange={(e) => setPhonenumber(e.target.value)}
                                />
                        </div>
                        <div class="form-group">
                            <input type="number" name="idnumber" class="form-control" placeholder="ID Number" required
                               onChange={(e) => setIdnumber(e.target.value)}
                                />
                        </div>
                        <div class="form-group">
                            <input type="email" name="email" class="form-control" placeholder="Your Email" required
                             onChange={(e) => setEmail(e.target.value)}
                                />
                        </div>
                        <div class="form-group">
                            <input type="password" name="password" class="form-control" placeholder="Your Password" required
                             onChange={(e) => setPassword(e.target.value)}
                                />
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btnSubmit">Create Account</button>
                        </div>

                    </form>
                </div>
                </div>
                </div>
        </div>
    )
}

export default Register;