// import { Navigate, Outlet} from 'react-router-dom';

// const ProtectedRoute=({isLogged})=>{

//     console.log("user Login",isLogged);

//     return isLogged?<Outlet/>:<Navigate to="/login"/>

// }
// export default ProtectedRoute;


// import React from 'react';
// import  { Outlet, Navigate } from "react-router-dom";

// const ProtectedRoute = ({ component: Component, ...rest}) => {
//     return <Outlet {...rest} component={(props) =>{
//         const token = window.localStorage.getItem('token');
//         if(token){
//             return <Component {...props} />
//         }else{
//             return <Navigate to={`/login`} />
//         }
//     }} />
// }

// export default ProtectedRoute;


// import React from 'react';
// import { BrowserRouter as Router, Routes } from 'react-router-dom';
// import { Navigate, Outlet} from 'react-router-dom';

// function ProtectedRoute({ component: Component, ...restOfProps }) {
//     const isAuthenticated = localStorage.getItem("isAuthenticated");
//     console.log("this", isAuthenticated);

//     return (
//       <Routes
//         {...restOfProps}
//         render={(props) =>
//           isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
//         }
//       />
//     );
//   }

//   export default ProtectedRoute;

import { Routes, Navigate } from 'react-router-dom';
import Auth from "./Auth";
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Routes
    {...rest}
    render={props =>
      Auth.getAuth() ? (
        <Component {...props} />
      ) : (
        <Navigate
          to={{
            pathname: "/"
          }} />

      )}
  />
);

export default PrivateRoute