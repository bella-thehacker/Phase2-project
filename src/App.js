<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
=======
import React from 'react';import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Academics from './components/Academics';
import CoCurricular from './components/CoCurricular';
import ApplyNow from './components/ApplyNow';
import OurPartners from './components/OurPartners';
import Footer from './components/Footer';
import Campus from './components/Campus';


const App = () => (
  
    <div>
      <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partners" element={<OurPartners/>} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/co-curricular" element={<CoCurricular />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/apply-now" element={<ApplyNow />} />
    
        
      </Routes>
      </div>
      
      <div>
      <Footer />
      </div>
    </div>
   
);
>>>>>>> 615f742843c7222059ec747c3e24630a6247ea52

export default App;
