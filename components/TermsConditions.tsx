import React from 'react';

const TermsConditions: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg">
        <div className="max-w-4xl mx-auto px-6 py-10 text-center">
          <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-4xl font-bold text-purple-600">V</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Terms & Conditions</h1>
          <p className="text-white/90 text-lg">Effective Date: January 13, 2026</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <p className="text-lg text-gray-700">
            Welcome to <strong>Vira</strong> ("App", "Services"). By downloading, installing, or using Vira, you agree to these Terms
            and our <a href="/privacy-policy" className="text-purple-600 hover:text-purple-800">Privacy Policy</a>.
            Please read carefully. If you do not agree, do not use the App.
          </p>
        </div>

        <div className="space-y-8">
          {/* 1 Eligibility */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4 flex items-center">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
              Eligibility
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Users must be at least 13 years old (or the local age of majority).</li>
              <li>• You agree to provide accurate and up-to-date information when registering or using account-based features.</li>
            </ul>
          </section>

          {/* 2 App Features & Services */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4 flex items-center">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
              App Features & Services
            </h2>
            <p className="text-gray-700 mb-4">Vira provides AI-powered social media tools including:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Instagram/TikTok profile audit, engagement analysis, and tips</li>
              <li>• AI-generated bios, captions, hashtags, and posts</li>
              <li>• Post scheduling and reminders</li>
              <li>• History tracking and daily growth tips</li>
              <li>• Optional social features: creating, commenting, and interacting with posts</li>
              <li>• Report system for inappropriate or harmful content</li>
              <li>• Coin-based access for premium AI tools (no subscription required)</li>
              <li>• Demo mode for exploring basic features without account registration</li>
            </ul>
          </section>

          {/* 3 User Content & Ownership */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4 flex items-center">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
              User Content & Ownership
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• You retain ownership of all content you create, upload, or generate in the app.</li>
              <li>• By using Vira, you grant us a limited license to process, store, and display your content for app functionality.</li>
              <li>• You are responsible for ensuring your content does not violate copyrights, trademarks, or any applicable laws.</li>
            </ul>
          </section>

          {/* 4 Content Policy & Violations */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4 flex items-center">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
              Content Policy & Violations
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Prohibited content includes: hate speech, harassment, pornography, illegal activity, graphic violence, or impersonation.</li>
              <li>• AI-generated content should not infringe on third-party rights.</li>
              <li>• Violations may result in content removal, temporary suspension, or account termination.</li>
              <li>• Users can report inappropriate content using the in-app system.</li>
              <li>• Vira reserves the right to moderate all content to maintain a safe and supportive environment.</li>
            </ul>
          </section>

          {/* 5 Coins & Purchases */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4 flex items-center">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">5</span>
              Coins & In-App Purchases
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Premium AI tools require coins, which can be earned via in-app activities or purchased securely.</li>
              <li>• All payments are handled through Apple or Google; Vira does not store payment information.</li>
              <li>• Coins are non-refundable and non-transferable, except where required by law.</li>
            </ul>
          </section>

          {/* 6 Limitations of Liability */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4 flex items-center">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">6</span>
              Limitation of Liability
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• AI-generated results may be inaccurate or incomplete.</li>
              <li>• Vira is not responsible for losses resulting from reliance on AI outputs.</li>
              <li>• The App is provided "as-is"; we disclaim warranties to the fullest extent permitted by law.</li>
            </ul>
          </section>

          {/* 7 Termination */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4 flex items-center">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">7</span>
              Account Termination
            </h2>
            <p className="text-gray-700">
              Vira may suspend or terminate accounts for violations of these Terms, misuse of features, or illegal activity.
            </p>
          </section>

          {/* 8 Governing Law */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4 flex items-center">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">8</span>
              Governing Law
            </h2>
            <p className="text-gray-700">
              These Terms are governed by the laws of Delaware, United States, unless local laws require otherwise.
            </p>
          </section>

          {/* 9 Contact */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4 flex items-center">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">9</span>
              Contact
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-purple-800 mb-3">Vira Support</h3>
              <p className="text-gray-700">📧 Email: <a href="mailto:evokeai01@gmail.com" className="text-purple-600 hover:text-purple-800">evokeai01@gmail.com</a></p>
              <p className="text-gray-700">📍 Delaware, United States</p>
            </div>
          </section>
        </div>
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

export default TermsConditions;