// src/components/Admin/Sidebar.js
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const Sidebar = () => {
  let { url } = useRouteMatch();

  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen">
      <div className="p-4 text-2xl font-bold">Admin Panel</div>
      <nav className="mt-10">
        <Link to={`${url}`} className="block py-2.5 px-4 rounded hover:bg-gray-700">
          Dashboard
        </Link>
        <Link to={`${url}/quotations`} className="block py-2.5 px-4 rounded hover:bg-gray-700">
          Quotations
        </Link>
        <Link to={`${url}/billing`} className="block py-2.5 px-4 rounded hover:bg-gray-700">
          Billing
        </Link>
        <Link to={`${url}/history`} className="block py-2.5 px-4 rounded hover:bg-gray-700">
          History
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;

