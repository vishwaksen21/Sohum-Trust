import React from 'react';
import { Quote } from 'lucide-react';
import { testimonial } from '../mockData';
import { motion, useInView } from 'framer-motion';

const TestimonialSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-amber-50/50 via-[#fef3e8]/30 to-rose-50/20 relative overflow-hidden">
      {/* Watercolor Texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
        backgroundImage: `radial-gradient(ellipse at top left, rgba(251, 140, 0, 0.1) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(134, 166, 138, 0.12) 0%, transparent 50%)`
      }}></div>
      
      {/* Educational Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left - Lightbulb */}
        <div className="absolute top-16 left-8 opacity-10">
          <svg width="70" height="90" viewBox="0 0 70 90" fill="none">
            <ellipse cx="35" cy="28" rx="20" ry="24" fill="#FFA726"/>
            <rect x="27" y="48" width="16" height="14" rx="2" fill="#FFB74D"/>
            <rect x="29" y="62" width="12" height="5" rx="1" fill="#FFB74D"/>
            <line x1="35" y1="5" x2="35" y2="0" stroke="#FFA726" strokeWidth="3"/>
            <line x1="13" y1="13" x2="9" y2="9" stroke="#FFA726" strokeWidth="3"/>
            <line x1="57" y1="13" x2="61" y2="9" stroke="#FFA726" strokeWidth="3"/>
          </svg>
        </div>
        
        {/* Right Side - Book */}
        <div className="absolute top-16 right-8 opacity-11">
          <svg width="80" height="65" viewBox="0 0 80 65" fill="none">
            <rect x="12" y="28" width="50" height="12" rx="1" fill="#FB8C00"/>
            <rect x="15" y="22" width="50" height="12" rx="1" fill="#FF9800"/>
            <rect x="10" y="34" width="50" height="12" rx="1" fill="#F57C00"/>
            <rect x="18" y="16" width="50" height="12" rx="1" fill="#FFA726"/>
            <line x1="40" y1="16" x2="40" y2="46" stroke="#fff" strokeWidth="2" opacity="0.4"/>
          </svg>
        </div>
        
        {/* Bottom Orange Glow */}
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#f2a041]/20 rounded-full blur-3xl"></div>
        
        {/* Center Top Soft Glow */}
        <div className="absolute top-0 left-1/2 w-56 h-56 bg-amber-100/25 rounded-full blur-3xl transform -translate-x-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-8 md:p-12 border border-[#f2a041]/40"
            style={{
              boxShadow: '0 20px 40px -10px rgba(251, 140, 0, 0.15), 0 10px 20px -5px rgba(251, 140, 0, 0.1)'
            }}
            initial={{ y: 50 }}
            animate={isInView ? { y: 0 } : { y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Small star/achievement icon in corner */}
            <div className="absolute bottom-4 right-4 w-12 h-12 opacity-9">
              <svg viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="25" r="22" fill="#FFA726" opacity="0.3"/>
                <path d="M25 12 L27.5 22 L37 22 L29 28 L31.5 38 L25 32 L18.5 38 L21 28 L13 22 L22.5 22 Z" fill="#FFA726"/>
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
                  <div className="absolute -top-2 -right-2 bg-[#f2a041] p-2 rounded-full shadow-lg">
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
