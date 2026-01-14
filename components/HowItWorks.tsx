
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Select your platform",
    description: "Choose between Instagram, TikTok, or Facebook to get platform-specific AI assistance."
  },
  {
    number: "02",
    title: "Generate content or audit profile",
    description: "Use our powerful AI generators for bios and hashtags, or run a deep audit on your profile performance."
  },
  {
    number: "03",
    title: "Publish & grow faster 🚀",
    description: "Post your high-converting content and watch your engagement and reach skyrocket."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#1C1C1C]">Simple 3-Step Process</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">Get started with Vira in minutes and start seeing results immediately.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-purple-100 -z-10"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-vira-gradient flex items-center justify-center text-white text-2xl font-bold shadow-xl mb-8 border-4 border-white">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
