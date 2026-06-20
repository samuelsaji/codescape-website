import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Contact Page Component
 * Contact page with direct contact tiles, a front-end-only inquiry form, and a
 * visual location section. Submissions are sent to a Google Form and rate-limited
 * to 5 per 42 hours using localStorage.
 */

// ─── Google Form Configuration ───
// Replace these with your actual Google Form values:
// 1. Create a Google Form with fields: Name, Email, Message
// 2. Get the form action URL (from the form's HTML source)
// 3. Get each field's entry ID (e.g., entry.123456789)
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd2Clyxgt2AYwSVTM9RoDDGrF9V5ZZqFpQ0_IASTveBHejd7Q/formResponse';
const FIELD_NAME = 'entry.479296917';
const FIELD_EMAIL = 'entry.1381270233';
const FIELD_MESSAGE = 'entry.525302843';

// ─── Rate Limiting ───
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 42 * 60 * 60 * 1000; // 42 hours in ms
const STORAGE_KEY = 'codescape_contact_submissions';

function getSubmissionTimestamps() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    const now = Date.now();
    return data.filter((ts) => now - ts < RATE_WINDOW_MS);
  } catch {
    return [];
  }
}

function canSubmit() {
  return getSubmissionTimestamps().length < RATE_LIMIT;
}

function recordSubmission() {
  const timestamps = getSubmissionTimestamps();
  timestamps.push(Date.now());
  localStorage.setItem(STORAGE_KEY, JSON.stringify(timestamps));
}

function getRemainingSubmissions() {
  return RATE_LIMIT - getSubmissionTimestamps().length;
}

