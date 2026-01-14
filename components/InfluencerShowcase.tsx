
import React from 'react';
import { Play, TrendingUp, Heart, MessageCircle, Share2 } from 'lucide-react';

const influencers = [
  { name: "Alex Rivera", stats: "1.2B Views", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800", platform: "TikTok", reach: "+1250%", color: "bg-black" },
  { name: "Sophie Chen", stats: "850M Views", image: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?auto=format&fit=crop&q=80&w=800", platform: "Instagram", reach: "Global #1", color: "bg-[#E1306C]" },
  { name: "Marcus Wright", stats: "420M Shares", image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=800", platform: "Facebook", reach: "Viral King", color: "bg-[#1877F2]" },
  { name: "Lila Banks", stats: "2.5B Views", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800", platform: "TikTok", reach: "+880%", color: "bg-black" },
  { name: "Jordan Smith", stats: "900M Reach", image: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?auto=format&fit=crop&q=80&w=800", platform: "Shorts", reach: "Elite", color: "bg-red-600" },
  { name: "Elena Miras", stats: "1.8B reach", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800", platform: "Instagram", reach: "Hook Pro", color: "bg-[#E1306C]" },
  { name: "Chris P.", stats: "250M Saves", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800", platform: "Facebook", reach: "Master", color: "bg-[#1877F2]" },
  { name: "Samira K.", stats: "3.2B Views", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800", platform: "TikTok", reach: "Viral Queen", color: "bg-black" },
  { name: "Derek J.", stats: "750M Likes", image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=800", platform: "Instagram", reach: "Authority", color: "bg-[#E1306C]" },
  { name: "Nina Flow", stats: "1.1B Views", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800", platform: "TikTok", reach: "Trending", color: "bg-black" }
];

const InfluencerShowcase: React.FC = () => {
  return (
    <section id="stories" className="py-24 bg-gray-50 overflow-hidden scroll-mt-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#1C1C1C]">High Reach <span className="text-purple-600">Stories</span></h2>
            <p className="text-gray-500 text-xl font-medium">Join the elite creators hitting billions of impressions with Vira AI.</p>
          </div>
          <div className="flex items-center gap-3 px-8 py-4 bg-white rounded-3xl shadow-sm border border-gray-100">
             <div className="flex -space-x-3">
                {[1,2,3,4,5].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />)}
             </div>
             <span className="font-black text-[#1C1C1C]">15B+ Combined Impressions</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
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
        
        <div className="mt-20 p-12 bg-white rounded-[3.5rem] border border-gray-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row items-center justify-between gap-12">
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
