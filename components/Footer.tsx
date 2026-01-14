
import React from 'react';

const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="pt-24 pb-12 bg-[#FDFCFE] border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <div 
              className="flex items-center gap-2 mb-6 cursor-pointer"
              onClick={() => scrollTo('top')}
            >
              <div className="w-10 h-10 bg-vira-gradient rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">V</div>
              <span className="text-2xl font-bold tracking-tight text-[#1C1C1C]">Vira</span>
            </div>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-sm">
              Empowering the next generation of creators with proprietary AI tools designed for organic, explosive growth across all social platforms.
            </p>
            <div className="flex gap-4">
               {['fb', 'ig', 'tk', 'tw'].map(s => (
                 <div key={s} className="w-10 h-10 bg-white rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-purple-600 hover:border-purple-100 transition-all cursor-pointer shadow-sm capitalize font-bold text-xs">{s}</div>
               ))}
            </div>
          </div>
          
          <div>
            <h5 className="font-black text-[#1C1C1C] mb-6 uppercase text-xs tracking-widest">Growth Tools</h5>
            <ul className="space-y-4 text-gray-500 font-bold text-sm">
              <li><button onClick={() => scrollTo('audit')} className="hover:text-purple-600 transition-colors block w-full text-left">Deep Profile Audit</button></li>
              <li><button onClick={() => scrollTo('features')} className="hover:text-purple-600 transition-colors block w-full text-left">AI Caption Engine</button></li>
              <li><button onClick={() => scrollTo('hashtags')} className="hover:text-purple-600 transition-colors block w-full text-left">Hashtag Intelligence</button></li>
              <li><button onClick={() => scrollTo('stories')} className="hover:text-purple-600 transition-colors block w-full text-left">Success Stories</button></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black text-[#1C1C1C] mb-6 uppercase text-xs tracking-widest">Legal</h5>
            <ul className="space-y-4 text-gray-500 font-bold text-sm">
              <li><a href="#download" onClick={() => scrollTo('download')} className="hover:text-purple-600 transition-colors block py-1">Privacy Policy</a></li>
              <li><a href="#download" onClick={() => scrollTo('download')} className="hover:text-purple-600 transition-colors block py-1">Terms of Service</a></li>
              <li><a href="#download" onClick={() => scrollTo('download')} className="hover:text-purple-600 transition-colors block py-1">Cookie Policy</a></li>
              <li><a href="#download" onClick={() => scrollTo('download')} className="hover:text-purple-600 transition-colors block py-1">Refund Policy</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black text-[#1C1C1C] mb-6 uppercase text-xs tracking-widest">Connect</h5>
            <ul className="space-y-4 text-gray-500 font-bold text-sm">
              <li><a href="mailto:evokegpt@gmail.com" className="hover:text-purple-600 transition-colors">Email Support</a></li>
              <li><a href="tel:+923047512743" className="hover:text-purple-600 transition-colors">Phone Support</a></li>
              <li><a href="https://wa.me/923047512743" className="hover:text-purple-600 transition-colors">WhatsApp Chat</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
            © 2026 Vira AI Technologies. Built for Creators.
          </p>
          <div className="flex gap-4">
             <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8 opacity-70 hover:opacity-100 transition-opacity cursor-pointer" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-8 opacity-70 hover:opacity-100 transition-opacity cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
