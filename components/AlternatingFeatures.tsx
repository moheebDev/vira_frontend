
import React from 'react';
import { Sparkles, Hash, BarChart3, TrendingUp } from 'lucide-react';

const features = [
  {
    id: "audit",
    title: "Deep Profile Auditing",
    subtitle: "Identify your growth bottlenecks.",
    description: "Vira's proprietary AI scans your Instagram, TikTok, and Facebook profiles to identify exactly what's holding you back. From bio clarity to hook effectiveness, we give you a step-by-step roadmap to viral success.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    icon: <BarChart3 className="text-blue-600" />,
    stats: "89% Accuracy Rate",
    platforms: ["Instagram", "TikTok", "Facebook"]
  },
  {
    id: "features",
    title: "AI-Powered Content Generation",
    subtitle: "Stop staring at a blank screen.",
    description: "Generate viral captions, attention-grabbing hooks, and high-conversion video scripts in seconds. Our models are trained on the latest trending content across all major social networks.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop",
    icon: <Sparkles className="text-purple-600" />,
    stats: "3.5x Engagement Increase",
    platforms: ["Reels", "TikToks", "Shorts"]
  },
  {
    id: "hashtags",
    title: "Trending Hashtag Intelligence",
    subtitle: "Reach the right audience, organically.",
    description: "Our hashtag generator finds 'Goldilocks' tags—those with high engagement but low competition—perfectly suited for your account size. Optimize for Facebook, TikTok, and Instagram with one tap.",
    image: "https://images.unsplash.com/photo-1611162616485-9681e3ec358b?q=80&w=1200&auto=format&fit=crop",
    icon: <Hash className="text-pink-600" />,
    stats: "Organic Reach x5",
    platforms: ["Global Trends", "Niche Tags"]
  }
];

const AlternatingFeatures: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="space-y-40">
          {features.map((feature, index) => (
            <div 
              key={index} 
              id={feature.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 md:gap-24 scroll-mt-32`}
            >
              <div className="lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-6 bg-vira-gradient rounded-[3.5rem] opacity-5 group-hover:opacity-15 transition-opacity duration-500"></div>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="relative z-10 w-full rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] object-cover aspect-square lg:aspect-[4/3]"
                  />
                  <div className="absolute -bottom-8 -right-4 lg:-right-10 bg-white p-6 rounded-3xl shadow-2xl z-20 border border-gray-50 transform hover:scale-105 transition-transform">
                    <p className="text-purple-600 font-black text-2xl mb-1">{feature.stats}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Average User Success</p>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                  {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h3 className="text-sm font-bold text-purple-600 uppercase tracking-[0.25em] mb-4">{feature.subtitle}</h3>
                <h2 className="text-4xl md:text-6xl font-extrabold text-[#1C1C1C] mb-8 leading-[1.15]">
                  {feature.title}
                </h2>
                <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-xl">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-12">
                   {feature.platforms.map((p, i) => (
                     <span key={i} className="px-4 py-2 bg-purple-50 text-purple-700 rounded-xl text-xs font-bold border border-purple-100">{p}</span>
                   ))}
                </div>
                <a 
                  href="#download"
                  className="inline-flex items-center gap-4 bg-[#1C1C1C] text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all active:scale-95 shadow-xl group"
                >
                  Get Started <TrendingUp size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlternatingFeatures;
