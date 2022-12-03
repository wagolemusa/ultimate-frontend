import React, { useEffect, useState} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

let token = localStorage.getItem('token')
const GetCompany = () => {
    
  const [company, setCompany ] = useState()

  const getCompany = () =>{
    axios.get('https://blockgold.onrender.com/api/company', {

      headers: {
        'Authorization': token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        const myCompany = res.data.data;
        setCompany(myCompany);
        
      })
  }
  useEffect(() => getCompany(), []);

  console.log(company)


    return(
        <>
        <Sidebar />
       <div className='profileside'>
           <div class="container">
           <div class="table-responsive">
  <table class="table">
    <thead>
    <tr>
        <th scope="col">Company_Name</th>
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
        company?.map((companydata) => {
          return (
            <tr>
            <td>{companydata.company_name}</td>
            <td>{companydata.campany_category}</td>
            <td>{companydata.phone}</td>
            <td>{companydata.phone1}</td>
            <td>{companydata.email}</td>
            <td>{companydata.email1}</td>
            <td>{companydata.status}</td>
            <td>{companydata.website}</td>
            <td>{companydata.sociallink}</td>
            <td>{companydata.district}</td>
            <td>{companydata.town}</td>
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

export default GetCompany;




