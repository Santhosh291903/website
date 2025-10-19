import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Tools', path: '/tools' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    // <nav className="bg-gradient-to-br from-purple-900 via-gray-900 to-purple-900 border-b border-purple-500/20 h-16 flex items-center backdrop-blur-sm">
       <nav className="bg-gradient-to-br from-purple-900 via-gray-900 to-purple-900 border-b border-purple-500/20 h-16 flex items-center backdrop-blur-sm">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Kishor Santhosh
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? 'text-purple-400 font-semibold'
                    : 'text-gray-300 hover:text-purple-400'
                } transition-colors duration-200 font-medium text-lg`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-purple-400 p-2 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gradient-to-br from-purple-900 via-gray-900 to-purple-900 border-b border-purple-500/20 backdrop-blur-sm md:hidden">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`${
                  location.pathname === item.path
                    ? 'bg-purple-500/20 text-purple-400 font-semibold'
                    : 'text-gray-300 hover:bg-purple-500/20 hover:text-purple-400'
                } block px-4 py-3 rounded-lg transition-all duration-200 font-medium text-lg`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}