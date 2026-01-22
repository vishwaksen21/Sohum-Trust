import React from 'react';
import { partnerPlaceholders } from '../mockData';

const TrustedBySection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white/90 to-[#fef3e8]/30 border-t border-[#f2a041]/30 relative overflow-hidden">
      {/* Subtle educational decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left - Small pencil icon */}
        <div className="absolute top-8 left-4 opacity-8">
          <svg width="35" height="80" viewBox="0 0 35 80" fill="none">
            <polygon points="17,5 14,12 20,12" fill="#FFB74D"/>
            <rect x="12" y="12" width="10" height="48" fill="#FB8C00"/>
            <polygon points="12,60 17,68 22,60" fill="#6D4C41"/>
          </svg>
        </div>
        
        {/* Right - Small graduation cap */}
        <div className="absolute bottom-8 right-4 opacity-8">
          <svg width="45" height="40" viewBox="0 0 45 40" fill="none">
            <polygon points="22,8 8,14 22,20 36,14" fill="#5C6BC0"/>
            <rect x="20" y="20" width="4" height="10" fill="#5C6BC0"/>
            <ellipse cx="22" cy="30" rx="3" ry="1" fill="#5C6BC0"/>
          </svg>
        </div>
        
        {/* Thin separator line at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f9c483]/40 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <p className="text-center text-slate-500 text-sm font-medium mb-8 uppercase tracking-wider">
          Trusted by Communities & Supporters
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partnerPlaceholders.map((partner) => (
            <div
              key={partner.id}
              className="bg-white/80 backdrop-blur-sm rounded-xl px-8 py-6 border border-[#f2a041]/50 hover:border-[#f2834b] transition-colors duration-200 shadow-sm"
            >
              <p className="text-slate-400 font-semibold text-sm whitespace-nowrap">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
        
        {/* Thin leafy separator line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f9c483]/40 to-transparent"></div>
      </div>
    </section>
  );
};

export default TrustedBySection;
