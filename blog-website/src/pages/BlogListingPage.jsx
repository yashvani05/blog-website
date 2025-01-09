import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams, useRoutes, useSearchParams } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import Pagination from '../components/Pagination';
import { filterBlogs, setCurrentPage, setSelectedBlog } from '@/redux/blogAction/blogAction';
import { useState, useEffect } from 'react';

const BlogListingPage = () => {
  const { filteredBlogs, currentPage, blogsPerPage } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [blogSearch, setBlogSearch] = useState(searchParams.get('search') || '');

  useEffect(() => {
    const searchQuery = searchParams.get('search') || '';
    const pageQuery = parseInt(searchParams.get('page'), 10) || 1;
    setBlogSearch(searchQuery);
    dispatch(filterBlogs(searchQuery));
    dispatch(setCurrentPage(pageQuery));
  }, [searchParams, dispatch]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setBlogSearch(value);
    dispatch(filterBlogs(value));

    setSearchParams({ search: value, page: 1 });
  };

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));

    setSearchParams({ search: blogSearch, page });
  };

  const selectBlog = (blog) => {
    dispatch(setSelectedBlog(blog));
    navigate(`/blog/${blog.id}`);
  };
  
  const startIndex = (currentPage - 1) * blogsPerPage;
  const paginatedBlogs = filteredBlogs.slice(startIndex, startIndex + blogsPerPage);

  return (
    <div className="container mx-auto px-4 py-6 place-content-center">
      <input
        type="text"
        placeholder="Search blogs..."
        className="w-full mb-4 px-4 py-2 border rounded-[10px]"
        value={blogSearch}
        onChange={handleSearch}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {paginatedBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} onClick={selectBlog} />
        ))}
      </div>
      <Pagination
        totalPages={Math.ceil(filteredBlogs.length / blogsPerPage)}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default BlogListingPage;
