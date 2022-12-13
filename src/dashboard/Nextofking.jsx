import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from 'axios'
let token = localStorage.getItem('token')

const Nextofking = () => {

    const [firstname,  setFirstname] = useState(null);
    const [lastname,  setLastname] = useState(null);
    const [email,  setEmail] = useState(null);
    const [phonenumber,  setPhonenumber] = useState(null);
    const [idnumber,  setIdnumber] = useState(null);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const [kin, setKins] = useState([]);

    const getKin = () => {
        axios.get("https://ultimatebackend.herokuapp.com/nextofking/api/next-of-king", {
            headers: {
                'Authorization': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                setFirstname(res.data.nextking.next.firstname)
                setLastname(res.data.nextking.next.lastname)
                setEmail(res.data.nextking.next.email)
                setPhonenumber(res.data.nextking.next.phonenumber)
                setIdnumber(res.data.nextking.next.idnumber)
                const myKin = res.data.nextking.next;
                setKins(myKin);
            })
    };

    useEffect(() => getKin(), []);
    console.log(kin);


    // Update
    const handleUpdate = async (e) => {
        e.preventDefault();
        const dataForm = {
            firstname,
            lastname,
            email,
            phonenumber,
            idnumber
        }
      
            const response = await axios.put("https://ultimatebackend.herokuapp.com/nextofking/api/update-next-of-king",dataForm , {
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
            <Sidebar />
            <div className='profileside'>
            
                <div className='profileStyle'>
                    <div class="container">
                   
                    <div class="row">
                        
               
                   
                        
                        <div className='col-md-6'>
                        <h2> Full Names:<span>  &nbsp;{kin.firstname} &nbsp; {kin.lastname}</span></h2><br />
                        <h2>Email:<span> &nbsp; {kin.email}</span></h2><br />
                        <h2>Phone:<span>  &nbsp;{kin.phonenumber} </span></h2><br />
                        <h2>ID Number:<span>  &nbsp; {kin.idnumber}</span></h2>

                    </div>
                                 
                        
                        
                   
                            <div className='col-md-6'>
                            <button type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal1">
                                Edit Next of kin
                            </button>
                     
                        </div>
                       
                        
                    </div>
                    </div>


                </div>
             
            </div>

            {/* Endit form  */}

            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
              
                    <div class="modal-content">
                        <div class="modal-header">

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
                    
                            <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                        </div>
    
                        <div class="modal-body">
                        <form onSubmit={handleUpdate}>
                            <div class="md-form">
                                <input type="text" value={firstname} id="form2Example1" class="form-control" placeholder='First Name' required
                                 onChange={(e)=>setFirstname(e.target.value)}
                                />

                            </div><br />
                            <div class="md-form">
                                <input type="text" value={lastname} id="form2Example1" class="form-control" placeholder='Last Name' required 
                                 onChange={(e)=>setLastname(e.target.value)}
                                />

                            </div><br />
                            <div class="md-form">
                                <input type="email" value={email} id="form2Example1" class="form-control" placeholder='Email' required
                                 onChange={(e)=>setEmail(e.target.value)}
                                />

                            </div><br />
                            <div class="md-form">
                                <input type="number" value={phonenumber} id="form2Example1" class="form-control" placeholder='Phone Number' required
                                 onChange={(e)=>setPhonenumber(e.target.value)}
                                />

                            </div><br />
                            <div class="md-form">
                                <input type="number" value={idnumber} id="form2Example1" class="form-control" placeholder='ID Number'  required
                                 onChange={(e)=>setIdnumber(e.target.value)}
                                />

                            </div><br />
                        
                            <button type="submit" class="btn btn-primary">Update</button>
                            </form>
                        </div>
                 
                    </div>
                   
                </div>
                </div>
           
        </>
    )
}


export default Nextofking;

