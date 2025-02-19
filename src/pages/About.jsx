import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import img from "../assets/profile.jpg";
import img2 from "../assets/skill.png";

function About() {
  return (
    <section className="about-container bg-white text-gray-900 p-10 rounded-2xl shadow-xl max-w-6xl mx-auto mt-10">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Section - Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight drop-shadow-md">
            Full Stack Web Developer
          </h1>
          <p className="text-lg mt-3 italic text-gray-600">
            "From logic to visuals—bringing ideas to life through code." 🎨💡
          </p>

          {/* Contact Info */}
          <div className="mt-6 space-y-3 text-gray-700 text-lg">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500" />
              <span>prasanthgadde27@gmail.com</span>
            </p>
            <p className="flex items-center gap-3">
              <FaLinkedin className="text-blue-600" />
              <a href="https://www.linkedin.com/in/prasanth-gadde-fullstack/" target="_blank" className="hover:underline">LinkedIn</a>
            </p>
            <p className="flex items-center gap-3">
              <FaGithub className="text-gray-800" />
              <a href="https://github.com/Prasanthgadde-17" target="_blank" className="hover:underline">GitHub</a>
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500" />
              Vijayawada, India
            </p>
          </div>
        </div>

        {/* Right Section - Profile Image with Glassmorphism */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="relative w-80 h-96 bg-white/70 rounded-xl backdrop-blur-lg shadow-lg border border-gray-300 overflow-hidden">
            <img 
              src={img} 
              alt="Profile" 
              className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

      </div>

      {/* Skills Section */}
      <div className="skills mt-14 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">Skills & Technologies</h2>
        <p className="text-lg text-gray-600 mt-3">
          React.js | Node.js | MongoDB | Express.js | Tailwind CSS | Git | Html | Css |
        </p>
        <img src={img2} className="mt-6 max-w-lg mx-auto opacity-80" />
      </div>
    </section>
  );
}

export default About;
