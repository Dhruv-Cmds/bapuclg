import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

import About from "./components/About";
import Admission from "./components/Admission";
import Programs from "./components/Programs";
import Campus from "./components/Campus";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Enquiry from "./components/Enquiry";

import Diploma from "./components/Diploma";
import Be from "./components/Be";
import Pg from "./components/Pg";

import Affiliation from "./components/Affiliation";
import Events from "./components/Events";
import Achievement from "./components/Achievement";
import Faculty from "./components/Faculty";
import Laboratory from "./components/Laboratory";
import Mobinnovation from "./components/Mobinnovation";
import Itp from "./components/Itp";
import Techviden from "./components/Techviden";
import Toppers from "./components/Toppers";
import Placement from "./components/Placement";
import Startup from "./components/Startup";

import Library from "./components/Library";
import Nss from "./components/Nss";
import Ncc from "./components/Ncc";
import Counseling from "./components/Counseling";
import Grievance from "./components/Grievance";
import AntiRagging from "./components/AntiRagging";
import Wdc from "./components/Wdc";
import Sport from "./components/Sport";
import Download from "./components/Download";

import { Routes, Route } from "react-router-dom";

function App() {

  return (
    
    <Routes>

      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/admission" element={<Admission />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/campus" element={<Campus />} />
      <Route path="/career" element={<Career />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/enquiry" element={<Enquiry />} />

      <Route path="/diploma" element={<Diploma />} />
      <Route path="/be" element={<Be />} />
      <Route path="/pg" element={<Pg />} />

      <Route path="/affiliation" element={<Affiliation />} />
      <Route path="/events" element={<Events />} />
      <Route path="/achievement" element={<Achievement />} />
      <Route path="/faculty" element={<Faculty />} />
      <Route path="/laboratory" element={<Laboratory />} />
      <Route path="/mobinnovation" element={<Mobinnovation />} />
      <Route path="/itp" element={<Itp />} />
      <Route path="/techviden" element={<Techviden />} />
      <Route path="/toppers" element={<Toppers />} />
      <Route path="/placement" element={<Placement />} />
      <Route path="/startup" element={<Startup />} />

      <Route path="/library" element={<Library />} />
      <Route path="/nss" element={<Nss />} />
      <Route path="/ncc" element={<Ncc />} />
      <Route path="/counsel" element={<Counseling />} />
      <Route path="/grievance" element={<Grievance />} />
      <Route path="/anti" element={<AntiRagging />} />
      <Route path="/wdc" element={<Wdc />} />
      <Route path="/sports" element={<Sport />} />
      <Route path="/download" element={<Download />} />
      
    </Routes>

  )
}

export default App
