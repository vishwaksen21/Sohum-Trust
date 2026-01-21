import React from 'react';
import { Button } from './ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 py-20 md:py-28 overflow-hidden">
      {/* Decorative Background Elements - Leafs and Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left Leaf - Green */}
        <div className="absolute top-8 left-0 w-32 h-32 md:w-48 md:h-48 opacity-30">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 20C70 50 50 80 60 120C70 160 100 180 120 170C140 160 160 130 150 90C140 50 100 20 100 20Z" fill="#34D399" fillOpacity="0.3"/>
            <path d="M100 20C75 45 60 75 65 110C70 145 95 165 115 160C135 155 150 130 145 95C140 60 100 20 100 20Z" fill="#10B981" fillOpacity="0.2"/>
          </svg>
        </div>

        {/* Top Right Decorative Elements */}
        <div className="absolute top-12 right-12 w-24 h-24 md:w-40 md:h-40">
          {/* Chat bubble icon */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-blue-200/30 rounded-lg rotate-12 flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-slate-800">Empowering </span>
              <span className="text-orange-500">Students</span>
              <span className="text-slate-800">,</span>
              <br />
              <span className="text-slate-800">Transforming </span>
              <span className="text-orange-500">Futures</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
              Help students in Tier 2 & 3 cities receive quality tech education and build their dreams.
            </p>

            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-7 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Donate Now
            </Button>
          </div>

          {/* Right Illustration - Educational Scene */}
          <div className="relative">
            {/* Main illustration card */}
            <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl border border-white/50">
              {/* Top section - Teacher and student */}
              <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 mb-4">
                <div className="flex items-center justify-between">
                  {/* Teacher illustration */}
                  <div className="flex-1">
                    <div className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-gradient-to-br from-orange-200 to-orange-300 rounded-full flex items-center justify-center">
                      <svg className="w-20 h-20 md:w-24 md:h-24 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="text-center mt-2">
                      <div className="text-sm font-semibold text-slate-700">Teacher</div>
                    </div>
                  </div>

                  {/* Video screen mockup */}
                  <div className="flex-1">
                    <div className="bg-white rounded-lg shadow-lg p-3 border-4 border-slate-300">
                      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded p-3 text-white text-xs space-y-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          <div className="flex space-x-1">
                            <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                          </div>
                        </div>
                        <div className="font-mono">1 + 1 = 2</div>
                        <div className="font-mono">5 + 5 = 10</div>
                        <div className="font-mono">8 + 2 = 10</div>
                        <div className="font-mono">9 + 1 = 10</div>
                      </div>
                      <div className="mt-2 text-center">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div className="text-xs font-medium text-slate-600 mt-1">Student</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom section - Books and ABC blocks */}
              <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  {/* Plant pot */}
                  <div className="w-16 h-20 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-t-full relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                      <svg className="w-12 h-12 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C9.243 2 7 4.243 7 7v7c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2V7c0-2.757-2.243-5-5-5z"/>
                        <path d="M12 6c-1.654 0-3 1.346-3 3v5h6V9c0-1.654-1.346-3-3-3z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Books stack */}
                  <div className="space-y-1">
                    <div className="w-24 h-3 bg-red-400 rounded-sm"></div>
                    <div className="w-20 h-3 bg-blue-400 rounded-sm ml-2"></div>
                    <div className="w-22 h-3 bg-purple-400 rounded-sm ml-1"></div>
                  </div>

                  {/* ABC blocks */}
                  <div className="flex space-x-1">
                    <div className="w-8 h-8 bg-yellow-300 rounded border-2 border-yellow-500 flex items-center justify-center font-bold text-yellow-800">A</div>
                    <div className="w-8 h-8 bg-pink-300 rounded border-2 border-pink-500 flex items-center justify-center font-bold text-pink-800">B</div>
                    <div className="w-8 h-8 bg-blue-300 rounded border-2 border-blue-500 flex items-center justify-center font-bold text-blue-800">C</div>
                  </div>

                  {/* Student working */}
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decorative elements around illustration */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '2s' }}>
              <span className="text-2xl">💡</span>
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-pink-300 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
              <span className="text-2xl">🚀</span>
            </div>

            <div className="absolute top-1/2 -right-6 w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-xl">⚙️</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
