import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Enquiry from "./components/Enquiry";
import About from "./components/About";
import Contact from "./components/Contact";
import Admission from "./components/Admission";
import Programs from "./components/Programs";
import Diploma from "./components/Diploma";
import Be from "./components/Be";
import Pg from "./components/Pg";

import { Routes, Route } from "react-router-dom";

function App() {

  return (
    
    <Routes>

      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/admission" element={<Admission />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/enquiry" element={<Enquiry />} />

      <Route path="/diploma" element={<Diploma />} />
      <Route path="/be" element={<Be />} />
      <Route path="/pg" element={<Pg />} />
      
    </Routes>

  )
}

export default App
