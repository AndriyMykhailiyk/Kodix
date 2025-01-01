import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Link, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Money from '../../assets/icons/signup/Shape.png';
import fast from '../../assets/icons/signup/Shape (1).png';
import Shape from '../../assets/icons/signup/Shape (2).png';
import Features from '../../assets/icons/signup/ic_stars.png';
import { useNavigate } from 'react-router-dom'; // Додано useNavigate

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  });

  const navigate = useNavigate(); // Використовуємо useNavigate для перенаправлення


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
    localStorage.setItem('userData', JSON.stringify(formData));
    alert('Реєстрація успішна! Дані збережено у localStorage.');
    navigate('/signin');
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
            <Typography variant="h5" sx={{ marginBottom: '20px' }}>Sign Up</Typography>

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

              <div style={{
                display:"flex",
                gap: "24px"
              }}>
                <TextField
                  fullWidth
                  label="First Name"
                  placeholder="First Name"
                  variant="outlined"
                  sx={{
                    marginBottom: '24px',
                    width: "185px",
                    '& .MuiInputLabel-root': {
                      marginBottom: '8px'
                    }
                  }}
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <TextField 
                  fullWidth 
                  placeholder='Last Name' 
                  variant="outlined" 
                  sx={{ marginBottom: '24px', width: "185px" }}
                  name="lastName"
                  value={formData.lastName}
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
             flexDirection:"column",
            marginLeft:"115px"
          }}>
<div style={{

justifyContent: "center",
flexDirection: "column",
display: "flex",
color: "white",
fontFamily: "inter"
}}><h1>Get Your FREE <br/>
30-Days Trial Now!</h1>

<div>
  <div style={{
    display:"flex",
    gap: "10px",
    alignItems: "center"
  }}>
  <img src={Money} />
  <p style={{
    color: "white",
    lineHeight: "14px",
    fontSize: "16px",
    margin: "0px"
  }}>Absolutely FREE</p>
  </div>
  <p style={{
    color:"#484848",
    paddingBottom: "20px"
  }}>No hidden charges, No credit card required</p>

</div>
<div>
  <div style={{
    display:"flex",
    gap: "10px",
    alignItems: "center"
  }}>
  <img src={fast} />
  <p style={{
    color: "white",
    lineHeight: "14px",
    fontSize: "16px",
    margin: "0px"
  }}>Fast & Easy</p>
  </div>
  <p style={{
    color:"#484848",
    paddingBottom: "20px"
  }}>Get access instantly, no downloads required</p>

</div>
<div>
  <div style={{
    display:"flex",
    gap: "10px",
    alignItems: "center"
  }}>
  <img src={Shape} />
  <p style={{
    color: "white",
    lineHeight: "14px",
    fontSize: "16px",
    margin: "0px"
  }}>Your Own Data</p>
  </div>
  <p style={{
    color:"#484848",
    paddingBottom: "20px"
  }}>Enjoy the Free Trial with your company data</p>

</div>

<div>
  <div style={{
    display:"flex",
    gap: "10px",
    alignItems: "center"
  }}>
  <img src={Features} />
  <p style={{
    color: "white",
    lineHeight: "14px",
    fontSize: "16px",
    margin: "0px"
  }}>Unlimited Features</p>
  </div>
  <p style={{
    color:"#484848",
    paddingBottom: "20px"
  }}>Access all features of the world's #1 business software!</p>

</div>

</div>
            <p style={{
color:"white",
fontFamily: 'inter',
fontWeight: 600,
            }}>Call us at <a style={{
              color: "#1FFF1A"
            }}>800 1301 448</a></p>
          </div>
        </Box>
      </section>
    </>
  );
};

export default SignUp;