import { useState } from 'react';
import { Menu, X, Crown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '//' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Tools', path: '/tools' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    // 🔧 Reduced height from h-20 → h-16, smaller shadow
    <nav className="bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 border-b border-cyan-500/20 h-16 sm:h-18 flex items-center backdrop-blur-lg sticky top-0 z-50 shadow-md shadow-cyan-500/10">
      {/* 🔧 Reduced inner padding */}
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-6 w-full">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="relative">
              {/* 🔧 Slightly reduced logo box size */}
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-md">
                <Crown size={22} className="text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white"></div>
            </div>

            <Link
              to="//"
              className="text-2xl sm:text-3xl font-black bg-gradient-to-br from-white via-cyan-100 to-emerald-200 bg-clip-text text-transparent tracking-tight"
            >
              Kishor
            </Link>
          </div>

          {/* Desktop Navigation */}
          {/* 🔧 Reduced padding and spacing */}
          <div className="hidden md:flex items-center space-x-1 px-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-5 py-2 rounded-xl transition-all duration-300 font-semibold text-base sm:text-lg ${
                  location.pathname === item.path
                    ? 'text-cyan-300 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 shadow-md'
                    : 'text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/10'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gradient-to-r from-cyan-500 to-emerald-600 text-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl md:hidden">
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 font-semibold text-lg ${
                  location.pathname === item.path
                    ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-cyan-300 border border-cyan-500/30 shadow-md'
                    : 'text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/10'
                }`}
              >
                {location.pathname === item.path && (
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"></div>
                )}
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
