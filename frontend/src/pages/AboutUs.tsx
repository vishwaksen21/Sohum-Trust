import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-amber-50/60 via-orange-50/30 to-rose-50/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
              About <span className="text-orange-500">Sohum Trust</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Bridging the education gap in Tier 2 & 3 cities through quality tech education and empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Sohum Trust was founded with a vision to democratize access to quality tech education for students in Tier 2 and Tier 3 cities across India. We believe that every student, regardless of their geographical location or economic background, deserves the opportunity to learn, grow, and succeed in the digital age.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our journey began when we noticed the significant gap in educational resources and opportunities between metropolitan cities and smaller towns. We set out to bridge this gap by providing comprehensive tech education, mentorship, and career guidance to underprivileged students.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To empower students in Tier 2 & 3 cities with vital tech skills in coding, STEM, and digital literacy, enabling them to build successful careers and transform their futures. We are committed to creating equal opportunities for all students, regardless of their background.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Our Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                A future where every student in India has access to world-class tech education and the opportunity to reach their full potential. We envision a generation of skilled, confident, and empowered youth who will drive innovation and progress in their communities and beyond.
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
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100/40">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Excellence</h3>
              <p className="text-slate-600">
                We strive for excellence in everything we do, ensuring our students receive the highest quality education and support.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100/40">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Inclusivity</h3>
              <p className="text-slate-600">
                We believe in equal opportunities for all, regardless of background, location, or economic status.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100/40">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
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
