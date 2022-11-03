import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import FormBasic from "./Components/FormBasic";
import Blockchain from "./Pages/Blockchain";
import Ar_vr from "./Pages/Ar_vr";
import Footer from "./Components/Footer";
import MetaPage from "./Pages/MetaPage";
import ComingSoon from "./Components/ComingSoon";
import Aiml from "./Pages/Aiml";
import NavComponent from "./Components/NavbarComponent";
import AdminForm from "./Pages/AdminForm";
import University from "./Components/University";
import Forum from "./Components/Forum";
import Jobs from "./Pages/Jobs";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import ScrollToTop from "react-scroll-to-top";
import Feedback from "./Components/Feedback";
import Fresher from "./Components/Fresher";
import Corporate from "./Components/Corporate";
import Software from "./Components/Software";
import Deactivate from "./Components/Deactivate";
import { useState } from "react";
import { Link } from "react-router-dom";
import adImg from "./assets/ad-img.jpeg";

function App() {
  const [display, setDisplay] = useState("block");

  return (
    <div className="App">
      {/* <ScrollToTop smooth width="40" /> */}
      <NavComponent />
      <img className="ad" style={{ display: display }} src={adImg} alt="" />
      <p
        className="close-btn"
        style={{ display: display }}
        onClick={() => setDisplay("none")}
      >
        X
      </p>
      <Link to="/form">
        <button style={{ display: display }} className="apply-btn">
          Apply Now
        </button>
      </Link>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/deactivate" element={<Deactivate />}></Route>
        <Route path="/software" element={<Software />}></Route>
        <Route path="/corporate" element={<Corporate />}></Route>
        <Route path="/fresher" element={<Fresher />}></Route>
        <Route path="/feedback" element={<Feedback />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/job" element={<Jobs />}></Route>
        <Route path="/form" element={<FormBasic />}></Route>
        <Route path="/blockchain" element={<Blockchain />}></Route>
        <Route path="/ar-vr" element={<Ar_vr />}></Route>
        <Route path="/meta" element={<MetaPage />}></Route>
        <Route path="/aiml" element={<Aiml />}></Route>
        <Route path="/adminForm" element={<AdminForm />}></Route>
        <Route path="/coming" element={<ComingSoon />}></Route>
        <Route path="/University" element={<University />}></Route>
        <Route path="/forum" element={<Forum />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
