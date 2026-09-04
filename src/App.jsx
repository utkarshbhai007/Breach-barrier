import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TargetCursor from './components/TargetCursor';
import AiChatbot from './components/AiChatbot';
import PageTransition from './components/PageTransition';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import IndustriesPage from './pages/IndustriesPage';
import ResourcesPage from './pages/ResourcesPage';
import ProcessPage from './pages/ProcessPage';
import WhyUsPage from './pages/WhyUsPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';

// Service Pages
import SocService from './pages/services/SocService';
import MdrService from './pages/services/MdrService';
import PentestService from './pages/services/PentestService';
import ForensicsService from './pages/services/ForensicsService';
import VulnService from './pages/services/VulnService';
import ComplianceService from './pages/services/ComplianceService';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/industries" element={<PageTransition><IndustriesPage /></PageTransition>} />
        <Route path="/resources" element={<PageTransition><ResourcesPage /></PageTransition>} />
        <Route path="/process" element={<PageTransition><ProcessPage /></PageTransition>} />
        <Route path="/why-choose-us" element={<PageTransition><WhyUsPage /></PageTransition>} />
        <Route path="/faq" element={<PageTransition><FaqPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/services/soc" element={<PageTransition><SocService /></PageTransition>} />
        <Route path="/services/mdr" element={<PageTransition><MdrService /></PageTransition>} />
        <Route path="/services/pentesting" element={<PageTransition><PentestService /></PageTransition>} />
        <Route path="/services/incident-response" element={<PageTransition><ForensicsService /></PageTransition>} />
        <Route path="/services/vulnerability-management" element={<PageTransition><VulnService /></PageTransition>} />
        <Route path="/services/compliance" element={<PageTransition><ComplianceService /></PageTransition>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      <div className="min-h-screen bg-[#F4F4F6] text-[#0A0A0C] relative">
        <Navbar />
        <main className="relative z-10">
          <AnimatedRoutes />
        </main>
        <Footer />
        <AiChatbot />
      </div>
    </Router>
  );
}
