import { FaBlog, FaUser } from 'react-icons/fa'; // Import the FontAwesome icons
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation(); // Get the current location

    return (
        <nav className="bg-gray-800 text-white py-4 px-6 sticky top-0 w-full z-50">
            <div className="container mx-auto flex lg:justify-between justify-center items-center">
                <div className="flex space-x-6 flex-wrap">
                    <Link
                        to="/"
                        className={`text-lg font-bold flex items-center space-x-2 ${location.pathname === '/' ? 'text-green-500' : 'hover:text-gray-300'}`}
                    >
                        <FaBlog className="text-xl" />
                        <span>Blogs</span>
                    </Link>
                    <Link
                        to="/profile"
                        className={`text-lg font-bold flex items-center space-x-2 ${location.pathname === '/profile' ? 'text-green-500' : 'hover:text-gray-300'}`}
                    >
                        <FaUser className="text-xl" />
                        <span>Profile</span>
                    </Link>
                </div>
            </div>
            {/* Conditional welcome message */}
            <div className="w-full mx-auto text-center animate-fadeInUp">
                {location.pathname === '/' ? (
                    <span className="text-xl font-semibold">
                        Welcome To <span className='text-green-500'>Blogs</span> Of Yash
                    </span>
                ) : location.pathname.startsWith('/blog/') ? (
                    <span className="text-xl font-semibold">
                        Welcome To <span className='text-green-500'>Description</span> Of Yash
                    </span>
                ) : (
                    <span className="text-xl font-semibold">
                        Welcome To <span className='text-green-500'>Profile</span> Of Yash
                    </span>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
