import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaServer,
  FaHtml5,
  FaCss3,
  FaJs,
  FaGit,
  FaCloud,
  FaLock,
  FaBolt,
  FaExternalLinkAlt, // Add External Link Icon
} from "react-icons/fa";

// Icons for Tech Stack and Deployment platforms
const techIcons = {
  "React.js": <FaReact className="text-blue-400" />,
  "Node.js": <FaNodeJs className="text-green-400" />,
  "MongoDB Atlas": <FaDatabase className="text-green-600" />,
  "Express.js": <FaServer className="text-gray-400" />,
  "GitHub": <FaGitAlt className="text-white" />,
  "Netlify": <FaCloud className="text-blue-300" />,
  "Render": <FaCloud className="text-purple-400" />,
  "TypeScript": <FaJs className="text-blue-500" />,
  "Vite": <FaBolt className="text-yellow-400" />,
  "JWT": <FaLock className="text-red-500" />,
  Frontend: <FaExternalLinkAlt className="text-green-500" />, // Frontend Icon
  Backend: <FaExternalLinkAlt className="text-purple-500" />, // Backend Icon
};

const ProjectCard = ({
  title,
  description,
  frontendLink,
  backendLink,
  repoLink,
  techStack,
}) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg bg-gray-800 hover:shadow-xl text-white">
      <h2 className="text-xl font-semibold mb-2 text-yellow-300">{title}</h2>
      <p className="text-sm text-gray-300 mb-4 whitespace-pre-line">{description}</p>

      <div className="mb-4">
        <h4 className="font-semibold text-yellow-300 mb-1">Live Web App URLs</h4>
        <ul className="text-sm text-blue-400 list-disc ml-5 space-y-1">
          <li>
            <a
              href={frontendLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              {techIcons.Frontend} Frontend (Netlify)
            </a>
          </li>
          <li>
            <a
              href={backendLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              {techIcons.Backend} Backend (Render)
            </a>
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-yellow-300 mb-1">GitHub Repository</h4>
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-400 hover:underline"
        >
          View Code on GitHub
        </a>
      </div>

      <h4 className="font-semibold text-yellow-300 mb-1">Tech Stack</h4>
      <div className="flex flex-wrap gap-4 mt-2">
        {techStack.map((tech, idx) => (
          <div key={idx} className="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded text-sm">
            {techIcons[tech] || <FaGit className="text-gray-500" />} <span>{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
