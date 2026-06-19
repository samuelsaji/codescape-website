import { useState } from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Navbar Component
 * Primary site navigation with mobile hamburger menu.
 */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) => 
    `text-sm font-medium transition-colors ${isActive ? 'text-blue-500' : 'text-gray-700 hover:text-gray-900'}`;

  const mobileLinkClass = ({ isActive }) =>
    `block text-lg font-semibold transition-colors py-2 ${isActive ? 'text-blue-500' : 'text-gray-900'}`;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-20 py-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <img src="/logo.png" alt="Codescape Logo" className="h-8 w-auto object-contain" />
        </NavLink>

        {/* Center Nav Links - Desktop */}
        <ul className="hidden lg:flex items-center gap-6 list-none">
          <li>
            <NavLink to="/works" className={linkClass}>
              Our Work
            </NavLink>
          </li>
          <li>
            <NavLink to="/insights" className={linkClass}>
              Insights
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClass}>
              About us
            </NavLink>
          </li>
        </ul>

        {/* Right Side - Desktop */}
        <div className="hidden lg:flex items-center gap-5">
          <NavLink to="/careers" className={linkClass}>
            Careers
          </NavLink>
          <NavLink 
            to="/contact" 
            className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            Contact Us
          </NavLink>
        </div>

        {/* Hamburger Button - Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 pt-2 flex flex-col gap-1 border-t border-gray-100">
          <NavLink to="/works" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Our Work</NavLink>
          <NavLink to="/insights" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Insights</NavLink>
          <NavLink to="/about" className={mobileLinkClass} onClick={() => setIsOpen(false)}>About us</NavLink>
          <NavLink to="/careers" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Careers</NavLink>
          <NavLink 
            to="/contact"
            className="mt-3 px-5 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors text-center"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
