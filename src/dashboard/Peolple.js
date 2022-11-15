import React, { useState} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import District from  "./District"

let token = localStorage.getItem('token')

const People = () => {
    const [ name, setName ] = useState('')
    const [ phonenumber, setPhonenumber ] = useState('')
    const [ status, setStatus ] = useState('')
    const [ country, setCountry] = useState('')
    const [ district, setDistrict ] = useState('')
    const [ town, setTown] = useState('')
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handeleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const dataForm = {
            name,
            phonenumber,
            status,
            country,
            district,
            town
        }

        const response = await axios.post("https://ultimatebackend.herokuapp.com/api/people", dataForm, {
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
                window.location.replace("/people")
             
            }

            if (response?.data?.errors) {
                const messages = response.data.errors.map(item => item.msg)

                setError(messages)
            }    }


    return (
        <>
            <Sidebar />
            <div className='profileside'>
                <div class="container">

                    <div class="form-sec">
                        <h4>People Informations</h4>

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

                    <form onSubmit={handeleSubmit}>
                            <div class="form-group">

                                <input type="text" class="form-control" id="name" placeholder="Name" name="name" 
                                    onChange={(e) => setName(e.target.value)}
                                />
                               
                            </div>
                 
                            <div class="form-group">
                                <input type="number" class="form-control" id="phone" placeholder="256725446xxx" name="phone" 
                                    onChange={(e) => setPhonenumber(e.target.value)}
                                />
                            </div>
                            
                            <div className="form-group">
                            <input list="browsers" name="browser" id="browser" class="form-control" placeholder="Status"
                             onChange={(e) => setStatus(e.target.value)}
                            />
                            <datalist id="browsers">
                                <option value="vip"/>
                                <option value="middle"/>
                                <option value="local"/>
                            </datalist>
                            </div>
                            <div className="form-group">
                            <input list="browsers1" name="browser1" id="browser1" class="form-control" placeholder="Country"
                             onChange={(e) => setCountry(e.target.value)}
                            />
                            <datalist id="browsers1">
                                <option value="uganda"/>
                                <option value="kenya"/>
                            </datalist>
                            </div>

                            <div className="form-group">
                            <input list="browsers2" name="browser2" id="browser1" class="form-control" placeholder="District"
                             onChange={(e) => setDistrict(e.target.value)}
                            />
                            <datalist id="browsers2">
                                <District/>
                            </datalist>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="name" placeholder="Town" name="subject" 
                                     onChange={(e) => setTown(e.target.value)}
                                />
                            </div>
                            <button type="submit" class="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default People;
