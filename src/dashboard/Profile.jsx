import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar';
import { RiMailStarLine } from "react-icons/ri";
import { RiPhoneLine } from "react-icons/ri";
import { RiUsbFill } from "react-icons/ri";
import axios from 'axios';

let token = localStorage.getItem('token')
const Profile = () => {

    const [users, setUsers] = useState([]);
    const [social, setSocial] = useState([]);
    const [file, setFile] = useState("")
    const [facebook, setFacebook] = useState("")
    const [twitter, setTwitter] = useState("")
    const [linkedin, setLinkedin] = useState("")
    const [instagram, setInstagram] = useState("")
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const getUsers = () => {
        axios.get("https://ultimatebackend.herokuapp.com/profiles/api/my-profile", {
            headers: {
                'Authorization': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                const myUsers = res.data.profile.account;
                const mySocial = res.data.profile.social;
                setUsers(myUsers);
                setSocial(mySocial)
            })
    };

    useEffect(() => getUsers(), []);
    console.log(social);

    const handelUpload = async (e) => {
        try {
            const image = e.target.files[0]
            const formData = (new FormData());
            formData.append("avatar", image);
            const { data } = await axios.post("https://ultimatebackend.herokuapp.com/profiles/upload", formData, {
                headers: {
                    'Authorization': token,
                    "Content-Type": "multipart/form-data",
                    "Access-Control-Allow-Origin": "*"
                }
            })
            setFile(data)

        } catch (error) {
            console.log(error)
        }
    }

    const handeleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const dataForm = {
            facebook,
            twitter,
            linkedin,
            instagram,
            avatar: file,

        }
        const response = await axios.post("https://ultimatebackend.herokuapp.com/profiles/api/create-profile", dataForm, {
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
        window.location.reload();
        // if (response.status === 201) {
        //     window.location.replace("/create-profile")
        // }

        if (response?.data?.errors) {
            const messages = response.data.errors.map(item => item.msg)

            setError(messages)
        }
    }


    // if (Array.length > 0) return (
    //     <>

       

              
            // </div>
        // </>

    // )

    // const media = () => {
    //     return (
    //         <>
    //             <button type="button" class="btn btn-success" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
    //                 Add Social Medial
    //             </button>
    //         </>
    //     )
    // }

    return (
        <>
            <Sidebar />

            <div className='profileside'>

                <div className='profileStyle'>
                    <div class="container">
                        <div class="row">
                            <div className='col-md-6'>
                                <button type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                                    Edit Profile
                                </button>&nbsp;&nbsp;
                                <button type="button" class="btn btn-success" data-mdb-toggle="modal" data-mdb-target="#exampleModal2">
                                    Add Social Medial
                                 </button>
                            </div>
                            <div className='col-md-6'>
                                <h1>{users.firstname}&nbsp;{users.middlename}&nbsp;{users.lastname}</h1>
                            </div>
                            <br /><br /><br />
                        </div>
                        <div class="row">
                            <div className='col-md-6'>

                                {social.avatar && <img className="postImg" src={social.avatar} alt="" />}


                            </div>
                            <div className='col-md-6'>
                                <h2><RiMailStarLine style={{ color: "#00B74A" }} /> <span>  &nbsp; {users.email}</span></h2>
                                <h2><RiPhoneLine style={{ color: "#00B74A" }} /> <span>  &nbsp;{users.phonenumber} </span></h2>
                                <h2><RiUsbFill style={{ color: "#00B74A" }} /> <span>  &nbsp; {users.idnumber}</span></h2>

                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className='iconstyle'>
                        <i class="fab fa-facebook-f" style={{ color: "#3b5998" }}></i> &nbsp;<span>{social.facebook}</span>
                        &nbsp;&nbsp;&nbsp;


                        <i class="fab fa-twitter" style={{ color: "#55acee" }}></i> &nbsp;<span>{social.twitter}</span>
                        &nbsp;&nbsp;&nbsp;

                        <i class="fab fa-linkedin-in" style={{ color: "#1266f1" }}></i> &nbsp;<span>{social.linkedin}</span>
                        &nbsp;&nbsp;&nbsp;


                        <i class="fab fa-instagram" style={{ color: "#ac2bac" }}></i> &nbsp;<span>{social.instagram}</span>
                    </div>

                </div>


            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit</h5>
                            <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="md-form">
                                <input type="text" id="form2Example1" class="form-control" placeholder='First Name' />

                            </div><br />
                            <div class="md-form">
                                <input type="text" id="form2Example1" class="form-control" placeholder='Last Name' />

                            </div><br />
                            <div class="md-form">
                                <input type="text" id="form2Example1" class="form-control" placeholder='Middle Name' />

                            </div><br />
                            <div class="md-form">
                                <input type="number" id="form2Example1" class="form-control" placeholder='Phone Number' />

                            </div><br />
                            <div class="md-form">
                                <input type="number" id="form2Example1" class="form-control" placeholder='ID Number' />

                            </div><br />

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add or Create Profile */}
            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Edit</h5>
                                <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                            </div>
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
                            <form encType="multipart/form-data" className="writeForm" onSubmit={handeleSubmit}>
                                <div className='profileStyle'>
                                    {file && (
                                        <img className="writeImg" src={file} alt="" />
                                    )}
                                    <label htmlFor="fileInput">Upload Images&nbsp;
                                        <i className="writeIcon fas fa-plus"></i><br /><br />

                                    </label>
                                    <div class="md-form">
                                        <input type="file" id="fileInput" style={{ display: "none" }} name="image"
                                            onChange={handelUpload}
                                        />

                                    </div><br />
                                    <div class="md-form">
                                        <input type="text" id="form2Example1" class="form-control" placeholder='Facebook Handle' required
                                            onChange={(e) => setFacebook(e.target.value)}
                                        />

                                    </div><br />
                                    <div class="md-form">
                                        <input type="text" id="form2Example1" class="form-control" placeholder='Twitter Handle' required
                                            onChange={(e) => setTwitter(e.target.value)}
                                        />

                                    </div><br />
                                    <div class="md-form">
                                        <input type="text" id="form2Example1" class="form-control" placeholder='LinkedIn' required
                                            onChange={(e) => setLinkedin(e.target.value)}
                                        />

                                    </div><br />
                                    <div class="md-form">
                                        <input type="text" id="form2Example1" class="form-control" placeholder='Instagram' required
                                            onChange={(e) => setInstagram(e.target.value)}
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
export default Profile;