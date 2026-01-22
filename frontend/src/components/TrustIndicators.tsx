import React from 'react';
import { CheckCircle2, Shield, FileText } from 'lucide-react';

const TrustIndicators = () => {
  const indicators = [
    {
      icon: Shield,
      text: 'Registered Non-Profit Trust',
      color: 'text-emerald-600'
    },
    {
      icon: CheckCircle2,
      text: 'Transparent Fund Allocation',
      color: 'text-indigo-600'
    },
    {
      icon: FileText,
      text: 'Impact Reports Shared Annually',
      color: 'text-[#e88f2d]'
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-r from-indigo-600 to-indigo-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {indicators.map((indicator, index) => {
            const Icon = indicator.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-center space-x-3 text-white"
              >
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                  <Icon className={`w-5 h-5 ${indicator.color} bg-white rounded-full p-0.5`} />
                </div>
                <span className="font-medium text-sm md:text-base">
                  {indicator.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
