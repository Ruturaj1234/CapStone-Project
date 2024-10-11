// src/pages/AdminLogin.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const history = useHistory();

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Replace with your PHP backend authentication
    fetch('your-backend-url/auth.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          localStorage.setItem('isAdmin', 'true');
          history.push('/admin');
        } else {
          alert('Invalid credentials');
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full px-3 py-2 mb-4 border rounded"
          value={credentials.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full px-3 py-2 mb-4 border rounded"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;


