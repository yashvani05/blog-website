import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import blogs from './data/blogs.json';
import BlogDescriptionPage from './pages/BlogDescriptionPage';
import BlogListingPage from './pages/BlogListingPage';
import ProfilePage from './pages/ProfilePage';
import { setBlogs } from './redux/blogAction/blogAction';

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
