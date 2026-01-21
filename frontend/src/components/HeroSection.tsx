import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-16 md:py-20 flex items-center bg-gradient-to-br from-amber-50/40 via-orange-50/20 to-rose-50/30 overflow-hidden">
      {/* Watercolor Texture Overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F97316' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '30px 30px'
      }}></div>
      
      {/* Educational Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left - Books Stack */}
        <div className="absolute top-12 left-8 opacity-12">
          <svg width="100" height="120" viewBox="0 0 100 120" fill="none">
            <rect x="15" y="70" width="60" height="12" rx="2" fill="#FB8C00"/>
            <rect x="18" y="58" width="54" height="12" rx="2" fill="#FF9800"/>
            <rect x="12" y="82" width="66" height="12" rx="2" fill="#F57C00"/>
            <rect x="20" y="46" width="50" height="12" rx="2" fill="#FFA726"/>
            <line x1="45" y1="46" x2="45" y2="94" stroke="#fff" strokeWidth="2" opacity="0.5"/>
          </svg>
        </div>

        {/* Top Right - Graduation Cap */}
        <div className="absolute top-16 right-12 opacity-12">
          <svg width="100" height="90" viewBox="0 0 100 90" fill="none">
            <polygon points="50,15 15,35 50,55 85,35" fill="#5C6BC0"/>
            <rect x="45" y="55" width="10" height="20" fill="#5C6BC0"/>
            <ellipse cx="50" cy="75" rx="8" ry="3" fill="#5C6BC0"/>
            <path d="M85,35 L85,52 Q85,58 78,62 L50,70 L22,62 Q15,58 15,52 L15,35" fill="none" stroke="#5C6BC0" strokeWidth="3"/>
          </svg>
        </div>

        {/* Middle Left - Lightbulb */}
        <div className="absolute top-1/3 left-16 opacity-10">
          <svg width="80" height="100" viewBox="0 0 80 100" fill="none">
            <ellipse cx="40" cy="30" rx="22" ry="28" fill="#FFA726"/>
            <rect x="30" y="52" width="20" height="16" rx="3" fill="#FFB74D"/>
            <rect x="32" y="68" width="16" height="6" rx="2" fill="#FFB74D"/>
            <line x1="40" y1="5" x2="40" y2="0" stroke="#FFA726" strokeWidth="4"/>
            <line x1="15" y1="15" x2="10" y2="10" stroke="#FFA726" strokeWidth="4"/>
            <line x1="65" y1="15" x2="70" y2="10" stroke="#FFA726" strokeWidth="4"/>
          </svg>
        </div>

        {/* Bottom Right - Rocket */}
        <div className="absolute bottom-20 right-16 opacity-11">
          <svg width="70" height="110" viewBox="0 0 70 110" fill="none">
            <polygon points="35,5 28,28 42,28" fill="#FF7043"/>
            <rect x="25" y="28" width="20" height="50" rx="3" fill="#FF5722"/>
            <polygon points="15,55 25,48 25,68" fill="#FB8C00"/>
            <polygon points="55,55 45,48 45,68" fill="#FB8C00"/>
            <circle cx="35" cy="45" r="8" fill="#FFF3E0"/>
            <ellipse cx="35" cy="78" rx="6" ry="12" fill="#FFB74D"/>
          </svg>
        </div>

        {/* Bottom Left - Pencils */}
        <div className="absolute bottom-16 left-12 opacity-11">
          <svg width="90" height="100" viewBox="0 0 90 100" fill="none">
            <g transform="rotate(-15 25 50)">
              <polygon points="25,10 22,20 28,20" fill="#FFB74D"/>
              <rect x="20" y="20" width="10" height="50" fill="#FB8C00"/>
              <polygon points="20,70 25,80 30,70" fill="#6D4C41"/>
            </g>
            <g transform="rotate(15 55 50)">
              <polygon points="55,10 52,20 58,20" fill="#FFB74D"/>
              <rect x="50" y="20" width="10" height="50" fill="#5C6BC0"/>
              <polygon points="50,70 55,80 60,70" fill="#6D4C41"/>
            </g>
          </svg>
        </div>

        {/* Middle Right - Atom/Science */}
        <div className="absolute top-1/2 right-24 opacity-10">
          <svg width="90" height="90" viewBox="0 0 90 90" fill="none" stroke="#5C6BC0" strokeWidth="3">
            <circle cx="45" cy="45" r="6" fill="#5C6BC0"/>
            <ellipse cx="45" cy="45" rx="35" ry="15" />
            <ellipse cx="45" cy="45" rx="35" ry="15" transform="rotate(60 45 45)"/>
            <ellipse cx="45" cy="45" rx="35" ry="15" transform="rotate(120 45 45)"/>
          </svg>
        </div>

        {/* Top Center - Computer/Monitor */}
        <div className="absolute top-20 left-1/3 opacity-9">
          <svg width="85" height="75" viewBox="0 0 85 75" fill="none">
            <rect x="8" y="8" width="70" height="50" rx="3" fill="#5C6BC0"/>
            <rect x="13" y="13" width="60" height="40" fill="#E8EAF6"/>
            <rect x="32" y="58" width="22" height="4" fill="#5C6BC0"/>
            <rect x="25" y="62" width="36" height="3" fill="#5C6BC0"/>
          </svg>
        </div>

        {/* Bottom Center - Globe/World */}
        <div className="absolute bottom-32 left-1/3 opacity-10">
          <svg width="85" height="85" viewBox="0 0 85 85" fill="none" stroke="#26A69A" strokeWidth="3">
            <circle cx="42.5" cy="42.5" r="35"/>
            <ellipse cx="42.5" cy="42.5" rx="18" ry="35"/>
            <line x1="7.5" y1="42.5" x2="77.5" y2="42.5"/>
            <ellipse cx="42.5" cy="42.5" rx="35" ry="18"/>
          </svg>
        </div>

        {/* Rocket Icon - floating */}
        <div className="absolute top-24 right-1/4 animate-bounce" style={{ animationDuration: '3s' }}>
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>

        {/* Lightbulb Icon */}
        <div className="absolute top-32 left-1/4 animate-pulse" style={{ animationDuration: '2s' }}>
          <div className="w-10 h-10 md:w-14 md:h-14 bg-yellow-300/40 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 md:w-7 md:h-7 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
        </div>

        {/* Gear/Settings Icon */}
        <div className="absolute top-20 left-1/3 animate-spin" style={{ animationDuration: '20s' }}>
          <svg className="w-10 h-10 md:w-12 md:h-12 text-indigo-300/30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/>
            <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd"/>
          </svg>
        </div>

        {/* Bottom Right Leaf - Purple/Blue */}
        <div className="absolute bottom-0 right-0 w-48 h-48 md:w-72 md:h-72 opacity-20">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M180 100C160 130 130 150 90 145C50 140 30 110 35 70C40 30 70 10 110 20C150 30 180 100 180 100Z" fill="#818CF8" fillOpacity="0.3"/>
            <path d="M180 100C165 125 140 140 105 137C70 134 55 110 58 80C61 50 85 35 115 42C145 49 180 100 180 100Z" fill="#6366F1" fillOpacity="0.2"/>
          </svg>
        </div>

        {/* Bottom Left Decorative circles */}
        <div className="absolute bottom-20 left-8 w-20 h-20 bg-emerald-300/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-24 w-16 h-16 bg-blue-300/20 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-slate-800">Empowering </span>
              <span className="text-orange-500">Students</span>
              <span className="text-slate-800">,</span>
              <br />
              <span className="text-slate-800">Transforming </span>
              <span className="text-orange-500">Futures</span>
            </motion.h1>
            
            <motion.p 
              className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Help students in Tier 2 & 3 cities receive quality tech education and build their dreams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Donate Now
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Illustration - Educational Scene */}
          <motion.div 
            className="relative max-w-md mx-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {/* Main illustration card */}
            <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-xl border border-white/50">
              {/* Top section - Teacher and student */}
              <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 mb-3">
                <div className="flex items-center justify-between gap-3">
                  {/* Teacher illustration */}
                  <div className="flex-1">
                    <div className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-gradient-to-br from-orange-200 to-orange-300 rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 md:w-14 md:h-14 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="text-center mt-1">
                      <div className="text-xs font-semibold text-slate-700">Teacher</div>
                    </div>
                  </div>

                  {/* Video screen mockup */}
                  <div className="flex-1">
                    <div className="bg-white rounded-lg shadow-lg p-2 border-3 border-slate-300">
                      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded p-2 text-white text-xs space-y-1">
                        <div className="flex items-center justify-between mb-1">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                          <div className="flex space-x-1">
                            <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                            <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                          </div>
                        </div>
                        <div className="font-mono text-xs">1 + 1 = 2</div>
                        <div className="font-mono text-xs">5 + 5 = 10</div>
                        <div className="font-mono text-xs">8 + 2 = 10</div>
                      </div>
                      <div className="mt-2 text-center">
                        <div className="w-12 h-12 mx-auto bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div className="text-xs font-medium text-slate-600 mt-0.5">Student</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom section - Books and ABC blocks */}
              <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4">
                <div className="flex items-center justify-between gap-2">
                  {/* Plant pot */}
                  <div className="w-12 h-14 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-t-full relative">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <svg className="w-8 h-8 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C9.243 2 7 4.243 7 7v7c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2V7c0-2.757-2.243-5-5-5z"/>
                        <path d="M12 6c-1.654 0-3 1.346-3 3v5h6V9c0-1.654-1.346-3-3-3z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Books stack */}
                  <div className="space-y-0.5">
                    <div className="w-16 h-2 bg-red-400 rounded-sm"></div>
                    <div className="w-14 h-2 bg-blue-400 rounded-sm ml-1"></div>
                    <div className="w-15 h-2 bg-purple-400 rounded-sm ml-0.5"></div>
                  </div>

                  {/* ABC blocks */}
                  <div className="flex space-x-1">
                    <div className="w-6 h-6 bg-yellow-300 rounded border-2 border-yellow-500 flex items-center justify-center font-bold text-yellow-800 text-xs">A</div>
                    <div className="w-6 h-6 bg-pink-300 rounded border-2 border-pink-500 flex items-center justify-center font-bold text-pink-800 text-xs">B</div>
                    <div className="w-6 h-6 bg-blue-300 rounded border-2 border-blue-500 flex items-center justify-center font-bold text-blue-800 text-xs">C</div>
                  </div>

                  {/* Student working */}
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decorative elements around illustration */}
            <motion.div 
              className="absolute -top-3 -right-3 w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center shadow-lg"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-xl">💡</span>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-3 -left-3 w-11 h-11 bg-pink-300 rounded-full flex items-center justify-center shadow-lg"
              animate={{ 
                y: [0, -15, 0],
                x: [0, 5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <span className="text-xl">🚀</span>
            </motion.div>

            <motion.div 
              className="absolute top-1/2 -right-5 w-9 h-9 bg-purple-300 rounded-full flex items-center justify-center shadow-lg"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-lg">⚙️</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
