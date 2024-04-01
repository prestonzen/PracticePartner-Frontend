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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [email, setEmail] = useState(null);
  const [emailAddress, setEmailAddress] = useState('');
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/authenticate',
          { withCredentials: true }
        );

        if (response.status === 200) {
          // const content = await response.json();
          // console.log(response);
          if (response.data.email) {
            console.log(response.data);
            setEmail(true);
            setEmailAddress(response.data.email);
            console.log(response.data.email);
            if (response.data.isAdmin) {
              console.log(response.data.isAdmin);
              setIsAdmin(true);
            }
          } else {
            console.error('Email not found in response');
            setEmail(false);
          }
        } else if (response.status === 401) {
          setEmail(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    // Render loading indicator or placeholder while data is being fetched
    return (
      <div className="bg-primary-container flex justify-center items-center h-svh">
        <PropagateLoader color="#006590" loading={true} size={15} />
      </div>
    );
  }

  return (
    <div className="bg-primary-container min-h-screen flex flex-col ">
      {/* <AuthProvider> */}
      <ToastContainer />
      <Navbar
        loggedIn={email}
        setEmail={setEmail}
        setIsAdmin={setIsAdmin}
        setEmailAddress={setEmailAddress}
      />
      <div className="flex max-md:flex-col h-full pl-2">
        <Toolbar
          setEmail={setEmail}
          isAdmin={isAdmin}
          setIsAdmin={setIsAdmin}
          setEmailAddress={setEmailAddress}
        />
        {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route
            path="/plan"
            element={<Plan isLoggedIn={email} emailAddress={emailAddress} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/termsofuse" element={<TermsofUse />} />
          <Route
            path="/signup"
            element={email ? <Navigate to="/" /> : <SignUp />}
          />
          <Route
            path="/login"
            element={
              email ? (
                <Navigate to="/" />
              ) : (
                <LogIn setEmail={setEmail} setIsAdmin={setIsAdmin} />
              )
            }
          />
          {/* <PrivateRoute
          exact
          path="/generate-image"
          component={ImageGenerator}
          isAuthenticated={isAuthenticated}
        /> */}
          <Route
            path="/generate-image"
            element={email ? <ImageGenerator /> : <Navigate to="/login" />}
          />
          {/* <Route path="/chat" element={() => <Chat email={email}/>} /> */}
          <Route
            path="/chat"
            element={email ? <Chat /> : <Navigate to="/login" />}
          />
          <Route
            path="/account"
            element={email ? <Account /> : <Navigate to="/login" />}
          />
          <Route
            path="/user-management"
            element={
              isAdmin ? <UserManagement /> : <Navigate to="/generate-image" />
            }
          />
          <Route
            path="/ai-configuration"
            element={isAdmin ? <AIconfiguration /> : <Navigate to="/login" />}
          />
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
