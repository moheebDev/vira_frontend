
import React from 'react';
import { Apple, Play } from 'lucide-react';

const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-[#1C1C1C] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          {/* Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Start Growing Today</h2>
            <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
              Join thousands of successful creators who are already using Vira to dominate social media.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto flex items-center justify-center gap-4 bg-white text-black px-10 py-5 rounded-2xl font-bold transition-all hover:bg-gray-100 active:scale-95 shadow-2xl">
                <Apple size={32} />
                <div className="text-left">
                  <p className="text-[10px] uppercase opacity-60 leading-none">Available on the</p>
                  <p className="text-xl leading-tight">App Store</p>
                </div>
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-4 bg-white text-black px-10 py-5 rounded-2xl font-bold transition-all hover:bg-gray-100 active:scale-95 shadow-2xl">
                <Play size={32} fill="currentColor" />
                <div className="text-left">
                  <p className="text-[10px] uppercase opacity-60 leading-none">Get it on</p>
                  <p className="text-xl leading-tight">Google Play</p>
                </div>
              </button>
            </div>
            
            <p className="mt-10 text-gray-500 font-medium">Available for iOS & Android</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
