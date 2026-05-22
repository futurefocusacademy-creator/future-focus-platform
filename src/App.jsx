import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Chatbot from './components/Chatbot';
import AdmissionPopup from './components/AdmissionPopup';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen selection:bg-royal/30">
        
        {/* Global Floating Sticky Navbar */}
        <Navbar />

        {/* Route Definitions */}
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Immersive Global Widgets */}
        <FloatingWhatsApp />
        <Chatbot />
        <AdmissionPopup />

      </div>
    </ThemeProvider>
  );
}
