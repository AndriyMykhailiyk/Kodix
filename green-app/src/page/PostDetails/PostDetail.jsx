import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Додано Link
import Header from "../../components/Header/Header";
import { Box, Typography } from "@mui/material";
import Red from '../../assets/icons/red.png';

const PostDetail = ({ postId }) => {
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    // Отримуємо деталі статті
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error('Error fetching post:', error));
  }, [postId]);

  useEffect(() => {
    // Отримуємо пов'язані статті
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((data) => setRelatedPosts(data.slice(0, 5))) // Беремо лише перші 5 статей
      .catch((error) => console.error('Error fetching related posts:', error));
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  const styles = {
    card: {
      display: "flex",
      padding: '16px',
      marginBottom: '16px',
      borderRadius: '8px',
    },
    imagePlaceholder: {
      width: '226px',
      height: '136px',
      backgroundColor: '#f0f0f0',
      borderRadius: '8px',
    },
    date: {
      fontSize: '14px',
      color: '#a0a0a0',
      marginTop: '8px',
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
    },
    description: {
      fontSize: '14px',
      color: '#666',
    },
    link: {
      textDecoration: 'none',
      color: 'inherit',
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
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 3 }}>
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
              <Typography variant="subtitle2" sx={{ marginRight: 2, fontSize: 18, }}>
                John Doe
              </Typography>
            </div>
          </Box>
        </div>

        <div style={{
          zIndex: 1
        }}>
          <h2>Related Articles</h2>
          {relatedPosts.map((relatedPost) => (
            <div key={relatedPost.id} style={styles.card}>
              <div style={styles.imagePlaceholder}></div>
              <div style={{

              }}>
              <p style={styles.date}>WEDNESDAY 12, MARCH 2024</p>
              <Link to={`/post/${relatedPost.id}`} style={styles.link}>
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
