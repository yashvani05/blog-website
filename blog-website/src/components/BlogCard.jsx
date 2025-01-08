const BlogCard = ({ blog, onClick }) => {
    return (
        <div key={blog.id} onClick={() => onClick(blog)} class="max-w-sm rounded-[20px] overflow-hidden shadow-lg border border-black bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <img class="w-full h-56 object-cover" src={blog.image} alt="Blog Image" />
            <div class="p-5 h-64 flex flex-col justify-between">
                <h2
                    className="text-xl font-semibold text-gray-800 hover:text-indigo-500 transition-colors duration-200 overflow-hidden text-ellipsis whitespace-nowrap"
                    title={blog.title}
                >
                    {`${blog.title.slice(0, 25)}...`}
                </h2>
                <p class="text-gray-600 mt-2 flex-grow" title={blog.description}>{`${blog.description}`}</p>
                <div class="flex items-center">
                    <span class="text-gray-500 text-sm">Published on: <span class="font-semibold">{blog.date}</span></span>
                </div>
                <button class="mt-4 py-2 px-4 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 focus:outline-none transition-colors duration-200">
                    Read More
                </button>
            </div>
        </div>
    );
};


export default BlogCard;
