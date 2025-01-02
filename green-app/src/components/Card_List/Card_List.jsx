import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

const CardList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {posts.map((post) => (
          <div key={post.id} style={styles.card}>
            <div style={styles.imagePlaceholder}></div>
            <p style={styles.date}>WEDNESDAY 12, MARCH 2024</p>
            <Link to={`/post/${post.id}`} style={styles.link}>
              <h2 style={styles.title}>{post.title}</h2>
            </Link>
            <p style={styles.description}>
              {post.body.length > 50 ? `${post.body.substring(0, 50)}...` : post.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  container: {
    zIndex: 1,
    display: 'flex',
    alignItems: 'flex-start', 
    flexWrap: 'wrap', 
    backgroundColor: '#f8f9fa',
    borderRadius: '24px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '1380px',
    border: '1px solid #D6D6D6',
    padding: '20px',
  },
  card: {
    width: '246px',
    borderRadius: '10px',
    padding: '15px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
 
    justifyContent: 'flex-start',
    
  },
  imagePlaceholder: {
    width: '246px',
    height: '136px',
    backgroundColor: '#eaeaea',
    borderRadius: '16px',
    marginBottom: '15px',
  },
  date: {
    fontSize: '12px',
    color: '#888',
    textTransform: 'uppercase',
    height: '16px', 
    textAlign: 'left',
    marginBottom: '0',
    fontFamily: "'Roboto', sans-serif",
    marginTop:'0'
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'black',
    overflow: 'hidden', 
    textAlign: 'left',
    marginBottom: '0',
    fontFamily: "'Roboto', sans-serif",
    marginTop:'20px'
  },
  description: {
    fontSize: '14px',
    color: '#666',
    height: '36px', 
    overflow: 'hidden', 
    textAlign: 'left',
    marginBottom: '0',
    fontFamily: "'Roboto', sans-serif",
    marginTop:'8px'
  },
  
};

export default CardList;
