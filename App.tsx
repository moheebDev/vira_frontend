
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AlternatingFeatures from './components/AlternatingFeatures';
import InfluencerShowcase from './components/InfluencerShowcase';
import ScrollingReviews from './components/ScrollingReviews';
import Platforms from './components/Platforms';
import HowItWorks from './components/HowItWorks';
import WhyChooseVira from './components/WhyChooseVira';
import DownloadSection from './components/DownloadSection';
import Support from './components/Support';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Platforms />
        {/* Reordered as per request: Hero -> Deep Audit -> AI Generation -> Stories -> Reviews */}
        <AlternatingFeatures />
        <InfluencerShowcase />
        <ScrollingReviews />
        <HowItWorks />
        <WhyChooseVira />
        <DownloadSection />
        <Support />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
