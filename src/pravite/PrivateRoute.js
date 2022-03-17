// import { Navigate, Outlet} from 'react-router-dom';

// const ProtectedRoutes=({isLogged})=>{

//     console.log("user Login",isLogged);

//     return isLogged?<Outlet/>:<Navigate to="/login"/>

// }
// export default ProtectedRoutes;


// import React from 'react';
// import  { Outlet, Navigate } from "react-router-dom";

// const ProtectedRoutes = ({ component: Component, ...rest}) => {
//     return <Outlet {...rest} component={(props) =>{
//         const token = window.localStorage.getItem('token');
//         if(token){
//             return <Component {...props} />
//         }else{
//             return <Navigate to={`/login`} />
//         }
//     }} />
// }

// export default ProtectedRoutes;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate, Outlet} from 'react-router-dom';

function ProtectedRoute({ component: Component, ...restOfProps }) {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    console.log("this", isAuthenticated);
  
    return (
      <Route
        {...restOfProps}
        render={(props) =>
          isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
        }
      />
    );
  }
  
  export default ProtectedRoute;