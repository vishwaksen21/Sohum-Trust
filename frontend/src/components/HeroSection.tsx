'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

/* ------------------ DATA ------------------ */

const slides = [
  {
    id: 1,
    subtitle: 'Empowering the',
    title: 'Next Generation',
    text: "Our foundation is committed to advancing the education of underprivileged children.",
    image: '/children1.png', 
  },
  {
    id: 2,
    subtitle: 'Building a',
    title: 'Brighter Future',
    text: 'We strive to provide accessible, high-quality learning resources so every child can succeed.',
    image: '/children2.png',
  },
  {
    id: 3,
    subtitle: 'Committed to',
    title: 'Service & Education',
    text: 'Your support helps us bridge gaps in education and unlock potential in young minds.',
    image: '/children3.png',
  },
];

/* ------------------------------------------ */

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, []);

  /* AUTO SLIDE */
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, index]);

  return (
    <section className="relative bg-[#F2EAE2] py-12 overflow-hidden min-h-[600px] flex items-center justify-center">

      {/* --------- Background Decor --------- */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#d4c5b5_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#E66A2C] opacity-[0.05] blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#C2462D] opacity-[0.05] blur-[150px] rounded-full"></div>
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto z-10">
        
        {/* -------- SLIDER TRACK -------- */}
        <div className="relative w-full overflow-visible"> 
          <motion.div
            className="flex gap-4 md:gap-8 items-center 
                       [--slide-width:85vw] [--gap:1rem] [--center-offset:7.5vw] 
                       md:[--slide-width:70vw] md:[--gap:2rem] md:[--center-offset:15vw]
                       lg:[--slide-width:800px] lg:[--gap:2rem] lg:[--center-offset:calc(50vw-400px)]"
            animate={{
                x: `calc(-${index} * (var(--slide-width) + var(--gap)) + var(--center-offset))`
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {slides.map((slide, i) => {
              const isActive = i === index;
              return (
                <motion.div 
                    key={slide.id} 
                    /* CHANGED: Fixed width to 800px on desktop for smaller card */
                    className="shrink-0 w-[85vw] md:w-[70vw] lg:w-[800px] relative perspective-1000"
                    animate={{
                        scale: isActive ? 1 : 0.92,
                        opacity: isActive ? 1 : 0.6,
                        filter: isActive ? 'blur(0px)' : 'blur(2px)',
                    }}
                    transition={{ duration: 0.5 }}
                >
                  
                  {/* -------- THE CARD -------- */}
                  {/* CHANGED: min-h reduced to 400px */}
                  <div className="relative bg-[#F9F4EF] rounded-[30px] shadow-[0_20px_40px_-10px_rgba(80,50,40,0.15)] overflow-hidden grid md:grid-cols-2 min-h-[400px] border border-white/60">
                    
                    {/* TEXT CONTENT (Left) */}
                    <div className="p-8 flex flex-col justify-center relative z-20 order-2 md:order-1">
                      
                      <motion.span 
                        className="block text-[#C2462D] font-bold text-base tracking-wide mb-1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isActive ? { opacity: 1, y: 0 } : {}}
                      >
                        {slide.subtitle}
                      </motion.span>

                      {/* CHANGED: Font size reduced */}
                      <motion.h1
                        className="text-3xl md:text-5xl font-extrabold text-[#5A2C18] mb-4 leading-[1.1]"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isActive ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                      >
                        {slide.title}
                      </motion.h1>

                      {/* CHANGED: Text max-width and size reduced */}
                      <motion.p
                        className="text-[#5a4a42] text-sm md:text-base leading-relaxed mb-6 font-medium"
                        initial={{ opacity: 0 }}
                        animate={isActive ? { opacity: 1 } : {}}
                        transition={{ delay: 0.2 }}
                      >
                        {slide.text}
                      </motion.p>

                      <motion.div
                         initial={{ opacity: 0, y: 10 }}
                         animate={isActive ? { opacity: 1, y: 0 } : {}}
                         transition={{ delay: 0.3 }}
                      >
                         {/* CHANGED: Button size reduced */}
                        <Button className="bg-gradient-to-r from-[#D97706] to-[#C2462D] hover:from-[#b45309] hover:to-[#9a3412] text-white rounded-full px-8 py-6 text-base font-bold shadow-lg shadow-orange-900/20 hover:shadow-orange-900/30 hover:-translate-y-1 transition-all duration-300">
                          Donate Now
                        </Button>
                      </motion.div>
                    </div>

                    {/* IMAGE CONTENT (Right) */}
                    {/* CHANGED: Added h-full to ensure it covers the height */}
                    <div className="relative h-64 md:h-full w-full overflow-hidden order-1 md:order-2">
                       <div className="absolute inset-0 z-10 hidden md:block" 
                            style={{ 
                                background: 'linear-gradient(to right, #F9F4EF 2%, transparent 20%)' 
                            }}>
                       </div>
                       
                       <motion.img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover relative z-0"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: isActive ? 1 : 1.1 }}
                        transition={{ duration: 1.5 }}
                      />
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* -------- NAVIGATION BUTTONS -------- */}
        <div className="hidden lg:block">
            {/* Adjusted button position closer to center since card is smaller */}
            <button
              onClick={prev}
              className="absolute left-[10%] top-1/2 -translate-y-1/2 bg-[#F9F4EF] text-[#5A2C18] shadow-xl border border-[#E6DCCF] rounded-full p-3 hover:scale-110 hover:bg-[#C2462D] hover:text-white transition-all z-30"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={next}
              className="absolute right-[10%] top-1/2 -translate-y-1/2 bg-[#F9F4EF] text-[#5A2C18] shadow-xl border border-[#E6DCCF] rounded-full p-3 hover:scale-110 hover:bg-[#C2462D] hover:text-white transition-all z-30"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

        {/* -------- INDICATORS -------- */}
        <div className="flex justify-center gap-3 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-500 ease-out ${
                i === index ? 'w-8 bg-[#C2462D]' : 'w-2.5 bg-[#D6CFC4] hover:bg-[#C2462D]/50'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}