
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-4' : 'bg-transparent py-7'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div 
          className="flex items-center gap-3 group cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-11 h-11 bg-vira-gradient rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:rotate-12 transition-transform duration-300">V</div>
          <span className="text-2xl font-black tracking-tight text-[#1C1C1C]">Vira</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-10 text-[15px] font-bold text-gray-500">
          <button onClick={() => scrollTo('audit')} className="hover:text-purple-600 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-purple-600 hover:after:w-full after:transition-all">Profile Audit</button>
          <button onClick={() => scrollTo('features')} className="hover:text-purple-600 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-purple-600 hover:after:w-full after:transition-all">AI Tools</button>
          <button onClick={() => scrollTo('stories')} className="hover:text-purple-600 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-purple-600 hover:after:w-full after:transition-all">Viral Stories</button>
          <button onClick={() => scrollTo('support')} className="hover:text-purple-600 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-purple-600 hover:after:w-full after:transition-all">Support</button>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => scrollTo('download')}
            className="bg-[#1C1C1C] text-white px-7 py-3 rounded-2xl font-bold text-sm hover:bg-gray-800 transition-all active:scale-95 shadow-xl"
          >
            Start Growing
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
