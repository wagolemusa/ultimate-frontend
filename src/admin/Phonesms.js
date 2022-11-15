import React,{ useState} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
let token = localStorage.getItem('token')
const Phonesms = () => {

    const [to, setTo ] = useState('')
    const [message, setMessage ] = useState('')
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handeleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const dataForm = {
            to,
            message
        }
        const response = await axios.post("http://localhost:5000/api/phone/sms", dataForm, {
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
                window.location.replace("/phone")
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
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Enter phones</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="2567888888" 
                              onChange={(e) => setTo(e.target.value)}
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Write Messages</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"
                              onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Create</button>

                        </form>
                    </div>

                </div>
            </div>

        </>

    )
}

export default Phonesms;

