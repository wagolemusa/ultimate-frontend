import React, {  useState,  } from 'react'
import axios from 'axios';

import Sidebar from './Sidebar';
let token = localStorage.getItem('token')

function Createprofile() {
    const [file, setFile] = useState("")
    const [facebook, setFacebook] = useState("")
    const [twitter, setTwitter] = useState("")
    const [linkedin, setLinkedin] = useState("")
    const [instagram, setInstagram] = useState("")
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    const handelUpload = async (e) =>{
        try{
            const image = e.target.files[0]
            const formData = (new FormData());
            formData.append("avatar", image);
            const {data} = await axios.post("http://localhost:5000/profiles/upload", formData, {
                headers: {
                    'Authorization': token,
                    "Content-Type": "multipart/form-data",
                    "Access-Control-Allow-Origin": "*"
                }
            })
            setFile(data)
            
        }catch(error){
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
            avatar:file,

        }
        const response = await axios.post("http://localhost:5000/profiles/api/create-profile", dataForm, {
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
                window.location.replace("/create-profile")
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
            <form  encType="multipart/form-data" className="writeForm" onSubmit={handeleSubmit}>
                <div className='profileStyle'>
                { file && (
                    <img className="writeImg" src={file} alt="" />
                )}
                      <label htmlFor="fileInput">Upload Images&nbsp;
                            <i className="writeIcon fas fa-plus"></i><br/><br/>

                        </label>
                            <div class="md-form">
                                <input type="file" id="fileInput" style={{display:"none"}} name="image"
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
         
        </>
    )
}

export default Createprofile