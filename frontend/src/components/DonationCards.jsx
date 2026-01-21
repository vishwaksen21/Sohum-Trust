import React from 'react';
import { Button } from './ui/button';
import { IndianRupee } from 'lucide-react';
import { donationTiers } from '../mockData';

const DonationCards = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white/80 via-amber-50/30 to-orange-50/20 relative overflow-hidden">
      {/* Watercolor Texture */}
      <div className="absolute inset-0 opacity-25 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 30% 20%, rgba(251, 140, 0, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(134, 166, 138, 0.12) 0%, transparent 50%)`
      }}></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Right Large Multi-branch Watercolor Pattern */}
        <div className="absolute top-0 right-0 w-80 h-96 md:w-[480px] md:h-[520px] opacity-15">
          <svg viewBox="0 0 400 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Multiple main branches spreading */}
            <path d="M380 20 Q 340 70, 290 130" stroke="#A8B8A5" strokeWidth="2.5" fill="none" opacity="0.25"/>
            <path d="M380 20 Q 350 60, 310 110" stroke="#B4C7AF" strokeWidth="2.2" fill="none" opacity="0.23"/>
            <path d="M380 20 Q 360 80, 320 150" stroke="#9FB09C" strokeWidth="2.3" fill="none" opacity="0.24"/>
            <path d="M380 20 Q 330 90, 270 170" stroke="#A4B8AC" strokeWidth="2" fill="none" opacity="0.22"/>
            
            {/* Dense leaf clusters with color variety */}
            <ellipse cx="370" cy="35" rx="22" ry="14" fill="#B8CAB8" opacity="0.36" transform="rotate(32 370 35)"/>
            <ellipse cx="360" cy="45" rx="19" ry="12" fill="#A8BCA8" opacity="0.34" transform="rotate(28 360 45)"/>
            <ellipse cx="350" cy="55" rx="24" ry="15" fill="#C4D4CC" opacity="0.37" transform="rotate(35 350 55)"/>
            
            <ellipse cx="335" cy="72" rx="21" ry="13" fill="#9CB0A4" opacity="0.35" transform="rotate(-22 335 72)"/>
            <ellipse cx="320" cy="88" rx="25" ry="15" fill="#B0C4B8" opacity="0.36" transform="rotate(-18 320 88)"/>
            <ellipse cx="305" cy="105" rx="23" ry="14" fill="#A4B8B0" opacity="0.35" transform="rotate(-20 305 105)"/>
            
            <ellipse cx="345" cy="95" rx="22" ry="14" fill="#C8D8D0" opacity="0.37" transform="rotate(20 345 95)"/>
            <ellipse cx="330" cy="115" rx="20" ry="13" fill="#95A89C" opacity="0.33" transform="rotate(18 330 115)"/>
            <ellipse cx="315" cy="135" rx="24" ry="15" fill="#B8CCC0" opacity="0.36" transform="rotate(22 315 135)"/>
            
            <ellipse cx="290" cy="145" rx="21" ry="13" fill="#A8BCB4" opacity="0.35" transform="rotate(-16 290 145)"/>
            <ellipse cx="275" cy="165" rx="23" ry="14" fill="#C0D4C8" opacity="0.37" transform="rotate(-18 275 165)"/>
          </svg>
        </div>
        
        {/* Left Side Large Multi-branch Pattern */}
        <div className="absolute top-1/3 left-0 w-72 h-80 md:w-[420px] md:h-[450px] opacity-12">
          <svg viewBox="0 0 350 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Multiple spreading branches */}
            <path d="M20 40 Q 60 90, 110 150" stroke="#A8B8A5" strokeWidth="2.4" fill="none" opacity="0.25"/>
            <path d="M20 40 Q 50 80, 90 130" stroke="#B4C7AF" strokeWidth="2.1" fill="none" opacity="0.23"/>
            <path d="M20 40 Q 70 100, 130 170" stroke="#9FB09C" strokeWidth="2.2" fill="none" opacity="0.24"/>
            
            {/* Leaf clusters */}
            <ellipse cx="30" cy="55" rx="20" ry="13" fill="#B4CAC4" opacity="0.36" transform="rotate(-25 30 55)"/>
            <ellipse cx="42" cy="68" rx="22" ry="14" fill="#A8BCA8" opacity="0.35" transform="rotate(-22 42 68)"/>
            <ellipse cx="55" cy="85" rx="24" ry="15" fill="#C4D4CC" opacity="0.37" transform="rotate(-18 55 85)"/>
            
            <ellipse cx="48" cy="92" rx="21" ry="13" fill="#9CB0A4" opacity="0.34" transform="rotate(20 48 92)"/>
            <ellipse cx="65" cy="105" rx="23" ry="14" fill="#B0C4B8" opacity="0.36" transform="rotate(18 65 105)"/>
            <ellipse cx="80" cy="120" rx="20" ry="12" fill="#A4B8AC" opacity="0.35" transform="rotate(22 80 120)"/>
            
            <ellipse cx="72" cy="128" rx="22" ry="14" fill="#C8D8D0" opacity="0.37" transform="rotate(-20 72 128)"/>
            <ellipse cx="90" cy="142" rx="24" ry="15" fill="#95A89C" opacity="0.33" transform="rotate(-16 90 142)"/>
            <ellipse cx="108" cy="158" rx="21" ry="13" fill="#B8CCC0" opacity="0.36" transform="rotate(-22 108 158)"/>
          </svg>
        </div>
        
        {/* Bottom Left Soft Glow */}
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-100/15 rounded-full blur-3xl"></div>
        
        {/* Mid Right Orange Glow */}
        <div className="absolute top-1/2 right-10 w-48 h-48 bg-orange-100/20 rounded-full blur-2xl"></div>
        
        {/* Scattered Small Watercolor Leaf Accents */}
        <div className="absolute top-1/4 left-1/3 w-20 h-24 opacity-8">
          <svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10 Q 20 25, 30 40 T 50 70" stroke="#A8B8A5" strokeWidth="1" fill="none" opacity="0.3"/>
            
            <ellipse cx="14" cy="16" rx="8" ry="5" fill="#B8C9B4" opacity="0.4" transform="rotate(-20 14 16)"/>
            <ellipse cx="22" cy="26" rx="9" ry="6" fill="#C8D5C4" opacity="0.38" transform="rotate(15 22 26)"/>
            <ellipse cx="32" cy="42" rx="8" ry="5" fill="#A8B8A5" opacity="0.4" transform="rotate(-18 32 42)"/>
            <ellipse cx="42" cy="58" rx="10" ry="6" fill="#9FB09C" opacity="0.37" transform="rotate(20 42 58)"/>
          </svg>
        </div>
        
        <div className="absolute bottom-1/4 right-1/4 w-24 h-28 opacity-8">
          <svg viewBox="0 0 70 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 10 Q 45 28, 30 48 T 10 80" stroke="#A8B8A5" strokeWidth="1" fill="none" opacity="0.3"/>
            
            <ellipse cx="55" cy="16" rx="9" ry="6" fill="#B4C7AF" opacity="0.4" transform="rotate(22 55 16)"/>
            <ellipse cx="46" cy="28" rx="8" ry="5" fill="#C8D5C4" opacity="0.38" transform="rotate(-16 46 28)"/>
            <ellipse cx="34" cy="46" rx="10" ry="6" fill="#A8B8A5" opacity="0.4" transform="rotate(18 34 46)"/>
            <ellipse cx="20" cy="66" rx="9" ry="6" fill="#9FB09C" opacity="0.37" transform="rotate(-20 20 66)"/>
          </svg>
        </div>
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
              className="relative bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-orange-100/40"
              style={{
                boxShadow: '0 15px 35px -5px rgba(251, 140, 0, 0.15), 0 5px 15px -3px rgba(0, 0, 0, 0.08)'
              }}
            >
              {/* Delicate watercolor leaf in top right corner of card */}
              <div className="absolute top-2 right-2 w-12 h-14 opacity-10 z-10">
                <svg viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 5 Q 12 15, 20 25 T 35 45" stroke="#A8B8A5" strokeWidth="0.8" fill="none" opacity="0.3"/>
                  
                  <ellipse cx="8" cy="10" rx="6" ry="4" fill="#B8C9B4" opacity="0.4" transform="rotate(-20 8 10)"/>
                  <ellipse cx="14" cy="18" rx="7" ry="4" fill="#C8D5C4" opacity="0.38" transform="rotate(15 14 18)"/>
                  <ellipse cx="22" cy="28" rx="6" ry="4" fill="#A8B8A5" opacity="0.4" transform="rotate(-18 22 28)"/>
                  <ellipse cx="30" cy="38" rx="7" ry="5" fill="#9FB09C" opacity="0.37" transform="rotate(20 30 38)"/>
                </svg>
              </div>
              
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
