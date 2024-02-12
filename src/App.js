import logo from './logo.svg';
import './App.css';
import FooterNavbar from './components/FooterNavbar';
import Navbar from './components/Navbar';
import Toolbar from './components/Toolbar';
import Toolbar2 from './components/SuperAdmin-UserManagement.js';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsofUse from './pages/TermsofUse';

function App() {
  return (
    <div className="bg-primary-container min-h-screen flex flex-col pl-2">
      <Navbar />
      <div className='flex'>
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about-us" element={<AboutUs />} /> 
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/termsofuse" element={<TermsofUse />} /> 
        
        </Routes>
      </div>
      
      
      <FooterNavbar />
    
    </div>
  );
}

export default App;
