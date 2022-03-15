import './App.css';

import Navbar from './componets/Navbar';
// import { Routes, Route, Router } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './componets/Login';
import Register from './componets/Register';
import Home from './componets/Home';
import ForgetPassord from './componets/Forgetpassword';
import RegisterSuccessfully from './componets/RegisterSuccessfully';

// Dashboard imports
import Profile from './dashboard/Profile';
import Nextofking from './dashboard/Nextofking';
import Account from './dashboard/Account';
import Banck from './dashboard/Banck';
import Dashboard from './dashboard/Dashboard';

function App() {
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
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/account' element={<Account />} />
          <Route path='/bank' element={<Banck /> } />
          <Route path='next' element={<Nextofking /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
