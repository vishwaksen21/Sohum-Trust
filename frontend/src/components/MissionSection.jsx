import React from 'react';

const MissionSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white/80 to-amber-50/30 relative overflow-hidden">
      {/* Decorative Leaf Elements in Corners */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left Natural Leaf Pattern */}
        <div className="absolute top-0 left-0 w-44 h-44 md:w-56 md:h-56 opacity-15">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20 Q 45 40, 75 70" stroke="#A8B8A5" strokeWidth="1.2" fill="none" opacity="0.3"/>
            <path d="M20 20 Q 35 35, 55 55" stroke="#B4C7AF" strokeWidth="1" fill="none" opacity="0.28"/>
            
            {/* Natural leaf shapes */}
            <path d="M28 28 Q 33 23, 38 27 Q 40 33, 36 38 Q 31 40, 28 35 Z" fill="#B8CAB8" opacity="0.37"/>
            <path d="M38 38 Q 44 33, 49 38 Q 51 44, 46 49 Q 41 51, 38 46 Z" fill="#C4D4CC" opacity="0.38"/>
            <path d="M50 48 Q 56 43, 61 48 Q 63 54, 58 59 Q 53 61, 50 56 Z" fill="#A8B8A5" opacity="0.36"/>
            <path d="M62 60 Q 68 55, 73 60 Q 75 66, 70 71 Q 65 73, 62 68 Z" fill="#B0C4B8" opacity="0.37"/>
          </svg>
        </div>
        
        {/* Bottom Right Natural Leaf Pattern */}
        <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 opacity-13">
          <svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M200 200 Q 170 170, 135 135" stroke="#A8B8A5" strokeWidth="1.3" fill="none" opacity="0.3"/>
            <path d="M200 200 Q 180 185, 155 165" stroke="#9FB09C" strokeWidth="1.1" fill="none" opacity="0.28"/>
            
            {/* Natural leaves */}
            <path d="M192 192 Q 198 185, 203 190 Q 205 197, 200 203 Q 194 205, 192 199 Z" fill="#B4CAC4" opacity="0.37"/>
            <path d="M180 180 Q 186 173, 191 178 Q 193 185, 188 191 Q 182 193, 180 187 Z" fill="#C4D4CC" opacity="0.38"/>
            <path d="M165 165 Q 171 158, 176 163 Q 178 170, 173 176 Q 167 178, 165 172 Z" fill="#A8B8A5" opacity="0.36"/>
            <path d="M148 148 Q 154 141, 159 146 Q 161 153, 156 159 Q 150 161, 148 155 Z" fill="#B0C4B8" opacity="0.37"/>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-700">
            Support Tech Education for Underprivileged Students
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Your donation to Sohum Trust empowers students in Tier 2 and Tier 3 cities with vital tech skills in coding, STEM, and digital literacy, opening doors to a brighter future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
