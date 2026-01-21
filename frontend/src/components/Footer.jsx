import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center space-x-2">
              <Heart className="w-5 h-5 text-orange-400" />
              <span>Sohum Trust</span>
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Empowering students in Tier 2 and Tier 3 cities with quality tech education and building futures.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#about" className="hover:text-orange-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#programs" className="hover:text-orange-400 transition-colors duration-200">What We Enable</a></li>
              <li><a href="#impact" className="hover:text-orange-400 transition-colors duration-200">Impact</a></li>
              <li><a href="#donate" className="hover:text-orange-400 transition-colors duration-200">Donate</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <span>info@sohumtrust.org</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <span>+91 XXXX XXXXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span>India</span>
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

export default Footer;
