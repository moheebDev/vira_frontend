
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-100 shadow-sm text-purple-700 text-sm font-semibold mb-6 animate-fade-in-up animation-delay-0">
              <span className="flex h-2 w-2 rounded-full bg-purple-600 animate-pulse"></span>
              Join the Elite Creators
            </div>

            {/* User Images */}
            <div className="flex items-center gap-3 mb-8 animate-fade-in-up animation-delay-100">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=32&h=32&q=80" alt="Creator" className="w-8 h-8 rounded-full border-2 border-white shadow-sm animate-float animation-delay-0" />
                <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=32&h=32&q=80" alt="Creator" className="w-8 h-8 rounded-full border-2 border-white shadow-sm animate-float animation-delay-100" />
                <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=32&h=32&q=80" alt="Creator" className="w-8 h-8 rounded-full border-2 border-white shadow-sm animate-float animation-delay-200" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=32&h=32&q=80" alt="Creator" className="w-8 h-8 rounded-full border-2 border-white shadow-sm animate-float animation-delay-0" />
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=32&h=32&q=80" alt="Creator" className="w-8 h-8 rounded-full border-2 border-white shadow-sm animate-float animation-delay-100" />
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="#FACC15" className="text-[#FACC15]" />)}
                </div>
                <span className="font-medium">50,000+ creators</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight text-[#1C1C1C] animate-fade-in-up animation-delay-200">
              The Only App You Need to <span className="gradient-text animate-float animation-delay-0">Go Viral 🚀</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-500 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium animate-fade-in-up animation-delay-400">
              Vira leverages proprietary AI to audit your profile, optimize your hooks, and generate high-engagement content that sticks on TikTok, Instagram, and Facebook.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-12 animate-fade-in-up animation-delay-0">
              <a href="#download" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-vira-gradient text-white px-8 py-5 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl btn-glow hover:shadow-2xl">
                Start Growing Now <ArrowRight size={20} />
              </a>
              <div className="flex flex-col items-center sm:items-start animate-float animation-delay-200">
                <div className="flex gap-1 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#FACC15" className="text-[#FACC15]" />)}
                </div>
                <p className="text-sm font-bold text-gray-700">4.9/5 Rating on App Store</p>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 opacity-70 grayscale hover:grayscale-0 transition-all animate-fade-in-up animation-delay-100">
               <Apple size={32} className="hover:scale-110 transition-transform duration-300" />
               <Play size={32} className="hover:scale-110 transition-transform duration-300" />
               <div className="h-8 w-px bg-gray-300"></div>
               <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Available Globally</p>
            </div>
          </div>

          <div className="lg:w-2/5 relative">
            {/* Multiple Phone Mockups - Clean Professional Layout */}
            <div className="relative flex justify-center items-center gap-4">
              {/* Left Phone - First Animation */}
              <div className="relative max-w-[260px] group transform -rotate-6 hover:rotate-0 transition-all duration-500 animate-fade-in-up animation-delay-0 hover:scale-105 hover:-translate-y-2">
                <div className="relative bg-[#1C1C1C] p-3 rounded-[3rem] shadow-[0_25px_50px_-12px_rgba(236,72,153,0.25)] border-[8px] border-[#1C1C1C] hover:shadow-[0_35px_70px_-12px_rgba(236,72,153,0.4)] transition-all duration-500">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-[#1C1C1C] rounded-b-3xl z-30 flex items-center justify-center">
                    <div className="w-10 h-1 bg-gray-800 rounded-full"></div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800"
                    alt="Beauty Creator Success"
                    className="w-full aspect-[9/19.5] rounded-[2.5rem] object-cover animate-float"
                  />
                  <div className="absolute bottom-10 left-6 text-white z-20 pointer-events-none transform transition-all duration-300 group-hover:scale-105">
                    <p className="text-xs font-bold mb-1">@beautycreator</p>
                    <p className="text-[10px] opacity-80 mb-2">Vira transformed my content!</p>
                    <div className="flex gap-3">
                      <div className="text-center">
                         <p className="text-sm font-black">1.8M</p>
                         <p className="text-[8px] opacity-70 uppercase">Views</p>
                      </div>
                      <div className="text-center">
                         <p className="text-sm font-black">320k</p>
                         <p className="text-[8px] opacity-70 uppercase">Likes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Phone - Second Animation */}
              <div className="relative z-10 max-w-[280px] group animate-fade-in-up animation-delay-200 hover:scale-110 hover:-translate-y-3 transition-all duration-500">
                <div className="relative bg-[#1C1C1C] p-3 rounded-[3rem] shadow-[0_35px_70px_-12px_rgba(139,92,246,0.3)] border-[10px] border-[#1C1C1C] hover:shadow-[0_50px_100px_-12px_rgba(139,92,246,0.5)] transition-all duration-500">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-[#1C1C1C] rounded-b-3xl z-30 flex items-center justify-center">
                    <div className="w-12 h-1 bg-gray-800 rounded-full"></div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800"
                    alt="Viral Content Success"
                    className="w-full aspect-[9/19.5] rounded-[2.5rem] object-cover animate-float animation-delay-100"
                  />
                  <div className="absolute bottom-10 left-6 text-white z-20 pointer-events-none transform transition-all duration-300 group-hover:scale-105">
                    <p className="text-xs font-bold mb-1">@viracreator</p>
                    <p className="text-[10px] opacity-80 mb-2">Winning with Vira AI hooks!</p>
                    <div className="flex gap-3">
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
              </div>

              {/* Right Phone - Third Animation */}
              <div className="relative max-w-[260px] group transform rotate-6 hover:rotate-0 transition-all duration-500 animate-fade-in-up animation-delay-400 hover:scale-105 hover:-translate-y-2">
                <div className="relative bg-[#1C1C1C] p-3 rounded-[3rem] shadow-[0_25px_50px_-12px_rgba(139,92,246,0.25)] border-[8px] border-[#1C1C1C] hover:shadow-[0_35px_70px_-12px_rgba(139,92,246,0.4)] transition-all duration-500">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-[#1C1C1C] rounded-b-3xl z-30 flex items-center justify-center">
                    <div className="w-10 h-1 bg-gray-800 rounded-full"></div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800"
                    alt="Lifestyle Creator Success"
                    className="w-full aspect-[9/19.5] rounded-[2.5rem] object-cover animate-float animation-delay-200"
                  />
                  <div className="absolute bottom-10 left-6 text-white z-20 pointer-events-none transform transition-all duration-300 group-hover:scale-105">
                    <p className="text-xs font-bold mb-1">@lifestylequeen</p>
                    <p className="text-[10px] opacity-80 mb-2">From 0 to 1M followers!</p>
                    <div className="flex gap-3">
                      <div className="text-center">
                         <p className="text-sm font-black">3.2M</p>
                         <p className="text-[8px] opacity-70 uppercase">Views</p>
                      </div>
                      <div className="text-center">
                         <p className="text-sm font-black">680k</p>
                         <p className="text-[8px] opacity-70 uppercase">Likes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Play Button Overlay on Center Phone */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                <Play size={32} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
