import React, { useEffect, useState} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
let token = localStorage.getItem('token')


const Admin = () => {

  const [countBus, setCountBus ] = useState()
  const [countCompany, setCountCompany] = useState()
  const [countpeople, setCountPeople ] = useState()
  const [countuser, setCountuser ] = useState()

  //  Count Business Functions
  const getBusiness = () =>{
    axios.get('https://ultimatebackend.herokuapp.com/api/business', {
      headers: {
        'Authorization': token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        const countb = res.data.countbusiness;
        setCountBus(countb)
        
      })
  }

  // count Companies function
  const getCompany = () =>{
    axios.get('https://ultimatebackend.herokuapp.com/api/company', {
      headers: {
        'Authorization': token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        const countComp = res.data.countCompany;
        setCountCompany(countComp)
      })
  }

  // Count People function
  const getPeople = () =>{
    axios.get('https://ultimatebackend.herokuapp.com/api/people', {
      headers: {
        'Authorization': token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        const countpeo = res.data.countPeople;
        setCountPeople(countpeo)
      })
  }

   // Count People function
   const getUsers = () =>{
    axios.get('https://ultimatebackend.herokuapp.com/users/api/authenticate', {
      headers: {
        'Authorization': token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        const countU = res.data.countUser;
        setCountuser(countU)
      })
  }

  console.log(countuser)
  useEffect(() => getBusiness(), getCompany(), getPeople(), getUsers(), []);


    return (
        <>
        <Sidebar />
       <div className='profileside'>
           <div class="container">
                
        <div class="row mb-3">
          <div class="col-xl-3 col-lg-6">
            <div class="card card-inverse1 card-success">
              <div class="card-block">
                <div class="rotate">
                <i class="fab fa-avianex"></i>
                </div>
                
                <h1 class="display-1">{countBus}</h1>
                <h6 class="text-uppercase">Business</h6>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6">
            <div class="card card-inverse2 card-danger">
              <div class="card-block">
                <div class="rotate">
                <i class="fas fa-signal"></i>
                </div>
                <h1 class="display-1">{countCompany}</h1>
                <h6 class="text-uppercase">companies</h6>

              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6">
            <div class="card card-inverse3 card-info">
              <div class="card-block">
                <div class="rotate">
                <i class="fas fa-star-and-crescent"></i>
                </div>
                <h1 class="display-1">{countpeople}</h1>
                <h6 class="text-uppercase">Peolple</h6>

              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6">
            <div class="card card-inverse4 card-warning">
              <div class="card-block">
                <div class="rotate">
                <i class="fas fa-om"></i>
                </div>
                <h1 class="display-1">{countuser}</h1>
                <h6 class="text-uppercase">Users</h6>

              </div>
            </div>
          </div>
        </div>
     
           </div>
       </div>
   </>
    )
}

export default Admin;

