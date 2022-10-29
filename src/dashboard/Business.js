import React, { useState } from "react";
import Sidebar from "./Sidebar";
import axios from 'axios'


let token = localStorage.getItem('token')

const Business = () => {
    const [ business_name, setBusiness_name ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ phone1, setPhone1 ] = useState('')
    const [ email , setEmail ] = useState('')
    const [ email1, setEmail1 ] = useState('')
    const [ status, setStatus ] = useState('')
    const [ website, setWebsite ] = useState('')
    const [ sociallink, setSociallink ] = useState('')
    const [ district, setDistrict ] = useState('')
    const [ town, setTown ] = useState('')
    const [ category, setCategory ] = useState('')
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handeleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const businessForm = {
            business_name,
            category,
            phone,
            phone1,
            email,
            email1,
            status,
            website,
            sociallink,
            district,
            town
        }

        const response = await axios.post("https://ultimatebackend.herokuapp.com/api/business", businessForm, {
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
                window.location.replace("/business")
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
                        <h4>Business Informations</h4>

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

                                <input type="text" class="form-control" id="name" placeholder="Business Name" name="name" 
                                    onChange={(e) => setBusiness_name(e.target.value)}
                                />

                            </div>

                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1"
                                onChange={(e) => setCategory(e.target.value)}
                                // category quries
                                >
                                    <option>Business Category</option>
                                    <option>Hardware</option>
                                    <option>Soloon</option>
                                    <option>Barber</option>
                                    <option>5</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <input type="number" class="form-control" id="phone" placeholder="Phone No1." name="phone" 
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div class="form-group">
                                <input type="number" class="form-control" id="phone" placeholder="Phone No2." name="phone"
                                     onChange={(e) => setPhone1(e.target.value)}
                                />
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" id="name" placeholder="Email-One" name="email"
                                     onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" id="name" placeholder="Email-Two" name="email" 
                                     onChange={(e) => setEmail1(e.target.value)}
                                />
                            </div>

                            <div class="form-group">
                                <input type="text" class="form-control" id="name" placeholder="WebSite Url" name="subject" 
                                     onChange={(e) => setWebsite(e.target.value)}
                                />
                            </div>

                            <div class="form-group">
                                <input type="text" class="form-control" id="name" placeholder="Facebook" name="subject" 
                                    onChange={(e) => setSociallink(e.target.value)}
                                />
                            </div>

                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1"
                                    onChange={(e) => setDistrict(e.target.value)}
                                >
                                    <option>District</option>
                                    <option>kampala</option>
                                    <option>mukono</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="name" placeholder="Town" name="subject" 
                                     onChange={(e) => setTown(e.target.value)}
                                />
                            </div>

                            <div class="form-group">
                                <input type="text" class="form-control" id="name" placeholder="Town" name="subject" />
                            </div>

                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1"
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option>Business Status</option>
                                    <option>Big</option>
                                    <option>Wholesale</option>
                                    <option>Small</option>
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

export default Business