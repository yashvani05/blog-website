const initialState = {
  blogs: [],
  filteredBlogs: [],
  selectedBlog: null,
  selectedBlogById: null,
  currentPage: 1,
  blogsPerPage: 8,
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BLOGS':
      return {
        ...state,
        blogs: action.payload,
        filteredBlogs: action.payload,
      };
    case 'SET_SELECTED_BLOG':
      return {
        ...state,
        selectedBlog: action.payload,
      };
    case 'FILTER_BLOGS':
      return {
        ...state,
        filteredBlogs: state.blogs.filter((blog) =>
          blog.title.toLowerCase().includes(action.payload.toLowerCase()) ||  blog.description.toLowerCase().includes(action.payload.toLowerCase())
        ),
        currentPage: 1,
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };
    case 'SET_SELECTED_BLOG_BY_ID':
      const selectedBlog = state.blogs.find(blog => blog.id == action.payload);
      return {
        ...state,
        selectedBlogById: selectedBlog || null,
      };
    default:
      return state;
  }
};

export default blogReducer;
