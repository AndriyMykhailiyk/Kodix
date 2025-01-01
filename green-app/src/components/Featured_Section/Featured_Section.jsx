import React from 'react';
import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Icon from '../../assets/icons/Icon.png';

const GlobalClimateSummit = () => {
  return (
    <Container maxWidth={1500} sx={{ marginTop: 4, textAlign: 'center' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 3 }}>
          <img
            src={Icon} // Шлях до вашого зображення
            alt="Featured"
            width={18} // Ширина зображення
            height={18} // Висота зображення
            style={{ marginRight: 8 }} // Відступ між зображенням і текстом
          />
          <Typography variant="h5" component="h1" gutterBottom sx={{ fontWeight: 'bold', margin: 0 }}>
            Featured
          </Typography>
        </Box>
        <Typography variant="h3" component="h2" gutterBottom sx={{ marginBottom: 2, fontWeight: "bolder", fontFamily: "Inter" }}>
          Global Climate Summit <br/>Urges Immediate Action
        </Typography>
        <Typography 
          variant="body1" 
          gutterBottom 
          sx={{ 
            marginBottom: 3, 
            fontFamily: 'Inter', 
            fontSize: 16, 
            textAlign: 'justify',
            alignItems: "center", 
            color:"#808080"
          }}
        >
          Leaders from around the world gathered for a global climate summit, emphasizing the urgent need for coordinated action to address climate change.
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 3 }}>
          <Typography variant="subtitle1" sx={{ marginRight: 2, color:"#666666" }}>
            WEDNESDAY 12, MARCH 2024
          </Typography>
          <Typography variant="subtitle2" sx={{ marginRight: 2, fontSize: 18, }}>
            John Doe
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default GlobalClimateSummit;