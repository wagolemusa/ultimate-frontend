import React, { useState} from "react";
import axios from 'axios'
import Sidebar from "./Sidebar";

function Collector () {
    const initialValues = {
        firstname: "",
        lastname: "",
        middlename: "",
        phonenumber: "",
        idnumber: "",
        email: "",
        role: "",
        password: ""
    }

    const [formValues, setFormValues] = useState(initialValues);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    

    const handleChange = (e) => {
        const  { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
  
          const response = await axios.post("https://blockgold.onrender.com/users/api/register",formValues)
         
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
             <Sidebar />
       <div className='profileside'>
           <div class="container">
        <div class="container login-container">
            <div class="row"> 
                <div class="login-form-1">
                <h3>Add Collector</h3>

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
                                value={ formValues.firstname}
                                onChange={handleChange}
                            />
                        </div>
                        <div class="form-group">
                            <input type="text" name="lastname" class="form-control" placeholder="Last Name" required
                             value={ formValues.lastname}
                             onChange={handleChange}
                             />
                        </div>
                        <div class="form-group">
                            <input type="text"  name="middlename" class="form-control" placeholder="Middle Name" required
                                value={ formValues.middlename}
                                onChange={handleChange}
                                />
                        </div>
                  
                        <div class="form-group">
                            <input type="number" name="phonenumber" class="form-control" placeholder="Phone Number" required
                               value={ formValues.phonenumber}
                               onChange={handleChange}
                                />
                        </div>
                        <div class="form-group">
                            <input type="number" name="idnumber" class="form-control" placeholder="ID Number" required
                               value={ formValues.idnumber}
                               onChange={handleChange}
                                />
                        </div>
                        <div class="form-group">
                            <input type="email" name="email" class="form-control" placeholder="Email" required
                               value={ formValues.email}
                                onChange={handleChange}
                                />
                        </div>
                        <div class="form-group">
                            <input type="text" name="role" class="form-control" placeholder="Role" required
                               value={ formValues.role} 
                               onChange={handleChange}
                                />
                        </div>
                        <div class="form-group">
                            <input type="password" name="password" class="form-control" placeholder="Password" required
                               value={ formValues.password} 
                               onChange={handleChange}
                                />
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btnSubmit">Create Collector</button>
                        </div>

                    </form>
                </div>
                </div>
                </div>
        </div>
        </div>
        </div>
    )
}

export default Collector;