import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
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
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
