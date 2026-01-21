import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatWeEnable from '../components/WhatWeEnable';

const WhatWeEnablePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-amber-50/60 via-orange-50/30 to-rose-50/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
              What We <span className="text-orange-500">Enable</span>
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
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">💻 Tech Skills</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Web Development (HTML, CSS, JavaScript, React)</li>
                  <li>• Python Programming</li>
                  <li>• Data Structures & Algorithms</li>
                  <li>• Mobile App Development</li>
                  <li>• Database Management</li>
                  <li>• Cloud Computing Basics</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">🎯 Soft Skills</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Communication & Presentation</li>
                  <li>• Problem Solving & Critical Thinking</li>
                  <li>• Teamwork & Collaboration</li>
                  <li>• Time Management</li>
                  <li>• Interview Preparation</li>
                  <li>• Resume Building</li>
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
