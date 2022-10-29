import React, { useState} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

let token = localStorage.getItem('token')

const People = () => {
    const [ name, setName ] = useState('')
    const [ phonenumber, setPhonenumber ] = useState('')
    const [ status, setStatus ] = useState('')
    const [ district, setDistrict ] = useState('')
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handeleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const dataForm = {
            name,
            phonenumber,
            status,
            district
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
                                <input type="number" class="form-control" id="phone" placeholder="Phone Number" name="phone" 
                                    onChange={(e) => setPhonenumber(e.target.value)}
                                />
                            </div>

                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1"
                                 onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option>Status</option>
                                    <option>vip</option>
                                    <option>middle</option>
                                    <option>local</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1"
                                 onChange={(e) => setDistrict(e.target.value)}
                                 >
                                    <option>District</option>
                                    <option>kampala</option>
                                    <option>wakiso</option>
                                    <option>mukono</option>
                                </select>
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
