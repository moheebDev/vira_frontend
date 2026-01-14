import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg">
        <div className="max-w-4xl mx-auto px-6 py-10 text-center">
          <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-4xl font-bold text-purple-600">V</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-white/90 text-lg">Effective Date: October 16, 2025</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">1. Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            Vira collects only the information necessary to provide social audit, AI tools,
            scheduling, and reminder services.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Account Information:</strong> Name, email address, and login method (Google / Apple).</li>
            <li><strong>Social Profile Data:</strong> Public Instagram or TikTok usernames entered for audit purposes.</li>
            <li><strong>Generated Content:</strong> AI-generated bios, captions, hashtags, posts, and audit reports.</li>
            <li><strong>Scheduling Data:</strong> Post schedules, reminder times, and posting history.</li>
            <li><strong>Notifications:</strong> Device tokens used only to send reminders and posting alerts.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Audit Instagram & TikTok profiles (reach, engagement, optimization tips).</li>
            <li>Generate AI bios, hashtags, captions, and post ideas.</li>
            <li>Enable post scheduling and reminder notifications.</li>
            <li>Show posting history and daily growth tips.</li>
            <li>Improve AI accuracy and app performance.</li>
            <li>Provide customer support and account security.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">3. Social Media Integration</h2>
          <p className="text-gray-700 mb-4">
            Vira does <strong>not</strong> directly post content to Instagram or TikTok.
            Users manually copy or schedule content using reminders.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>We do not access private messages or passwords.</li>
            <li>Only publicly available profile data is used for audits.</li>
            <li>Vira is not affiliated with Instagram or TikTok.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">4. Notifications & Reminders</h2>
          <p className="text-gray-700">
            Vira sends notifications to remind users about scheduled posts, daily tips,
            and growth insights. Notifications can be disabled anytime from device settings.
          </p>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">5. Data Sharing</h2>
          <p className="text-gray-700 mb-3">
            We do <strong>not sell</strong> user data. Information is shared only when necessary:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Cloud infrastructure and AI processing services.</li>
            <li>Analytics tools (non-personal, aggregated).</li>
            <li>Legal requirements if mandated by law.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">6. Data Retention</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Data is stored while your account remains active.</li>
            <li>Account deletion permanently removes data within 60 days.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">7. User Rights</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Edit or delete your account anytime.</li>
            <li>Request data deletion via support email.</li>
            <li>Disable notifications and reminders anytime.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">8. Children's Privacy</h2>
          <p className="text-gray-700">
            Vira is not intended for children under 13.
            We do not knowingly collect data from minors.
          </p>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">9. Changes to Policy</h2>
          <p className="text-gray-700">
            We may update this policy periodically. Updates will be reflected inside the app.
          </p>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">10. Contact Us</h2>
          <div className="bg-gray-50 p-4 rounded-lg text-gray-700">
            <p className="font-semibold">Vira – Social Audit & Reach Boost</p>
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
          <p className="text-white/80 text-sm">© 2025 Vira. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;