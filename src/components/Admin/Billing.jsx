// src/components/Admin/Billing.js
import React, { useEffect, useState } from 'react';

const Billing = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    // Fetch invoices from backend
    fetch('your-backend-url/getInvoices.php')
      .then(res => res.json())
      .then(data => setInvoices(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Billing</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Invoice ID</th>
            <th className="py-2">Client</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map(inv => (
            <tr key={inv.id} className="text-center">
              <td className="py-2">{inv.id}</td>
              <td className="py-2">{inv.client}</td>
              <td className="py-2">${inv.amount}</td>
              <td className="py-2">{inv.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Billing;
