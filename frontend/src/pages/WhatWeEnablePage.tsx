import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatWeEnable from '../components/Programs';

const WhatWeEnablePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#fef3e8]/60 via-[#f2a041]/15 to-[#f15b59]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
              What We <span className="text-[#f2a041]">Enable</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Empowering students with the skills and knowledge they need to succeed in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* What We Enable Component */}
      <WhatWeEnable />

      <Footer />
    </div>
  );
};

export default WhatWeEnablePage;
