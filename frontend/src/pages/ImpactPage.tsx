import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImpactStats from '../components/ImpactStats';
import TestimonialSection from '../components/TestimonialSection';

const ImpactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#fef3e8]/60 via-[#f2a041]/15 to-[#f15b59]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
              Our <span className="text-[#f2a041]">Impact</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              See how we're transforming lives and creating opportunities for students across India.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <ImpactStats />

      {/* Success Stories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">
              Success Stories
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#fef3e8] to-amber-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-[#f9c483] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">👨‍💻</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Rajesh Kumar - Software Developer</h3>
                    <p className="text-slate-600 leading-relaxed">
                      "Thanks to Sohum Trust, I learned web development and landed my first job at a tech company. The mentorship and guidance I received changed my life completely."
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-indigo-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">👩‍💼</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Priya Sharma - Data Analyst</h3>
                    <p className="text-slate-600 leading-relaxed">
                      "The Python and data analytics courses opened up a world of opportunities for me. I never thought I could work in tech, but Sohum Trust made it possible."
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">👨‍🎓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Amit Patel - Full Stack Developer</h3>
                    <p className="text-slate-600 leading-relaxed">
                      "From learning the basics of coding to building complete web applications, the journey has been incredible. Now I'm working on exciting projects and mentoring others too."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Impact by Numbers */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Creating Lasting Change
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Every contribution helps us reach more students and create more success stories. Together, we're building a future where quality tech education is accessible to all, regardless of location or background.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImpactPage;
