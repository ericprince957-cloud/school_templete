import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { schoolConfig } from '../config/schoolConfig';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/admissions', label: 'Admissions' },
    { path: '/fees', label: 'Fees & Payments' },
    { path: '/academics', label: 'Academics' },
    { path: '/gallery', label: 'Gallery & Events' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-[#0F2640] text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href={schoolConfig.contact.phoneLink} className="flex items-center gap-1 hover:text-[#D4A843] transition-colors">
              <Phone size={14} />
              <span>{schoolConfig.contact.phone}</span>
            </a>
            <a href={`mailto:${schoolConfig.contact.email}`} className="flex items-center gap-1 hover:text-[#D4A843] transition-colors">
              <Mail size={14} />
              <span>{schoolConfig.contact.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#D4A843]">Resumption: {schoolConfig.dates.resumptionDate}</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1B3A5C] rounded-full flex items-center justify-center">
                <span className="text-[#D4A843] font-bold text-lg md:text-xl">S</span>
              </div>
              <div>
                <h1 className="text-[#1B3A5C] font-serif font-bold text-base md:text-lg leading-tight">{schoolConfig.name}</h1>
                <p className="text-xs text-gray-500 hidden sm:block">{schoolConfig.motto}</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-[#1B3A5C] text-white'
                      : 'text-gray-700 hover:bg-[#1B3A5C]/10 hover:text-[#1B3A5C]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/admissions"
                className="ml-3 bg-[#D4A843] hover:bg-[#B8922E] text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors min-h-[44px] flex items-center"
              >
                Apply Now
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-md text-base font-medium min-h-[44px] flex items-center ${
                    isActive(link.path)
                      ? 'bg-[#1B3A5C] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/admissions"
                onClick={() => setIsOpen(false)}
                className="block bg-[#D4A843] hover:bg-[#B8922E] text-white px-4 py-3 rounded-md text-base font-semibold text-center mt-4 min-h-[44px] flex items-center justify-center"
              >
                Apply Now
              </Link>
              <div className="pt-4 border-t mt-4 space-y-2">
                <a href={schoolConfig.contact.phoneLink} className="flex items-center gap-2 text-sm text-gray-600 py-2">
                  <Phone size={16} /> {schoolConfig.contact.phone}
                </a>
                <a href={`mailto:${schoolConfig.contact.email}`} className="flex items-center gap-2 text-sm text-gray-600 py-2">
                  <Mail size={16} /> {schoolConfig.contact.email}
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
