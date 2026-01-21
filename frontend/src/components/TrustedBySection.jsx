import React from 'react';
import { partnerPlaceholders } from '../mockData';

const TrustedBySection = () => {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-500 text-sm font-medium mb-8 uppercase tracking-wider">
          Trusted by Communities & Supporters
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partnerPlaceholders.map((partner) => (
            <div
              key={partner.id}
              className="bg-gray-50 rounded-xl px-8 py-6 border border-gray-200 hover:border-indigo-300 transition-colors duration-200"
            >
              <p className="text-gray-400 font-semibold text-sm whitespace-nowrap">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
