
import React from 'react';
import { Play, TrendingUp, Heart, MessageCircle, Share2 } from 'lucide-react';

const influencers = [
  { name: "Alex Rivera", stats: "5.2M Views", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800", platform: "TikTok", reach: "+250%", color: "bg-black" },
  { name: "Sophie Chen", stats: "850k Likes", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800", platform: "Instagram", reach: "Top 1%", color: "bg-[#E1306C]" },
  { name: "Marcus Wright", stats: "120k Shares", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800", platform: "Facebook", reach: "Viral", color: "bg-[#1877F2]" },
  { name: "Lila Banks", stats: "2.1M Views", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800", platform: "TikTok", reach: "+180%", color: "bg-black" },
  { name: "Jordan Smith", stats: "400k Subs", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800", platform: "Shorts", reach: "Pro", color: "bg-red-600" },
  { name: "Elena Miras", stats: "1.5M reach", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800", platform: "Instagram", reach: "Expert", color: "bg-[#E1306C]" },
  { name: "Chris P.", stats: "90k Saves", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800", platform: "Facebook", reach: "Dominator", color: "bg-[#1877F2]" },
  { name: "Samira K.", stats: "3.8M Views", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800", platform: "TikTok", reach: "3x Traffic", color: "bg-black" },
  { name: "Derek J.", stats: "600k Likes", image: "https://images.unsplash.com/photo-1492562080023-ab3dbdf5bb3d?auto=format&fit=crop&q=80&w=800", platform: "Instagram", reach: "Master", color: "bg-[#E1306C]" },
  { name: "Nina Flow", stats: "2M Views", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=800", platform: "TikTok", reach: "Daily", color: "bg-black" }
];

const InfluencerShowcase: React.FC = () => {
  return (
    <section id="stories" className="py-24 bg-gray-50 overflow-hidden scroll-mt-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#1C1C1C]">High Reach <span className="text-purple-600">Stories</span></h2>
            <p className="text-gray-500 text-xl font-medium">See how top creators use Vira to optimize their accounts and dominate their niches.</p>
          </div>
          <div className="flex items-center gap-3 px-8 py-4 bg-white rounded-3xl shadow-sm border border-gray-100">
             <div className="flex -space-x-3">
                {[1,2,3,4,5].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-300" />)}
             </div>
             <span className="font-black text-[#1C1C1C]">10M+ Combined Reach</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {influencers.map((person, i) => (
            <div key={i} className="group relative rounded-[2rem] overflow-hidden shadow-xl bg-white transition-all duration-500 hover:-translate-y-3 border border-gray-100">
              <div className="aspect-[3/4.5] relative">
                <img src={person.image} alt={person.name} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/20"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                    <Play size={32} fill="currentColor" />
                  </div>
                </div>

                {/* Viral Interaction Overlay (TikTok Style) */}
                <div className="absolute right-4 bottom-24 flex flex-col gap-4 items-center text-white text-[10px] font-bold z-20">
                   <div className="flex flex-col items-center gap-1">
                      <Heart size={24} fill="white" className="drop-shadow-lg" />
                      <span>{person.stats.includes('M') ? '240k' : '45k'}</span>
                   </div>
                   <div className="flex flex-col items-center gap-1">
                      <MessageCircle size={24} fill="white" className="drop-shadow-lg" />
                      <span>{person.stats.includes('M') ? '12k' : '2k'}</span>
                   </div>
                   <div className="flex flex-col items-center gap-1">
                      <Share2 size={24} fill="white" className="drop-shadow-lg" />
                      <span>{person.stats.includes('M') ? '8k' : '1k'}</span>
                   </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white z-20">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`${person.color} text-[8px] font-black px-2 py-1 rounded-lg uppercase tracking-wider border border-white/20`}>{person.platform}</span>
                    <span className="bg-green-500 text-[8px] font-black px-2 py-1 rounded-lg uppercase tracking-wider flex items-center gap-1">
                      <TrendingUp size={10} /> {person.reach}
                    </span>
                  </div>
                  <h3 className="text-lg font-black mb-0.5 tracking-tight">{person.name}</h3>
                  <p className="text-white/70 text-xs font-bold">{person.stats}</p>
                  
                  {/* Fake Progress Bar */}
                  <div className="mt-4 h-1 w-full bg-white/20 rounded-full overflow-hidden">
                     <div className="h-full w-1/3 bg-white animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-12 bg-white rounded-[3.5rem] border border-gray-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row items-center justify-between gap-12">
           <div className="text-center lg:text-left">
              <h4 className="text-3xl font-black text-[#1C1C1C] mb-4">Want results like these?</h4>
              <p className="text-gray-500 text-lg">Our AI identifies exactly what your account is missing for viral success.</p>
           </div>
           <a 
            href="#download"
            className="bg-vira-gradient text-white px-12 py-5 rounded-[1.5rem] font-black hover:scale-105 transition-all active:scale-95 shadow-2xl btn-glow whitespace-nowrap"
           >
              Optimize My Account
           </a>
        </div>
      </div>
    </section>
  );
};

export default InfluencerShowcase;
