import React from 'react';
import { Button } from './ui/button';
import { Lightbulb, Rocket, AtomIcon } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-orange-50/40 via-indigo-50/30 to-white py-16 md:py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left Leaf */}
        <div className="absolute top-10 left-10 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10C30 30 20 50 25 70C30 90 50 95 60 90C70 85 80 70 75 50C70 30 50 10 50 10Z" fill="#FB8C00" />
          </svg>
        </div>
        
        {/* Top Right Decorative Circle */}
        <div className="absolute top-20 right-20 w-40 h-40 bg-indigo-200/20 rounded-full blur-3xl"></div>
        
        {/* Bottom Left Leaf */}
        <div className="absolute bottom-20 left-0 w-48 h-48 opacity-15">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 50C20 30 40 20 60 25C80 30 90 50 85 70C80 90 60 95 40 85C20 75 10 50 10 50Z" fill="#5C6BC0" />
          </svg>
        </div>
        
        {/* Floating Dots Pattern */}
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-orange-300/40 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-indigo-300/40 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-emerald-300/30 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-slate-700">Empowering </span>
              <span className="text-orange-500">Students</span>
              <span className="text-slate-700">,</span>
              <br />
              <span className="text-slate-700">Transforming </span>
              <span className="text-orange-500">Futures</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
              Help students in Tier 2 & 3 cities receive quality tech education and build their dreams.
            </p>
            
            {/* Emotional Hook */}
            <div className="flex items-center space-x-3 bg-indigo-50/50 backdrop-blur-sm rounded-2xl p-4 max-w-xl">
              <div className="flex-shrink-0">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Anil"
                  alt="Student"
                  className="w-12 h-12 rounded-full border-2 border-orange-400"
                />
              </div>
              <p className="text-slate-700 italic text-sm md:text-base">
                "Your support helps students like <span className="font-semibold text-indigo-600">Anil from Nashik</span> learn coding and dream bigger."
              </p>
            </div>

            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Donate Now
            </Button>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/9345685/pexels-photo-9345685.jpeg"
                alt="Tech education scene with mentor and student"
                className="w-full h-auto object-cover"
              />
              
              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                  <p className="text-sm md:text-base text-slate-700 font-medium text-center">
                    💙 Supported through Sohum Trust donations
                  </p>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                <Lightbulb className="w-6 h-6 text-yellow-500" />
              </div>
              <div className="absolute bottom-16 left-8 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
                <Rocket className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="absolute top-1/2 right-12 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
                <AtomIcon className="w-6 h-6 text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
