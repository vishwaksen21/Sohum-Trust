import React from 'react';
import { Button } from './ui/button';
import { IndianRupee } from 'lucide-react';
import { donationTiers } from '../mockData';
import { motion, useInView } from 'framer-motion';

const DonationCards = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white/80 via-amber-50/30 to-orange-50/20 relative overflow-hidden">
      {/* Watercolor Texture */}
      <div className="absolute inset-0 opacity-25 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 30% 20%, rgba(251, 140, 0, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(134, 166, 138, 0.12) 0%, transparent 50%)`
      }}></div>
      
      {/* Educational Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Right - Calculator/Math */}
        <div className="absolute top-12 right-8 opacity-11">
          <svg width="100" height="120" viewBox="0 0 100 120" fill="none">
            <rect x="20" y="10" width="60" height="90" rx="4" fill="#5C6BC0"/>
            <rect x="25" y="20" width="50" height="20" rx="2" fill="#E8EAF6"/>
            <rect x="28" y="50" width="12" height="12" rx="2" fill="#7986CB"/>
            <rect x="44" y="50" width="12" height="12" rx="2" fill="#7986CB"/>
            <rect x="60" y="50" width="12" height="12" rx="2" fill="#7986CB"/>
            <rect x="28" y="66" width="12" height="12" rx="2" fill="#7986CB"/>
            <rect x="44" y="66" width="12" height="12" rx="2" fill="#7986CB"/>
            <rect x="60" y="66" width="12" height="12" rx="2" fill="#7986CB"/>
          </svg>
        </div>
        
        {/* Left Side - Trophy/Achievement */}
        <div className="absolute top-1/3 left-8 opacity-12">
          <svg width="90" height="110" viewBox="0 0 90 110" fill="none">
            <ellipse cx="45" cy="35" rx="24" ry="26" fill="#FFA726"/>
            <rect x="36" y="56" width="18" height="28" fill="#FFB74D"/>
            <rect x="28" y="84" width="34" height="8" rx="2" fill="#FB8C00"/>
            <circle cx="45" cy="35" r="16" fill="#FFF3E0"/>
            <text x="45" y="42" fontFamily="Arial" fontSize="20" fill="#FFA726" textAnchor="middle" fontWeight="bold">1</text>
          </svg>
        </div>
        
        {/* Bottom Left Soft Glow */}
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-100/15 rounded-full blur-3xl"></div>
        
        {/* Mid Right Orange Glow */}
        <div className="absolute top-1/2 right-10 w-48 h-48 bg-orange-100/20 rounded-full blur-2xl"></div>
        
        {/* Scattered Educational Accents */}
        <div className="absolute top-1/4 left-1/3 opacity-9">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="25" fill="#26A69A" opacity="0.3"/>
            <ellipse cx="30" cy="30" rx="12" ry="25" fill="none" stroke="#26A69A" strokeWidth="2"/>
            <line x1="5" y1="30" x2="55" y2="30" stroke="#26A69A" strokeWidth="2"/>
          </svg>
        </div>
        
        <div className="absolute bottom-1/4 right-1/4 opacity-9">
          <svg width="60" height="70" viewBox="0 0 60 70" fill="none">
            <polygon points="30,10 22,25 38,25" fill="#FF7043"/>
            <rect x="23" y="25" width="14" height="32" fill="#FF5722"/>
            <polygon points="18,45 23,40 23,55" fill="#FB8C00"/>
            <polygon points="42,45 37,40 37,55" fill="#FB8C00"/>
            <circle cx="30" cy="38" r="6" fill="#FFF3E0"/>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-700">
            How Your Donation Helps
          </h2>
          <p className="text-lg text-slate-600">
            Help us bridge the education gap – every contribution counts!
          </p>
        </motion.div>

        {/* Donation Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {donationTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              className="relative bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-orange-100/40"
              style={{
                boxShadow: '0 15px 35px -5px rgba(251, 140, 0, 0.15), 0 5px 15px -3px rgba(0, 0, 0, 0.08)'
              }}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut", 
                delay: index * 0.15 
              }}
            >
              {/* Small graduation cap in top right corner of card */}
              <div className="absolute top-2 right-2 w-10 h-10 opacity-10 z-10">
                <svg viewBox="0 0 40 40" fill="none">
                  <polygon points="20,8 8,14 20,20 32,14" fill="#5C6BC0"/>
                  <rect x="18" y="20" width="4" height="8" fill="#5C6BC0"/>
                  <ellipse cx="20" cy="28" rx="3" ry="1" fill="#5C6BC0"/>
                </svg>
              </div>
              
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={tier.image}
                  alt={tier.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <IndianRupee className="w-6 h-6 text-orange-500" />
                  <span className="text-3xl font-bold text-indigo-600">{tier.amount.replace('₹', '')}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-700">
                  {tier.title}
                </h3>
                <p className="text-slate-600">
                  {tier.description}
                </p>
                
                {/* Clear Impact Mapping */}
                <div className="bg-indigo-50 rounded-lg px-4 py-3">
                  <p className="text-sm font-medium text-indigo-700">
                    ✓ Impact: {tier.impact}
                  </p>
                </div>
                
                <Button
                  className={`w-full py-6 rounded-full text-lg font-semibold transition-all duration-200 ${
                    tier.buttonColor === 'orange'
                      ? 'bg-orange-500 hover:bg-orange-600 text-white'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  }`}
                >
                  Donate
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationCards;
