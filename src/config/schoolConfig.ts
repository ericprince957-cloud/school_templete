export const schoolConfig = {
  name: "Greenfield International School",
  tagline: "Nurturing Future Leaders",
  motto: "Excellence • Integrity • Service",
  
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
    phone: "+234 801 234 5678",
    phoneLink: "tel:+2348012345678",
    email: "info@greenfieldschool.ng",
    whatsapp: "+234 801 234 5678",
    whatsappLink: "https://wa.me/2348012345678?text=Hello%20Greenfield%20International%20School%2C%20I'm%20interested%20in%20admission%20for%20my%20child.",
    address: "15 Education Avenue, Lekki Phase 1, Lagos, Nigeria",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7272391838884!2d3.4463!3d6.4322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnNTUuOSJOIDPCsDI2JzQ2LjciRQ!5e0!3m2!1sen!2sng!4v1234567890",
  },

  // Dates
  dates: {
    resumptionDate: "January 8, 2025",
    nextTerm: "Second Term, 2024/2025 Session",
    nextEvent: "Inter-House Sports Competition - March 15, 2025",
  },

  // Social Media
  social: {
    facebook: "https://facebook.com/greenfieldschool",
    instagram: "https://instagram.com/greenfieldschool",
    twitter: "https://twitter.com/greenfieldsch",
    youtube: "https://youtube.com/@greenfieldschool",
  },

  // Principal's Message
  principal: {
    name: "Dr. Adebayo Ogunlade",
    title: "Principal/CEO",
    message: "At Greenfield International School, we believe every child is unique and gifted. Our commitment is to provide a holistic education that nurtures academic excellence, moral integrity, and leadership skills. We create an environment where students are challenged, supported, and inspired to reach their full potential.",
    qualifications: "Ph.D. Education, University of Lagos | 25+ years in Education",
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
      description: "Consistently outstanding WAEC, NECO, and BECE results. 98% university admission rate.",
    },
  ],

  // Testimonials
  testimonials: [
    {
      name: "Mrs. Funke Adeyemi",
      childClass: "Parent of JSS2 Student",
      quote: "Greenfield has transformed my daughter's confidence and academic performance. The teachers are dedicated and the environment is conducive for learning. Best decision we ever made!",
    },
    {
      name: "Engr. Chukwuma Okafor",
      childClass: "Parent of Primary 5 Student",
      quote: "The school's emphasis on both academics and character development is remarkable. My son has grown not just intellectually but morally. The security measures give me peace of mind.",
    },
    {
      name: "Barr. Amina Ibrahim",
      childClass: "Parent of SS3 Student",
      quote: "From nursery to secondary, Greenfield has been exceptional. The curriculum is robust, extracurricular activities are diverse, and the school truly prepares children for the future.",
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
      answer: "Yes, we operate a fleet of well-maintained buses covering major routes in Lekki, Ajah, Victoria Island, and Ikoyi. Each bus has a trained attendant and GPS tracking.",
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
      tuition: 350000,
      development: 50000,
      books: 35000,
      uniforms: 25000,
      transport: 80000,
    },
    primary: {
      level: "Primary (Primary 1 - 6)",
      tuition: 450000,
      development: 60000,
      books: 45000,
      uniforms: 30000,
      transport: 80000,
    },
    juniorSecondary: {
      level: "Junior Secondary (JSS 1 - 3)",
      tuition: 550000,
      development: 70000,
      books: 55000,
      uniforms: 35000,
      transport: 90000,
    },
    seniorSecondary: {
      level: "Senior Secondary (SS 1 - 3)",
      tuition: 650000,
      development: 80000,
      books: 65000,
      uniforms: 35000,
      transport: 90000,
    },
  },

  // Payment Details
  payment: {
    bankName: "First Bank of Nigeria",
    accountName: "Greenfield International School Ltd",
    accountNumber: "3012345678",
    paystackLink: "https://paystack.com/pay/greenfield-school",
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
    { date: "Jan 8, 2025", title: "School Resumption", type: "academic" },
    { date: "Feb 14, 2025", title: "Valentine's Day Celebration", type: "cultural" },
    { date: "Mar 15, 2025", title: "Inter-House Sports Competition", type: "sports" },
    { date: "Apr 5, 2025", title: "PTA Meeting", type: "meeting" },
    { date: "May 20, 2025", title: "Cultural Day", type: "cultural" },
    { date: "Jun 28, 2025", title: "Prize Giving & Graduation", type: "academic" },
    { date: "Jul 12, 2025", title: "Career Day", type: "academic" },
    { date: "Oct 1, 2025", title: "Independence Day Celebration", type: "cultural" },
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
