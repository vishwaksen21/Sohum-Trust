import React from 'react';
import { Button } from './ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-amber-50/40 via-orange-50/20 to-rose-50/30 py-20 md:py-28 overflow-hidden">
      {/* Watercolor Texture Overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F97316' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '30px 30px'
      }}></div>
      
      {/* Decorative Background Elements - Natural Leaf Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left Watercolor Leaf Branch - Natural leaf shapes */}
        <div className="absolute top-0 left-0 w-80 h-80 md:w-[450px] md:h-[450px] opacity-20">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Branch stems */}
            <path d="M50 50 Q 80 90, 120 140" stroke="#9FB09C" strokeWidth="1.5" fill="none" opacity="0.3"/>
            <path d="M50 50 Q 100 70, 160 100" stroke="#A8B8A5" strokeWidth="1.2" fill="none" opacity="0.28"/>
            <path d="M50 50 Q 70 100, 100 160" stroke="#B4C7AF" strokeWidth="1.3" fill="none" opacity="0.3"/>
            
            {/* Natural leaf shapes - teardrop/oval with pointed tips */}
            <path d="M65 65 Q 70 55, 75 60 Q 78 68, 75 75 Q 70 78, 65 75 Z" fill="#B8C9B4" opacity="0.38"/>
            <path d="M85 75 Q 92 68, 98 72 Q 100 82, 95 88 Q 88 90, 85 85 Z" fill="#A8B8A5" opacity="0.35"/>
            <path d="M100 90 Q 108 82, 115 88 Q 118 98, 112 105 Q 104 108, 100 102 Z" fill="#C4D4CC" opacity="0.4"/>
            
            <path d="M78 88 Q 84 80, 90 84 Q 92 92, 88 98 Q 82 100, 78 95 Z" fill="#9CB0A4" opacity="0.36"/>
            <path d="M95 105 Q 102 98, 108 103 Q 110 112, 105 118 Q 98 120, 95 114 Z" fill="#B0C4B8" opacity="0.38"/>
            <path d="M115 120 Q 123 112, 130 118 Q 132 128, 126 135 Q 118 138, 115 130 Z" fill="#C8D5C4" opacity="0.37"/>
            
            <path d="M105 82 Q 112 75, 118 80 Q 120 88, 116 94 Q 110 96, 105 91 Z" fill="#95A89C" opacity="0.34"/>
            <path d="M128 95 Q 136 88, 143 94 Q 145 104, 139 110 Q 132 112, 128 105 Z" fill="#B8CCC0" opacity="0.36"/>
            
            <path d="M72 108 Q 78 100, 84 105 Q 86 114, 81 120 Q 75 122, 72 116 Z" fill="#A4B8B0" opacity="0.35"/>
            <path d="M88 128 Q 95 120, 102 126 Q 104 136, 98 142 Q 91 144, 88 137 Z" fill="#C8D8D0" opacity="0.39"/>
          </svg>
        </div>

        {/* Top Right Natural Leaf Pattern */}
        <div className="absolute top-0 right-0 w-72 h-72 md:w-[400px] md:h-[400px] opacity-18">
          <svg viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Branches */}
            <path d="M300 40 Q 270 75, 230 120" stroke="#A8B8A5" strokeWidth="1.4" fill="none" opacity="0.3"/>
            <path d="M300 40 Q 280 60, 250 95" stroke="#B4C7AF" strokeWidth="1.2" fill="none" opacity="0.28"/>
            
            {/* Natural leaves */}
            <path d="M290 50 Q 296 43, 302 48 Q 304 56, 299 62 Q 293 64, 290 58 Z" fill="#B4CAC4" opacity="0.38"/>
            <path d="M278 62 Q 285 55, 291 60 Q 293 69, 287 75 Q 281 77, 278 70 Z" fill="#A8BCA8" opacity="0.36"/>
            <path d="M265 75 Q 272 68, 279 74 Q 281 83, 275 89 Q 268 91, 265 84 Z" fill="#C4D4CC" opacity="0.39"/>
            
            <path d="M272 88 Q 279 81, 286 87 Q 288 96, 282 102 Q 275 104, 272 97 Z" fill="#9CB0A4" opacity="0.35"/>
            <path d="M255 95 Q 262 88, 269 94 Q 271 103, 265 109 Q 258 111, 255 104 Z" fill="#B0C4B8" opacity="0.37"/>
            <path d="M240 110 Q 247 103, 254 109 Q 256 118, 250 124 Q 243 126, 240 119 Z" fill="#C8D8D0" opacity="0.38"/>
            
            <path d="M258 108 Q 265 101, 272 107 Q 274 116, 268 122 Q 261 124, 258 117 Z" fill="#A4B8AC" opacity="0.36"/>
          </svg>
        </div>

        {/* Bottom Right Large Natural Leaf Pattern */}
        <div className="absolute bottom-0 right-0 w-96 h-96 md:w-[500px] md:h-[500px] opacity-16">
          <svg viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Multiple branch stems */}
            <path d="M380 380 Q 340 330, 290 270" stroke="#A8B8A5" strokeWidth="1.8" fill="none" opacity="0.3"/>
            <path d="M380 380 Q 350 350, 310 310" stroke="#B4C7AF" strokeWidth="1.5" fill="none" opacity="0.28"/>
            <path d="M380 380 Q 360 340, 320 290" stroke="#9FB09C" strokeWidth="1.6" fill="none" opacity="0.29"/>
            
            {/* Natural leaf shapes */}
            <path d="M370 370 Q 378 360, 385 368 Q 388 378, 382 385 Q 374 388, 370 380 Z" fill="#B8CAB8" opacity="0.37"/>
            <path d="M358 358 Q 366 348, 373 356 Q 376 366, 370 373 Q 362 376, 358 368 Z" fill="#A8BCA8" opacity="0.35"/>
            <path d="M345 345 Q 353 335, 360 343 Q 363 353, 357 360 Q 349 363, 345 355 Z" fill="#C4D4CC" opacity="0.39"/>
            
            <path d="M352 338 Q 360 328, 367 336 Q 370 346, 364 353 Q 356 356, 352 348 Z" fill="#9CB0A4" opacity="0.36"/>
            <path d="M330 330 Q 338 320, 345 328 Q 348 338, 342 345 Q 334 348, 330 340 Z" fill="#B0C4B8" opacity="0.38"/>
            <path d="M318 318 Q 326 308, 333 316 Q 336 326, 330 333 Q 322 336, 318 328 Z" fill="#C8D8D0" opacity="0.37"/>
            
            <path d="M335 310 Q 343 300, 350 308 Q 353 318, 347 325 Q 339 328, 335 320 Z" fill="#95A89C" opacity="0.34"/>
            <path d="M305 305 Q 313 295, 320 303 Q 323 313, 317 320 Q 309 323, 305 315 Z" fill="#B8CCC0" opacity="0.36"/>
            <path d="M290 290 Q 298 280, 305 288 Q 308 298, 302 305 Q 294 308, 290 300 Z" fill="#A4B8B0" opacity="0.35"/>
          </svg>
        </div>

        {/* Bottom Left Small Natural Leaf Cluster */}
        <div className="absolute bottom-10 left-10 w-48 h-48 opacity-18">
          <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 160 Q 50 130, 90 90" stroke="#A8B8A5" strokeWidth="1.3" fill="none" opacity="0.3"/>
            
            <path d="M28 152 Q 34 145, 40 150 Q 42 158, 37 164 Q 31 166, 28 160 Z" fill="#B8CAB8" opacity="0.37"/>
            <path d="M42 140 Q 49 133, 55 139 Q 57 147, 52 153 Q 46 155, 42 149 Z" fill="#C4D4CC" opacity="0.38"/>
            <path d="M58 125 Q 65 118, 71 124 Q 73 132, 68 138 Q 62 140, 58 134 Z" fill="#A8B8A5" opacity="0.36"/>
            <path d="M75 108 Q 82 101, 88 107 Q 90 115, 85 121 Q 79 123, 75 117 Z" fill="#B0C4B8" opacity="0.37"/>
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
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
