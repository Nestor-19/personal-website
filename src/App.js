import './App.css';
import Navigationbar from "./components/Navbar/Navbar"
import Home from './components/Home/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div>
      <Navigationbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
    
  );
}

export default App;
