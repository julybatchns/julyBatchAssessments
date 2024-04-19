import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  function handleLogout() {
    setIsLoggedIn(false);
  }

  if (!isLoggedIn) {
    return navigate("/");
  }

  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard</h1>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
