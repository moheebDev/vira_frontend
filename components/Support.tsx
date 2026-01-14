
import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const Support: React.FC = () => {
  return (
    <section id="support" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Need Support?</h2>
            <p className="text-gray-500 text-lg">We're here to help you on your journey to going viral.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a 
              href="mailto:evokegpt@gmail.com" 
              className="flex items-center gap-6 p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all">
                <Mail size={32} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Email Support</p>
                <p className="text-xl font-bold text-gray-800">evokegpt@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="tel:+923047512743" 
              className="flex items-center gap-6 p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Phone size={32} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</p>
                <p className="text-xl font-bold text-gray-800">+92 304 7512743</p>
              </div>
            </a>
          </div>
          
          <div className="mt-12 text-center p-8 bg-vira-gradient rounded-3xl text-white">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
               <div className="flex items-center gap-4">
                  <MessageSquare size={40} />
                  <div className="text-left">
                     <p className="text-lg font-bold">Quick WhatsApp Support</p>
                     <p className="text-white/80">Message us for instant help with the app.</p>
                  </div>
               </div>
               <a 
                 href="https://wa.me/923047512743" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="bg-white text-purple-600 px-8 py-3 rounded-2xl font-bold hover:bg-opacity-90 transition-all shadow-xl"
               >
                 Chat on WhatsApp
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
