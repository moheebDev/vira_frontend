import React from 'react';

const Cookies: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg">
        <div className="max-w-4xl mx-auto px-6 py-10 text-center">
          <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-4xl font-bold text-purple-600">V</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Cookie Policy</h1>
          <p className="text-white/90 text-lg">Effective Date: January 15, 2026</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">1. What Are Cookies</h2>
          <p className="text-gray-700">
            Cookies are small text files that are stored on your device when you visit our app or website.
            They help us provide you with a better experience by remembering your preferences and understanding how you use our services.
          </p>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">2. How We Use Cookies</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Essential Cookies:</strong> Required for the app to function properly.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our app.</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences.</li>
            <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">3. Third-Party Cookies</h2>
          <p className="text-gray-700 mb-4">
            We may use third-party services that set their own cookies, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Analytics services (e.g., Google Analytics)</li>
            <li>Social media platforms</li>
            <li>Advertising networks</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">4. Managing Cookies</h2>
          <p className="text-gray-700 mb-4">
            You can control and manage cookies in various ways:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Most web browsers allow you to control cookies through their settings</li>
            <li>You can delete all cookies that are already on your computer</li>
            <li>You can set most browsers to prevent cookies from being placed</li>
            <li>Note that disabling cookies may affect the functionality of our app</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">5. Updates to This Policy</h2>
          <p className="text-gray-700">
            We may update this Cookie Policy from time to time. Any changes will be posted on this page
            with an updated effective date.
          </p>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">6. Contact Us</h2>
          <div className="bg-gray-50 p-4 rounded-lg text-gray-700">
            <p className="font-semibold">Vira Support</p>
            <p>Email: <a href="mailto:evokeai01@gmail.com" className="text-purple-600 underline">evokeai01@gmail.com</a></p>
            <p>United States</p>
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

export default Cookies;