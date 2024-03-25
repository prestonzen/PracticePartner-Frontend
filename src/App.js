
import './App.css';
import FooterNavbar from './components/FooterNavbar';
import Navbar from './components/Navbar';
import Toolbar from './components/Toolbar';
// import Toolbar2 from './components/SuperAdmin-UserManagement.js';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
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
import AIconfiguration from './pages/AIconfiguration.js';
import PlanUpgradePrompt from './pages/PlanUpgradePrompt.js';
import Plan from './pages/Plan.js';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { PropagateLoader } from 'react-spinners';

function App() {
  const [email, setEmail] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/authenticate', { withCredentials: true });
  
        if (response.status === 200) {
          // const content = await response.json();
          // console.log(response);
          if (response.data.email) {
            console.log(response.data.email);
            setEmail(true);
          } else {
            console.error('Email not found in response');
          }
        }else if(response.status ===401){
          setEmail(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      } finally{
        setLoading(false);
      }
    };
  
    fetchData();
  },[]);

  if (loading) {
    // Render loading indicator or placeholder while data is being fetched
    return (<div className="bg-primary-container flex justify-center items-center h-svh">
    <PropagateLoader color="#006590" loading={true} size={15} />
  </div>);
  }

  return (
    <div className="bg-primary-container min-h-screen flex flex-col ">
    {/* <AuthProvider> */}
      <Navbar />
      <div className="flex max-md:flex-col h-full pl-2 relative">
        <Toolbar />
        {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/termsofuse" element={<TermsofUse />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          {/* <PrivateRoute
          exact
          path="/generate-image"
          component={ImageGenerator}
          isAuthenticated={isAuthenticated}
        /> */}
          <Route path="/generate-image" element={<ImageGenerator />} />        
          {/* <Route path="/chat" element={() => <Chat email={email}/>} /> */}
          <Route path="/chat" element={email? <Chat /> : <Navigate to="/login" />} />
          <Route path="/account" element={<Account />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/ai-configuration" element={<AIconfiguration />} />
          <Route path="/upgrade-plan" element={<PlanUpgradePrompt />} />
        </Routes>
        {/* </Router> */}
      </div>

      <FooterNavbar />
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
