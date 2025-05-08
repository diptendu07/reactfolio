const About = () => {
  return (
    <div className="bg-gray-800 text-white p-10 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
        
        {/* Left Column */}
        <div className="space-y-6 leading-relaxed text-gray-300">
          <h2 className="text-3xl font-bold text-white">Who I Am</h2>
          <p>
            Hi, I’m <strong>Diptendu Lodh</strong> — a former Mechanical Engineer now making my mark as a <strong>MERN Stack Developer</strong>. With roots in QA/NDT and travel consulting, my journey into tech wasn’t typical, but it was driven by passion and purpose.
          </p>
          <p>
            I decided to transition my career by upskilling through <strong>Edureka’s Full Stack Developer Program</strong>, earning certifications in <strong>MongoDB, Node.js, React.js, Angular</strong>, and more. This structured training, paired with continuous self-learning, laid the foundation of my development career.
          </p>
          <p>
            My strength lies in building clean, scalable, and user-centric web applications—solutions that feel intuitive and perform efficiently.
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-6 leading-relaxed text-gray-300">
          <h2 className="text-3xl font-bold text-white">What I’ve Built</h2>
          <p>
            I’ve created several full-stack applications including an <strong>AI-Powered Task Manager</strong>, a <strong>Movie/Event Ticket Booking App</strong>, and a <strong>Top 10 Review Platform</strong>. These projects use technologies like React, Node, Express, MongoDB Atlas, and are deployed on Netlify and Render.
          </p>
          <p>
            My tech stack includes <strong>JavaScript (ES6+), React.js, Node.js, Express.js, MongoDB, Redux-Saga, Postman, Docker, and Git.</strong> I’m always exploring new tools and refining my craft.
          </p>
          <p>
            I’m actively seeking <strong>internship or entry-level opportunities</strong> where I can contribute to real-world projects and grow with a team of passionate developers. If you're hiring or open to mentoring a curious and committed developer—I’d love to connect!
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
