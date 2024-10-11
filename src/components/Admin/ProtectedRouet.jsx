// src/components/Admin/ProtectedRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isAuthenticated = () => {
  // Implement your authentication logic, e.g., check token in localStorage
  return localStorage.getItem('isAdmin') === 'true';
};

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? <Component {...props} /> : <Redirect to="/admin/login" />
    }
  />
);

export default ProtectedRoute;
