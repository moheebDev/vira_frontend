
import React from 'react';
import { Apple, Play, ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-[#FDFCFE] relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-200/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-pink-200/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-100 shadow-sm text-purple-700 text-sm font-semibold mb-8">
              <span className="flex h-2 w-2 rounded-full bg-purple-600 animate-pulse"></span>
              Join 50,000+ Viral Creators
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight text-[#1C1C1C]">
              The Only App You Need to <span className="gradient-text">Go Viral 🚀</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-500 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Vira leverages proprietary AI to audit your profile, optimize your hooks, and generate high-engagement content that sticks on TikTok, Instagram, and Facebook.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-12">
              <a href="#download" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-vira-gradient text-white px-8 py-5 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl btn-glow">
                Start Growing Now <ArrowRight size={20} />
              </a>
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex gap-1 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#FACC15" className="text-[#FACC15]" />)}
                </div>
                <p className="text-sm font-bold text-gray-700">4.9/5 Rating on App Store</p>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 opacity-70 grayscale hover:grayscale-0 transition-all">
               <Apple size={32} />
               <Play size={32} />
               <div className="h-8 w-px bg-gray-300"></div>
               <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Available Globally</p>
            </div>
          </div>

          <div className="lg:w-2/5 relative">
            <div className="relative z-10 mx-auto max-w-[340px]">
              {/* Main Phone with TikTok-style Viral Mockup */}
              <div className="relative bg-[#1C1C1C] p-3 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(139,92,246,0.3)] border-[10px] border-[#1C1C1C]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-[#1C1C1C] rounded-b-3xl z-30 flex items-center justify-center">
                  <div className="w-12 h-1 bg-gray-800 rounded-full"></div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop" 
                  alt="Viral Content Feed" 
                  className="w-full aspect-[9/19.5] rounded-[2.8rem] object-cover"
                />
                {/* Simulated Viral Stats Overlay */}
                <div className="absolute bottom-12 left-8 text-white z-20 pointer-events-none">
                  <p className="text-xs font-bold mb-1">@viracreator</p>
                  <p className="text-[10px] opacity-80 mb-3">Winning with Vira AI hooks! #viral #growth</p>
                  <div className="flex gap-4">
                    <div className="text-center">
                       <p className="text-sm font-black">2.4M</p>
                       <p className="text-[8px] opacity-70 uppercase">Views</p>
                    </div>
                    <div className="text-center">
                       <p className="text-sm font-black">450k</p>
                       <p className="text-[8px] opacity-70 uppercase">Likes</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Success Notification */}
              <div className="absolute -right-16 top-1/4 bg-white p-5 rounded-3xl shadow-2xl z-20 animate-bounce border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Star size={24} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400">Viral Reach!</p>
                    <p className="text-lg font-black text-[#1C1C1C]">10M+ Monthly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
