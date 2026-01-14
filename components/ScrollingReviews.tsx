
import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  { name: "Sarah J.", role: "Lifestyle Creator", comment: "Vira helped me double my TikTok following in just 3 weeks! The AI hooks are insane.", rating: 5 },
  { name: "Mark Peterson", role: "Fitness Influencer", comment: "The profile audit found exactly what was wrong with my bio. My conversion rate is up 40%.", rating: 5 },
  { name: "Jessica Bloom", role: "E-comm Owner", comment: "Finally, an app that understands the Instagram algorithm. The hashtag generator is a lifesaver.", rating: 5 },
  { name: "David Chen", role: "Tech YouTuber", comment: "Best 5 bucks I've ever spent. The content ideas are actually fresh and relevant.", rating: 5 },
  { name: "Amara Okoro", role: "Fashion Blogger", comment: "Highly recommend for anyone struggling with engagement. My posts are finally hitting explore!", rating: 5 },
  { name: "Chris Miller", role: "Small Business", comment: "It's like having a social media manager in my pocket for a fraction of the cost.", rating: 5 },
  { name: "Elena Rossi", role: "Travel Creator", comment: "The AI bio generator wrote a bio better than I could ever imagine. Love it!", rating: 5 },
  { name: "Liam Smith", role: "Gaming Channel", comment: "Vira's post scheduler is so smooth. Planning my whole month today.", rating: 5 },
  { name: "Sia Gupta", role: "Foodie", comment: "My Reels reach went from 2k to 50k after using the recommended hooks. I'm shocked.", rating: 5 },
  { name: "Noah Walker", role: "Digital Marketer", comment: "The analytics history is perfect for tracking progress. Game changer.", rating: 5 },
  { name: "Zoey Taylor", role: "Artist", comment: "Easy to use and the results are instant. 10/10 app!", rating: 5 },
  { name: "Ryan G.", role: "Coach", comment: "Professional bios that actually convert followers into clients. Fantastic.", rating: 5 },
  { name: "Maya L.", role: "Beauty Guru", comment: "The hooks for my reels are finally working. Vira is literally magic.", rating: 4 },
  { name: "Thomas K.", role: "Real Estate", comment: "Professional, fast, and high quality. It saved my dead Instagram page.", rating: 5 },
  { name: "Becca F.", role: "Vlogger", comment: "I used to spend 2 hours on captions. Now it takes 2 minutes.", rating: 5 },
  { name: "Oscar P.", role: "Photographer", comment: "The hashtag logic is actually scientific. No more random tagging!", rating: 5 },
  { name: "Jenny H.", role: "Mom Blogger", comment: "My community grew by 5k in a month. All thanks to the content strategy.", rating: 5 },
  { name: "Leo V.", role: "Musician", comment: "Vira knows what sounds and hooks are trending before I do.", rating: 5 },
  { name: "Fiona D.", role: "Pet Influencer", comment: "My dog's TikTok went viral 3 times this month using Vira's hooks!", rating: 5 },
  { name: "Gabe R.", role: "Web Dev", comment: "Clean UI, better AI than ChatGPT for social media specifically.", rating: 5 }
];

const ScrollingReviews: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden select-none border-y border-gray-100">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black text-[#1C1C1C]">What Creators are Saying</h2>
      </div>
      <div className="flex gap-8 animate-scroll whitespace-nowrap">
        {[...reviews, ...reviews].map((review, i) => (
          <div key={i} className="min-w-[340px] bg-gray-50 p-8 rounded-[2rem] border border-gray-100 flex flex-col gap-6 whitespace-normal transition-all hover:bg-white hover:shadow-lg">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill={i < review.rating ? "#FACC15" : "none"} className={i < review.rating ? "text-[#FACC15]" : "text-gray-300"} />
              ))}
            </div>
            <p className="text-gray-700 font-medium italic leading-relaxed">"{review.comment}"</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-vira-gradient rounded-full flex items-center justify-center text-white text-[10px] font-black uppercase">
                {review.name.split(' ')[0][0]}
              </div>
              <div>
                <p className="font-black text-[#1C1C1C] text-sm leading-none mb-1">{review.name}</p>
                <p className="text-[10px] text-purple-600 font-bold uppercase tracking-wider">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ScrollingReviews;
