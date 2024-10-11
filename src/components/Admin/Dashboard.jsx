// src/components/Admin/Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Add your dashboard widgets here */}
        <div className="p-4 bg-white rounded shadow">Total Quotations: 50</div>
        <div className="p-4 bg-white rounded shadow">Total Billing: $10,000</div>
        {/* More widgets */}
      </div>
    </div>
  );
};

export default Dashboard;
