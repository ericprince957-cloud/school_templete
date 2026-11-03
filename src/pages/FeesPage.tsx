import { CreditCard, Building2, Smartphone, AlertCircle, CheckCircle } from 'lucide-react';
import { schoolConfig } from '../config/schoolConfig';

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(amount);
}

export default function FeesPage() {
  const feeLevels = [
    schoolConfig.fees.nursery,
    schoolConfig.fees.primary,
    schoolConfig.fees.juniorSecondary,
    schoolConfig.fees.seniorSecondary,
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0F2640] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">Fees & Payments</h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Transparent fee structure for the {schoolConfig.dates.nextTerm}. We believe in clarity and fairness.
          </p>
        </div>
      </section>

      {/* Fee Breakdown */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#1B3A5C] mb-4">Fee Structure (Per Term)</h2>
            <p className="text-gray-600">All amounts are in Nigerian Naira (₦)</p>
          </div>

          {/* Fee Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {feeLevels.map((level, index) => {
              const total = level.tuition + level.development + level.books + level.uniforms + level.transport;
              return (
                <div key={index} className="bg-[#F8F9FA] rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-[#1B3A5C] text-white px-6 py-4">
                    <h3 className="font-serif font-bold text-lg">{level.level}</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600 text-sm">Tuition Fee</span>
                        <span className="font-semibold text-[#1B3A5C]">{formatCurrency(level.tuition)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600 text-sm">Development Levy</span>
                        <span className="font-semibold text-[#1B3A5C]">{formatCurrency(level.development)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600 text-sm">Books & Materials</span>
                        <span className="font-semibold text-[#1B3A5C]">{formatCurrency(level.books)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600 text-sm">Uniforms</span>
                        <span className="font-semibold text-[#1B3A5C]">{formatCurrency(level.uniforms)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600 text-sm">Transport (Optional)</span>
                        <span className="font-semibold text-[#1B3A5C]">{formatCurrency(level.transport)}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 mt-2 bg-[#D4A843]/10 rounded-lg px-4">
                        <span className="font-bold text-[#1B3A5C]">Total (Per Term)</span>
                        <span className="font-bold text-lg text-[#1B3A5C]">{formatCurrency(total)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Important Notes */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertCircle size={24} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-amber-800 mb-2">Important Notes</h3>
                <ul className="text-amber-700 text-sm space-y-1">
                  <li>• Fees are subject to review each term. Contact bursary for clarification.</li>
                  <li>• Development Levy is a one-time payment per class level (non-refundable).</li>
                  <li>• Transport fee varies by route. Contact the school for your specific route fee.</li>
                  <li>• A 10% discount is available for parents with 3 or more children in the school.</li>
                  <li>• Fees must be paid before or within the first week of resumption.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16 md:py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#1B3A5C] mb-4">Payment Options</h2>
            <p className="text-gray-600">We offer multiple convenient payment methods</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bank Transfer */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-[#1B3A5C]/10 rounded-lg flex items-center justify-center text-[#1B3A5C] mb-4">
                <Building2 size={24} />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1B3A5C] mb-3">Bank Transfer</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Bank:</span>
                  <span className="font-medium text-gray-800">{schoolConfig.payment.bankName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Account Name:</span>
                  <span className="font-medium text-gray-800 text-right">{schoolConfig.payment.accountName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Account Number:</span>
                  <span className="font-medium text-[#1B3A5C]">{schoolConfig.payment.accountNumber}</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">Please use your child's name as payment reference.</p>
            </div>

            {/* Online Payment */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-[#1B3A5C]/10 rounded-lg flex items-center justify-center text-[#1B3A5C] mb-4">
                <CreditCard size={24} />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1B3A5C] mb-3">Online Payment</h3>
              <p className="text-gray-600 text-sm mb-4">Pay securely using Paystack. Accepts debit cards, bank transfers, and USSD.</p>
              <a
                href={schoolConfig.payment.paystackLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#D4A843] hover:bg-[#B8922E] text-white px-4 py-3 rounded-md font-semibold text-center transition-colors min-h-[44px] flex items-center justify-center"
              >
                Pay Online Now
              </a>
            </div>

            {/* POS/In-Person */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-[#1B3A5C]/10 rounded-lg flex items-center justify-center text-[#1B3A5C] mb-4">
                <Smartphone size={24} />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1B3A5C] mb-3">In-Person Payment</h3>
              <p className="text-gray-600 text-sm mb-4">Visit the school bursary office. We accept cash, POS, and bank transfers at the school.</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#2D7A3A]" />
                  <span className="text-gray-700">Cash accepted</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#2D7A3A]" />
                  <span className="text-gray-700">POS terminal available</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#2D7A3A]" />
                  <span className="text-gray-700">Office hours: 8AM - 4PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Bursary */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-[#1B3A5C] mb-3">Questions About Fees?</h2>
          <p className="text-gray-600 mb-6">Our bursary department is available to answer your questions and help with payment plans.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={schoolConfig.contact.phoneLink}
              className="bg-[#1B3A5C] hover:bg-[#0F2640] text-white px-6 py-3 rounded-md font-semibold transition-colors min-h-[44px] flex items-center justify-center gap-2"
            >
              <Smartphone size={18} />
              Call Bursary
            </a>
            <a
              href={`mailto:${schoolConfig.contact.email}`}
              className="bg-[#F8F9FA] hover:bg-gray-200 text-[#1B3A5C] px-6 py-3 rounded-md font-semibold transition-colors min-h-[44px] flex items-center justify-center border border-gray-200"
            >
              Email Bursary
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
