import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import Header from "../../components/Header/Header";
import { Box, Typography,Button } from "@mui/material";

const PostDetail = ({ postId }) => {
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error('Error fetching post:', error));
  }, [postId]);

  useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((data) => setRelatedPosts(data.slice(0, 5))) 
      .catch((error) => console.error('Error fetching related posts:', error));
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  const styles = {
    card: {
      display: "flex",
      marginBottom: '44px',
      borderRadius: '8px',
      paddinLeft: "0px"
    },
    imagePlaceholder: {
      minWidth: '226px',
      height: '136px',
      backgroundColor: '#f0f0f0',
      borderRadius: '8px',
      marginRight: "20px"
    },
    date: {
      fontSize: '14px',
      color: '#a0a0a0',
      marginTop: '8px',
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: "0"
    },
    description: {
      fontSize: '14px',
      color: '#666',
    },
    link: {
      textDecoration: 'none',
      color: 'black',
    },
  };

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <div style={{ padding: "25px 148px" }}>
          <h1 style={{
            margin: '0',
            fontSize: "32px",
            fontWeight: 600,
            lineHeight: "38px",
            fontFamily: "inter",
            color: "#000000",
            paddingBottom: "8px"
          }}>{post.title}</h1>
          <p style={{
            margin: '0',
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "16px",
            fontFamily: "inter",
            color: "#a0a0a0",
            paddingBottom: "20px"
          }}>{post.body}</p>
       <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: 3, height: '100%' }}>
       <Box sx={{ display: 'flex', alignItems: "center",marginBottom: "20PX"}}>
  <Typography variant="subtitle1" sx={{ marginRight: 2, color: "#666666" }}>
    WEDNESDAY 12, MARCH 2024
  </Typography>
  <div style={{
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "5px 5px",
    border: "1px solid #e6e6e6",
    borderRadius: "50px"
  }}>
    <div style={{
      width: "24px",
      height: "24px",
      backgroundColor: "#c6ccc6",
      borderRadius: "50px"
    }}></div>
    <Typography variant="subtitle2" sx={{ marginRight: 2, fontSize: 18 }}>
      John Doe
    </Typography>
  </div>
  </Box>
  <div style={{
    fontFamily: 'Arial, sans-serif',
    borderRadius: '24px',
    width: '703px',
    height: '310px',
    textAlign: 'center',
    backgroundColor: "#F5F5F5",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
    overflow: 'hidden',
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
    zIndex: 1,
    display: "flex"
  }}>
        <p style={{
  fontWeight: "500",
  fontFamily: "sans-serif"
        }}>Share to</p>
        <div style={{
            marginLeft: "12px",
            gap:"9px",
            display: "flex", alignItems: 
            "center"
        }}>
            <img title='facebook' alt='facebook' src='../../../src/assets/icons/social_media_icons/fave.png'width={24} height={24}/>
            <img title='facebook' alt='facebook' src='../../../src/assets/icons/social_media_icons/X.png'width={24} height={24}/>
            <img title='facebook' alt='facebook' src='../../../src/assets/icons/social_media_icons/youtube.png'width={24} height={24}/>

        </div>
      </div>
</Box>


        </div>

        <div style={{
          zIndex: 1
        }}>
          <div style={{
            display: "flex",
            alignItems: "center", 
            gap: "8px",
            paddingBottom: "48px"
          }}>
          <img src="../../../src/assets/icons/red.png" alt="red" width={20} height={20}/>
          <h2 style={{
            fontFamily: "sans-serif"
          }}>Related Articles</h2>
          

          <Button
                  variant="outlined"
                  sx={{
                    borderColor: '#e6e6e6',
                    color: 'black',
                    textTransform: 'none',
                    fontSize: "16px",
                    borderRadius: '34px',
                    padding: "10px 24px",
                    marginLeft: "194px",
                    position: 'relative', // або 'absolute', якщо необхідно
                    zIndex: 10, // значення 10 гарантує, що елемент зверху інших
                    backgroundColor: "white"
                  }}
                >
                  Read more
                </Button>

         </div> 
          {relatedPosts.map((relatedPost) => (
            <div key={relatedPost.id} style={styles.card}>
              <div style={styles.imagePlaceholder}></div>
              <div style={{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
}}>
  <p style={styles.date}>WEDNESDAY 12, MARCH 2024</p>
  <Link to={`/post/${relatedPost.id}`} style={{ ...styles.link, textDecoration: 'none', fontFamily: "sans-serif", }}>
    <h2 style={styles.title}>{relatedPost.title}</h2>
  </Link>
  <p style={styles.description}>
    {relatedPost.body.length > 50 ? `${relatedPost.body.substring(0, 50)}...` : relatedPost.body}
  </p>
</div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
