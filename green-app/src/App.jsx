import React from 'react';
import HomePage from './page/HomePage';
import './styles/App.css'; // Переконайтеся, що шлях до файлу правильний
import photo from '../src/assets/image/Ellipse 2.png';
import photo2 from '../src/assets/image/right.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignIn from './page/SiginIn/SiginInPage';
import SignUp from './page/SiginUp/SiginUpPage';
import PostDetailWrapper from './page/PostDetails/PostDetailWrapper';
function App() {
  return (
    <Router>
      <div className='wrapperApp'>
        <img src={photo} alt="Background" className="background-photo" />
        <img src={photo2} alt="Right Photo" className="photo-right" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
          path="/post/:postId"
          element={<PostDetailWrapper />}
        />
        </Routes>
      </div>
    </Router>
  );
}

export default App;