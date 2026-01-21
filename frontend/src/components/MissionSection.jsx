import React from 'react';
import { motion, useInView } from 'framer-motion';

const MissionSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-gradient-to-b from-white/80 to-amber-50/30 relative overflow-hidden">
      {/* Educational Elements in Corners */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left - Open Book */}
        <motion.div 
          className="absolute top-8 left-8 opacity-12"
          initial={{ opacity: 0, x: -30, rotate: -15 }}
          animate={isInView ? { opacity: 0.12, x: 0, rotate: 0 } : { opacity: 0, x: -30, rotate: -15 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <svg width="90" height="70" viewBox="0 0 90 70" fill="none">
            <path d="M10 15 Q10 10, 15 10 L40 10 Q45 10, 45 15 L45 55 Q45 58, 42 60 L15 60 Q10 60, 10 55 Z" fill="#FB8C00"/>
            <path d="M80 15 Q80 10, 75 10 L50 10 Q45 10, 45 15 L45 55 Q45 58, 48 60 L75 60 Q80 60, 80 55 Z" fill="#FF9800"/>
            <line x1="45" y1="15" x2="45" y2="60" stroke="#fff" strokeWidth="2" opacity="0.4"/>
          </svg>
        </motion.div>
        
        {/* Bottom Right - Tech/Gear */}
        <motion.div 
          className="absolute bottom-8 right-8 opacity-11"
          initial={{ opacity: 0, x: 30, rotate: 15 }}
          animate={isInView ? { opacity: 0.11, x: 0, rotate: 0 } : { opacity: 0, x: 30, rotate: 15 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <svg width="85" height="85" viewBox="0 0 85 85" fill="none">
            <circle cx="42.5" cy="42.5" r="18" fill="#5C6BC0"/>
            <circle cx="42.5" cy="42.5" r="10" fill="#E8EAF6"/>
            <rect x="39" y="5" width="7" height="15" rx="2" fill="#5C6BC0"/>
            <rect x="39" y="65" width="7" height="15" rx="2" fill="#5C6BC0"/>
            <rect x="5" y="39" width="15" height="7" rx="2" fill="#5C6BC0"/>
            <rect x="65" y="39" width="15" height="7" rx="2" fill="#5C6BC0"/>
          </svg>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-slate-700"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            Support Tech Education for Underprivileged Students
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-slate-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
          >
            Your donation to Sohum Trust empowers students in Tier 2 and Tier 3 cities with vital tech skills in coding, STEM, and digital literacy, opening doors to a brighter future.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
