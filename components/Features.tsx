
import React from 'react';
import { Sparkles, Hash, UserCircle, Search, BrainCircuit, Calendar, History } from 'lucide-react';

const featureList = [
  {
    icon: <Sparkles className="text-purple-600" />,
    title: "AI Post Generator",
    description: "Create high-engagement posts in seconds with advanced AI tailored for your audience."
  },
  {
    icon: <Hash className="text-blue-600" />,
    title: "Hashtag Generator",
    description: "Discover trending, organic hashtags that drive maximum reach for every niche."
  },
  {
    icon: <UserCircle className="text-pink-600" />,
    title: "Bio Generator",
    description: "High-converting bios for Instagram, TikTok & Facebook that grab attention instantly."
  },
  {
    icon: <Search className="text-orange-600" />,
    title: "Profile Audit",
    description: "Find weaknesses and hidden growth opportunities in your profile within minutes."
  },
  {
    icon: <BrainCircuit className="text-indigo-600" />,
    title: "Bio & Content Audit",
    description: "Improve clarity, hooks, and audience targeting with our specialized AI auditing tools."
  },
  {
    icon: <Calendar className="text-green-600" />,
    title: "Post Scheduler",
    description: "Plan and schedule posts ahead of time for better consistency and engagement."
  },
  {
    icon: <History className="text-red-600" />,
    title: "History & Insights",
    description: "View and manage your generated content history and growth metrics anytime."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#1C1C1C]">
            Everything You Need <br /> <span className="text-purple-600">to Go Viral</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Powerful AI tools designed to simplify your growth journey across all major social platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl bg-gray-50 border border-transparent hover:border-purple-100 hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1C1C1C]">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
