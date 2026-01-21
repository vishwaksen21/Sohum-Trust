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
    <section className="py-16 bg-gradient-to-b from-white to-indigo-50/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Right Side Leaf */}
        <div className="absolute top-10 right-10 w-40 h-40 opacity-10">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 5C35 15 25 30 28 50C31 70 45 85 60 82C75 79 88 65 85 45C82 25 65 5 50 5Z" fill="#A5D6A7" />
          </svg>
        </div>
        
        {/* Left Side Decorative Shape */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl"></div>
        
        {/* Scattered Dots */}
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-indigo-400/30 rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-emerald-400/30 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {impactStats.map((stat) => {
            const Icon = iconMap[stat.icon];
            return (
              <div
                key={stat.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-indigo-100/50"
                style={{
                  boxShadow: '0 10px 30px -5px rgba(92, 107, 192, 0.15), 0 4px 6px -2px rgba(92, 107, 192, 0.05)'
                }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-gradient-to-br from-mint-100 to-mint-200 p-4 rounded-full">
                    <Icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-indigo-600">
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
