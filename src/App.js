import React, {useEffect} from 'react';
import './App.css';
import Navbar from './componets/Navbar';
// import { Routes, Route, Router } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './componets/Login';
import Register from './componets/Register';
import Home from './componets/Home';
import ForgetPassord from './componets/Forgetpassword';
import RegisterSuccessfully from './componets/RegisterSuccessfully';
import Korgas from './componets/Korgas';

// Dashboard imports
import Profile from './dashboard/Profile';
import Dashboard from './dashboard/Dashboard';
import Business from './dashboard/Business';
import Company from './dashboard/Company';
import Createprofile from './dashboard/Createprofile';
import People from './dashboard/Peolple';

// Admin Routes
import Admin from './admin/Admin';
import GetBusiness from './admin/GetBusiness';
import GetCompany from './admin/GetCompany';
import GetPeople from './admin/GetPeople';
import GetUsers from './admin/GetUsers';
import Phonesms from './admin/Phonesms';
import Emailsms from './admin/Emailsms';
import Collector from './admin/Collector';

// User Roles
import User from './user/User';
import Code from './user/Code';
import EmailList from './user/EmailList';
import PhoneList from './user/PhoneList';
import EmailUserSms from './user/EmailUserSms'; 
import PhoneUserSms from './user/PhoneUserSms';
import CreateBusiness from './user/CreateBusiness';



import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions/authactions';


   
function App() {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch();

  useEffect(() => {
      
    if(!auth.authenticate){
        dispatch(isUserLoggedIn());
    }
    // dispatch(getInitialData());
},[auth, dispatch]);

  return (
    <div className="App">
     
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/korgas" element={<Korgas />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpassword" element={<ForgetPassord />} />
          <Route path="/registerSuccessfully" element={<RegisterSuccessfully />} />
          <Route path='/profile' element={ auth.authenticate ? <Profile />  : <Login />} />
          <Route path='/business' element={ auth.authenticate ? <Business />  : <Login /> } />
          <Route path='/company' element={ auth.authenticate ? <Company />  : <Login /> } />
          <Route path='people' element={auth.authenticate ? <People /> : <Login />} />
          <Route path='/dashboard' element={auth.authenticate ? <Dashboard /> : <Login />}  />
          <Route path='/create-profile' element={auth.authenticate ? <Createprofile /> : <Login />} />

          {/* Admin Routes */} 
          <Route path='/admin' element={auth.authenticate ? <Admin/> : <Login />}  />
          <Route path='/data-people' element={auth.authenticate ? <GetPeople/> : <Login />}  />
          <Route path='/data-business' element={auth.authenticate ? <GetBusiness/> : <Login />}  />
          <Route path='/data-company' element={auth.authenticate ? <GetCompany/> : <Login />}  />
          <Route path='/users' element={auth.authenticate ? <GetUsers/> : <Login />}  />
          <Route path='/phone' element={auth.authenticate ? <Phonesms/> : <Login />}  />
          <Route path='/emails' element={auth.authenticate ? <Emailsms/> : <Login />}  />
          <Route path='/collector' element={auth.authenticate ? <Collector/> : <Login />}  />

          {/* User Routes */}
          <Route path='/dashbord-user' element={auth.authenticate ? <User/> : <Login />}  />
          <Route path='/code' element={auth.authenticate ? <Code/> : <Login />}  />
          <Route path='/email-list' element={auth.authenticate ? <EmailList/> : <Login />}  />
          <Route path='/phone-list' element={auth.authenticate ? <PhoneList/> : <Login />}  />
          <Route path='/email-user-sms' element={auth.authenticate ? <EmailUserSms/> : <Login />}  />
          <Route path='/phone-user-sms' element={auth.authenticate ? <PhoneUserSms/> : <Login />}  />
          <Route path='/create-buz' element={auth.authenticate ? <CreateBusiness/> : <Login />}  />

          

        </Routes>
    
      </Router>
    </div>
  );
}

export default App;
