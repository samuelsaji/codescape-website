import React from 'react';

/**
 * Contact Page Component
 * "Clean Grid-Narrative" - Recreated based on professional reference cues.
 */
function Contact() {
  const contactTiles = [
    { label: "Phone", info: "+91 8921258262", href: "tel:+918921258262", icon: "phone", color: "bg-blue-100 text-blue-500" },
    { label: "Email", info: "contact@thecodescape.in", href: "mailto:contact@thecodescape.in", icon: "email", color: "bg-purple-100 text-purple-600" },
    { label: "LinkedIn", info: "@codescape", href: "https://linkedin.com/company/codescape", icon: "linkedin", color: "bg-sky-100 text-sky-700" },
    { label: "WhatsApp", info: "+91 8921258262", href: "https://wa.me/918921258262", icon: "whatsapp", color: "bg-emerald-100 text-emerald-600" },
    { label: "Location", info: "Muvattupuzha, Kerala", href: "#", icon: "location", color: "bg-rose-100 text-rose-500" },
    { label: "Instagram", info: "@thecodescape", href: "https://instagram.com/thecodescape", icon: "instagram", color: "bg-fuchsia-100 text-fuchsia-600" }
  ];

  return (
    <div className="relative min-h-screen bg-[#f8fafc] overflow-hidden">

      {/* Background Decorative SVGs (Subtle Ribbons) */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="absolute top-0 right-0 w-[800px] h-[800px] text-blue-100" viewBox="0 0 800 800" fill="currentColor">
          <path d="M800 0C800 441.828 441.828 800 0 800L800 800L800 0Z" opacity="0.1" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-[600px] h-[600px] text-gray-200" viewBox="0 0 600 600" fill="currentColor">
          <path d="M0 600C0 268.629 268.629 0 600 0L0 0L0 600Z" opacity="0.1" />
        </svg>
      </div>

      <main className="relative z-10 pt-32 lg:pt-48 pb-24 px-8 lg:px-24">
        <div className="max-w-7xl mx-auto">

          {/* Professional Hero Section */}
          <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <h1 className="text-6xl md:text-7xl font-semibold text-blue-500 tracking-tight leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
              Ready to start your next digital journey? Reach out to us through any of the channels below or fill out the form.
            </p>
          </div>

          {/* Merged Split Section: Details + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch mb-32 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-500">
            <div className="space-y-8">
              <h3 className="text-3xl font-semibold text-gray-900 tracking-tight mb-8">Reach out directly.</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactTiles.map((tile, i) => (
                  <a
                    key={i}
                    href={tile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white border border-gray-100 rounded-[30px] p-8 flex flex-col items-start hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500"
                  >
                    <div className={`w-12 h-12 rounded-full ${tile.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500`}>
                      {tile.icon === 'phone' && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                      {tile.icon === 'email' && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                      {tile.icon === 'linkedin' && <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>}
                      {tile.icon === 'whatsapp' && <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.174l.33.196c1.547.917 3.325 1.403 5.143 1.405 5.544 0 10.054-4.51 10.058-10.057.002-2.692-1.047-5.224-2.953-7.127-1.906-1.904-4.438-2.953-7.128-2.954-5.548 0-10.058 4.51-10.06 10.058-.001 1.83.479 3.619 1.391 5.187l.215.366-1.122 4.096 4.134-1.084zm11.091-6.735c-.328-.164-1.942-.958-2.242-1.069-.301-.11-.519-.164-.738.164s-.847 1.069-1.039 1.288c-.192.219-.383.246-.71.083s-1.383-.51-2.635-1.627c-.974-.869-1.631-1.942-1.822-2.269-.192-.328-.021-.505.142-.668.147-.147.328-.383.492-.574s.219-.328.328-.547c.11-.219.055-.41-.027-.574s-.738-1.776-1.011-2.433c-.266-.641-.539-.553-.738-.563-.191-.01-.41-.01-.628-.01s-.574.083-.875.41c-.301.328-1.148 1.12-1.148 2.733s1.175 3.17 1.339 3.389c.164.219 2.313 3.532 5.602 4.954.782.339 1.39.541 1.866.692.786.25 1.503.214 2.069.13.632-.093 1.942-.794 2.215-1.558.274-.764.274-1.42.191-1.558-.082-.137-.301-.219-.628-.383z" /></svg>}
                      {tile.icon === 'location' && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                      {tile.icon === 'instagram' && <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>}
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

            <div className="bg-white rounded-[60px] p-12 lg:p-20 shadow-sm border border-gray-100">
              <h3 className="text-4xl font-semibold text-gray-900 tracking-tight mb-4">Start a project.</h3>
              <p className="text-xl text-gray-400 font-medium mb-12">Submit the form and we'll be in touch.</p>

              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="group relative">
                  <input type="text" className="w-full bg-transparent border-b border-gray-100 py-4 outline-none focus:border-blue-500 transition-all text-xl font-medium placeholder:text-gray-200" placeholder="Full Name" />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-focus-within:w-full transition-all duration-500" />
                </div>
                <div className="group relative">
                  <input type="email" className="w-full bg-transparent border-b border-gray-100 py-4 outline-none focus:border-blue-500 transition-all text-xl font-medium placeholder:text-gray-200" placeholder="Email Address" />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-focus-within:w-full transition-all duration-500" />
                </div>
                <div className="group relative">
                  <textarea rows="3" className="w-full bg-transparent border-b border-gray-100 py-4 outline-none focus:border-blue-500 transition-all text-xl font-medium placeholder:text-gray-200 resize-none" placeholder="Your inquiry..."></textarea>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-focus-within:w-full transition-all duration-500" />
                </div>
                <button className="w-full py-7 bg-gray-900 text-white rounded-full font-bold hover:bg-blue-600 transition-all shadow-xl active:scale-95 text-xl flex items-center justify-center gap-4 group">
                  Send Message
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </form>
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
