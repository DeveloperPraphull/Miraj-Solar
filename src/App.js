import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import Residencal from './pages/Residencal/Residencal';
import Commercial from './pages/Commercial/Commercial';
import SideTab from './components/Button/SideTab';
import Society from './pages/Society/Society';
import React, { useState, useEffect } from "react";
import Logo from "./components/Button/Logo"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate app "reloading" with 2 sec delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <div>
      <div className="App">
        {loading ? (
          <div className="splash-screen">
            <div className="loader"></div>
               <Logo/>
          </div>
        ) : (
          <div className="main-content">
            <Router>
              <Header />
              <SideTab />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/AboutPage" element={<AboutPage />} />
                <Route path="/Residencal" element={<Residencal />} />
                <Route path="/Commercial" element={<Commercial />} />
                <Route path="/society" element={<Society />} />
              </Routes>
              <Footer />
            </Router>
          </div>
        )}
      </div>


    </div>
  );
}

export default App;
