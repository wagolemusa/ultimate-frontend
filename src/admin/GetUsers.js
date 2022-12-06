import React,{ useEffect, useState} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
let token = localStorage.getItem('token')

const GetUsers = () =>{

  const [userinfo, setUserinfo ] = useState()


  useEffect(() => {
    const getUser = () =>{
      axios.get('https://blockgold.onrender.com/users/api/authenticate', {
  
        headers: {
          'Authorization': token,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then((res) => {
          const myUser = res.data.user;
          setUserinfo(myUser);
          
        })
    }
    getUser()
    
  },[]);



    return(
        <>
             <Sidebar />
            <div className='profileside'>
                <div class="container">
                <div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
    
        <th scope="col">FirstName</th>
        <th scope="col">LastName</th>
        <th scope="col">Phone</th>
        <th scope="col">Id_Numbetr</th>
        <th scope="col">Email</th>
        <th scope="col">Role</th>
        <th scope="col">verified</th>

      </tr>
    </thead>
    <tbody>
    {
        userinfo?.map((userdata) => {
          return (
            <tr>
            <td>{userdata.firstname}</td>
            <td>{userdata.lastname}</td>
            <td>{userdata.phonenumber}</td>
            <td>{userdata.idnumber}</td>
            <td>{userdata.email}</td>
            <td>{userdata.role}</td>
            <td>{userdata.verified}</td>
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

export default GetUsers;


