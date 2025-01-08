const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    return (
      <div className="flex justify-center space-x-2 mt-6">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded ${
              currentPage === index + 1
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    );
  };
  
  export default Pagination;
  