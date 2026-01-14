
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  "AI-powered & creator focused",
  "Saves hours of brainstorming time",
  "Boosts reach by up to 300%",
  "No technical or marketing skills required",
  "Perfect for beginners & professionals",
  "Daily tips to improve engagement"
];

const WhyChooseVira: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 order-2 lg:order-1">
          <div className="relative">
             <div className="absolute top-0 left-0 w-full h-full bg-purple-100 rounded-[3rem] -rotate-3 -z-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop" 
               alt="Successful Creator with Vira" 
               className="rounded-[3rem] shadow-2xl relative z-10"
             />
             <div className="absolute top-10 -right-10 bg-white p-6 rounded-3xl shadow-xl z-20 border border-gray-100 hidden md:block">
               <p className="text-3xl font-black text-purple-600">+1.2M</p>
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">New Followers</p>
             </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 order-1 lg:order-2">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#1C1C1C]">Why Choose Vira?</h2>
          <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium">
            Stop guessing and start growing. Vira brings enterprise-level AI directly to your smartphone, making explosive social media growth accessible to everyone.
          </p>
          
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-purple-50 transition-all border border-transparent hover:border-purple-100">
                <CheckCircle2 className="text-purple-600 flex-shrink-0" size={24} />
                <span className="font-bold text-gray-800 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseVira;
