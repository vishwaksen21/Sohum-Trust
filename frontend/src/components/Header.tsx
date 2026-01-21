'use client';

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';

const Header: React.FC = () => {
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
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-sm border-b border-orange-100/40 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="relative w-12 h-12">
              <img 
                src="/logo_sohum.png" 
                alt="Sohum Trust Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold text-slate-700 tracking-wide">
              SOHUM TRUST
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 text-sm lg:text-base ${
                  isActive(item.path)
                    ? 'text-orange-500'
                    : 'text-slate-700 hover:text-orange-500'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link to="/get-involved">
            <Button className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-2 md:py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 font-semibold text-sm md:text-base">
              Donate Now
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-700 hover:text-orange-500"
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-orange-100/40">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-orange-500'
                      : 'text-slate-700 hover:text-orange-500'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/get-involved" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 font-semibold">
                  Donate Now
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
      
      {/* Thin divider line */}
      <div className="absolute bottom-0 left-0 right-0 h-px">
        <div className="h-full bg-gradient-to-r from-transparent via-orange-200/50 to-transparent"></div>
      </div>
    </header>
  );
};

export default Header;
