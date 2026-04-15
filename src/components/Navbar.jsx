import { NavLink } from 'react-router-dom';

/**
 * Navbar Component
 * Provides navigation links and brand logo.
 */
function Navbar() {
  const linkClass = ({ isActive }) => 
    `text-sm font-medium transition-colors ${isActive ? 'text-blue-500' : 'text-gray-700 hover:text-gray-900'}`;

  return (
    <nav className="flex items-center justify-between px-20 py-4 bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Logo */}
      <NavLink to="/" className="flex items-center">
        <img src="/logo.png" alt="Codescape Logo" className="h-8 w-auto object-contain" />
      </NavLink>

      {/* Center Nav Links */}
      <ul className="flex items-center gap-6 list-none">
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
          <NavLink to="/careers" className={linkClass}>
            Careers
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={linkClass}>
            About us
          </NavLink>
        </li>
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-5">
        <NavLink 
          to="/contact" 
          className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
