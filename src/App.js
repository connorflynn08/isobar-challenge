import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Courses from './components/Courses';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 id="header">Course Finder</h1>
      <p>Welcome to course finder, select a course from the drop-down below to find out more information</p>
      <Courses />
    </div>
  );
}

export default App;
