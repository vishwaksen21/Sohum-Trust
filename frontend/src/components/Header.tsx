import React from 'react';
import { Button } from './ui/button';

const Header: React.FC = () => {
  const navItems = ['Home', 'About Us', 'What We Enable', 'Impact', 'Get Involved'];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              {/* Sun rays background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Sun circle */}
                  <circle cx="50" cy="50" r="20" fill="#FB8C00" opacity="0.9"/>
                  {/* Rays */}
                  <path d="M50 10 L50 25" stroke="#FB8C00" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M50 75 L50 90" stroke="#FB8C00" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M10 50 L25 50" stroke="#FB8C00" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M75 50 L90 50" stroke="#FB8C00" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M20 20 L30 30" stroke="#FB8C00" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M70 70 L80 80" stroke="#FB8C00" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M80 20 L70 30" stroke="#FB8C00" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M30 70 L20 80" stroke="#FB8C00" strokeWidth="3" strokeLinecap="round"/>
                  
                  {/* Book overlay */}
                  <rect x="42" y="45" width="16" height="12" fill="#5C6BC0" rx="1"/>
                  <line x1="50" y1="45" x2="50" y2="57" stroke="white" strokeWidth="1"/>
                  <line x1="42" y1="48" x2="58" y2="48" stroke="white" strokeWidth="0.5"/>
                  <line x1="42" y1="51" x2="58" y2="51" stroke="white" strokeWidth="0.5"/>
                  <line x1="42" y1="54" x2="58" y2="54" stroke="white" strokeWidth="0.5"/>
                </svg>
              </div>
            </div>
            <span className="text-xl md:text-2xl font-bold text-slate-700 tracking-wide">SOHUM TRUST</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-slate-700 hover:text-orange-500 font-medium transition-colors duration-200 text-sm lg:text-base"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-2 md:py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 font-semibold text-sm md:text-base"
          >
            Donate Now
          </Button>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-slate-700 hover:text-orange-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
