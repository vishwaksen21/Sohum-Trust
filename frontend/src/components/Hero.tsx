'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

/* ================= MOTION VARIANTS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

/* ================= DATA ================= */

const slides = [
  {
    id: 1,
    subtitle: 'Empowering the',
    title: 'Next Generation',
    text: 'Nurturing young minds through inclusive and meaningful education.',
    image: '/children1.png',
  },
  {
    id: 2,
    subtitle: 'Building a',
    title: 'Brighter Future',
    text: 'Creating opportunities that enable learners to thrive and lead.',
    image: '/children2.png',
  },
  {
    id: 3,
    subtitle: 'Committed to',
    title: 'Education for All',
    text: 'Ensuring equitable access to transformative learning pathways.',
    image: '/children3.png',
  },
];

const valuesInAction = [
  {
    title: 'Learning with Purpose',
    image: '/value-action-1.jpg',
    description:
      'Education designed to build understanding, curiosity, and real-world relevance.',
  },
  {
    title: 'Respect for Heritage',
    image: '/value-action-2.jpg',
    description:
      'Learning rooted in India’s cultural and knowledge traditions.',
  },
  {
    title: 'Mentorship & Growth',
    image: '/value-action-3.jpg',
    description:
      'Guidance-led education that builds confidence and direction.',
  },
];

const workInAction = [
  { title: 'Classroom Learning', image: '/work-1.jpg' },
  { title: 'Mentorship Sessions', image: '/work-2.jpg' },
  { title: 'Community Education', image: '/work-3.jpg' },
  { title: 'Cultural Learning', image: '/work-4.jpg' },
];

const journey = [
  { year: '2018', text: 'Sohum Trust founded with a long-term vision for education.' },
  { year: '2021', text: 'Expanded into vocational and cultural learning.' },
  { year: '2024', text: 'Supporting learners across Karnataka.' },
];

/* ================= PAGE ================= */

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [activeValue, setActiveValue] =
    useState<null | (typeof valuesInAction)[0]>(null);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <>
      {/* ================= HERO (UNCHANGED) ================= */}
      <section className="relative bg-[#F2EAE2] py-12 overflow-hidden min-h-[600px] flex items-center justify-center">
        <div className="relative w-full max-w-[1400px] mx-auto z-10">
          <div className="relative w-full overflow-visible">
            <motion.div
              className="
                flex gap-4 md:gap-8 items-center
                [--slide-width:85vw] [--gap:1rem] [--center-offset:7.5vw]
                md:[--slide-width:70vw] md:[--gap:2rem] md:[--center-offset:15vw]
                lg:[--slide-width:800px] lg:[--gap:2rem] lg:[--center-offset:calc(50vw-400px)]
              "
              animate={{
                x: `calc(-${index} * (var(--slide-width) + var(--gap)) + var(--center-offset))`,
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              {slides.map((slide, i) => {
                const isActive = i === index;
                return (
                  <motion.div
                    key={slide.id}
                    className="shrink-0 w-[85vw] md:w-[70vw] lg:w-[800px]"
                    animate={{
                      scale: isActive ? 1 : 0.92,
                      opacity: isActive ? 1 : 0.6,
                    }}
                  >
                    <div className="bg-[#F9F4EF] rounded-[30px] overflow-hidden grid md:grid-cols-2 min-h-[420px] shadow-xl">
                      <div className="p-10 flex flex-col justify-center">
                        <span className="text-[#ea580c] font-bold tracking-widest uppercase text-xs mb-3">
                          {slide.subtitle}
                        </span>
                        <h1 className="text-5xl font-black text-[#431407] mb-6">
                          {slide.title}
                        </h1>
                        <p className="text-lg text-slate-700 mb-8">
                          {slide.text}
                        </p>
                        <Button className="rounded-full px-8 py-6 bg-gradient-to-r from-[#ea580c] to-[#c2410c] text-white font-bold">
                          Support Education
                        </Button>
                      </div>
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <button
            onClick={prev}
            className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow"
          >
            <ChevronRight />
          </button>
        </div>
      </section>

      {/* ================= WHY WE EXIST ================= */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="tracking-[0.3em] text-sm font-bold text-[#ea580c] mb-6">
            WHY WE EXIST
          </h2>
          <h3 className="text-4xl font-black text-[#431407] mb-8">
            Building education that lasts generations
          </h3>
          <p className="text-lg text-slate-700 mb-6">
            Sohum Trust exists to create long-term educational ecosystems,
            not short-term interventions.
          </p>
          <p className="text-slate-600">
            Our focus is on lifelong learning, cultural grounding, and
            institutional strength.
          </p>
        </div>
        <img src="/why-exist.jpg" className="rounded-3xl shadow-xl h-[360px] w-full object-cover" />
      </motion.section>

      {/* ================= VALUES IN ACTION ================= */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-28">
        <h2 className="text-center tracking-[0.3em] text-sm font-bold text-[#ea580c] mb-12">
          VALUES IN ACTION
        </h2>

        <div className="grid md:grid-cols-3 rounded-3xl overflow-hidden shadow-2xl">
          {valuesInAction.map((item) => (
            <button
              key={item.title}
              onClick={() => setActiveValue(item)}
              className="relative h-[200px] md:h-[300px]"
            >
              <img src={item.image} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{item.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </motion.section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {activeValue && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveValue(null)}
          >
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-xl w-full overflow-hidden"
            >
              <img src={activeValue.image} className="h-[200px] w-full object-cover" />
              <div className="p-8">
                <h3 className="text-3xl font-black text-[#431407] mb-4">
                  {activeValue.title}
                </h3>
                <p className="text-slate-600">
                  {activeValue.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= EDUCATION IN PRACTICE ================= */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-28">
        <h2 className="text-center tracking-[0.3em] text-sm font-bold text-[#ea580c] mb-12">
          EDUCATION IN PRACTICE
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {workInAction.map((item) => (
            <div key={item.title} className="rounded-2xl shadow-lg overflow-hidden">
              <img src={item.image} className="h-[200px] w-full object-cover" />
              <p className="p-4 text-center font-semibold text-[#431407]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ================= JOURNEY ================= */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="bg-[#F9F4EF] py-28">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center tracking-[0.3em] text-sm font-bold text-[#ea580c] mb-14">
            OUR JOURNEY
          </h2>
          <div className="space-y-8">
            {journey.map((j) => (
              <div key={j.year} className="flex gap-6">
                <span className="text-2xl font-black text-[#c2410c]">{j.year}</span>
                <p className="text-slate-700">{j.text}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="bg-gradient-to-r from-[#ea580c] to-[#c2410c] py-24 text-center text-white">
        <h2 className="text-4xl font-black mb-8">
          Join us in shaping futures through education
        </h2>
        <div className="flex justify-center gap-6 flex-wrap">
          <a href="/about" className="bg-white text-[#c2410c] px-10 py-5 rounded-full font-bold">
            Learn About Us
          </a>
          <a href="/donate" className="border-2 border-white px-10 py-5 rounded-full font-bold">
            Support the Mission
          </a>
        </div>
      </motion.section>
    </>
  );
}
