import React from 'react';
import { Button } from './ui/button';
import { IndianRupee } from 'lucide-react';
import { donationTiers } from '../mockData';

const DonationCards = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50/30 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Right Leaf Cluster */}
        <div className="absolute top-0 right-0 w-56 h-56 opacity-15">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="100" cy="80" rx="60" ry="40" fill="#FB8C00" transform="rotate(-30 100 80)" />
            <ellipse cx="130" cy="120" rx="50" ry="35" fill="#A5D6A7" transform="rotate(20 130 120)" />
            <ellipse cx="70" cy="130" rx="55" ry="38" fill="#5C6BC0" transform="rotate(-10 70 130)" />
          </svg>
        </div>
        
        {/* Bottom Left Abstract Shape */}
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl"></div>
        
        {/* Mid Right Orange Glow */}
        <div className="absolute top-1/2 right-10 w-48 h-48 bg-orange-200/25 rounded-full blur-2xl"></div>
        
        {/* Decorative Dots */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-orange-400/40 rounded-full"></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-indigo-400/40 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-emerald-400/40 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-700">
            How Your Donation Helps
          </h2>
          <p className="text-lg text-slate-600">
            Help us bridge the education gap – every contribution counts!
          </p>
        </div>

        {/* Donation Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {donationTiers.map((tier) => (
            <div
              key={tier.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              style={{
                boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.12), 0 5px 15px -3px rgba(0, 0, 0, 0.08)'
              }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={tier.image}
                  alt={tier.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <IndianRupee className="w-6 h-6 text-orange-500" />
                  <span className="text-3xl font-bold text-indigo-600">{tier.amount.replace('₹', '')}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-700">
                  {tier.title}
                </h3>
                <p className="text-slate-600">
                  {tier.description}
                </p>
                
                {/* Clear Impact Mapping */}
                <div className="bg-indigo-50 rounded-lg px-4 py-3">
                  <p className="text-sm font-medium text-indigo-700">
                    ✓ Impact: {tier.impact}
                  </p>
                </div>
                
                <Button
                  className={`w-full py-6 rounded-full text-lg font-semibold transition-all duration-200 ${
                    tier.buttonColor === 'orange'
                      ? 'bg-orange-500 hover:bg-orange-600 text-white'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  }`}
                >
                  Donate
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationCards;
