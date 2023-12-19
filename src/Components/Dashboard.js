import React, { useEffect, useState } from "react";
import {  Typography, Divider } from "@mui/material";

import ManageUsers from "./ManageUsers";
import Navbar from "./Navbar";

const dashboardStyles = {
  background: "white",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const contentStyles = {
  padding: "20px",
  textAlign: "center",
};

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the user from localStorage
    const userFromLocalStorage = localStorage.getItem("user");
    if (userFromLocalStorage) {
      setUser(userFromLocalStorage);
    }
  }, []);

  return (
    <div>
      <Navbar/>
    <div style={dashboardStyles}>
      <div style={contentStyles}>
        {user ? (
          <>
            <Typography variant="h3" gutterBottom>
              Welcome {user}
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h3" gutterBottom>
              Welcome to Weather Bot Admin Panel
            </Typography>
          </>
        )}
        <h1>Dashboard</h1>
      </div>
      <Divider variant="middle" />      
      <div style={contentStyles}>
        <Typography variant="h5" gutterBottom>
          Manage Subscribers
        </Typography>
        <ManageUsers />
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
