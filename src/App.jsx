import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import WorkEdu from './pages/WorkEdu'; // 👈 Import the combined Work and Education page
import Skills from './pages/Skills'; // 👈 Import the Skills page

function App() {
  return (
    <>
      <Navbar />

      {/* Home Section */}
      <section id="home" className="min-h-screen pt-20 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <Home />
        </div>
      </section>          

      {/* Skills Section */}
      <section id="skills" className="min-h-screen pt-20 bg-gray-800 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-yellow-300 mb-6">Certificates and Skills</h2>
          <Skills /> {/* Added the Skills page */}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen pt-20 bg-gray-700 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-yellow-300 mb-6">Personal Projects (Self-Made)</h2>
          <Projects />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen pt-20 bg-gray-800 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-yellow-300 mb-6">About Me</h2>
          <About />
        </div>
      </section>  

      {/* Work and Education Section */}
      <section id="work-education" className="min-h-screen pt-20 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-yellow-300 mb-6">Work and Education</h2>
          <WorkEdu /> {/* Updated to use WorkEdu page */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen pt-20 bg-gray-800 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-yellow-300 mb-6">Connect with Me</h2>
          <Contact />
        </div>
      </section>      
    </>
  );
}

export default App;
