import React from 'react';
import { Quote } from 'lucide-react';
import { testimonial } from '../mockData';

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-mint-50 to-indigo-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left Decorative Leaves */}
        <div className="absolute top-20 left-0 w-48 h-48 opacity-20">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 50C25 25 45 15 65 25C85 35 90 60 80 80C70 100 45 95 30 80C15 65 15 50 20 50Z" fill="#A5D6A7" />
          </svg>
        </div>
        
        {/* Right Orange Shape */}
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
        
        {/* Center Top Indigo Glow */}
        <div className="absolute top-0 left-1/2 w-56 h-56 bg-indigo-200/25 rounded-full blur-3xl transform -translate-x-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div 
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-indigo-100/50"
            style={{
              boxShadow: '0 20px 40px -10px rgba(92, 107, 192, 0.2), 0 10px 20px -5px rgba(92, 107, 192, 0.1)'
            }}
          >
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
                  <div className="absolute -top-2 -right-2 bg-orange-500 p-2 rounded-full shadow-lg">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
