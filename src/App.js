import logo from './logo.svg';
import './App.css';
import FooterNavbar from './components/FooterNavbar';
import Navbar from './components/Navbar';
import Toolbar from './components/Toolbar';

function App() {
  return (
    <div className="bg-primary-container min-h-screen flex flex-col">
      <Navbar />
      <Toolbar />
      <FooterNavbar />
    </div>
  );
}

export default App;
