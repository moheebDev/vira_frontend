
import React from 'react';
import { Play, TrendingUp, Heart, MessageCircle, Share2 } from 'lucide-react';

const influencers = [
  { name: "Alex Rivera", stats: "1.2B Views", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800", platform: "TikTok", reach: "+1250%", color: "bg-black" },
  { name: "Sophie Chen", stats: "850M Views", image: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?auto=format&fit=crop&q=80&w=800", platform: "Instagram", reach: "Global #1", color: "bg-[#E1306C]" },
  { name: "Marcus Wright", stats: "420M Shares", image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=800", platform: "Facebook", reach: "Viral King", color: "bg-[#1877F2]" },
  { name: "Lila Banks", stats: "2.5B Views", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800", platform: "TikTok", reach: "+880%", color: "bg-black" },
  { name: "Jordan Smith", stats: "900M Reach", image: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?auto=format&fit=crop&q=80&w=800", platform: "Shorts", reach: "Elite", color: "bg-red-600" },
  { name: "Elena Miras", stats: "1.8B reach", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800", platform: "Instagram", reach: "Hook Pro", color: "bg-[#E1306C]" }
];

const InfluencerShowcase: React.FC = () => {
  return (
    <section id="stories" className="py-16 bg-gray-50 overflow-hidden scroll-mt-32">
      <div className="container mx-auto px-4 md:px-8">
        {/* Platforms Section */}
        <div className="text-center mb-16">
          <p className="text-gray-400 font-semibold uppercase tracking-widest text-xs mb-10">Trusted support for platforms you love</p>
          
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60 mb-12">
            <div className="flex items-center gap-3">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="url(#instagram-gradient)" className="text-pink-600">
                <defs>
                  <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#833ab4'}} />
                    <stop offset="50%" style={{stopColor:'#fd1d1d'}} />
                    <stop offset="100%" style={{stopColor:'#fcb045'}} />
                  </linearGradient>
                </defs>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-xl font-bold text-gray-800">Instagram</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-1.13-.35-2.34-.39-3.48.01-1.62.52-2.86 2.12-2.81 3.85.01.76.28 1.51.75 2.12.7.91 1.82 1.51 2.96 1.54.91.03 1.83-.23 2.59-.72.93-.6 1.48-1.62 1.53-2.73.04-3.53.02-7.06.02-10.59-.01-.13-.01-.24-.01-.37z"/>
              </svg>
              <span className="text-xl font-bold text-gray-800">TikTok</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-xl font-bold text-gray-800">Facebook</span>
            </div>
          </div>
          
          <div className="mt-12">
            <p className="text-gray-500 font-medium">One platform. All your social growth needs.</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#1C1C1C]">High Reach <span className="text-purple-600">Stories</span></h2>
            <p className="text-gray-500 text-xl font-medium">Join the elite creators hitting billions of impressions with Vira AI.</p>
          </div>
          <div className="flex items-center gap-3 px-8 py-4 bg-white rounded-3xl shadow-sm border border-gray-100">
             <div className="flex -space-x-3">
                {[1,2,3,4,5].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />)}
             </div>
             <span className="font-black text-[#1C1C1C]">Join the Elite Creators</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {influencers.map((person, i) => (
            <div key={i} className="group relative rounded-[2.5rem] overflow-hidden shadow-xl bg-white transition-all duration-500 hover:-translate-y-4 border border-gray-100">
              <div className="aspect-[3/5] relative">
                <img src={person.image} alt={person.name} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-95 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/20"></div>
                
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                    <Play size={32} fill="currentColor" />
                  </div>
                </div>

                <div className="absolute right-4 bottom-24 flex flex-col gap-4 items-center text-white text-[10px] font-bold z-20">
                   <div className="flex flex-col items-center gap-1 group/icon cursor-pointer">
                      <Heart size={26} fill="white" className="drop-shadow-lg transition-transform group-hover/icon:scale-110" />
                      <span>{person.stats.includes('B') ? '12.4M' : '450k'}</span>
                   </div>
                   <div className="flex flex-col items-center gap-1 group/icon cursor-pointer">
                      <MessageCircle size={26} fill="white" className="drop-shadow-lg transition-transform group-hover/icon:scale-110" />
                      <span>{person.stats.includes('B') ? '84k' : '12k'}</span>
                   </div>
                   <div className="flex flex-col items-center gap-1 group/icon cursor-pointer">
                      <Share2 size={26} fill="white" className="drop-shadow-lg transition-transform group-hover/icon:scale-110" />
                      <span>{person.stats.includes('B') ? '102k' : '8k'}</span>
                   </div>
                </div>

                <div className="absolute bottom-8 left-6 right-6 text-white z-20">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`${person.color} text-[9px] font-black px-2.5 py-1.5 rounded-lg uppercase tracking-wider border border-white/20`}>{person.platform}</span>
                    <span className="bg-green-500 text-[9px] font-black px-2.5 py-1.5 rounded-lg uppercase tracking-wider flex items-center gap-1">
                      <TrendingUp size={12} /> {person.reach}
                    </span>
                  </div>
                  <h3 className="text-xl font-black mb-1 tracking-tight">{person.name}</h3>
                  <p className="text-white/80 text-sm font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    {person.stats}
                  </p>
                  
                  <div className="mt-5 h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                     <div className="h-full w-2/3 bg-white transition-all group-hover:w-full duration-1000"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-12 bg-white rounded-[3.5rem] border border-gray-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row items-center justify-between gap-12">
           <div className="text-center lg:text-left">
              <h4 className="text-3xl font-black text-[#1C1C1C] mb-4">Want results like these?</h4>
              <p className="text-gray-500 text-lg">Our AI identifies exactly what your account is missing for billion-view success.</p>
           </div>
           <a 
            href="#download"
            className="bg-vira-gradient text-white px-12 py-5 rounded-[1.5rem] font-black hover:scale-105 transition-all active:scale-95 shadow-2xl btn-glow whitespace-nowrap"
           >
              Optimize My Account Now
           </a>
        </div>
      </div>
    </section>
  );
};

export default InfluencerShowcase;
