import React from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaServer, FaDocker, FaHtml5, FaCss3, FaJs, FaGit, FaAngular, FaLaptopCode, FaCloud } from "react-icons/fa"; // Importing React Icons

const Skills = () => {
  // List of certificates with logos/icons
  const certificates = [
    {
      title: "Web Development Certification",
      logo: <FaLaptopCode size={50} />,  // React icon for Web Development
      certificateLink: "/public/web-development.pdf",
      externalLink: "https://www.edureka.co/my-certificate/f62095618269c51c80c1115f7a43926d",
    },
    {
      title: "jQuery UI Development Certification",
      logo: <FaLaptopCode size={50} />,  // React icon for jQuery UI
      certificateLink: "/public/jquery-ui.pdf",
      externalLink: "https://www.edureka.co/my-certificate/590d3155eb46294aad0c29d82d3d57d1",
    },
    {
      title: "Angular Certification",
      logo: <FaAngular size={50} />,  // Angular icon for Angular Certification
      certificateLink: "/public/angular.pdf",
      externalLink: "https://www.edureka.co/my-certificate/deb11e64adf1be62593dd308155f627d",
    },
    {
      title: "React.js Certification",
      logo: <FaReact size={50} />,  // React icon for React.js Certification
      certificateLink: "/public/reactjs.pdf",
      externalLink: "https://www.edureka.co/my-certificate/28367d3dc98e57bb1efe8bb3dacbd1b5",
    },
    {
      title: "Node.js Certification",
      logo: <FaNodeJs size={50} />,  // Node.js icon for Node.js Certification
      certificateLink: "/public/nodejs.pdf",
      externalLink: "https://www.edureka.co/my-certificate/a7da9c9018c7ef1a1364694c7ff59c6a",
    },
    {
      title: "MongoDB Certification",
      logo: <FaDatabase size={50} />,  // MongoDB icon for MongoDB Certification
      certificateLink: "/public/mongodb.pdf",
      externalLink: "https://www.edureka.co/lms/certificate/1dfa6d69273b647023f11bc6da76e922",
    },
    {
      title: "Full Stack Developer Certification",
      logo: <FaServer size={50} />,  // Server icon for Full Stack Developer Certification
      certificateLink: "/public/full-stack.pdf",
      externalLink: "https://www.edureka.co/my-certificate/33c54f8af0da64d6aa1bac1f1ad96973",
    },
  ];

  // List of skills with icons
  const skills = [
    { name: "JavaScript (ES6+)", icon: <FaJs size={50} /> },
    { name: "HTML", icon: <FaHtml5 size={50} /> },
    { name: "CSS3", icon: <FaCss3 size={50} /> },
    { name: "React.js", icon: <FaReact size={50} /> },
    { name: "Node.js", icon: <FaNodeJs size={50} /> },
    { name: "Express.js", icon: <FaServer size={50} /> },
    { name: "RESTful APIs", icon: <FaServer size={50} /> },
    { name: "MongoDB", icon: <FaDatabase size={50} /> },
    { name: "MongoDB Atlas", icon: <FaDatabase size={50} /> },
    { name: "Git", icon: <FaGitAlt size={50} /> },
    { name: "Postman", icon: <FaLaptopCode size={50} /> }, // Using generic code icon for Postman
    { name: "Visual Studio Code", icon: <FaLaptopCode size={50} /> }, // Using code icon for VSCode
    { name: "Docker", icon: <FaDocker size={50} /> },
    { name: "Saga Middleware", icon: <FaCloud size={50} /> }, // Using cloud icon for Saga Middleware
    { name: "Netlify", icon: <FaCloud size={50} /> }, // Cloud icon for Netlify
    { name: "Render", icon: <FaCloud size={50} /> }, // Cloud icon for Render
    { name: "Angular (Basic)", icon: <FaAngular size={50} /> }, // React icon for Angular
  ];

  return (
    <div className="bg-gray-800 text-white p-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Certificates Section */}
        <div className="space-y-6 text-gray-300 mb-8">
          <h2 className="text-3xl font-bold text-white">Edureka Certifications</h2>
          {/* Use responsive grid with Tailwind CSS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {certificates.map((certificate, index) => (
              <div key={index} className="flex flex-col items-center mb-6">
                <div className="flex items-center mb-4">
                  {certificate.logo}
                  <p className="ml-4 text-xl font-semibold">{certificate.title}</p>
                </div>
                <a href={certificate.certificateLink} download className="inline-block mb-4 py-2 px-4 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-400 transition">
                  Download Certificate
                </a>
                <a href={certificate.externalLink} target="_blank" rel="noopener noreferrer" className="inline-block py-2 px-4 bg-gray-500 text-white rounded-md text-sm hover:bg-gray-400 transition">
                  View Online
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-6 text-gray-300">
          <h2 className="text-3xl font-bold text-white">Skills</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center mb-6">
                <div className="mb-2">{skill.icon}</div>
                <p className="text-lg font-medium text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
