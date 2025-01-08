import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import blogs from './data/blogs.json';
import Navbar from './components/Navbar';
import BlogListingPage from './pages/BlogListingPage';
import BlogDescriptionPage from './pages/BlogDescriptionPage';
import { setBlogs } from './redux/blogAction/blogAction';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBlogs(blogs));
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogListingPage />} />
        <Route path="/blog/:blogId" element={<BlogDescriptionPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
