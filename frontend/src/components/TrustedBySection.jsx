import React from 'react';
import { partnerPlaceholders } from '../mockData';

const TrustedBySection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white/90 to-amber-50/30 border-t border-orange-100/30 relative overflow-hidden">
      {/* Subtle leaf decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left delicate watercolor leaf branch */}
        <div className="absolute top-8 left-4 w-20 h-28 md:w-28 md:h-40 opacity-8">
          <svg viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10 Q 25 30, 40 55 T 70 110" stroke="#A8B8A5" strokeWidth="1.2" fill="none" opacity="0.3"/>
            
            <ellipse cx="14" cy="18" rx="8" ry="5" fill="#B8C9B4" opacity="0.4" transform="rotate(-20 14 18)"/>
            <ellipse cx="22" cy="28" rx="9" ry="6" fill="#C8D5C4" opacity="0.38" transform="rotate(15 22 28)"/>
            <ellipse cx="32" cy="42" rx="8" ry="5" fill="#A8B8A5" opacity="0.4" transform="rotate(-18 32 42)"/>
            
            <ellipse cx="42" cy="58" rx="10" ry="6" fill="#9FB09C" opacity="0.37" transform="rotate(18 42 58)"/>
            <ellipse cx="52" cy="76" rx="9" ry="6" fill="#B4C7AF" opacity="0.4" transform="rotate(-20 52 76)"/>
            
            <ellipse cx="62" cy="94" rx="11" ry="7" fill="#C8D5C4" opacity="0.38" transform="rotate(16 62 94)"/>
            <ellipse cx="68" cy="108" rx="8" ry="5" fill="#A8B8A5" opacity="0.4" transform="rotate(-15 68 108)"/>
          </svg>
        </div>
        
        {/* Right delicate watercolor leaf branch */}
        <div className="absolute bottom-8 right-4 w-20 h-28 md:w-28 md:h-40 opacity-8">
          <svg viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M70 10 Q 55 30, 40 55 T 10 110" stroke="#A8B8A5" strokeWidth="1.2" fill="none" opacity="0.3"/>
            
            <ellipse cx="66" cy="18" rx="9" ry="6" fill="#B4C7AF" opacity="0.4" transform="rotate(22 66 18)"/>
            <ellipse cx="58" cy="28" rx="8" ry="5" fill="#C8D5C4" opacity="0.38" transform="rotate(-16 58 28)"/>
            <ellipse cx="48" cy="42" rx="10" ry="6" fill="#A8B8A5" opacity="0.4" transform="rotate(18 48 42)"/>
            
            <ellipse cx="38" cy="58" rx="9" ry="6" fill="#9FB09C" opacity="0.37" transform="rotate(-20 38 58)"/>
            <ellipse cx="28" cy="76" rx="11" ry="7" fill="#B8C9B4" opacity="0.4" transform="rotate(16 28 76)"/>
            
            <ellipse cx="18" cy="94" rx="8" ry="5" fill="#C8D5C4" opacity="0.38" transform="rotate(-18 18 94)"/>
            <ellipse cx="12" cy="108" rx="9" ry="6" fill="#A8B8A5" opacity="0.4" transform="rotate(20 12 108)"/>
          </svg>
        </div>
        
        {/* Thin leafy separator line at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-200/40 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <p className="text-center text-slate-500 text-sm font-medium mb-8 uppercase tracking-wider">
          Trusted by Communities & Supporters
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partnerPlaceholders.map((partner) => (
            <div
              key={partner.id}
              className="bg-white/80 backdrop-blur-sm rounded-xl px-8 py-6 border border-orange-100/50 hover:border-orange-300 transition-colors duration-200 shadow-sm"
            >
              <p className="text-slate-400 font-semibold text-sm whitespace-nowrap">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
        
        {/* Thin leafy separator line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-200/40 to-transparent"></div>
      </div>
    </section>
  );
};

export default TrustedBySection;
