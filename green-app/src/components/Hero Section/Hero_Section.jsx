import React from 'react';

const ImageBlock = () => {
  return (
    <div className='wrapperwew'>
    
      <div style={{
          fontFamily: 'Arial, sans-serif',
          borderRadius: '24px',
          width: '1160px',
          height: '500px',
          margin: '0 auto 22px', 
          textAlign: 'center',
          backgroundColor: "#F5F5F5",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative', 
          zIndex: 1,
          overflow: 'hidden'
        }}>
   
        <div style={{
          position: 'absolute',
          left: '20px',
          bottom: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          color: '#FFFFFF',
          padding: '8px 16px',
          borderRadius: '4px',
          fontSize: '14px',
          zIndex: 2 
        }}>
          Photo by Antara
        </div>
      </div>

      <div style={{
          fontFamily: 'Arial, sans-serif',
          borderRadius: '24px',
          margin: '0 auto', 
          padding: '10px',
          textAlign: 'center',
          color: '#333333',
          fontSize: '16px',
          display: 'flex',
          justifyContent: "center",
          alignItems: "center",

        }}>
        <p style={{
  fontWeight: "500"
        }}>Share to</p>
        <div style={{
            marginLeft: "12px",
            gap:"9px",
            display: "flex"
        }}>
            <img title='facebook' alt='facebook' src='../../../src/assets/icons/social_media_icons/fave.png'/>
            <img title='facebook' alt='facebook' src='../../../src/assets/icons/social_media_icons/X.png'/>
            <img title='facebook' alt='facebook' src='../../../src/assets/icons/social_media_icons/youtube.png'/>

        </div>
      </div>
    </div>
  );
};

export default ImageBlock;