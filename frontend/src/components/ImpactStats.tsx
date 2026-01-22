'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, GraduationCap, MapPin, BarChart3 } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* DATA                                                                       */
/* -------------------------------------------------------------------------- */

const impactData = [
  {
    id: 1,
    number: '5000+',
    label: 'Students Empowered',
    icon: GraduationCap,
    image: '/images/students-learning.jpg', 
    shortDesc: 'Building Skills for Tomorrow',
    fullInfo: 'We have empowered over 5000 students across tier-2 and tier-3 cities with essential skills in coding, STEM, and digital literacy, opening doors to a brighter future.',
  },
  {
    id: 2,
    number: '120+',
    label: 'Cities & Villages Reached',
    icon: MapPin,
    image: '/images/village-map.jpg', 
    shortDesc: 'Expanding our footprint',
    fullInfo: 'Our reach spans across 120+ distinct locations. From bustling urban centers to remote rural villages, we ensure that geography is no barrier to quality education.',
  },
  {
    id: 3,
    number: '500k+', 
    label: 'Hours Delivered',
    icon: BarChart3,
    image: '/images/classroom-hours.jpg', 
    shortDesc: 'Consistent & Quality Education',
    fullInfo: 'Consistency is key. We have delivered over half a million hours of structured learning, ensuring deep understanding and long-term retention of knowledge.',
  },
];

/* -------------------------------------------------------------------------- */

const ImpactGallery = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section className="py-16 bg-[#F9F4EF]">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* HEADER */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#E6AF2E] uppercase tracking-wide">
            Our Impact
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Real numbers, real stories, real change.
          </p>
        </div>

        {/* --- CINEMATIC GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 h-[350px] w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-black">
          {impactData.map((item) => (
            <motion.div
              layoutId={`card-${item.id}`}
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className="relative group cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-white/10 last:border-0"
              whileHover={{ scale: 1.02, zIndex: 10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-gray-800">
                <img 
                  src={item.image} 
                  alt={item.label} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
              </div>

              {/* Text Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
                <motion.div layoutId={`icon-${item.id}`} className="mb-3">
                  <item.icon className="w-8 h-8 text-[#E6AF2E] opacity-90" />
                </motion.div>

                <motion.h3 
                  className="text-white text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-xl"
                  layoutId={`number-${item.id}`}
                >
                  {item.number}
                </motion.h3>
                
                <motion.p 
                   className="text-gray-200 text-sm font-medium mt-1 tracking-wide"
                   layoutId={`label-${item.id}`}
                >
                   {item.label}
                </motion.p>

                <motion.span 
                    className="text-[#E6AF2E] mt-4 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                >
                    View Details
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- POPUP MODAL (EXPANDED VIEW) --- */}
        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
              />

              <motion.div
                layoutId={`card-${selectedId}`}
                className="relative w-full max-w-3xl bg-white rounded-xl overflow-hidden shadow-2xl z-50"
              >
                {(() => {
                  const item = impactData.find((b) => b.id === selectedId);
                  if (!item) return null;

                  return (
                    <div className="flex flex-col md:flex-row h-[80vh] md:h-[400px]">
                      
                      {/* Left: Image & Big Data */}
                      <div className="relative w-full md:w-1/2 h-1/2 md:h-full bg-gray-900">
                         <img 
                            src={item.image} 
                            alt={item.label} 
                            className="w-full h-full object-cover opacity-80" 
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                         
                         <div className="absolute bottom-6 left-6 right-6">
                            <motion.div layoutId={`icon-${item.id}`} className="mb-2">
                                <item.icon className="w-8 h-8 text-[#E6AF2E]" />
                            </motion.div>
                            <motion.h3 
                                layoutId={`number-${item.id}`}
                                className="text-white text-4xl font-extrabold"
                            >
                                {item.number}
                            </motion.h3>
                            <motion.p 
                                layoutId={`label-${item.id}`}
                                className="text-gray-300 text-base font-medium"
                            >
                                {item.label}
                            </motion.p>
                         </div>
                      </div>

                      {/* Right: Info */}
                      <div className="p-6 w-full md:w-1/2 h-1/2 md:h-full flex flex-col bg-[#FBF7F1] overflow-y-auto">
                        <div className="flex justify-end mb-2">
                            <button 
                                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                className="p-2 bg-black/5 hover:bg-black/10 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>
                        
                        <div className="flex-1 flex flex-col justify-center">
                            <h4 className="text-[#E66A2C] font-bold text-base mb-3 uppercase tracking-wide">
                                {item.shortDesc}
                            </h4>
                            <div className="w-10 h-1 bg-[#E6AF2E] mb-4 rounded-full"></div>
                            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                {item.fullInfo}
                            </p>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default ImpactGallery;