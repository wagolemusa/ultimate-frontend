import React, {useEffect} from 'react';
import './App.css';
import Navbar from './componets/Navbar';
// import { Routes, Route, Router } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route ,Navigate} from 'react-router-dom';
import ProtectedRoute from './pravite/PrivateRoute';
import Login from './componets/Login';
import Register from './componets/Register';
import Home from './componets/Home';
import ForgetPassord from './componets/Forgetpassword';
import RegisterSuccessfully from './componets/RegisterSuccessfully';
import NotFound from './NotFound';

// Dashboard imports
import Profile from './dashboard/Profile';
import Nextofking from './dashboard/Nextofking';
import Account from './dashboard/Account';
import Banck from './dashboard/Banck';
import Dashboard from './dashboard/Dashboard';

import { Context } from './context/Context'
import Auth from './pravite/Auth';
import { useDispatch, useSelector } from 'react-redux';
// import isUserLoggedIn from './pravite/Login';
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

  // const { user } = useContext(Context)
  // const PrivateRoute = ({ component: Component, ...rest }) => (
  //   <Routes
  //     {...rest}
  //     render={props =>
  //       Auth.getAuth() ? (
  //         <Component {...props} />
  //       ) : (
  //         <Navigate
  //           to={{
  //             pathname: "/login"
  //           }} />
  
  //       )}
  //   />
  // );
  

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
          <Route path='/profile' element={ auth.authenticate ? <Profile />  : <Login />} />
          <Route path='/account' element={ auth.authenticate ? <Account />  : <Login />} />
          <Route path='/bank' element={ auth.authenticate ? <Banck />  : <Login /> } />
          <Route path='next' element={auth.authenticate ? <Nextofking /> : <Login />} />
          <Route path='/dashboard' element={auth.authenticate ? <Dashboard /> : <Login />}  />

          <Route path="*" component={NotFound} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
