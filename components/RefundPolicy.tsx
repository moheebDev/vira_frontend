import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg">
        <div className="max-w-4xl mx-auto px-6 py-10 text-center">
          <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-4xl font-bold text-purple-600">V</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Refund Policy</h1>
          <p className="text-white/90 text-lg">Effective Date: January 15, 2026</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">1. Refund Eligibility</h2>
          <p className="text-gray-700 mb-4">
            We want you to be satisfied with Vira. If you're not completely happy with your purchase,
            you may be eligible for a refund under the following conditions:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Refunds must be requested within 30 days of purchase</li>
            <li>Technical issues preventing app usage may qualify for full refund</li>
            <li>Refunds are processed within 5-10 business days</li>
            <li>Coins purchased are non-refundable once used</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">2. How to Request a Refund</h2>
          <p className="text-gray-700 mb-4">
            To request a refund, please contact our support team with:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Your purchase receipt or transaction ID</li>
            <li>Reason for the refund request</li>
            <li>Any relevant screenshots or details</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Email: <a href="mailto:evokeai01@gmail.com" className="text-purple-600 underline">evokeai01@gmail.com</a>
          </p>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">3. Refund Processing</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Approved refunds will be processed to the original payment method</li>
            <li>Processing time varies by payment provider (typically 3-10 business days)</li>
            <li>You will receive email confirmation once the refund is processed</li>
            <li>Account access may be revoked upon refund approval</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">4. Non-Refundable Items</h2>
          <p className="text-gray-700">
            The following are not eligible for refunds:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
            <li>Coins that have been used or redeemed</li>
            <li>Services already consumed or delivered</li>
            <li>Purchases made more than 30 days ago</li>
            <li>Refunds requested due to change of mind without technical issues</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">5. Contact Information</h2>
          <div className="bg-gray-50 p-4 rounded-lg text-gray-700">
            <p className="font-semibold">Vira Support</p>
            <p>Email: <a href="mailto:evokeai01@gmail.com" className="text-purple-600 underline">evokeai01@gmail.com</a></p>
            <p>Response time: Within 24-48 hours</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-600 to-pink-600 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-10 text-center">
          <div className="w-16 h-16 bg-white rounded-full mx-auto mb-3 flex items-center justify-center">
            <span className="text-2xl font-bold text-purple-600">V</span>
          </div>
          <p className="text-white/80 text-sm">© 2026 Vira. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default RefundPolicy;