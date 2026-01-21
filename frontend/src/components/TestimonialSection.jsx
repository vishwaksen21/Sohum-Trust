import React from 'react';
import { Quote } from 'lucide-react';
import { testimonial } from '../mockData';

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50/50 via-orange-50/30 to-rose-50/20 relative overflow-hidden">
      {/* Watercolor Texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
        backgroundImage: `radial-gradient(ellipse at top left, rgba(251, 140, 0, 0.1) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(134, 166, 138, 0.12) 0%, transparent 50%)`
      }}></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left Watercolor Leaf Branch */}
        <div className="absolute top-10 left-0 w-56 h-72 md:w-72 md:h-96 opacity-10">
          <svg viewBox="0 0 220 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 30 Q 55 70, 90 120 T 180 270" stroke="#A8B8A5" strokeWidth="2" fill="none" opacity="0.3"/>
            
            <ellipse cx="28" cy="42" rx="14" ry="9" fill="#B8C9B4" opacity="0.4" transform="rotate(-22 28 42)"/>
            <ellipse cx="40" cy="56" rx="16" ry="10" fill="#C8D5C4" opacity="0.38" transform="rotate(18 40 56)"/>
            <ellipse cx="52" cy="72" rx="15" ry="9" fill="#A8B8A5" opacity="0.4" transform="rotate(-16 52 72)"/>
            
            <ellipse cx="68" cy="90" rx="17" ry="11" fill="#9FB09C" opacity="0.37" transform="rotate(20 68 90)"/>
            <ellipse cx="84" cy="110" rx="16" ry="10" fill="#B4C7AF" opacity="0.4" transform="rotate(-22 84 110)"/>
            <ellipse cx="100" cy="130" rx="18" ry="11" fill="#C8D5C4" opacity="0.38" transform="rotate(16 100 130)"/>
            
            <ellipse cx="120" cy="155" rx="15" ry="9" fill="#A8B8A5" opacity="0.4" transform="rotate(-18 120 155)"/>
            <ellipse cx="138" cy="180" rx="17" ry="11" fill="#9FB09C" opacity="0.37" transform="rotate(22 138 180)"/>
            
            <ellipse cx="156" cy="208" rx="16" ry="10" fill="#B8C9B4" opacity="0.4" transform="rotate(-20 156 208)"/>
            <ellipse cx="170" cy="235" rx="14" ry="9" fill="#C8D5C4" opacity="0.38" transform="rotate(15 170 235)"/>
            <ellipse cx="178" cy="260" rx="15" ry="10" fill="#A8B8A5" opacity="0.4" transform="rotate(-18 178 260)"/>
          </svg>
        </div>
        
        {/* Right Side Watercolor Leaf Branch */}
        <div className="absolute top-10 right-0 w-48 h-64 md:w-64 md:h-80 opacity-9">
          <svg viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M180 40 Q 145 80, 110 130 T 30 260" stroke="#A8B8A5" strokeWidth="1.8" fill="none" opacity="0.3"/>
            
            <ellipse cx="170" cy="52" rx="15" ry="9" fill="#B4C7AF" opacity="0.4" transform="rotate(25 170 52)"/>
            <ellipse cx="158" cy="66" rx="13" ry="8" fill="#C8D5C4" opacity="0.38" transform="rotate(-18 158 66)"/>
            <ellipse cx="146" cy="82" rx="16" ry="10" fill="#A8B8A5" opacity="0.4" transform="rotate(18 146 82)"/>
            
            <ellipse cx="130" cy="102" rx="14" ry="9" fill="#9FB09C" opacity="0.37" transform="rotate(-20 130 102)"/>
            <ellipse cx="115" cy="122" rx="17" ry="11" fill="#B8C9B4" opacity="0.4" transform="rotate(22 115 122)"/>
            
            <ellipse cx="96" cy="146" rx="15" ry="9" fill="#C8D5C4" opacity="0.38" transform="rotate(-16 96 146)"/>
            <ellipse cx="78" cy="172" rx="18" ry="11" fill="#A8B8A5" opacity="0.4" transform="rotate(18 78 172)"/>
            
            <ellipse cx="60" cy="200" rx="16" ry="10" fill="#9FB09C" opacity="0.37" transform="rotate(-22 60 200)"/>
            <ellipse cx="45" cy="228" rx="14" ry="9" fill="#B4C7AF" opacity="0.38" transform="rotate(16 45 228)"/>
            <ellipse cx="34" cy="252" rx="15" ry="10" fill="#C8D5C4" opacity="0.4" transform="rotate(-18 34 252)"/>
          </svg>
        </div>
        
        {/* Bottom Orange Glow */}
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-orange-100/20 rounded-full blur-3xl"></div>
        
        {/* Center Top Soft Glow */}
        <div className="absolute top-0 left-1/2 w-56 h-56 bg-amber-100/25 rounded-full blur-3xl transform -translate-x-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-orange-100/40"
            style={{
              boxShadow: '0 20px 40px -10px rgba(251, 140, 0, 0.15), 0 10px 20px -5px rgba(251, 140, 0, 0.1)'
            }}
          >
            {/* Delicate watercolor leaf in corner */}
            <div className="absolute bottom-4 right-4 w-20 h-24 opacity-8">
              <svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 70 Q 20 55, 30 40 T 50 10" stroke="#A8B8A5" strokeWidth="1" fill="none" opacity="0.3"/>
                
                <ellipse cx="14" cy="64" rx="8" ry="5" fill="#B8C9B4" opacity="0.4" transform="rotate(-22 14 64)"/>
                <ellipse cx="20" cy="56" rx="9" ry="6" fill="#C8D5C4" opacity="0.38" transform="rotate(16 20 56)"/>
                <ellipse cx="28" cy="45" rx="8" ry="5" fill="#A8B8A5" opacity="0.4" transform="rotate(-18 28 45)"/>
                <ellipse cx="36" cy="32" rx="10" ry="6" fill="#9FB09C" opacity="0.37" transform="rotate(20 36 32)"/>
                <ellipse cx="44" cy="20" rx="9" ry="6" fill="#B4C7AF" opacity="0.4" transform="rotate(-16 44 20)"/>
              </svg>
            </div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-100 shadow-lg">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-orange-500 p-2 rounded-full shadow-lg">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left space-y-4">
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-bold text-indigo-600 text-lg">{testimonial.name}</p>
                  <p className="text-slate-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
