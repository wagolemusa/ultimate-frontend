import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar';
import { RiMailStarLine } from "react-icons/ri";
import { RiPhoneLine } from "react-icons/ri";
import { RiUsbFill } from "react-icons/ri";
import axios from 'axios';

let token = localStorage.getItem('token')
const Profile = () => {
    const [users, setUsers] = useState("")
    const [email, setEmail] = useState("")
    const [phonenumber, setPhonenumber] = useState("")
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const getUsers = () => {
        axios.get("https://ultimatebackend.herokuapp.com/users/api/authenticate", {
            headers: {
                'Authorization': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                const myUsers = res.data.user;
                setEmail(res.data.user.email)
                setPhonenumber(res.data.user.phonenumber)

                setUsers(myUsers);
          
            })
    };

    useEffect(() => getUsers(), []);


    // Update
    const handleUpdate = async (e) => {
        e.preventDefault();
        const dataForm = {
            email,
            phonenumber,
           
        }
        try {
            const response = await axios.put("https://ultimatebackend.herokuapp.com/users/api/update",dataForm , {
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
        } catch (err) { }
    }

    return (
        <>
            <Sidebar />

            <div className='profileside'>

                <div className='profileStyle'>
                    <div class="container">
                        <div class="row">
                            <div className='col-md-6'>
                                <button type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                                    Edit User
                                </button>&nbsp;&nbsp;
                              
                            </div>
                            <div className='col-md-6'>
                                <h1>{users.firstname}&nbsp;{users.middlename}&nbsp;{users.lastname}</h1>
                            </div>
                            <br /><br /><br />
                        </div>
                        <div class="row">
                            <div className='col-md-6'>

                                {/* {social.avatar && <img className="postImg" src={social.avatar} alt="" />} */}


                            </div>
                            <div className='col-md-6'>
                                <h2><RiMailStarLine style={{ color: "#00B74A" }} /> <span>  &nbsp; {users.email}</span></h2>
                                <h2><RiPhoneLine style={{ color: "#00B74A" }} /> <span>  &nbsp;{users.phonenumber} </span></h2>
                                <h2><RiUsbFill style={{ color: "#00B74A" }} /> <span>  &nbsp; {users.idnumber}</span></h2>

                            </div>
                        </div>
                    </div>

                    <hr />

                </div>

            </div>
           
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

                       
                    <form onSubmit={handleUpdate}>
                        <div class="modal-body">
                            <div class="md-form">
                                <input type="email" value={email} id="form2Example1" class="form-control" placeholder='First Name' 
                                 onChange={(e)=>setEmail(e.target.value)}
                                />

                            </div><br />
                            <div class="md-form">
                                <input type="number" value={phonenumber} id="form2Example1" class="form-control" placeholder='Last Name' 
                                 onChange={(e)=>setPhonenumber(e.target.value)}
                                />
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary">Update</button>
                        </div>
                        </form>
                    </div>
             
                </div>
                
            </div>

        </>
    )
}
export default Profile;