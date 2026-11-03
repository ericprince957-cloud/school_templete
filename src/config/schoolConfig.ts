export const schoolConfig = {
  name: "[School Name]",
  tagline: "[School Tagline]",
  motto: "[School Motto]",
  
  // Brand Colors (CSS variables)
  colors: {
    primary: "#1B3A5C",      // Deep Blue - Trust
    primaryDark: "#0F2640",
    accent: "#D4A843",       // Gold - Excellence
    accentLight: "#F5E6B8",
    success: "#2D7A3A",      // Green
    background: "#FFFFFF",
    lightBg: "#F8F9FA",
  },

  // Contact Information
  contact: {
    phone: "+234 [XXX] [XXX] [XXXX]",
    phoneLink: "tel:+234XXXXXXXXXX",
    email: "info@[schoolname].ng",
    whatsapp: "+234 [XXX] [XXX] [XXXX]",
    whatsappLink: "https://wa.me/234XXXXXXXXXX?text=Hello%20[School%20Name]%2C%20I'm%20interested%20in%20admission%20for%20my%20child.",
    address: "[Street Address], [Area], [City], Nigeria",
    googleMapsEmbed: "[Google Maps Embed URL]",
  },

  // Dates
  dates: {
    resumptionDate: "[Resumption Date]",
    nextTerm: "[Term Name, Session]",
    nextEvent: "[Next Event Name] - [Date]",
  },

  // Social Media
  social: {
    facebook: "[Facebook URL]",
    instagram: "[Instagram URL]",
    twitter: "[Twitter URL]",
    youtube: "[YouTube URL]",
  },

  // Principal's Message
  principal: {
    name: "[Principal's Full Name]",
    title: "Principal/CEO",
    message: "[Principal's welcome message about the school's vision, values, and commitment to students. This should be a brief, inspiring paragraph that humanizes the school and speaks directly to parents.]",
    qualifications: "[Principal's qualifications and years of experience]",
  },

  // Why Choose Us
  pillars: [
    {
      icon: "GraduationCap",
      title: "Qualified Teachers",
      description: "Our educators are highly trained professionals with proven track records in nurturing young minds.",
    },
    {
      icon: "Shield",
      title: "Secure Environment",
      description: "24/7 security, CCTV surveillance, and strict access control ensure your child's safety at all times.",
    },
    {
      icon: "Building",
      title: "Modern Facilities",
      description: "State-of-the-art laboratories, library, ICT center, sports complex, and well-equipped classrooms.",
    },
    {
      icon: "Award",
      title: "Proven Results",
      description: "Consistently outstanding WAEC, NECO, and BECE results. High university admission rate.",
    },
  ],

  // Testimonials
  testimonials: [
    {
      name: "[Parent Name 1]",
      childClass: "Parent of [Class] Student",
      quote: "[Parent testimonial about their child's experience, academic improvement, and overall satisfaction with the school.]",
    },
    {
      name: "[Parent Name 2]",
      childClass: "Parent of [Class] Student",
      quote: "[Parent testimonial highlighting specific aspects like security, extracurricular activities, or character development.]",
    },
    {
      name: "[Parent Name 3]",
      childClass: "Parent of [Class] Student",
      quote: "[Parent testimonial about the school's curriculum, teachers, or preparation for the future.]",
    },
  ],

  // Admission Process
  admissionSteps: [
    {
      step: 1,
      title: "Purchase Application Form",
      description: "Visit the school or download the form online. Non-refundable application fee applies.",
    },
    {
      step: 2,
      title: "Submit Required Documents",
      description: "Birth certificate, previous school reports, passport photographs, medical report, and completed form.",
    },
    {
      step: 3,
      title: "Entrance Assessment",
      description: "Age-appropriate assessment to determine class placement. Includes English, Mathematics, and General Knowledge.",
    },
    {
      step: 4,
      title: "Admission & Registration",
      description: "Successful candidates receive admission letters. Complete registration and fee payment to secure your child's place.",
    },
  ],

  // FAQ
  faqs: [
    {
      question: "What are the age requirements for admission?",
      answer: "Nursery 1: 2-3 years, Nursery 2: 3-4 years, Reception: 4-5 years, Primary 1: 5-6 years. Age is calculated as at September of the admission year.",
    },
    {
      question: "Is there a school bus service?",
      answer: "Yes, we operate a fleet of well-maintained buses covering major routes in [Area 1], [Area 2], [Area 3]. Each bus has a trained attendant and GPS tracking.",
    },
    {
      question: "What is the refund policy?",
      answer: "Withdrawal before term commencement: 80% refund. Within first 2 weeks: 50% refund. After 2 weeks: No refund. Development levy is non-refundable.",
    },
    {
      question: "Do you offer scholarships?",
      answer: "Yes, we offer merit-based scholarships for outstanding students and need-based bursary support. Applications are reviewed each academic session.",
    },
    {
      question: "What are the school hours?",
      answer: "Nursery: 8:00 AM - 2:00 PM. Primary: 8:00 AM - 3:00 PM. Secondary: 7:30 AM - 3:30 PM. After-school care available until 5:30 PM.",
    },
    {
      question: "Is there a uniform requirement?",
      answer: "Yes, students must wear the school uniform daily. Uniforms can be purchased from the school's designated vendor or approved retailers.",
    },
  ],

  // Fee Structure
  fees: {
    nursery: {
      level: "Nursery (Nursery 1 - Reception)",
      tuition: 0,
      development: 0,
      books: 0,
      uniforms: 0,
      transport: 0,
    },
    primary: {
      level: "Primary (Primary 1 - 6)",
      tuition: 0,
      development: 0,
      books: 0,
      uniforms: 0,
      transport: 0,
    },
    juniorSecondary: {
      level: "Junior Secondary (JSS 1 - 3)",
      tuition: 0,
      development: 0,
      books: 0,
      uniforms: 0,
      transport: 0,
    },
    seniorSecondary: {
      level: "Senior Secondary (SS 1 - 3)",
      tuition: 0,
      development: 0,
      books: 0,
      uniforms: 0,
      transport: 0,
    },
  },

  // Payment Details
  payment: {
    bankName: "[Bank Name]",
    accountName: "[School Account Name]",
    accountNumber: "[Account Number]",
    paystackLink: "[Paystack Payment Link]",
  },

  // Academics
  classLevels: [
    {
      name: "Early Years (Nursery)",
      age: "Ages 2-5",
      description: "Play-based learning that builds foundational literacy, numeracy, and social skills in a safe, nurturing environment.",
      subjects: ["Phonics & Reading", "Number Work", "Basic Science", "Creative Arts", "Physical Education", "French Introduction", "Social Habits"],
    },
    {
      name: "Primary School",
      age: "Ages 5-11",
      description: "Comprehensive curriculum following Nigerian National Curriculum with international best practices integrated.",
      subjects: ["English Language", "Mathematics", "Basic Science & Technology", "Social Studies", "Civic Education", "French", "Computer Studies", "Creative Arts", "Physical & Health Education", "Religious Studies", "Quantitative Reasoning"],
    },
    {
      name: "Junior Secondary (JSS)",
      age: "Ages 11-14",
      description: "Broad-based education preparing students for BECE with emphasis on critical thinking and practical skills.",
      subjects: ["English Language", "Mathematics", "Basic Science", "Basic Technology", "Social Studies", "Civic Education", "Business Studies", "Agricultural Science", "French", "Computer Science", "Fine Art", "Home Economics", "Physical Education", "Christian/Islamic Studies"],
    },
    {
      name: "Senior Secondary (SS)",
      age: "Ages 14-17",
      description: "Specialized tracks preparing students for WAEC/NECO and university admission with career-focused guidance.",
      subjects: ["English Language", "Mathematics", "Physics", "Chemistry", "Biology", "Further Mathematics", "Economics", "Government", "Literature in English", "Accounting", "Commerce", "Geography", "Computer Science", "Agricultural Science"],
    },
  ],

  // Extracurricular
  extracurricular: [
    { category: "Sports", items: ["Football", "Basketball", "Swimming", "Athletics", "Table Tennis", "Badminton"] },
    { category: "Arts & Culture", items: ["Drama Club", "Choir", "Dance Troupe", "Debate Team", "Literary & Debating Society"] },
    { category: "Technology", items: ["Coding Club", "Robotics", "Science Club", "Mathematics Club"] },
    { category: "Leadership", items: ["Prefectorial Body", "Interact Club", "Environmental Club", "Young Entrepreneurs"] },
  ],

  // Events
  events: [
    { date: "[Date]", title: "School Resumption", type: "academic" },
    { date: "[Date]", title: "[Event Name]", type: "cultural" },
    { date: "[Date]", title: "Inter-House Sports Competition", type: "sports" },
    { date: "[Date]", title: "PTA Meeting", type: "meeting" },
    { date: "[Date]", title: "Cultural Day", type: "cultural" },
    { date: "[Date]", title: "Prize Giving & Graduation", type: "academic" },
    { date: "[Date]", title: "Career Day", type: "academic" },
    { date: "[Date]", title: "Independence Day Celebration", type: "cultural" },
  ],

  // Gallery Categories
  galleryCategories: [
    "Classroom Activities",
    "Sports Day",
    "Graduation",
    "Excursions",
    "Cultural Day",
    "Science Fair",
    "Prize Giving",
    "Facilities",
  ],
};
