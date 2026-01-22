import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#fef3e8]/60 via-[#f2a041]/15 to-[#f15b59]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
              About <span className="text-[#f2a041]">Sohum Trust</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Nurturing Minds, Illuminating Futures through comprehensive educational advancement.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Who We Are</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Registered in Karnataka, Sohum Trust champions comprehensive educational advancement, establishing and sustaining institutions that empower learners at every stage. From foundational schooling to cutting-edge research, our initiatives foster intellectual growth, cultural preservation, and professional excellence across diverse disciplines.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our mission integrates, operates, and elevates educational ecosystems—spanning primary academies to specialized research hubs—ensuring equitable opportunities rooted in India's vibrant heritage.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Our Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Sohum Trust envisions an India where every individual accesses transformative education tailored to their aspirations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-b from-amber-50/40 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#f2a041]/40">
              <div className="w-14 h-14 bg-[#f2a041] rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Excellence</h3>
              <p className="text-slate-600">
                We strive for excellence in everything we do, ensuring our students receive the highest quality education and support.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#f2a041]/40">
              <div className="w-14 h-14 bg-[#f2a041] rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Inclusivity</h3>
              <p className="text-slate-600">
                We believe in equal opportunities for all, regardless of background, location, or economic status.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#f2a041]/40">
              <div className="w-14 h-14 bg-[#f2a041] rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Innovation</h3>
              <p className="text-slate-600">
                We embrace innovative teaching methods and technologies to deliver the best learning experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
