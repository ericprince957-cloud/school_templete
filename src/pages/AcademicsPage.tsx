import { useState } from 'react';
import { BookOpen, Users, Trophy, Palette, Code, Globe } from 'lucide-react';
import { schoolConfig } from '../config/schoolConfig';

const categoryIcons: Record<string, React.ReactNode> = {
  "Sports": <Trophy size={24} />,
  "Arts & Culture": <Palette size={24} />,
  "Technology": <Code size={24} />,
  "Leadership": <Users size={24} />,
};

export default function AcademicsPage() {
  const [activeLevel, setActiveLevel] = useState(0);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B3A5C] to-[#0F2640] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">Academics & Curriculum</h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            A comprehensive curriculum designed to develop critical thinkers, creative problem-solvers, and future leaders.
          </p>
        </div>
      </section>

      {/* Class Levels Tabs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#1B3A5C] mb-4">Our Class Levels</h2>
            <p className="text-gray-600">Explore our curriculum from Early Years to Senior Secondary</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {schoolConfig.classLevels.map((level, index) => (
              <button
                key={index}
                onClick={() => setActiveLevel(index)}
                className={`px-4 md:px-6 py-3 rounded-md font-medium text-sm transition-colors min-h-[44px] ${
                  activeLevel === index
                    ? 'bg-[#1B3A5C] text-white'
                    : 'bg-[#F8F9FA] text-gray-700 hover:bg-gray-200'
                }`}
              >
                {level.name.split('(')[0].trim()}
              </button>
            ))}
          </div>

          {/* Active Level Content */}
          <div className="bg-[#F8F9FA] rounded-xl p-6 md:p-10 border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="bg-[#1B3A5C] text-white rounded-xl p-6">
                  <h3 className="font-serif text-xl font-bold mb-2">{schoolConfig.classLevels[activeLevel].name}</h3>
                  <p className="text-[#D4A843] font-medium text-sm mb-4">{schoolConfig.classLevels[activeLevel].age}</p>
                  <p className="text-gray-200 text-sm leading-relaxed">{schoolConfig.classLevels[activeLevel].description}</p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <h4 className="font-serif font-bold text-lg text-[#1B3A5C] mb-4 flex items-center gap-2">
                  <BookOpen size={20} />
                  Subjects Offered
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {schoolConfig.classLevels[activeLevel].subjects.map((subject, index) => (
                    <div key={index} className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 border border-gray-100">
                      <div className="w-2 h-2 bg-[#D4A843] rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-16 md:py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#1B3A5C] mb-4">Our Teaching Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We blend Nigerian curriculum standards with international best practices</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-14 h-14 bg-[#1B3A5C]/10 rounded-full flex items-center justify-center text-[#1B3A5C] mx-auto mb-4">
                <BookOpen size={28} />
              </div>
              <h3 className="font-serif font-bold text-[#1B3A5C] mb-2">Academic Rigor</h3>
              <p className="text-gray-600 text-sm">Challenging curriculum that develops deep understanding and critical thinking skills across all subjects.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-14 h-14 bg-[#1B3A5C]/10 rounded-full flex items-center justify-center text-[#1B3A5C] mx-auto mb-4">
                <Globe size={28} />
              </div>
              <h3 className="font-serif font-bold text-[#1B3A5C] mb-2">Global Perspective</h3>
              <p className="text-gray-600 text-sm">International exposure through exchange programs, global competitions, and multicultural learning experiences.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-14 h-14 bg-[#1B3A5C]/10 rounded-full flex items-center justify-center text-[#1B3A5C] mx-auto mb-4">
                <Users size={28} />
              </div>
              <h3 className="font-serif font-bold text-[#1B3A5C] mb-2">Character Development</h3>
              <p className="text-gray-600 text-sm">Holistic education that builds integrity, leadership, empathy, and responsibility alongside academics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-[#1B3A5C] mb-4">Extra-Curricular Activities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Beyond the classroom, we offer diverse activities to develop talents and build character</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {schoolConfig.extracurricular.map((category, index) => (
              <div key={index} className="bg-[#F8F9FA] rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#D4A843]/10 rounded-lg flex items-center justify-center text-[#D4A843] mb-4">
                  {categoryIcons[category.category]}
                </div>
                <h3 className="font-serif font-bold text-[#1B3A5C] mb-3">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-[#D4A843] rounded-full flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results/Stats */}
      <section className="py-16 bg-gradient-to-r from-[#1B3A5C] to-[#0F2640] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-4xl font-bold mb-4">Our Academic Results</h2>
            <p className="text-gray-200">Consistently outstanding performance across all examinations</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#D4A843] mb-2">98%</div>
              <p className="text-gray-300 text-sm">University Admission Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#D4A843] mb-2">95%</div>
              <p className="text-gray-300 text-sm">WAEC Pass Rate (5+ Credits)</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#D4A843] mb-2">40+</div>
              <p className="text-gray-300 text-sm">Qualified Teachers</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#D4A843] mb-2">15:1</div>
              <p className="text-gray-300 text-sm">Student-Teacher Ratio</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
