import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ['home', 'skills', 'projects', 'about', 'work-education', 'contact']; // Added 'skills' to the menuItems array

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Navbar Title */}
        <div className="text-white text-xl font-semibold">My Portfolio</div>
        
        {/* Menu Items - Desktop */}
        <ul className="hidden sm:flex space-x-6">
          {menuItems.map(item => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer text-white hover:text-gray-300 capitalize"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu - Mobile */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-white">
            {/* Hamburger icon */}
            &#9776;
          </button>
        </div>
      </div>

      {/* Mobile Menu - Toggle visibility */}
      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-blue-600 p-4`}>
        <ul className="space-y-4">
          {menuItems.map(item => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer text-white hover:text-gray-300 capitalize"
                onClick={toggleMenu} // Close the menu on item click
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
