import './App.css';
import { Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout/Layout';
import Navigationbar from "./components/Navbar/Navbar"
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigationbar />} />
      </Routes>
    </div>
    
  );
}

export default App;
