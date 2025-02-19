import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Define a route for the Home component */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={< Resume/>}/>

        

      </Routes>
    </>
  );
}

export default App;
