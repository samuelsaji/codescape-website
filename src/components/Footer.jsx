import { NavLink } from 'react-router-dom';

/**
 * Footer Component
 * Comprehensive footer with brand, links, and legal info.
 */
function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-white border-t border-gray-100 px-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
        {/* Brand Column */}
        <div className="flex flex-col gap-8">
          <img src="/logo.png" alt="Codescape Logo" className="h-8 w-auto self-start" />
          <p className="text-gray-400 font-medium leading-relaxed max-w-[280px]">
            Where Creativity Meets Technology
          </p>
          <div className="flex gap-4">
            {[
              { label: "Li", href: "https://linkedin.com/company/codescape", color: "hover:bg-blue-600 hover:text-white" },
              { label: "In", href: "https://instagram.com/thecodescape", color: "hover:bg-pink-600 hover:text-white" },
              { label: "Wa", href: "https://wa.me/918921258262", color: "hover:bg-green-600 hover:text-white" }
            ].map(social => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-xs ${social.color} transition-all`}>
                {social.label}
              </a>
            ))}
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

        {/* Resources Column */}
        <div>
          <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-10">Resources</h4>
          <ul className="flex flex-col gap-5">
            {["Free templates", "Project management", "Hire Frontend", "Hire Backend"].map(link => (
              <li key={link}><a href="#" className="text-gray-900 font-bold text-sm tracking-tight hover:text-gray-500 transition-colors">{link}</a></li>
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
