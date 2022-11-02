import React, { useState, useEffect} from "react"; 
import Sidebar from "./Sidebar";
import axios from "axios";
let token = localStorage.getItem('token')

const GetBusiness = () =>{

  const [business, setBusiness ] = useState()

  const getBusiness = () =>{
    axios.get('https://ultimatebackend.herokuapp.com/api/business', {

      headers: {
        'Authorization': token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        const myBusines = res.data.data;
        setBusiness(myBusines);
        
      })
  }
  useEffect(() => getBusiness(), []);

  console.log(business)

    return(
        <>
        <Sidebar />
       <div className='profileside'>
           <div class="container">
           <div class="table-responsive">
  <table class="table">
    <thead>
      <tr>

        <th scope="col">B/s_Name</th>
        <th scope="col">category</th>
        <th scope="col">Phone</th>
        <th scope="col">Phone_NO_1</th>
        <th scope="col">Email</th>
        <th scope="col">Email_Two</th>
        <th scope="col">Status</th>
        <th scope="col">Website</th>
        <th scope="col">Social</th>
        <th scope="col">District</th>
        <th scope="col">Town</th>
      </tr>
    </thead>
    <tbody>
    {
        business?.map((businesdata) => {
          return (
            <tr>
            <td>{businesdata.business_name}</td>
            <td>{businesdata.category}</td>
            <td>{businesdata.phone}</td>
            <td>{businesdata.phone1}</td>
            <td>{businesdata.email}</td>
            <td>{businesdata.email1}</td>
            <td>{businesdata.status}</td>
            <td>{businesdata.sociallink}</td>
            <td>{businesdata.district}</td>
            <td>{businesdata.towm}</td>
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

export default GetBusiness