function Contact() {
  const location = useLocation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState(location.state?.email || '');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'rate_limited'



  const contactTiles = [
    { label: "Phone", info: "+91 8921258262", href: "tel:+918921258262", icon: "phone", color: "bg-blue-100 text-blue-500" },
    { label: "Email", info: "contact@thecodescape.in", href: "mailto:contact@thecodescape.in", icon: "email", color: "bg-purple-100 text-purple-600" },
    { label: "LinkedIn", info: "@codescape", href: "https://linkedin.com/company/codescape", icon: "linkedin", color: "bg-sky-100 text-sky-700" },
    { label: "WhatsApp", info: "+91 8921258262", href: "https://wa.me/918921258262", icon: "whatsapp", color: "bg-emerald-100 text-emerald-600" },
    { label: "Location", info: "Muvattupuzha, Kerala", href: "#", icon: "location", color: "bg-rose-100 text-rose-500" },
    { label: "Instagram", info: "@thecodescape", href: "https://instagram.com/thecodescape", icon: "instagram", color: "bg-fuchsia-100 text-fuchsia-600" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    if (!canSubmit()) {
      setStatus('rate_limited');
      return;
    }

    setStatus('submitting');

    try {
      const formData = new URLSearchParams();
      formData.append(FIELD_NAME, name);
      formData.append(FIELD_EMAIL, email);
      formData.append(FIELD_MESSAGE, message);

      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });

      recordSubmission();
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      recordSubmission();
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="relative min-h-screen bg-[#f8fafc] overflow-hidden">

      {/* Background Decorative SVGs */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="absolute top-0 right-0 w-[800px] h-[800px] text-blue-100" viewBox="0 0 800 800" fill="currentColor">
          <path d="M800 0C800 441.828 441.828 800 0 800L800 800L800 0Z" opacity="0.1" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-[600px] h-[600px] text-gray-200" viewBox="0 0 600 600" fill="currentColor">
          <path d="M0 600C0 268.629 268.629 0 600 0L0 0L0 600Z" opacity="0.1" />
        </svg>
      </div>

      <main className="relative z-10 pt-8 lg:pt-12 pb-12 px-8 lg:px-24">
        <div className="max-w-7xl mx-auto">

          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-semibold text-blue-500 tracking-tight leading-tight mb-3">
              Contact Us
            </h1>
            <p className="text-lg text-gray-400 font-medium max-w-2xl mx-auto">
              Ready to start your next digital journey? Reach out to us through any of the channels below or fill out the form.
            </p>
          </div>

          {/* Split Section: Details + Form */}
          <div id="contact-section" className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 tracking-tight mb-4">Reach out directly.</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactTiles.map((tile, i) => (
                  <a
                    key={i}
                    href={tile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white border border-gray-100 rounded-[20px] p-5 flex flex-col items-start hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-500">
                      {{
                        phone: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#3B82F6"/><path d="M16.5 14.35l-2.15-.95a1 1 0 00-1.05.15l-.95.8a8.5 8.5 0 01-3.7-3.7l.8-.95a1 1 0 00.15-1.05L8.65 6.5A1 1 0 007.7 6H6a1 1 0 00-1 1.1A12 12 0 0016.9 18a1 1 0 001.1-1v-1.7a1 1 0 00-.5-.95z" fill="#fff"/></svg>,
                        email: <svg className="w-8 h-8" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#EA4335"/><path d="M5 8l7 5 7-5" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/><rect x="4" y="7" width="16" height="11" rx="2" stroke="#fff" strokeWidth="1.5" fill="none"/></svg>,
                        linkedin: <svg className="w-8 h-8" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#0A66C2"/><path d="M8.5 10.5v5M8.5 8v.01M11.5 15.5v-3a2 2 0 014 0v3M11.5 10.5v5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>,
                        whatsapp: <svg className="w-8 h-8" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#25D366"/><path d="M12 4a8 8 0 00-6.9 12.05L4 20l4.05-1.07A8 8 0 1012 4zm0 14.5a6.5 6.5 0 01-3.32-.91l-.23-.14-2.42.64.65-2.38-.15-.24A6.5 6.5 0 1112 18.5z" fill="#fff"/><path d="M15.1 13.62c-.17-.08-1-.5-1.16-.55s-.27-.08-.38.08-.44.55-.54.67-.2.13-.37.04a4.7 4.7 0 01-1.39-.86 5.2 5.2 0 01-.96-1.2c-.1-.17 0-.27.08-.35s.17-.2.26-.3a1.13 1.13 0 00.17-.29.32.32 0 000-.3c-.04-.09-.38-.92-.52-1.26s-.28-.28-.38-.29h-.33a.63.63 0 00-.46.22 1.94 1.94 0 00-.6 1.44 3.36 3.36 0 00.7 1.79 7.7 7.7 0 002.95 2.6c.41.18.73.28.98.36.41.13.79.11 1.08.07.33-.05 1-.41 1.15-.81s.14-.74.1-.81-.16-.12-.33-.21z" fill="#fff"/></svg>,
                        location: <svg className="w-8 h-8" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#EF4444"/><path d="M12 6a4 4 0 00-4 4c0 3 4 7 4 7s4-4 4-7a4 4 0 00-4-4zm0 5.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="#fff"/></svg>,
                        instagram: <svg className="w-8 h-8" viewBox="0 0 24 24"><defs><linearGradient id="ig" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse"><stop stopColor="#FFC107"/><stop offset="0.5" stopColor="#F44336"/><stop offset="1" stopColor="#9C27B0"/></linearGradient></defs><rect width="24" height="24" rx="6" fill="url(#ig)"/><rect x="6" y="6" width="12" height="12" rx="3.5" stroke="#fff" strokeWidth="1.5" fill="none"/><circle cx="12" cy="12" r="2.8" stroke="#fff" strokeWidth="1.5" fill="none"/><circle cx="16" cy="8" r="1" fill="#fff"/></svg>
                      }[tile.icon]}
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 group-hover:text-blue-500 transition-colors">
                      {tile.label}
                    </span>
                    <span className="text-sm lg:text-base font-semibold text-gray-900 tracking-tight break-all">
                      {tile.info}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[40px] p-8 lg:p-12 shadow-sm border border-gray-100">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-8">
                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 tracking-tight mb-4">Thank you!</h3>
                  <p className="text-lg text-gray-500 font-medium mb-8">We will contact you soon.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-8 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-black transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : status === 'rate_limited' ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-amber-50 flex items-center justify-center mb-8">
                    <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 tracking-tight mb-4">Limit reached</h3>
                  <p className="text-lg text-gray-500 font-medium">You've reached the maximum of {RATE_LIMIT} submissions. Please try again later.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-3xl font-semibold text-gray-900 tracking-tight mb-2">Start a project.</h3>
                  <p className="text-lg text-gray-400 font-medium mb-6">Submit the form and we'll be in touch.</p>

                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="group relative">
                      <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-transparent border-b border-gray-100 py-3 outline-none focus:border-blue-500 transition-all text-base font-medium placeholder:text-gray-200" placeholder="Full Name" required />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-focus-within:w-full transition-all duration-500" />
                    </div>
                    <div className="group relative">
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-transparent border-b border-gray-100 py-3 outline-none focus:border-blue-500 transition-all text-base font-medium placeholder:text-gray-200" placeholder="Email Address" required />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-focus-within:w-full transition-all duration-500" />
                    </div>
                    <div className="group relative">
                      <textarea rows="2" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-transparent border-b border-gray-100 py-3 outline-none focus:border-blue-500 transition-all text-base font-medium placeholder:text-gray-200 resize-none" placeholder="Your inquiry..." required></textarea>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-focus-within:w-full transition-all duration-500" />
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-5 bg-gray-900 text-white rounded-full font-bold hover:bg-blue-600 transition-all shadow-xl active:scale-95 text-lg flex items-center justify-center gap-4 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </>
                      )}
                    </button>
                    {getRemainingSubmissions() <= 2 && getRemainingSubmissions() > 0 && (
                      <p className="text-center text-sm text-amber-500 font-medium">{getRemainingSubmissions()} submission{getRemainingSubmissions() === 1 ? '' : 's'} remaining</p>
                    )}
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Full-Width Cinematic World Map */}
          <div className="animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-700">
            <h4 className="text-center text-sm font-bold text-gray-300 tracking-[0.4em] uppercase mb-12 italic">Engineering Global Impact</h4>
            <div className="h-[600px] w-full bg-white rounded-[80px] overflow-hidden relative shadow-2xl border border-gray-50">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000"
                alt="World Map"
                className="w-full h-full object-cover opacity-60 grayscale"
              />
              <div className="absolute inset-0">
                <div className="absolute top-[62%] left-[70%] px-5 py-2.5 bg-white rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.1)] flex items-center gap-2 animate-bounce border border-gray-100 whitespace-nowrap">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                  <span className="font-bold text-gray-900 tracking-tighter text-xs italic">Our Kochi Hub</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default Contact;
