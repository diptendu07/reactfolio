import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "AI-Powered Task Management App",
    description: `A full-stack task management application with AI-powered daily summaries with a mock AI integration, built using React, TypeScript, Vite, Node.js, Express, MongoDB Atlas.

• Developed REST APIs for user and task management using Express.js and Mongoose
• Integrated mock GPT module for AI summaries (frontend simulation)
• Deployed frontend on Netlify and backend on Render`,
    frontendLink: "https://diptendu-mern-task-manager-project.netlify.app/",
    backendLink: "https://mern-task-manager-gxin.onrender.com/",
    repoLink: "https://github.com/diptendu07/mern-task-manager",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "TypeScript",
      "Vite",
      "JWT",
      "GitHub",
      "Netlify",
      "Render"
    ]
  },
  {
    title: "Online Ticket Booking Web App",
    description: `A MERN Stack Web Application for Movies and Events ticket booking that allows users to choose meal, show timings, date and generate ticket with QR code.

• Deployed frontend on Netlify and backend on Render`,
    frontendLink: "https://react-online-ticket-booking.netlify.app/",
    backendLink: "https://react-online-ticket-booking-web-app.onrender.com/",
    repoLink: "https://github.com/diptendu07/react-online-ticket-booking-web-app",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "GitHub",
      "Netlify",
      "Render"
    ]
  },
  {
    title: "Top 10 Movies/Games Review Web App",
    description: `A MERN Stack Review Web Application for Movies and Games that allows users to post new movies/games along with its ratings, reviews, etc. and viewers will only see the top 10 amongst all the movies/games listed in the database.

• Deployed frontend on Netlify and backend on Render`,
    frontendLink: "https://mean-stack-review-app.netlify.app/",
    backendLink: "https://movie-game-review-app-mean-stack.onrender.com/",
    repoLink: "https://github.com/diptendu07/movie-game-review-app-mern-stack",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "GitHub",
      "Netlify",
      "Render"
    ]
  }
];

const Projects = () => {
  return (
    <div className="bg-gray-800 text-white p-8">
      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            frontendLink={project.frontendLink}
            backendLink={project.backendLink}
            repoLink={project.repoLink}
            techStack={project.techStack}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
