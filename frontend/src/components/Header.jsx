import React from 'react';
import { Button } from './ui/button';
import { BookOpen, Sun } from 'lucide-react';

const Header = () => {
  const navItems = ['Home', 'About Us', 'What We Enable', 'Impact', 'Get Involved'];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Sun className="w-6 h-6 text-orange-500" />
                <BookOpen className="w-4 h-4 text-indigo-600 absolute" style={{ transform: 'translate(4px, 4px)' }} />
              </div>
            </div>
            <span className="text-2xl font-bold text-slate-700" style={{ letterSpacing: '0.5px' }}>SOHUM TRUST</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-slate-600 hover:text-indigo-600 font-medium transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
          >
            Donate Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
