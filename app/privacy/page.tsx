export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <section className="w-full max-w-2xl px-4 md:px-0">
        <h1 className="mb-6 text-3xl font-bold text-primary">Privacy Policy</h1>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          This Privacy Policy describes how AI Job Hub ("we", "us", or "our") collects, uses, and protects your information when you use our job application tracking platform. By using AI Job Hub, you agree to the terms of this policy.
        </p>
        <h2 className="mb-4 mt-8 text-2xl font-semibold text-primary">1. Information We Collect</h2>
        <ul className="mb-8 list-disc space-y-3 pl-6 text-base leading-relaxed">
          <li>
            <span className="font-semibold">Account Information:</span> Name, email address, authentication credentials (Google OAuth or email/password).
          </li>
          <li>
            <span className="font-semibold">Job Application Data:</span> Job titles, companies, statuses, sources, application dates, and notes you enter or import.
          </li>
          <li>
            <span className="font-semibold">Email Data:</span> If you connect your Gmail, we access job-related emails (subject, sender, content, metadata) for tracking and analytics.
          </li>
          <li>
            <span className="font-semibold">LinkedIn Data:</span> If you connect LinkedIn, we collect job application data from your account.
          </li>
          <li>
            <span className="font-semibold">Usage Data:</span> Analytics on how you use AI Job Hub, including device, browser, and feature usage.
          </li>
          <li>
            <span className="font-semibold">Cookies & Tracking:</span> We use cookies and similar technologies to enhance your experience and analyze usage.
          </li>
        </ul>
        <h2 className="mb-4 mt-8 text-2xl font-semibold text-primary">2. How We Use Your Information</h2>
        <ul className="list-disc space-y-3 pl-6 text-base leading-relaxed">
          <li>To provide, maintain, and improve the AI Job Hub platform and features.</li>
          <li>To sync, analyze, and display your job applications and related communications using AI.</li>
          <li>To personalize your experience and provide insights, analytics, and notifications.</li>
          <li>To communicate important updates, respond to support requests, and ensure account security.</li>
          <li>To comply with legal obligations and enforce our terms.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">3. Data Sharing & Disclosure</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>We do <b>not</b> sell your personal data to third parties.</li>
          <li>We may share data with trusted service providers (e.g., cloud hosting, analytics) who process it on our behalf, under strict confidentiality agreements.</li>
          <li>We may disclose information if required by law, regulation, or to protect the rights and safety of users or the public.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">4. Data Security</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Your data is stored securely using industry-standard encryption and access controls.</li>
          <li>OAuth tokens and sensitive credentials are encrypted and never shared with unauthorized parties.</li>
          <li>We regularly review our security practices to protect your information from unauthorized access, loss, or misuse.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">5. Cookies & Tracking Technologies</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>We use cookies to keep you logged in, remember preferences, and analyze site usage.</li>
          <li>You can control cookies through your browser settings, but disabling them may affect your experience.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">6. Your Rights & Choices</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>You can access, update, or delete your account and data at any time from your account settings.</li>
          <li>You can disconnect Gmail or LinkedIn integrations at any time.</li>
          <li>Contact us through our support channels for any privacy-related requests.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">7. International Users</h2>
        <p className="mb-4">If you access AI Job Hub from outside your country of residence, your data may be transferred to and processed in countries with different data protection laws. We take steps to ensure your data is protected wherever it is processed.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">8. Changes to This Policy</h2>
        <p className="mb-4">We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on our website and updating the effective date.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">9. Contact</h2>
        <p>If you have questions or concerns about this Privacy Policy or your data, please contact us through our support channels.</p>
      </section>
    </main>
  );
} 