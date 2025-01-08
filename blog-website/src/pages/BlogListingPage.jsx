import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import Pagination from '../components/Pagination';
import { filterBlogs, setCurrentPage, setSelectedBlog } from '@/redux/blogAction/blogAction';

const BlogListingPage = () => {
  const { filteredBlogs, currentPage, blogsPerPage } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => dispatch(filterBlogs(e.target.value));
  const handlePageChange = (page) => dispatch(setCurrentPage(page));
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
        onChange={handleSearch}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-items-center">
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
