import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Branding Section */}
        <header className="space-y-4">
          <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium tracking-tight text-blue-600 uppercase bg-blue-100 rounded-full">
            AI Assistant Platform
          </div>
          <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">
            Seamless Business Automation
          </h1>
          <p className="text-xl text-slate-600 max-w-lg mx-auto leading-relaxed">
            Empowering businesses like <span className="font-semibold text-slate-800">Crazy Saloon</span> and <span className="font-semibold text-slate-800">Jadu Gym</span> with intelligent WhatsApp automation.
          </p>
        </header>

        {/* Action Section */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center py-8">
          <Link 
            href="/policy" 
            className="w-full sm:w-auto px-8 py-3 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl shadow-sm hover:bg-slate-50 transition-all active:scale-95"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/agreement" 
            className="w-full sm:w-auto px-8 py-3 bg-slate-900 text-white font-medium rounded-xl shadow-lg hover:bg-slate-800 transition-all active:scale-95"
          >
            User Agreement
          </Link>
        </div>

        {/* Footer info for Meta Verification */}
        <footer className="pt-12 border-t border-slate-200 text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} AI WhatsApp Bot. All rights reserved.</p>
          <p className="mt-2">Official Partner for WhatsApp Business API Solutions.</p>
        </footer>
      </div>
    </main>
  );
}