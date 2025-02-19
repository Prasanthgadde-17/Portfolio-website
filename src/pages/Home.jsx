import img from "../assets/profile.jpg";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import "./Home.css"
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate =useNavigate();
  return (
    <div className=" Home   h-[700px]  flex items-center justify-center px-6">
      <div className=" h-full w-300  flex gap-15 items-center rounded-lg p-10 items-center">
        
        {/* Info Section */}
        <div className="w-[550px]   h-150  p-5 ">
          <h1 className="hname text-6xl font-bold text-gray-900 mt-20 ml-[-100px]    slide-fwd-right ">
            Hi, I'm <span className="text-blue-600  ">Prasanth Gadde</span>
          </h1>
          <h3 className="text-2xl text-gray-700 mt-2 tracking-in-contract">Full Stack Web Developer</h3>
          <p className="text-gray-600 mt-4">
            I craft exceptional digital experiences with modern technologies
            and a focus on user-centered design.
          </p>
          
          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button onClick={()=>navigate("/contact")}  className="bg-black text-white px-6 py-2 rounded-md animate-pulse cursor-pointer">
              Get in Touch
            </button>
            <button onClick={()=>navigate("/resume")} className="border border-gray-700 px-6 py-2 rounded-md cursor-pointer">
              Download Resume
            </button>
          </div>
          <div className="social flex gap-6 mt-9">
      
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/prasanth-gadde-fullstack/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-600 text-3xl transition-all duration-300 bounce-top"
      >
        <FaLinkedin />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/Prasanthgadde-17"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-black text-3xl transition-all duration-300 bounce-top"
      >
        <FaGithub />
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-400 text-3xl transition-all duration-300 bounce-top"
      >
        {/* <FaTwitter /> */}
      </a>

    </div>
        </div>

        {/* Profile Image Section */}
        <div className=" w-[400px] h-[600px] ml-20 items-center mt-6">
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
