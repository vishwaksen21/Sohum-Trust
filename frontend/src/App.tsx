import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import ImpactStats from "./components/ImpactStats";
import TrustIndicators from "./components/TrustIndicators";
import WhatWeEnable from "./components/WhatWeEnable";
import DonationCards from "./components/DonationCards";
import TestimonialSection from "./components/TestimonialSection";
import TrustedBySection from "./components/TrustedBySection";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import WhatWeEnablePage from "./pages/WhatWeEnablePage";
import ImpactPage from "./pages/ImpactPage";
import GetInvolvedPage from "./pages/GetInvolvedPage";
import ScrollToTop from "./components/ScrollToTop";

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

const Home: React.FC = () => {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-transparent">
        <Header />
        <HeroSection />
        <MissionSection />
        <ImpactStats />
        <TrustIndicators />
        <WhatWeEnable />
        <DonationCards />
        <TestimonialSection />
        <TrustedBySection />
        <Footer />
      </div>
    </PageWrapper>
  );
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<PageWrapper><AboutUs /></PageWrapper>} />
        <Route path="/what-we-enable" element={<PageWrapper><WhatWeEnablePage /></PageWrapper>} />
        <Route path="/impact" element={<PageWrapper><ImpactPage /></PageWrapper>} />
        <Route path="/get-involved" element={<PageWrapper><GetInvolvedPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
