import img from "../assets/profile.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaJs } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className=" Home   h-[700px]  flex items-center justify-center px-6">
      <div className=" h-full w-300  flex gap-15 items-center rounded-lg p-10 items-center">
        {/* Info Section */}
        <div className="w-[610px]   h-160  p-5 ">
          <h1 className="hname text-6xl font-bold text-gray-900 mt-20 ml-[-100px]    slide-fwd-right ">
            Hi, I`m <span className="text-blue-500">Gadde Prasanth</span>
          </h1>
          <h3 className="mt-6 text-3xl text-gray-900 mt-2 tracking-in-contract font-semobold">
            Full Stack Web Developer
          </h3>
          <p className="text-gray-600 mt-4 text-lg">
            Transforming ideas into dynamic, user-centric web experiences.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="bg-black text-white px-6 py-2 rounded-md cursor-pointer buttoneffect"
            >
              Get in Touch
            </button>
            <button
              onClick={() => navigate("/resume")}
              className="border border-gray-700 px-6 py-2 rounded-md cursor-pointer bg-gray-200 buttoneffect"
            >
              Download Resume
            </button>
          </div>
          <div className="social flex gap-6 mt-9">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/prasanth-gadde-fullstack/"
              target="_blank"
              rel="noopener noreferrer"
              title="View my Linkedin profile"
              className="text-gray-600 hover:text-blue-600 text-3xl transition-all duration-300 bounce-top"
            >
              <FaLinkedin />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Prasanthgadde-17"
              target="_blank"
              rel="noopener noreferrer"
              title="View my Github account"
              className="text-gray-600 hover:text-black text-3xl transition-all duration-300 bounce-top"
            >
              <FaGithub />
            </a>
          </div>

          <div className="tech-stack flex flex-col ">
            <h2 className="mb-9 text-2xl font-semibold text-gray-600">
              Technologies I Use
            </h2>
            <div className="icons-container">
              <div className="tech-item">
                <FaJs className="tech-icon" title="JavaScript (ES6+)" />
                <span>JavaScript</span>
              </div>
              <div className="tech-item">
                <FaReact className="tech-icon" title="React.js" />
                <span>React.js</span>
              </div>
              <div className="tech-item">
                <FaNodeJs className="tech-icon" title="Node.js" />
                <span>Node.js</span>
              </div>
              <div className="tech-item">
                <FaDatabase className="tech-icon" title="MongoDB" />
                <span>MongoDB</span>
              </div>
              <div className="tech-item">
                <FaGitAlt className="tech-icon" title="Git & GitHub" />
                <span>Git & GitHub</span>
              </div>
              <div className="tech-item">
                <SiPostman className="tech-icon" title="postman" />
                <span>Postman</span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className=" w-[400px] h-[600px] ml-30 items-center mt-6">
          <img
            src={img}
            alt="Profile"
            className="w-full h-full object-cover rounded-2xl mt-8  "
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
