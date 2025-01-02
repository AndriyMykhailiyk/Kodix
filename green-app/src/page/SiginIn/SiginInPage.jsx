import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Link, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom'; 

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(''); 
  const navigate = useNavigate(); 

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      setError('Користувача не знайдено. Зареєструйтесь спочатку.');
      return;
    }

    if (userData.email === formData.email && userData.password === formData.password) {
      setError(''); 
      alert('Вхід успішний! Ви будете перенаправлені на головну сторінку.');
      navigate('/');
    } else {
      setError('Невірний email або пароль.');
    }
  };

  return (
    <>
      <section style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <img 
          src='../../../src/assets/image/3 1 (1).png' 
          style={{
            height: "42px",
            paddingBottom: '40px'
          }}
          alt="logo"
        />
        <Box 
          sx={{
            display: "flex",
            padding: "32px",
            width: "751px",
            border: "1px solid black",
            borderRadius: "25px",
            background: "linear-gradient(to right, white 60%, black 50%)"
          }}
        >
          <form onSubmit={handleSubmit} className='TextFieldInput'>
            <Typography variant="h5" sx={{ marginBottom: '20px' }}>Sign in</Typography>

            <div className='sectionfiled'>
              <div className='email-filed'>
                <Typography variant="body1" sx={{ marginBottom: '12px' }}>Email address</Typography>
                <TextField 
                  fullWidth 
                  placeholder='Your email address' 
                  variant="outlined" 
                  sx={{ marginBottom: '24px', width: "394px" }}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className='Password-filed'>
                <Typography variant="body1" sx={{ marginBottom: '12px' }}>Password</Typography>
                <TextField
                  fullWidth
                  placeholder="Enter Password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  sx={{ marginBottom: '20px', width: '394px' }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" onClick={handleClickShowPassword}>
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </InputAdornment>
                    ),
                  }}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              {error && (
                <Typography variant="body2" sx={{ color: 'red', marginBottom: '12px' }}>
                  {error}
                </Typography>
              )}

              <div className='Forgot password?'>
                <Typography variant="body1" sx={{ marginBottom: '32px', color: "#04AA00" }}>Forgot password?</Typography>

                <Button 
                  type="submit"
                  variant="contained" 
                  sx={{ 
                    width: "394px", 
                    backgroundColor: "#04AA00", 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    paddingLeft: '16px', 
                    paddingRight: '16px',
                    paddingTop: "16px",
                    paddingBottom: "16px"
                  }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Sign In
                </Button>
              </div>
            </div>

            <Box 
              sx={{
                display: "flex",
                marginTop: "48px",
                gap: "4px"
              }}
            >
              <Typography variant="body2">Don’t have an account?</Typography>
              <Link 
                href="#" 
                variant="body2"  
                sx={{
                  textDecoration: "none",
                  fontWeight: "700",
                  color: "#04AA00"
                }}
              >
                Sign Up
              </Link>
            </Box>
          </form>
          <div style={{
                display: "flex",
                    alignItems: "center",
             
            marginLeft:"115px"
          }}>
<div style={{
    alignItems: "center",
justifyContent: "center",
flexDirection: "column",
display: "flex",
color: "white",
fontFamily: "inter"
}}><h1>Kodix</h1>

<p style={{
    color: "#484848",
    fontFamily: "inter",
    marginBottom: "24px"
}}>Unlimited traffic, strategic<br/> support, and AI-driven upsells</p>
<a href="" style={{
    color: "#1FFF1A",
    fontSize: "16px",
    fontFamily: "inter"
}}>Learn More</a>
</div>
            
          </div>
        </Box>
      </section>
    </>
  );
};

export default SignIn;