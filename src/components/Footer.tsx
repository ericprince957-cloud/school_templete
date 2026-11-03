import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { schoolConfig } from '../config/schoolConfig';

export default function Footer() {
  return (
    <footer className="bg-[#0F2640] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#D4A843] rounded-full flex items-center justify-center">
                <span className="text-[#0F2640] font-bold text-lg">G</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">{schoolConfig.name}</h3>
                <p className="text-xs text-gray-400">{schoolConfig.motto}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Providing quality education and nurturing future leaders since 2005. 
              We are committed to academic excellence and character development.
            </p>
            <div className="flex gap-3">
              <a href={schoolConfig.social.facebook} className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4A843] transition-colors" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href={schoolConfig.social.instagram} className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4A843] transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href={schoolConfig.social.twitter} className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4A843] transition-colors" aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href={schoolConfig.social.youtube} className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4A843] transition-colors" aria-label="YouTube">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 text-[#D4A843]">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white text-sm transition-colors">Home</Link></li>
              <li><Link to="/admissions" className="text-gray-300 hover:text-white text-sm transition-colors">Admissions</Link></li>
              <li><Link to="/fees" className="text-gray-300 hover:text-white text-sm transition-colors">Fees & Payments</Link></li>
              <li><Link to="/academics" className="text-gray-300 hover:text-white text-sm transition-colors">Academics</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white text-sm transition-colors">Gallery & Events</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 text-[#D4A843]">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href={schoolConfig.contact.phoneLink} className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors">
                  <Phone size={16} className="text-[#D4A843] flex-shrink-0" />
                  {schoolConfig.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${schoolConfig.contact.email}`} className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors">
                  <Mail size={16} className="text-[#D4A843] flex-shrink-0" />
                  {schoolConfig.contact.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-gray-300 text-sm">
                  <MapPin size={16} className="text-[#D4A843] flex-shrink-0 mt-0.5" />
                  {schoolConfig.contact.address}
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 text-[#D4A843]">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-3">Get admission updates & event news delivered to your inbox.</p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#D4A843] min-h-[44px]"
              />
              <button
                type="submit"
                className="w-full bg-[#D4A843] hover:bg-[#B8922E] text-white px-4 py-2.5 rounded-md text-sm font-semibold transition-colors min-h-[44px]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {schoolConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
