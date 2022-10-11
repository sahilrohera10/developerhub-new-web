import logo from "./logo.svg";
import "./App.css";
import AllCourses from "./Components/AllCourses";
import Course from "./Components/Quote";
import Header from "./Components/Header";
import Partners from "./Components/Partners";
import UniPartner from "./Components/UniPartner";

function App() {
  return (
    <div className="App">
      <Header />
      <Course />
      <AllCourses />
      <Partners />
      <UniPartner />
    </div>
  );
}

export default App;
