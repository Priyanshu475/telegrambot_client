import React from "react";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const StyledButton = styled(Button)({
  marginLeft: "20px",
  borderRadius: "8px",
  fontWeight: "bold",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)",
  backgroundColor: "#f44336", // Red color
  color: "#fff", // White text
  "&:hover": {
    backgroundColor: "#d32f2f", // Darker red on hover
  },
});

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    googleLogout();
    console.log("pressed");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div>
      <StyledButton onClick={handleLogout}>Logout</StyledButton>
    </div>
  );
};

export default LogoutButton;
