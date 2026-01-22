import React from 'react';
import { Button } from './ui/button';
import { IndianRupee } from 'lucide-react';
import { donationTiers } from '../mockData';
import { motion, useInView } from 'framer-motion';

const DonationCards = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
  <section ref={ref} className="py-16 bg-[#FBF7F1]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            How Your Donation Helps
          </h2>
          <p className="text-lg text-slate-600">
            Every contribution creates real impact for students in need.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {donationTiers.map((tier, index) => {
            const isFeatured = tier.amount === '₹10,000';

            return (
              <motion.div
                key={tier.id}
        className={`rounded-3xl overflow-hidden transition-all bg-white/90 backdrop-blur-sm shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                  ${
                    isFeatured
          ? 'scale-105 border-2 border-indigo-600'
          : ''
                  }
                `}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="h-56">
                  <img
                    src={tier.image}
                    alt={tier.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <IndianRupee className="text-[#E66A2C]" />
                    <span className="text-3xl font-bold text-slate-800">
                      {tier.amount.replace('₹', '')}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-700">
                    {tier.title}
                  </h3>

                  <p className="text-slate-600">
                    {tier.description}
                  </p>

                  <div className="bg-indigo-50/70 px-4 py-3 rounded-2xl text-sm text-indigo-700 font-medium">
                    ✓ Impact: {tier.impact}
                  </div>

                  <Button
                    className={`w-full py-5 rounded-full text-lg font-semibold
                      ${
                        isFeatured
                          ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                          : 'bg-[#E66A2C] hover:bg-[#d85f25] text-white'
                      }
                    `}
                  >
                    Donate
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DonationCards;
