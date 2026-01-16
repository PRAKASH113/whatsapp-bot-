import Link from 'next/link';

export default function PrivacyPolicy() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric'
  });

  return (
    <main className="min-h-screen bg-white text-slate-800 p-8 md:p-24 font-sans">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-slate-500 mb-8">Last Updated: {lastUpdated}</p>

        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">1. Introduction</h2>
            <p className="leading-relaxed">
              Welcome to **AI Whatsapp Bot**. We respect your privacy and are committed to protecting your personal data. This policy explains how we handle information when you interact with our automated WhatsApp assistants for businesses like Crazy Saloon and Jadu Gym.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">2. Data We Collect</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Messages:</strong> We collect the text of your inquiries to provide automated responses via AI.</li>
              <li><strong>Metadata:</strong> WhatsApp phone numbers and timestamps required to route messages correctly.</li>
              <li><strong>Business Context:</strong> Information specifically related to the business you are messaging (e.g., booking requests).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">3. How We Use Your Data</h2>
            <p className="leading-relaxed">
              Your data is used solely to:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Generate accurate AI responses using our Knowledge Base.</li>
              <li>Improve the quality of our automated services.</li>
              <li>Facilitate communication between you and the respective business.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">4. Data Sharing & AI Processing</h2>
            <p className="leading-relaxed">
              We use third-party AI processors (such as Botpress and Large Language Models) to analyze your queries. We do not sell your personal information to third parties. Data is processed in real-time and stored according to our security protocols to ensure multi-tenant isolation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">5. Your Rights</h2>
            <p className="leading-relaxed">
              You have the right to request a copy of the data we hold about you or ask for its deletion at any time by contacting the business administrator or our support team.
            </p>
          </div>

          <footer className="pt-12 border-t border-slate-100 mt-12">
            <p className="text-sm text-slate-500 italic">
              Note: This policy is designed to comply with Meta&apos;s developer requirements for WhatsApp Business API applications.
            </p>
          </footer>
        </section>
      </div>
    </main>
  );
}