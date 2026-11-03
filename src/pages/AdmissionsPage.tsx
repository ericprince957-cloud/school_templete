import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Download, ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';
import { schoolConfig } from '../config/schoolConfig';

export default function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0F2640] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Join our community of learners. We welcome applications from families who share our commitment to excellence.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={schoolConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4A843] hover:bg-[#B8922E] text-white px-8 py-3.5 rounded-md font-semibold transition-colors min-h-[44px] flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Start Application via WhatsApp
            </a>
            <a
              href="#"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-3.5 rounded-md font-semibold transition-colors min-h-[44px] flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download Forms
            </a>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#1B3A5C] mb-4">Admission Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Follow these simple steps to enroll your child at {schoolConfig.name}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {schoolConfig.admissionSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-[#F8F9FA] rounded-xl p-6 h-full border border-gray-100 hover:border-[#D4A843] transition-colors">
                  <div className="w-12 h-12 bg-[#1B3A5C] text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1B3A5C] mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-[#D4A843]">
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 md:py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-6">Required Documents</h2>
              <ul className="space-y-3">
                {[
                  "Completed application form",
                  "Birth certificate or age declaration",
                  "Previous school report (if applicable)",
                  "4 passport photographs",
                  "Medical/immunization report",
                  "Parent/Guardian ID (NIN, Driver's License, or International Passport)",
                  "Transfer certificate (for students from other schools)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#2D7A3A] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-6">Downloadable Forms</h2>
              <div className="space-y-3">
                {[
                  { name: "Application Form", desc: "Main admission application" },
                  { name: "Medical Information Form", desc: "Health records & allergies" },
                  { name: "Bus Service Form", desc: "Transportation request" },
                  { name: "After-School Care Form", desc: "Extended hours enrollment" },
                ].map((form, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center gap-4 bg-white rounded-lg p-4 border border-gray-200 hover:border-[#D4A843] hover:shadow-sm transition-all group"
                  >
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-500 flex-shrink-0">
                      <Download size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-[#1B3A5C] text-sm">{form.name}</p>
                      <p className="text-gray-500 text-xs">{form.desc}</p>
                    </div>
                    <span className="text-xs text-gray-400">PDF</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Requirements */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-8 text-center">Age Requirements by Class</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1B3A5C] text-white">
                  <th className="px-6 py-4 text-left font-serif font-bold">Class Level</th>
                  <th className="px-6 py-4 text-left font-serif font-bold">Age Range</th>
                  <th className="px-6 py-4 text-left font-serif font-bold">Session</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { level: "Nursery 1", age: "2 - 3 years", session: "2025/2026" },
                  { level: "Nursery 2", age: "3 - 4 years", session: "2025/2026" },
                  { level: "Reception", age: "4 - 5 years", session: "2025/2026" },
                  { level: "Primary 1", age: "5 - 6 years", session: "2025/2026" },
                  { level: "Primary 2-6", age: "6 - 11 years", session: "2025/2026" },
                  { level: "JSS 1-3", age: "11 - 14 years", session: "2025/2026" },
                  { level: "SS 1-3", age: "14 - 17 years", session: "2025/2026" },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-[#F8F9FA]' : 'bg-white'}>
                    <td className="px-6 py-3 text-sm font-medium text-[#1B3A5C]">{row.level}</td>
                    <td className="px-6 py-3 text-sm text-gray-600">{row.age}</td>
                    <td className="px-6 py-3 text-sm text-gray-600">{row.session}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#1B3A5C] mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find answers to common questions about admission</p>
          </div>
          <div className="space-y-3">
            {schoolConfig.faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left min-h-[44px]"
                >
                  <span className="font-medium text-[#1B3A5C] text-sm md:text-base pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp size={20} className="text-[#D4A843] flex-shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#1B3A5C] to-[#0F2640] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Ready to Begin?</h2>
          <p className="text-gray-200 mb-8">Contact us today or visit the school to pick up an application form.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={schoolConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4A843] hover:bg-[#B8922E] text-white px-8 py-3.5 rounded-md font-semibold transition-colors min-h-[44px] flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
            <a
              href={schoolConfig.contact.phoneLink}
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-3.5 rounded-md font-semibold transition-colors min-h-[44px] flex items-center justify-center gap-2"
            >
              Call Us Now
            </a>
          </div>
          <Link to="/fees" className="inline-block mt-4 text-[#D4A843] hover:underline text-sm">
            View Fee Structure →
          </Link>
        </div>
      </section>
    </div>
  );
}
