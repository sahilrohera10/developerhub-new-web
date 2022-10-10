import logo from './logo.svg';
import './App.css';
import AllCourses from './Components/AllCourses';
import Course from './Components/Course';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Course/>
     <AllCourses/>
    </div>
  );
}

export default App;
