// src/components/Common/Header.js
import React from "react";

const header = () => {
  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    window.location.href = "/admin/login";
  };

  return (
    <header className="flex justify-end p-4 bg-gray-200">
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </header>
  );
};

export default header;
