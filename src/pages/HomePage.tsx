import { Link } from 'react-router-dom';
import { GraduationCap, Shield, Building, Award, Calendar, Clock, Phone, ChevronRight, Star, Quote } from 'lucide-react';
import { schoolConfig } from '../config/schoolConfig';

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap size={32} />,
  Shield: <Shield size={32} />,
  Building: <Building size={32} />,
  Award: <Award size={32} />,
};

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B3A5C] via-[#0F2640] to-[#1B3A5C] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#D4A843] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4A843] rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Star size={16} className="text-[#D4A843]" />
              <span className="text-sm">Admissions Open for 2025/2026 Session</span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Nurturing Future Leaders at{' '}
              <span className="text-[#D4A843]">{schoolConfig.name}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              Where academic excellence meets character development. We provide a world-class education 
              that prepares your child for a bright future in a secure, nurturing environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/admissions"
                className="bg-[#D4A843] hover:bg-[#B8922E] text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors min-h-[44px] flex items-center justify-center gap-2"
              >
                Apply for Admission
                <ChevronRight size={20} />
              </Link>
              <Link
                to="/fees"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors min-h-[44px] flex items-center justify-center"
              >
                View Fees
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 30C1440 30 1200 0 720 0C240 0 0 30 0 30L0 60Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm">
            <div className="flex items-center gap-2 text-gray-700">
              <Calendar size={18} className="text-[#D4A843]" />
              <span><strong>Resumption:</strong> {schoolConfig.dates.resumptionDate}</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2 text-gray-700">
              <Clock size={18} className="text-[#D4A843]" />
              <span><strong>Next Event:</strong> {schoolConfig.dates.nextEvent}</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-300"></div>
            <a href={schoolConfig.contact.phoneLink} className="flex items-center gap-2 text-[#1B3A5C] font-semibold hover:text-[#D4A843] transition-colors">
              <Phone size={18} />
              <span>{schoolConfig.contact.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#1B3A5C] mb-4">Why Choose {schoolConfig.name}?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We provide a complete educational experience that goes beyond academics to develop well-rounded individuals.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {schoolConfig.pillars.map((pillar, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group">
                <div className="w-14 h-14 bg-[#1B3A5C]/10 rounded-lg flex items-center justify-center text-[#1B3A5C] mb-4 group-hover:bg-[#D4A843] group-hover:text-white transition-colors">
                  {iconMap[pillar.icon]}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1B3A5C] mb-2">{pillar.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Welcome */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-[#F8F9FA] rounded-xl p-8 relative">
                <Quote size={48} className="text-[#D4A843]/20 absolute top-4 left-4" />
                <p className="text-gray-700 leading-relaxed text-base md:text-lg relative z-10 pt-8">
                  "{schoolConfig.principal.message}"
                </p>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="font-serif font-bold text-[#1B3A5C] text-lg">{schoolConfig.principal.name}</p>
                  <p className="text-[#D4A843] font-medium text-sm">{schoolConfig.principal.title}</p>
                  <p className="text-gray-500 text-xs mt-1">{schoolConfig.principal.qualifications}</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#1B3A5C] to-[#0F2640] rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="text-center text-white p-8">
                    <div className="w-24 h-24 bg-[#D4A843]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap size={48} className="text-[#D4A843]" />
                    </div>
                    <p className="font-serif text-xl font-bold">{schoolConfig.principal.name}</p>
                    <p className="text-gray-300 text-sm mt-1">{schoolConfig.principal.title}</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#D4A843] rounded-xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#1B3A5C] mb-4">What Parents Say</h2>
            <p className="text-gray-600">Hear from parents who trust us with their children's education</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {schoolConfig.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#D4A843] text-[#D4A843]" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{testimonial.quote}"</p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-semibold text-[#1B3A5C] text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.childClass}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#1B3A5C] to-[#0F2640] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-4xl font-bold mb-4">Ready to Give Your Child the Best Start?</h2>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
            Join the {schoolConfig.name} family today. Limited spaces available for the upcoming session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="bg-[#D4A843] hover:bg-[#B8922E] text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors min-h-[44px] flex items-center justify-center gap-2"
            >
              Start Application
              <ChevronRight size={20} />
            </Link>
            <a
              href={schoolConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors min-h-[44px] flex items-center justify-center"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-2">Find Us</h2>
            <p className="text-gray-600">{schoolConfig.contact.address}</p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
            <iframe
              src={schoolConfig.contact.googleMapsEmbed}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
