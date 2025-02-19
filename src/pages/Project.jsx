import img1 from "../assets/skill.png";
import img2 from "../assets/weather.png"
import todo from "../assets/todo.jpg"
import Social from "../assets/Social.png"
import todo2 from "../assets/todo2.png"
import shopping from "../assets/shopping.png"


const projects = [
  {
    id: 1,
    title: "Task-Manager",
    description: "A full-stack application built with React, Node.js, and MongoDB.",
    image: todo,
    link: "#",
  },
  {
    id: 2,
    title: "Weather",
    description: "A weather report website that uses an API to fetch and display real-time weather data based on the user's location.",
    image: img2,
    link: "#",
  },
  {
    id: 3,
    title: "Social-Network",
    description: "The Social network is aThe Social Network is a small-scale application where users can create an account, build a profile, and connect with others. ",
    image: Social,
    link: "https://github.com/Prasanthgadde-17/Social-Network",
  },
  {
    id: 4,
    title: "TO-DO",
    description: "The To-Do App utilizes local storage to save task information, ensuring data persistence even after page refreshes. Built with HTML, CSS, and JavaScript. ",
    image: todo2,
    link: "https://prasanthgadde-17.github.io/TO-DO-/",
  },
  {
    id: 5,
    title: "Shopping-Site",
    description: "An elegant online fashion store designed with HTML, CSS, and JavaScript. It offers a seamless shopping experience with a stylish and responsive layout.",
    image: shopping,
    link: "https://shoppingsite-seven.vercel.app/",
  },
  
];

function Project() {
  return (
    <div className="flex flex-col min-h-screen bg-white bg-opacity-80 backdrop-blur-lg">
      {/* Header */}
      <div className="head p-6 text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 drop-shadow-lg tracking-wide">
          🚀 My Projects
        </h1>
        <p className="text-gray-600 mt-2 text-lg font-medium">
          Discover my latest work, built with passion & technology. 💡
        </p>
      </div>

      {/* Grid Layout */}
      <div className="flex-1 flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-8 w-full max-w-7xl">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative bg-white  shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-all transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="w-full h-48 rounded-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-lg shadow-sm" />
              </div>

              {/* Project Info */}
              <div className="mt-5">
                <h1 className="text-2xl font-bold text-black">
                  {project.title}
                </h1>
                <p className="text-gray-700 mt-2 text-sm ">
                  {project.description}
                </p>
              </div>

              {/* View Project Button */}   
              <a href={project.link} className="mt-4">
                <button className="px-6 py-2 bg-gradient-to-r from-gray-400 to-gray-700 text-white font-semibold rounded-full shadow-md hover:from-gray-500 hover:to-gray-900 hover:shadow-lg transition-all duration-300">
                  View Project 🔗
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
