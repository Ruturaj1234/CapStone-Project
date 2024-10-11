// src/components/Admin/History.js
import React, { useEffect, useState } from 'react';

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Fetch history from backend
    fetch('your-backend-url/getHistory.php')
      .then(res => res.json())
      .then(data => setHistory(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">History</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Date</th>
            <th className="py-2">Action</th>
            <th className="py-2">Performed By</th>
          </tr>
        </thead>
        <tbody>
          {history.map(h => (
            <tr key={h.id} className="text-center">
              <td className="py-2">{h.date}</td>
              <td className="py-2">{h.action}</td>
              <td className="py-2">{h.user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
