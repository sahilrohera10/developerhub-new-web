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

function App() {
  return (
    <div className="App">
      <ScrollToTop smooth width="40" />
      <NavComponent />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
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
