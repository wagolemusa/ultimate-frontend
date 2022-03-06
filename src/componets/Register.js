import React, { useState} from "react";
import axios from 'axios'


function Register () {
    // const [firstname, setFirstname] = useState("")
    // const [lastname, setLastname ] = useState("")
    // const [middlename, setMiddle ] = useState("")
    // const [phonenumber, setPhonenumber ] = useState("")
    // const [idnumber, setIdnumber] = useState("")
    // const [email , setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [errors, setError] = useState("null");


    const initialValues = {
        firstname: "",
        lastname: "",
        middlename: "",
        phonenumber: "",
        idnumber: "",
        email: "",
        password: ""
    }

    const [formValues, setFormValues] = useState(initialValues);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    

    const errorDiv = error 
        ? <div className="error">
            <i class="material-icons error-icon">error_outline</i>
            {error}
          </div> 
        : '';

    const handleChange = (e) => {
        const  { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
  
          const response = await axios.post("https://ultimatebackend.herokuapp.com/users/api/register",formValues)
            
          .catch((err) => {
              console.log(err.response.data)
            if (err && err.response) setError(err.response.data.message);
            setSuccess(null);
          });
          console.log(response.data)
            if (response && response.data) {
            setError(null);
            setSuccess(response.data.message);
            }
            if(response.status === 201){
                window.location.replace("/registerSuccessfully")
            }


        //   .then(res => {
        //         if(res.status === 201){
        //             window.location.replace("/registerSuccessfully")
        //         }
        //         console.log(res.data.msg)
        //         //  setError(res.data.errors)
        //     }).catch(res => {
        //         // console.log(res.data.errors)
        //         setError(res.data.error);
        //     })
       
    }


    // useEffect(() => {
    //     console.log(formErrors);
    //     if (Object.keys(formErrors).length === 0 && isSubmit){
    //         console.log(formValues);
    //     }
    // },[formErrors])

    // const validate = (values) => {
    //     const errors = {};
    //     const regex = /^(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}$/;

    //     if(!values.firstname){
    //         errors.firstname = "FirstName is Required!";
    //     }
    //     if(!values.lastname){
    //         errors.lastname = "Lastname is Required!";
    //     }
    //     if(!values.middlename){
    //         errors.middlename = "MiddleNmae Required!";
    //     }
    //     if(!values.phonenumber){
    //         errors.phonenumber = "Phone Number Required";
    //     }
    //     if (!values.idnumber){
    //         errors.idnumber = "Id Number is Required!";
    //     }else if(values.idnumber .length > 8 ) {
    //         errors.idnumber = "ID Number Must be 8 Characters"
    //     }else if(values.idnumber .length < 8 ) {
    //         errors.idnumber = "ID Number Must be 8 Characters"
    //     }

    //     if(!values.email){
    //         errors.email = "Email Address Required";
    //     }
    //     if(!values.password){
    //         errors.password = "Password is Required"
    //     }else if(values.password .length < 4){
    //         errors.password = "Password must be more than 4 character"
    //     }
    //     return errors;
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setError("");
   

    //        await axios.post("https://ultimatebackend.herokuapp.com/users/api/register", {
    //             firstname,
    //             lastname,
    //             middlename,
    //             phonenumber,
    //             idnumber,
    //             email,
    //             password
    //         })  
    //         .then(res => {

    //             if(res.status === 201){
    //                 window.location.replace("/registerSuccessfully")
    //             }
    //             if (!res.success) {
    //                console.log(res.data)
    //                setError(res.data.errors);
    //             // throw Error(res.data)
    //             }
    //             })
    //             .catch(err => {
    //                 setError(err);
    //             })
    //     }


    return (
        <div>
        <div class="container login-container">
        {/* {errors.length && ( // Conditionally render our errors
                            errors.map((error) => (
                                <p key={error.value} msg={error.msg} />
                            ))
                        )} */}

            {/* <li key="{error}">{errors.message}</li> */}
            {/* {errorDiv} */}
            <div class="row">
                
                <div class="login-form-1">

                    {/* {errors && <p>{errors}</p>} */}

                    {/* {errors[0]} */}

                    {/* {error && (
                        <p className="error"> {error} </p>
                    )}
               */}

            {!error && <p>{success ? success : ""}</p>}
                {!success && <p>{error ? error : ""}</p>}

             
                    <h3>Create Account</h3>
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <input type="text" name="firstname" class="form-control" placeholder="First Name " required
                                value={ formValues.firstname}
                                onChange={handleChange}
                                // onChange={e=>setFirstname(e.target.value)} 
                            />
                        </div><br/>
                        <div class="form-group">
                            <input type="text" name="lastname" class="form-control" placeholder="Last Name" required
                             value={ formValues.lastname}
                             onChange={handleChange}
                            //  onChange={e=>setLastname(e.target.value)}
                             />
                        </div>
                        <br/>
                        <div class="form-group">
                            <input type="text"  name="middlename" class="form-control" placeholder="Middle Name" required
                                value={ formValues.middlename}
                                onChange={handleChange}
                                // onChange={e=>setMiddle(e.target.value)}
                                />
                        </div>
                        <br/>
                        <div class="form-group">
                            <input type="number" name="phonenumber" class="form-control" placeholder="Phone Number" required
                               value={ formValues.phonenumber}
                               onChange={handleChange}
                                // onChange={e=>setPhonenumber(e.target.value)} 
                                />
                        </div><br/>
                        <div class="form-group">
                            <input type="number" name="idnumber" class="form-control" placeholder="ID Number" required
                               value={ formValues.idnumber}
                               onChange={handleChange}
                                // onChange={e=>setIdnumber(e.target.value)}
                                />
                        </div><br/>
                        <div class="form-group">
                            <input type="email" name="email" class="form-control" placeholder="Your Email" required
                               value={ formValues.email}
                                onChange={handleChange}
                                // onChange={e=>setEmail(e.target.value)}
                                />
                        </div><br/>
                        <div class="form-group">
                            <input type="password" name="password" class="form-control" placeholder="Your Password" required
                               value={ formValues.password} 
                               onChange={handleChange}
                                // onChange={e=>setPassword(e.target.value)} 
                                />
                        </div><br/>
                        <div class="form-group">
                            <button type="submit" class="btnSubmit">Create Account</button>
                        </div><br/>

                    </form>
                </div>
                </div>
                </div>
        </div>
    )
}

export default Register;