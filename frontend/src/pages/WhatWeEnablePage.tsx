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

      {/* Additional Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Our Approach</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                We take a comprehensive, hands-on approach to tech education. Our programs are designed to not only teach technical skills but also to build confidence, creativity, and problem-solving abilities.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Through a combination of online classes, practical projects, mentorship, and career guidance, we ensure that every student has the tools and support they need to succeed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#fef3e8] to-amber-50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">🏫 Core Education</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Primary to Higher Secondary Schooling</li>
                  <li>• Undergraduate & Graduate Programs</li>
                  <li>• Basic Sciences, Commerce & Humanities</li>
                  <li>• Economics, Social Sciences & Arts</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">🔬 Specialty & Research</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Medical, Para-Medical & Bio Sciences</li>
                  <li>• Engineering & Polytechnic Institutes</li>
                  <li>• Veda & Sanskrit Patashalas</li>
                  <li>• Advanced Research in Social Sciences</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatWeEnablePage;
