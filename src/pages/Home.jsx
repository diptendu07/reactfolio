import { Link } from "react-scroll";
import { FaNode, FaReact, FaJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { Github, Linkedin } from "lucide-react"; // Import GitHub and LinkedIn icons

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center px-6 py-12 text-center lg:text-left">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* Left Side */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <img
            src="/public/pic.png"
            alt="Diptendu Lodh"
            className="w-48 h-48 rounded-full mb-6 object-cover"
          />
          <h1 className="text-4xl font-bold text-blue-400 mb-2 font-serif">
            Diptendu Lodh
          </h1>
          <h2 className="text-xl text-gray-300 font-medium mb-6">
            Aspiring MERN Stack Developer
          </h2>

          {/* GitHub and LinkedIn Links (Horizontal) */}
          <div className="flex gap-8 mb-6"> {/* Added flex and gap for horizontal layout */}
            {/* GitHub */}
            <a
              href="https://github.com/diptendu07"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-500 transform hover:scale-105 transition-transform duration-300"
            >
              <Github className="w-6 h-6" />
              <span>GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/diptendu-lodh-70bab9295"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transform hover:scale-105 transition-transform duration-300"
            >
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
          
          {/* Logos Section */}
          <div className="flex justify-center gap-10 mb-8 flex-wrap">
            {/* React */}
            <FaReact className="text-blue-400 text-8xl transform hover:animate-bounce transition-transform duration-300" />

            {/* Node.js */}
            <FaNode className="text-green-400 text-8xl transform hover:animate-bounce transition-transform duration-300" />

            {/* MongoDB */}
            <SiMongodb className="text-green-600 text-8xl transform hover:animate-bounce transition-transform duration-300" />

            {/* Express.js */}
            <DiNodejsSmall className="text-gray-400 text-8xl transform hover:animate-bounce transition-transform duration-300" />

            {/* JavaScript */}
            <FaJs className="text-yellow-300 text-8xl transform hover:animate-bounce transition-transform duration-300" />
          </div>

          {/* Bio Section */}
          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            Aspiring MERN Stack Developer with a background in Mechanical Engineering, looking to transition into a tech career. Completed full-stack certification courses from Edureka and passionate about building clean, scalable web applications. Currently seeking internship or entry-level opportunities in MERN-stack development.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="about" smooth={true} duration={500}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-md transition duration-300">
                About Me
              </button>
            </Link>

            <Link to="projects" smooth={true} duration={500}>
              <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg text-md transition duration-300">
                View Projects
              </button>
            </Link>

            <a
              href="/Diptendu_Lodh_MERN_Developer_Resume.pdf"
              download
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg text-md transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
