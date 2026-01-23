import React, { useState } from 'react';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import { Button } from '../components/ui/button';

const SiteHeader: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'What We Enable', path: '/what-we-enable' },
    { label: 'Impact', path: '/impact' },
    { label: 'Get Involved', path: '/get-involved' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#EC167F] to-[#F5A044] border-b border-white/20 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <img
              src="/logo_sohum.png"
              alt="Sohum Trust Logo"
              className="h-14 md:h-16 lg:h-20 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm lg:text-base font-medium transition-all ${
                  isActive(item.path)
                    ? 'text-white font-bold'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link to="/get-involved">
            <Button className="hidden md:block bg-white text-[#EC167F] hover:bg-white/90 px-8 py-3 rounded-full font-bold shadow-lg">
              Donate Now
            </Button>
          </Link>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 border-t border-white/30 bg-gradient-to-r from-[#EC167F] to-[#F5A044]">
            <nav className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium ${
                    isActive(item.path) ? 'text-white font-bold' : 'text-white/90'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <Link to="/get-involved" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-white text-[#EC167F] font-bold rounded-full py-3">
                  Donate Now
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center space-x-2">
              <Heart className="w-5 h-5 text-[#f9c483]" />
              <span>Sohum Trust</span>
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Sohum Trust champions comprehensive educational advancement,
              establishing and sustaining institutions that empower learners at
              every stage.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2 text-slate-300">
              <li><Link to="/about" className="hover:text-[#f9c483] transition-colors duration-200">About Us</Link></li>
              <li><Link to="/what-we-enable" className="hover:text-[#f9c483] transition-colors duration-200">What We Enable</Link></li>
              <li><Link to="/impact" className="hover:text-[#f9c483] transition-colors duration-200">Impact</Link></li>
              <li><Link to="/get-involved" className="hover:text-[#f9c483] transition-colors duration-200">Get Involved</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#f9c483]" />
                <span>sohumtrust@zohomail.in</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#f9c483]" />
                <span>+91 XXXX XXXXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#f9c483]" />
                <span>Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-10 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Sohum Trust. All rights reserved. Building futures through education.</p>
        </div>
      </div>
    </footer>
  );
};

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fffdf9]">
      <SiteHeader />

      {/* ================= HERO ================= */}
      <section className="relative py-24 bg-gradient-to-br from-[#fff4e6] via-[#f2a041]/20 to-[#f15b59]/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.35em] text-xs font-semibold text-[#ea580c] mb-6">
            About Sohum Trust
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-semibold text-[#431407] leading-tight mb-6">
            Building education that lasts generations
          </h1>
          <p className="max-w-3xl mx-auto text-[17px] leading-[1.8] text-slate-600">
            Sohum Trust is committed to creating long-term educational institutions
            that empower individuals, preserve culture, and strengthen communities.
          </p>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs font-semibold text-[#ea580c] mb-4">
              Who We Are
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#431407] mb-8">
              A long-term institution builder in education
            </h2>

            <div className="space-y-6 text-[17px] leading-[1.8] text-slate-700 max-w-xl">
              <p>
                Sohum Trust is a Karnataka-registered educational trust focused on
                building institutions that endure beyond individuals, funding
                cycles, and trends.
              </p>
              <p>
                We work across academic, professional, vocational, cultural, and
                research domains—creating structured learning ecosystems instead of
                short-term interventions.
              </p>
              <p>
                Our approach ensures continuity, depth, and relevance throughout a
                learner’s educational journey.
              </p>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="space-y-6">
            {[
              ['Registered & Accountable', 'Karnataka-registered trust with transparent governance'],
              ['Institution-Focused', 'Schools, colleges, academies—not one-time programs'],
              ['Multi-Domain Education', 'Academic, vocational, cultural & research initiatives'],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-[#ea580c]"
              >
                <h4 className="font-semibold text-lg text-[#431407] mb-2">
                  {title}
                </h4>
                <p className="text-[15px] leading-[1.7] text-slate-600">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ORIGIN & PURPOSE ================= */}
      <section className="py-28 bg-[#fff7ed]">
        <div className="max-w-4xl mx-auto px-6">
          <p className="uppercase tracking-[0.3em] text-xs font-semibold text-[#ea580c] mb-6 text-center">
            Our Origin & Purpose
          </p>

          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-[#431407] text-center mb-12">
            Why Sohum Trust was founded
          </h2>

          <div className="space-y-8 text-[17px] leading-[1.85] text-slate-700">
            <p>
              Sohum Trust was founded in response to a fundamental challenge—education
              in many regions lacked continuity, guidance, and institutional stability.
            </p>
            <p>
              While access improved, learners were often left without long-term
              pathways or structured mentorship. Short-term solutions failed to
              create lasting change.
            </p>
            <p className="font-medium text-[#431407]">
              We believe education must be built as an ecosystem—not delivered as
              temporary aid.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {[
            ['Our Vision', 'An India where every individual has access to transformative education rooted in culture, capability, and aspiration.'],
            ['Our Mission', 'To integrate, operate, and elevate educational ecosystems—from foundational learning to advanced research.'],
          ].map(([title, text]) => (
            <div
              key={title}
              className="bg-white p-10 rounded-3xl shadow-lg"
            >
              <h3 className="font-heading text-2xl font-semibold text-[#431407] mb-4">
                {title}
              </h3>
              <p className="text-[16px] leading-[1.75] text-slate-600">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="py-28 bg-[#1f2933] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-xs font-semibold text-[#fbbf24] mb-4">
            Our Philosophy of Education
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-8">
            Education beyond examinations
          </h2>
          <p className="text-[17px] leading-[1.85] text-slate-200">
            Education must nurture curiosity, responsibility, cultural awareness,
            and real-world competence—preparing individuals not just for careers,
            but for life.
          </p>
        </div>
      </section>

      {/* ================= OUR JOURNEY ================= */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-heading text-3xl font-semibold text-center text-[#431407] mb-16">
            Our Journey
          </h2>

          <div className="space-y-10 border-l-2 border-[#ea580c]/40 pl-10">
            {[
              ['2018', 'Sohum Trust founded with a focus on institution building'],
              ['2021', 'Expanded into vocational and cultural education'],
              ['2024', 'Supporting learners across Karnataka'],
            ].map(([year, text]) => (
              <div key={year} className="relative">
                <span className="absolute -left-[42px] top-1 w-4 h-4 bg-[#ea580c] rounded-full" />
                <h4 className="font-semibold text-[#ea580c] mb-1">{year}</h4>
                <p className="text-[16px] text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="py-28 bg-[#fff7ed]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-heading text-3xl font-semibold text-center text-[#431407] mb-16">
            Executive Trustees
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              ['Mr. Anup Kiran', 'President'],
              ['Mr. Jayakumar D', 'Vice President'],
              ['Mr. Kumaraswamy H V', 'Secretary'],
              ['Mr. Raghuram H S', 'Treasurer'],
            ].map(([name, role]) => (
              <div
                key={name}
                className="bg-white rounded-3xl p-8 text-center shadow-md hover:shadow-lg transition"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-[#fef3e8] mb-6" />
                <h4 className="font-semibold text-[#431407]">{name}</h4>
                <p className="text-sm text-slate-600">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-semibold text-[#431407] mb-14">
            Values That Guide Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              ['Integrity', 'We act with honesty and accountability'],
              ['Inclusivity', 'Education must be accessible to all'],
              ['Responsibility', 'We are accountable to learners and society'],
            ].map(([title, desc]) => (
              <div key={title} className="p-8 bg-white rounded-2xl shadow-md">
                <h4 className="font-semibold text-lg mb-3">{title}</h4>
                <p className="text-[15px] text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default AboutUs;
