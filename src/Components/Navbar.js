import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './Logout';

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#333',
    color: 'white',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
    display: 'inline-block',
    backgroundColor: '#555',
    marginLeft: '10px',
    fontSize: '14px',
    fontWeight: 'bold',
  
    // Hover effect
    ':hover': {
      backgroundColor: '#777',
    },
  };

  return (
    <div style={navbarStyle}>
      <LogoutButton />
      <Link to="/dashboard" style={linkStyle}>
        Dashboard
        </Link>
      <Link to="/settings" style={linkStyle}>
        Update Settings
      </Link>
    </div>
  );
};

export default Navbar;
