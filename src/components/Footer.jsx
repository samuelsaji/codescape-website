import { NavLink } from 'react-router-dom';

/**
 * Footer Component
 * Shared footer with brand positioning, social links, internal navigation,
 * resource placeholders, service placeholders, and legal links.
 */
function Footer() {
  return (
    <footer className="pt-16 md:pt-24 pb-12 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-6 md:px-24">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-20 mb-12 md:mb-20 items-start">
        {/* Brand Column */}
        <div className="flex flex-col gap-8">
          <img src="/logo.png" alt="Codescape Logo" className="h-8 w-auto self-start" />
          <p className="text-gray-400 font-medium leading-relaxed max-w-[280px]">
            Where Creativity Meets Technology
          </p>
          <div className="flex gap-3">
            <a href="https://linkedin.com/company/codescape" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg flex items-center justify-center hover:scale-110 transition-all">
              <svg className="w-9 h-9" viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#0A66C2"/><path d="M8.5 10.5v5M8.5 8v.01M11.5 15.5v-3a2 2 0 014 0v3M11.5 10.5v5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
            </a>
            <a href="https://instagram.com/thecodescape" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg flex items-center justify-center hover:scale-110 transition-all">
              <svg className="w-9 h-9" viewBox="0 0 24 24"><defs><linearGradient id="ig-footer" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse"><stop stopColor="#FFC107"/><stop offset="0.5" stopColor="#F44336"/><stop offset="1" stopColor="#9C27B0"/></linearGradient></defs><rect width="24" height="24" rx="5" fill="url(#ig-footer)"/><rect x="6" y="6" width="12" height="12" rx="3.5" stroke="#fff" strokeWidth="1.5" fill="none"/><circle cx="12" cy="12" r="2.8" stroke="#fff" strokeWidth="1.5" fill="none"/><circle cx="16" cy="8" r="1" fill="#fff"/></svg>
            </a>
            <a href="https://wa.me/918921258262" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg flex items-center justify-center hover:scale-110 transition-all">
              <svg className="w-9 h-9" viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#25D366"/><path d="M12 4a8 8 0 00-6.9 12.05L4 20l4.05-1.07A8 8 0 1012 4zm0 14.5a6.5 6.5 0 01-3.32-.91l-.23-.14-2.42.64.65-2.38-.15-.24A6.5 6.5 0 1112 18.5z" fill="#fff"/><path d="M15.1 13.62c-.17-.08-1-.5-1.16-.55s-.27-.08-.38.08-.44.55-.54.67-.2.13-.37.04a4.7 4.7 0 01-1.39-.86 5.2 5.2 0 01-.96-1.2c-.1-.17 0-.27.08-.35s.17-.2.26-.3a1.13 1.13 0 00.17-.29.32.32 0 000-.3c-.04-.09-.38-.92-.52-1.26s-.28-.28-.38-.29h-.33a.63.63 0 00-.46.22 1.94 1.94 0 00-.6 1.44 3.36 3.36 0 00.7 1.79 7.7 7.7 0 002.95 2.6c.41.18.73.28.98.36.41.13.79.11 1.08.07.33-.05 1-.41 1.15-.81s.14-.74.1-.81-.16-.12-.33-.21z" fill="#fff"/></svg>
            </a>
          </div>
        </div>

        {/* Company Column */}
        <div>
          <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-10">Company</h4>
          <ul className="flex flex-col gap-5">
            {[
              { label: "Case studies", to: "/works" },
              { label: "About us", to: "/about" },
              { label: "Blog", to: "/insights" },
              { label: "Help center", to: "/contact" }
            ].map(link => (
              <li key={link.label}>
                <NavLink to={link.to} className="text-gray-900 font-bold text-sm tracking-tight hover:text-gray-500 transition-colors">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div>
          <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-10">Services</h4>
          <ul className="flex flex-col gap-5">
            {["App Development", "Web Design", "QA Testing", "Cloud Infrastructure"].map(link => (
              <li key={link}><a href="#" className="text-gray-900 font-bold text-sm tracking-tight hover:text-gray-500 transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Opportunities Column */}
        <div>
          <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-10">Opportunities</h4>
          <ul className="flex flex-col gap-5">
            <li>
              <NavLink to="/careers" className="text-gray-900 font-bold text-sm tracking-tight hover:text-gray-500 transition-colors">
                Careers
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Video Column — fills the previously blank 5th slot */}
        <div className="col-span-2 md:col-span-1 flex items-center justify-center">
          <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden bg-gray-100">
            <video
              src="/footer/fo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-300 text-[11px] font-bold">© 2026 CODESCAPE. All rights reserved.</p>
        <div className="flex gap-10">
          <NavLink to="#" className="text-gray-300 text-[11px] font-bold hover:text-gray-500 transition-colors">Privacy Policy</NavLink>
          <NavLink to="/terms" className="text-gray-300 text-[11px] font-bold hover:text-gray-500 transition-colors">Terms of Service</NavLink>
          <NavLink to="#" className="text-gray-300 text-[11px] font-bold hover:text-gray-500 transition-colors">Cookie Settings</NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
