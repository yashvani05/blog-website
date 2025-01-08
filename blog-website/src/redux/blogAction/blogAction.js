export const setBlogs = (blogs) => ({
  type: 'SET_BLOGS',
  payload: blogs,
});

export const setSelectedBlog = (blog) => ({
  type: 'SET_SELECTED_BLOG',
  payload: blog,
});

export const filterBlogs = (searchQuery) => ({
  type: 'FILTER_BLOGS',
  payload: searchQuery,
});

export const setCurrentPage = (page) => ({
  type: 'SET_CURRENT_PAGE',
  payload: page,
});

export const setSelectedBlogById = (id) => {
  return {
    type: 'SET_SELECTED_BLOG_BY_ID',
    payload: id,
  };
};