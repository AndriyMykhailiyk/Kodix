import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Стан для відстеження авторизації
  const navigate = useNavigate();

  // Перевіряємо, чи є дані користувача в localStorage при завантаженні компонента
  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      setIsLoggedIn(true);
    }
  }, []);

  // Функція для виходу
  const handleLogout = () => {
    localStorage.removeItem('userData'); // Видаляємо дані користувача
    setIsLoggedIn(false); // Оновлюємо стан
    navigate('/'); // Перенаправляємо на головну сторінку
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: 'white',
        color: 'black',
        paddingY: '18px', // Відступи зверху і знизу
      }}
    >
      <Box sx={{ px: '35px' }}> {/* Збільшено відступи зліва і справа */}
        <Container maxWidth={false} sx={{ padding: 0 }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: 0 }}>
            {/* Меню навігації */}
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

            {/* Логотип */}
            <Box>
              <img
                src="../../../src/assets/image/3 1 (1).png" // Замініть на правильний шлях до логотипу
                alt="Logo"
                style={{
                  height: '35px', // Налаштуйте висоту логотипу
                  objectFit: 'contain',
                }}
              />
            </Box>

            {/* Кнопки */}
            <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              {isLoggedIn ? (
                // Якщо користувач авторизований, показуємо кнопку "Log Out"
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
                // Якщо користувач не авторизований, показуємо кнопки "Log In" та "Sign Up"
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