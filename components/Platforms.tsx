
import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Platforms: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <p className="text-gray-400 font-semibold uppercase tracking-widest text-xs mb-10">Trusted support for platforms you love</p>
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60">
          <div className="flex items-center gap-3">
            <Instagram size={32} className="text-pink-600" />
            <span className="text-xl font-bold text-gray-800">Instagram</span>
          </div>
          <div className="flex items-center gap-3">
             {/* Simple TikTok SVG as Lucide doesn't have it natively in older versions */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-black">
              <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-1.13-.35-2.34-.39-3.48.01-1.62.52-2.86 2.12-2.81 3.85.01.76.28 1.51.75 2.12.7.91 1.82 1.51 2.96 1.54.91.03 1.83-.23 2.59-.72.93-.6 1.48-1.62 1.53-2.73.04-3.53.02-7.06.02-10.59-.01-.13-.01-.24-.01-.37z"/>
            </svg>
            <span className="text-xl font-bold text-gray-800">TikTok</span>
          </div>
          <div className="flex items-center gap-3">
            <Facebook size={32} className="text-blue-600" />
            <span className="text-xl font-bold text-gray-800">Facebook</span>
          </div>
        </div>
        
        <div className="mt-12">
            <p className="text-gray-500 font-medium">One platform. All your social growth needs.</p>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
