import React, { useState } from 'react';

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for login authentication
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-[#e67e22] mb-8">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#e67e22] transition duration-300"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#e67e22] transition duration-300"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#e67e22] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#d35400] transition-all duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
           <a href="/register" className="text-[#e67e22] hover:underline"></a>
        </p>
      </div>
    </div>
  );
};

export default login;
