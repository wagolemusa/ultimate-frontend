import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
let token = localStorage.getItem('token')

const GetPeople = () => {

  const [people, setPeople ] = useState()

  const getPeople = () =>{
    axios.get('https://ultimatebackend.herokuapp.com/api/people', {

      headers: {
        'Authorization': token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        const myPeople = res.data.data;
        setPeople(myPeople);
        
      })
  }
  useEffect(() => getPeople(), []);
  
  console.log(people)
    return(
        <>
        <Sidebar />
       <div className='profileside'>
           <div class="container">
           <div class="table-responsive">
  <table class="table">
    <thead>

      <tr>
        <th scope="col">Name</th>
        <th scope="col">Phone</th>
        <th scope="col">Status</th>
        <th scope="col">District</th>
        <th scope="col">Town</th>
      </tr>
    </thead>
    <tbody>
      {
        people?.map((peopledata) => {
          return (
            <tr>
            <td>{peopledata.name}</td>
            <td>{peopledata.phonenumber}</td>
            <td>{peopledata.status}</td>
            <td>{peopledata.district}</td>
            <td>{peopledata.town}</td>
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

export default GetPeople;
