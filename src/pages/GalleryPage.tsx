import { useState } from 'react';
import { Calendar, MapPin, Clock, Image, ChevronLeft, ChevronRight } from 'lucide-react';
import { schoolConfig } from '../config/schoolConfig';

const galleryImages = [
  { id: 1, category: "Classroom Activities", color: "from-blue-400 to-blue-600", label: "Students in Science Lab" },
  { id: 2, category: "Sports Day", color: "from-green-400 to-green-600", label: "Inter-House Sports Competition" },
  { id: 3, category: "Graduation", color: "from-purple-400 to-purple-600", label: "Graduation Ceremony 2024" },
  { id: 4, category: "Excursions", color: "from-orange-400 to-orange-600", label: "Field Trip to National Museum" },
  { id: 5, category: "Cultural Day", color: "from-red-400 to-red-600", label: "Cultural Day Celebrations" },
  { id: 6, category: "Science Fair", color: "from-teal-400 to-teal-600", label: "Annual Science Fair" },
  { id: 7, category: "Classroom Activities", color: "from-indigo-400 to-indigo-600", label: "ICT Class in Action" },
  { id: 8, category: "Sports Day", color: "from-emerald-400 to-emerald-600", label: "Swimming Competition" },
  { id: 9, category: "Prize Giving", color: "from-amber-400 to-amber-600", label: "Prize Giving Day 2024" },
  { id: 10, category: "Facilities", color: "from-sky-400 to-sky-600", label: "School Library" },
  { id: 11, category: "Facilities", color: "from-cyan-400 to-cyan-600", label: "Sports Complex" },
  { id: 12, category: "Cultural Day", color: "from-rose-400 to-rose-600", label: "Traditional Dance Performance" },
];

const eventTypeColors: Record<string, string> = {
  academic: "bg-blue-100 text-blue-800",
  sports: "bg-green-100 text-green-800",
  cultural: "bg-purple-100 text-purple-800",
  meeting: "bg-amber-100 text-amber-800",
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...schoolConfig.galleryCategories];

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0F2640] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">Gallery & Events</h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Explore life at {schoolConfig.name} through our gallery and stay updated with upcoming events.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#1B3A5C] mb-4">Photo Gallery</h2>
            <p className="text-gray-600">Capturing moments of learning, growth, and celebration</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors min-h-[44px] ${
                  activeCategory === category
                    ? 'bg-[#1B3A5C] text-white'
                    : 'bg-[#F8F9FA] text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${image.color}`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image size={32} className="text-white/60" />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
                  <div className="p-3 w-full translate-y-full group-hover:translate-y-0 transition-transform">
                    <p className="text-white text-xs font-medium">{image.label}</p>
                    <p className="text-white/70 text-xs">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <Image size={48} className="mx-auto mb-4 text-gray-300" />
              <p>No photos in this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#1B3A5C] mb-4">Upcoming Events</h2>
            <p className="text-gray-600">Stay informed about important dates and activities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {schoolConfig.events.map((event, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-shadow flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-[#1B3A5C] text-white rounded-lg flex flex-col items-center justify-center">
                  <span className="text-xs font-medium">{event.date.split(' ')[0]}</span>
                  <span className="text-lg font-bold leading-tight">{event.date.split(' ')[1].replace(',', '')}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-[#1B3A5C] text-sm md:text-base">{event.title}</h3>
                  <div className="flex items-center gap-3 mt-2">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${eventTypeColors[event.type]}`}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock size={12} />
                      {event.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Location */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1B3A5C] mb-2">Visit Our Campus</h2>
            <p className="text-gray-600 flex items-center justify-center gap-2">
              <MapPin size={16} />
              {schoolConfig.contact.address}
            </p>
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
          <div className="mt-6 text-center">
            <a
              href={`https://www.google.com/maps/search/${encodeURIComponent(schoolConfig.contact.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1B3A5C] hover:bg-[#0F2640] text-white px-6 py-3 rounded-md font-semibold transition-colors min-h-[44px]"
            >
              <MapPin size={18} />
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
