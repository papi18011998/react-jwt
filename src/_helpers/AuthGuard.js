import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthGuard = ({children}) => {
    let logged = false;
        if (!logged) {
            return <Navigate to="/auth/login"/>
        }
        return children;
};

export default AuthGuard;

// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import jwt from 'jsonwebtoken';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) => {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         // No JWT found, redirect to login page
//         return <Redirect to="/login" />;
//       }
//       try {
//         // Verify the JWT
//         jwt.verify(token, secretKey);
//         // JWT is valid, render the protected component
//         return <Component {...props} />;
//       } catch (error) {
//         // JWT is invalid, redirect to login page
//         return <Redirect to="/login" />;
//       }
//     }}
//   />
// );

// export default PrivateRoute;