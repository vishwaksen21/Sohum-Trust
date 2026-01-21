import React from 'react';
import { Code, Atom, Laptop, Users } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const WhatWeEnable = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const programs = [
    {
      icon: Code,
      title: 'Programming Foundations',
      description: 'Learn coding basics and build real projects',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Atom,
      title: 'STEM Education',
      description: 'Science, technology, engineering & math skills',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Laptop,
      title: 'Digital Literacy',
      description: 'Essential computer and internet skills',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Career Mentorship',
      description: 'Guidance from industry professionals',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-4">
            What We Enable
          </h2>
          <p className="text-lg text-slate-600">
            Comprehensive tech education programs designed for students in Tier 2 & 3 cities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
                transition={{ 
                  duration: 0.5, 
                  ease: "easeOut", 
                  delay: index * 0.1 
                }}
              >
                <div className={`bg-gradient-to-br ${program.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-700 mb-2">
                  {program.title}
                </h3>
                <p className="text-slate-600">
                  {program.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeEnable;
