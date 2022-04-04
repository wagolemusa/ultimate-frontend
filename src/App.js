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
import CreateNextKin from './componets/CreateNextKin';
import NotFound from './NotFound';

// Dashboard imports
import Profile from './dashboard/Profile';
import Nextofking from './dashboard/Nextofking';
import Account from './dashboard/Account';
import Banck from './dashboard/Banck';
import Dashboard from './dashboard/Dashboard';
import Createprofile from './dashboard/Createprofile';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions/authactions';


function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if(!auth.authenticate){
        dispatch(isUserLoggedIn());
    }
    // dispatch(getInitialData());
},[]);

  return (
    <div className="App">
     
      <Router>

     
          

        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpassword" element={<ForgetPassord />} />
          <Route path="/registerSuccessfully" element={<RegisterSuccessfully />} />
          <Route path='/create-next-of-kin' element={<CreateNextKin /> } />
          <Route path='/profile' element={ auth.authenticate ? <Profile />  : <Login />} />
          <Route path='/account' element={ auth.authenticate ? <Account />  : <Login />} />
          <Route path='/bank' element={ auth.authenticate ? <Banck />  : <Login /> } />
          <Route path='next' element={auth.authenticate ? <Nextofking /> : <Login />} />
          <Route path='/dashboard' element={auth.authenticate ? <Dashboard /> : <Login />}  />
          <Route path='/create-profile' element={auth.authenticate ? <Createprofile /> : <Login />} />

          <Route path="*" component={NotFound} />

        </Routes>
    
      </Router>
    </div>
  );
}

export default App;
