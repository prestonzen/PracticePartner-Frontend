
import './App.css';
import FooterNavbar from './components/FooterNavbar';
import Navbar from './components/Navbar';
import Toolbar from './components/Toolbar';
// import Toolbar2 from './components/SuperAdmin-UserManagement.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsofUse from './pages/TermsofUse';
import SignUp from './pages/SignUp';
import LogIn from './pages/Login';
import ImageGenerator from './pages/ImageGenerator.js';
import Chat from './pages/Chat.js';
import Account from './pages/Account.js';
import UserManagement from './pages/UserManagement.js';

function App() {
  return (
    <div className="bg-primary-container min-h-screen flex flex-col ">
      <Navbar />
      <div className="flex h-full pl-2">
        <Toolbar />
        {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/termsofuse" element={<TermsofUse />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/generate-image" element={<ImageGenerator />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/account" element={<Account />} />
          <Route path="/user-management" element={<UserManagement />} />
        </Routes>
        {/* </Router> */}
      </div>

      <FooterNavbar />
    </div>
  );
}

export default App;
