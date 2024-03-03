import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
// let token = localStorage.getItem('token')

const Bt = () => {

  const [btinfo, setBtinfo] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [age, setAge] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  const handeleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const dataForm = {
      firstname,
      lastname,
      age,
      phone,
      email
    }
    const response = await axios.post("https://blockgold.onrender.com/api/btdata", dataForm, {
      headers: {
        // 'Authorization': token,
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
      window.location.replace("/bt")
    }

    if (response?.data?.errors) {
      const messages = response.data.errors.map(item => item.msg)

      setError(messages)
    }
  }



  const getBtdata = () => {
    axios.get('https://blockgold.onrender.com/api/getBtUser', {

      headers: {
        // 'Authorization': token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        const myUser = res.data.data
        setBtinfo(myUser);

      })
  }
  useEffect(() => getBtdata(), []);

  //   console.log(userinfo)

  return (
    <>
      <Sidebar />



      <div className='profileside'>
        <div class="container">



          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            BT-CREATE
          </button>

          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Create Employer</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                   
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
                          <label for="exampleFormControlInput1" class="form-label">FirstName</label>
                          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Firstname"
                            onChange={(e) => setFirstname(e.target.value)}
                          />
                        </div>
                        <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">LastName</label>
                          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Lastname"
                            onChange={(e) => setLastname(e.target.value)}
                          />
                        </div>
                        <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">Age</label>
                          <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Age"
                            onChange={(e) => setAge(e.target.value)}
                          />
                        </div>
                        <div class="mb-3">
                          <label for="exampleFormControlTextarea1" class="form-label">Phone</label>
                          <input type="number" class="form-control" id="exampleFormControlTextarea1" rows="6"
                            onChange={(e) => setPhone(e.target.value)}
                          ></input>
                        </div>
                        <div class="mb-3">
                          <label for="exampleFormControlTextarea1" class="form-label">email</label>
                          <input type="text" class="form-control" id="exampleFormControlTextarea1" rows="6"
                            onChange={(e) => setEmail(e.target.value)}
                          ></input>
                        </div>
                        <button type="submit" class="btn btn-primary">Create</button>

                      </form>
 
                </div>
             
              </div>
            </div>
          </div>


          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>

                  <th scope="col">FirstName</th>
                  <th scope="col">LastName</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Age</th>
                  <th scope="col">Email</th>
                  <th scope="col">UserId</th>

                </tr>
              </thead>
              <tbody>
                {
                  btinfo?.map((btdata) => {
                    return (
                      <tr>
                        <td>{btdata.firstname}</td>
                        <td>{btdata.lastname}</td>
                        <td>{btdata.phone}</td>
                        <td>{btdata.age}</td>
                        <td>{btdata.email}</td>
                        <td>{btdata.userid}</td>
                      </tr>
                    )
                  })
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bt;


