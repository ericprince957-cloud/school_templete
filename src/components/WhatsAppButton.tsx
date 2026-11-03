import { MessageCircle } from 'lucide-react';
import { schoolConfig } from '../config/schoolConfig';

export default function WhatsAppButton() {
  return (
    <a
      href={schoolConfig.contact.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1DA851] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
