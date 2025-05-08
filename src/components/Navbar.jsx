import { Link } from 'react-scroll';

const Navbar = () => {
  const menuItems = ['home', 'skills', 'projects', 'about', 'work-education', 'contact']; // Added 'skills' to the menuItems array

  return (
    <nav className="bg-blue-600 p-4 fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-semibold">My Portfolio</div>
        <ul className="flex space-x-6">
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
      </div>
    </nav>
  );
};

export default Navbar;
