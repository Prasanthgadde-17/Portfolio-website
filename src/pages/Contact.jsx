import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import "./Contact.css"
function Contact() {
  return (
    <>
      <div className="contact flex p-10">
        <div className="form  p-15 bg-white rounded-2xl shadow-2xl ml-70 mt-5">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Get In Touch
          </h1>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="flex flex-col gap-10 "
          >
            <input
              type="hidden"
              name="access_key"
              value="1850f9da-70f3-4a15-87fc-aa3135f81d3c"
            />

            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="input w-90 px-4 py-3 border border-gray-300 rounded-lg "
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg input"
              required 
            />

            <textarea
              name="message"
              className="border border-gray-300 rounded-md px-3 py-2 w-full h-30 input"
              placeholder="Enter About text here..."
              required
            ></textarea>
            <input
              type="hidden"
              name="redirect"
              value="https://web3forms.com/success"
            />

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 p-2 border border-gray-300 rounded-xl text-lg font-semibold"
            >
              Send
            </button>
          </form>
        </div>
        <div className="contact-info p-15 bg-blue-400 text-white rounded-2xl shadow-2xl mt-5 w-100">
          <h1 className="text-3xl font-bold mb-8">Contact Information</h1>
          <h3 className="text-lg font-semibold">
            Email:
            <span className="text-black p-2">prasanthgadde27@gmail.com</span>
          </h3>
          <h3 className="text-lg font-semibold">
            Mobile No: <span className="text-black p-2">+91 6281475515</span>
          </h3>
          <div className="social flex gap-6 mt-9">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/prasanth-gadde-fullstack/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 text-3xl transition-all duration-300 bounce-top"
            >
              <FaLinkedin />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Prasanthgadde-17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-black text-3xl transition-all duration-300 bounce-top"
            >
              <FaGithub />
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-900 text-3xl transition-all duration-300 bounce-top"
            >
              {/* <FaTwitter /> */}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
