import React, { useContext, useRef,useState } from  'react'
import { Link } from "react-router-dom";
import { Context } from '../context/Context';
import axios from 'axios';

function Login () {

    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch} = useContext(Context);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      setSuccess("");
      dispatch({ type: "LOGIN_START" });
 
      
        const response = await axios.post("https://ultimatebackend.herokuapp.com/users/api/authenticate", {
          email: userRef.current.value,
          password: passwordRef.current.value,
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
      if(response.status === 201){
          window.location.replace("/dashboard")
       }

       if (response?.data?.errors){
           const messages = response.data.errors.map(item => item.msg)
           
           setError(messages)
       }
    };
  


    return(
        <div>
        <div class="container login-container">
            <div class="row">
                <div class="login-form-1">
                    <h3>Login</h3>
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
                            <input type="text" class="form-control" placeholder="Your Email" 
                            ref={userRef} />
                        </div><br/>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Your Password" 
                             ref={passwordRef} />
                        </div><br/>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit" value="Login" />
                        </div><br/>
                        <div class="form-group">
                            <Link to="/forgetpassword" class="ForgetPwd">Forget Password</Link>
                            
                        </div>
                    </form>
                </div>
                </div>
                </div>
        </div>
    )
}
export default Login;