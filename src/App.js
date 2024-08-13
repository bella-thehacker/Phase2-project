import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Academics from './components/Academics';
import CoCurriculars from './components/Cocurricular';
import ApplyNow from './components/ApplyNow';
import OurPartners from './components/OurPartners';
import Footer from './components/Footer';
import ApplicationForm from './components/ApplicationForm';

const App = () => (
  
    <div>
      <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partners" element={<OurPartners/>} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/co-curriculars" element={<CoCurriculars />} />
        <Route path="/apply-now" element={<ApplyNow />} />
        
      </Routes>
      </div>
      
      <div>
      <Footer />
      </div>
    </div>
  
);

export default App;
