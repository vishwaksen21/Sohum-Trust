import React from 'react';
import { GraduationCap, MapPin, BarChart } from 'lucide-react';
import { impactStats } from '../mockData';
import { motion, useInView } from 'framer-motion';

const iconMap = {
  'graduation-cap': GraduationCap,
  'map-pin': MapPin,
  'bar-chart': BarChart
};

const ImpactStats = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-gradient-to-br from-amber-50/40 via-orange-50/20 to-white/80 relative overflow-hidden">
      {/* Watercolor Texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(251, 140, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(134, 166, 138, 0.15) 0%, transparent 50%)`
      }}></div>
      
      {/* Educational Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Right Side - Chemistry Flask */}
        <div className="absolute top-10 right-8 opacity-10">
          <svg width="80" height="100" viewBox="0 0 80 100" fill="none">
            <rect x="30" y="10" width="20" height="8" rx="2" fill="#5C6BC0"/>
            <path d="M32 18 L28 60 Q25 75, 35 85 L45 85 Q55 75, 52 60 L48 18 Z" fill="#7986CB" opacity="0.6"/>
            <ellipse cx="40" cy="85" rx="10" ry="3" fill="#5C6BC0"/>
            <circle cx="35" cy="60" r="4" fill="#E8EAF6"/>
            <circle cx="43" cy="68" r="3" fill="#E8EAF6"/>
          </svg>
        </div>
        
        {/* Left Side - Award Trophy */}
        <div className="absolute bottom-12 left-8 opacity-11">
          <svg width="70" height="85" viewBox="0 0 70 85" fill="none">
            <ellipse cx="35" cy="25" rx="18" ry="20" fill="#FFA726"/>
            <rect x="28" y="42" width="14" height="22" fill="#FFB74D"/>
            <rect x="22" y="64" width="26" height="6" rx="2" fill="#FB8C00"/>
            <circle cx="35" cy="25" r="12" fill="#FFF3E0"/>
            <path d="M35 20 L37 26 L43 26 L38 30 L40 36 L35 32 L30 36 L32 30 L27 26 L33 26 Z" fill="#FFA726"/>
          </svg>
        </div>
        
        {/* Decorative Soft Circles */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-100/25 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {impactStats.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div
                key={stat.id}
                className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-orange-100/30"
                style={{
                  boxShadow: '0 10px 30px -5px rgba(251, 140, 0, 0.12), 0 4px 6px -2px rgba(251, 140, 0, 0.05)'
                }}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeOut", 
                  delay: index * 0.2 
                }}
              >
                {/* Small educational icon in corner */}
                <div className="absolute top-3 right-3 w-10 h-10 opacity-10">
                  <svg viewBox="0 0 40 40" fill="none">
                    <rect x="8" y="15" width="24" height="4" rx="1" fill="#FB8C00"/>
                    <rect x="10" y="10" width="20" height="4" rx="1" fill="#FF9800"/>
                    <rect x="6" y="20" width="28" height="4" rx="1" fill="#F57C00"/>
                    <line x1="20" y1="10" x2="20" y2="24" stroke="#fff" strokeWidth="1.5" opacity="0.5"/>
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
