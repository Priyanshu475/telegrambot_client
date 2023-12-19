import React, { useState, useEffect } from "react";
import { Container, Typography, Paper, Grid } from "@mui/material";
import jwt_decode from "jwt-decode";
import { Navigate } from "react-router-dom";

import Login from "./Login";

const styles = {
  body: {
    background: '#D5D5D5',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    padding: '32px',
    textAlign: 'center',
    maxWidth: '400px',
  },
  welcomeText: {
    marginBottom: '16px',
  },
  loginButton: {
    marginTop: '16px',
  },
};

const Home = () => {
  const [credentialResponse, setCredentialResponse] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (credentialResponse !== null) {
      var decoded = jwt_decode(credentialResponse.credential);
      setUser(decoded.name);
    }
  }, [credentialResponse]);

  return (
    <div style={styles.body}>
      {user === null ? (
        <Container>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={8} md={6} lg={4}>
              <Paper elevation={3} style={styles.paper}>
                <Typography variant="h4" style={styles.welcomeText}>
                  Welcome to Weather Bot Admin Panel
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Please login to access the dashboard.
                </Typography>
                <center><Login setCredentialResponse={setCredentialResponse} /></center>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      ) : (
        <div>
          <Navigate to="/dashboard" />
        </div>
      )}
    </div>
  );
};

export default Home;
