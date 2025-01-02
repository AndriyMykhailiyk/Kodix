import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const navigate = useNavigate();


  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      setIsLoggedIn(true);
    }
  }, []);


  const handleLogout = () => {
    localStorage.removeItem('userData'); 
    setIsLoggedIn(false); 
    navigate('/');
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: 'white',
        color: 'black',
        paddingY: '18px', // 
      }}
    >
      <Box sx={{ px: '35px' }}> 
        <Container maxWidth={false} sx={{ padding: 0 }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: 0 }}>
            <Box sx={{ display: 'flex', gap: '32px', alignItems: 'center', color: "#808080" }}>
              <Typography variant="body1" sx={{ cursor: 'pointer', fontWeight: 500 }}>
                Home
              </Typography>
              <Typography variant="body1" sx={{ cursor: 'pointer', fontWeight: 500 }}>
                Feature
              </Typography>
              <Typography variant="body1" sx={{ cursor: 'pointer', fontWeight: 500 }}>
                Blog
              </Typography>
              <Typography variant="body1" sx={{ cursor: 'pointer', fontWeight: 500 }}>
                Testimonials
              </Typography>
            </Box>

            <Box>
              <img
                src="../../../src/assets/image/3 1 (1).png" 
                alt="Logo"
                style={{
                  height: '35px', 
                  objectFit: 'contain',
                }}
              />
            </Box>


            <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              {isLoggedIn ? (

                <Button
                  onClick={handleLogout}
                  variant="outlined"
                  sx={{
                    borderColor: '#e6e6e6',
                    color: 'black',
                    textTransform: 'none',
                    fontSize: "16px",
                    borderRadius: '34px',
                    fontWeight: "600",
                    padding: "12.5px 35.5px"
                  }}
                >
                  Log Out
                </Button>
              ) : (
                <>
                  <Button
                    component={Link}
                    to="/signin"
                    variant="outlined"
                    sx={{
                      borderColor: '#e6e6e6',
                      color: 'black',
                      textTransform: 'none',
                      fontSize: "16px",
                      borderRadius: '34px',
                      fontWeight: "600",
                      padding: "12.5px 35.5px"
                    }}
                  >
                    Log In
                  </Button>
                  <Button
                    component={Link}
                    to="/signup"
                    variant="contained"
                    sx={{
                      bgcolor: '#04AA00',
                      borderColor: '#049900',
                      color: 'white',
                      textTransform: 'none',
                      borderRadius: '34px',
                      fontSize: "16px",
                      fontWeight: "600",
                      padding: "12.5px 35.5px"
                    }}
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </Box>
    </AppBar>
  );
};

export default Header;