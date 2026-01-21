import React from 'react';
import { GraduationCap, MapPin, BarChart } from 'lucide-react';
import { impactStats } from '../mockData';

const iconMap = {
  'graduation-cap': GraduationCap,
  'map-pin': MapPin,
  'bar-chart': BarChart
};

const ImpactStats = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50/40 via-orange-50/20 to-white/80 relative overflow-hidden">
      {/* Watercolor Texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(251, 140, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(134, 166, 138, 0.15) 0%, transparent 50%)`
      }}></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Right Side Watercolor Leaf Branch */}
        <div className="absolute top-10 right-0 w-56 h-64 md:w-72 md:h-80 opacity-12">
          <svg viewBox="0 0 220 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M200 30 Q 160 70, 120 120 T 40 240" stroke="#A8B8A5" strokeWidth="2" fill="none" opacity="0.3"/>
            
            {/* Leaf clusters along the branch */}
            <ellipse cx="185" cy="45" rx="16" ry="10" fill="#B8C9B4" opacity="0.4" transform="rotate(25 185 45)"/>
            <ellipse cx="172" cy="56" rx="14" ry="9" fill="#C8D5C4" opacity="0.38" transform="rotate(-18 172 56)"/>
            <ellipse cx="158" cy="70" rx="17" ry="11" fill="#A8B8A5" opacity="0.4" transform="rotate(15 158 70)"/>
            
            <ellipse cx="140" cy="88" rx="15" ry="10" fill="#9FB09C" opacity="0.37" transform="rotate(-20 140 88)"/>
            <ellipse cx="125" cy="105" rx="18" ry="11" fill="#B4C7AF" opacity="0.4" transform="rotate(18 125 105)"/>
            <ellipse cx="110" cy="122" rx="16" ry="10" fill="#C8D5C4" opacity="0.38" transform="rotate(-15 110 122)"/>
            
            <ellipse cx="90" cy="145" rx="17" ry="11" fill="#A8B8A5" opacity="0.4" transform="rotate(22 90 145)"/>
            <ellipse cx="72" cy="168" rx="15" ry="9" fill="#9FB09C" opacity="0.36" transform="rotate(-18 72 168)"/>
            <ellipse cx="58" cy="192" rx="19" ry="12" fill="#B8C9B4" opacity="0.4" transform="rotate(16 58 192)"/>
            
            <ellipse cx="46" cy="218" rx="16" ry="10" fill="#C8D5C4" opacity="0.38" transform="rotate(-20 46 218)"/>
            <ellipse cx="38" cy="235" rx="14" ry="9" fill="#A8B8A5" opacity="0.36" transform="rotate(14 38 235)"/>
          </svg>
        </div>
        
        {/* Left Side Watercolor Leaf Branch */}
        <div className="absolute bottom-10 left-0 w-48 h-56 md:w-64 md:h-72 opacity-10">
          <svg viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 240 Q 50 200, 90 160 T 180 50" stroke="#A8B8A5" strokeWidth="2" fill="none" opacity="0.3"/>
            
            <ellipse cx="28" cy="228" rx="15" ry="10" fill="#B4C7AF" opacity="0.4" transform="rotate(-25 28 228)"/>
            <ellipse cx="40" cy="215" rx="13" ry="8" fill="#C8D5C4" opacity="0.37" transform="rotate(18 40 215)"/>
            <ellipse cx="54" cy="200" rx="16" ry="10" fill="#A8B8A5" opacity="0.4" transform="rotate(-16 54 200)"/>
            
            <ellipse cx="70" cy="182" rx="14" ry="9" fill="#9FB09C" opacity="0.38" transform="rotate(20 70 182)"/>
            <ellipse cx="88" cy="165" rx="17" ry="11" fill="#B8C9B4" opacity="0.4" transform="rotate(-22 88 165)"/>
            
            <ellipse cx="108" cy="145" rx="15" ry="9" fill="#C8D5C4" opacity="0.37" transform="rotate(15 108 145)"/>
            <ellipse cx="128" cy="125" rx="18" ry="11" fill="#A8B8A5" opacity="0.4" transform="rotate(-18 128 125)"/>
            
            <ellipse cx="148" cy="102" rx="16" ry="10" fill="#9FB09C" opacity="0.38" transform="rotate(22 148 102)"/>
            <ellipse cx="165" cy="80" rx="14" ry="9" fill="#B4C7AF" opacity="0.36" transform="rotate(-16 165 80)"/>
            <ellipse cx="178" cy="62" rx="17" ry="11" fill="#C8D5C4" opacity="0.4" transform="rotate(18 178 62)"/>
          </svg>
        </div>
        
        {/* Decorative Soft Circles */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-100/25 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {impactStats.map((stat) => {
            const Icon = iconMap[stat.icon];
            return (
              <div
                key={stat.id}
                className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-orange-100/30"
                style={{
                  boxShadow: '0 10px 30px -5px rgba(251, 140, 0, 0.12), 0 4px 6px -2px rgba(251, 140, 0, 0.05)'
                }}
              >
                {/* Small watercolor leaf branch in corner */}
                <div className="absolute top-3 right-3 w-10 h-12 opacity-10">
                  <svg viewBox="0 0 35 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 5 Q 12 14, 18 24 T 30 42" stroke="#A8B8A5" strokeWidth="0.8" fill="none" opacity="0.3"/>
                    
                    <ellipse cx="8" cy="9" rx="5" ry="3" fill="#B8C9B4" opacity="0.4" transform="rotate(-20 8 9)"/>
                    <ellipse cx="13" cy="16" rx="6" ry="4" fill="#C8D5C4" opacity="0.38" transform="rotate(15 13 16)"/>
                    <ellipse cx="19" cy="26" rx="5" ry="3" fill="#A8B8A5" opacity="0.4" transform="rotate(-18 19 26)"/>
                    <ellipse cx="26" cy="36" rx="6" ry="4" fill="#9FB09C" opacity="0.37" transform="rotate(18 26 36)"/>
                  </svg>
                </div>
                
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-gradient-to-br from-orange-50 to-amber-100 p-4 rounded-full">
                    <Icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-medium text-lg">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
