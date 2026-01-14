
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AlternatingFeatures from './components/AlternatingFeatures';
import InfluencerShowcase from './components/InfluencerShowcase';
import ScrollingReviews from './components/ScrollingReviews';
import HowItWorks from './components/HowItWorks';
import WhyChooseVira from './components/WhyChooseVira';
import DownloadSection from './components/DownloadSection';
import Support from './components/Support';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import Cookies from './components/Cookies';
import RefundPolicy from './components/RefundPolicy';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <InfluencerShowcase />
        {/* Reordered as per request: Hero -> Deep Audit -> AI Generation -> Stories -> Reviews */}
        <AlternatingFeatures />
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

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;
