import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigationbar from "./components/Navbar/Navbar"
import Home from './components/Home/Home';
import About from './components/About/About';


function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Navigationbar />} />
        <Route path="/home" element={<Home />} />
      </Routes> */}
      <Navigationbar />
      <Home />
      <About />
    </div>
    
  );
}

export default App;
