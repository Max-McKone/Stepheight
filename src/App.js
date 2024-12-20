import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import KickingBrass from './pages/KickingBrass';
import AboutUs from './pages/AboutUs';
import Impressum from './pages/Impressum';

function ScrollToTop() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return null;
}

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Navbar />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/kickingbrass" element={<KickingBrass />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/impressum" element={<Impressum />} />
                </Routes>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;