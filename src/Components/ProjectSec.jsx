import { useState, useEffect, useRef } from "react";
import { FiExternalLink, FiGithub, FiArrowRight, FiVideo, FiMessageSquare, FiDollarSign, FiUsers, FiMonitor, FiCode, FiDatabase } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

// const projectData = [
//   {
//     title: "OnePoint Store",
//     link: "https://onepointservicesclone.netlify.app",
//     description: "A fully dynamic multi-city platform for electronic product services with admin controls and booking flows.",
//     features: [
//       "Auto-location detection & city-based filtering",
//       "Dynamic service navigation with direct booking",
//       "Admin-managed CMS for content",
//       "AMC module with checkout flow",
//       "Team hiring and SEO optimized sections"
//     ],
//     emoji: "🛒"
//   },
//   {
//     title: "My Job Market",
//     link: "https://myjobmarketbyprabha.netlify.app",
//     description: "Job portal with efficient searching and recruitment features.",
//     features: [
//       "Role-based login (User and Admin)",
//       "Post, apply, and manage jobs in real-time",
//       "Authentication and protected admin panel"
//     ],
//     emoji: "💼"
//   },
//   {
//     title: "Taxi Teaching Ecosystem",
//     link: "https://taxiteachingbyprabha.netlify.app",
//     description: "Comprehensive e-learning platform for driving license preparation with live classes and monetization.",
//     features: [
//       "Interactive video lectures with progress tracking",
//       "Live video conferencing (Jitsi integration)",
//       "Real-time chat system for communication",
//       "Monetization through subscriptions",
//       "Multilingual interface support",
//       "Admin dashboard for management",
//       "Student performance analytics",
//       "Mobile-responsive design"
//     ],
//     emoji: "🚕",
//     specialFeatures: [
//       {
//         icon: <FiVideo />,
//         title: "Live Video Classes",
//         description: "Interactive sessions with screen sharing and recording"
//       },
//       {
//         icon: <FiMessageSquare />,
//         title: "Real-Time Chat",
//         description: "Instant messaging with file sharing support"
//       },
//       {
//         icon: <FiDollarSign />,
//         title: "Earning System",
//         description: "Paid courses, live classes, and certifications"
//       },
//       {
//         icon: <FiUsers />,
//         title: "Community Learning",
//         description: "Group study rooms and peer learning"
//       }
//     ],
//     techStack: [
//       { name: "React.js", icon: <FiCode /> },
//       { name: "Node.js", icon: <FiMonitor /> },
//       { name: "MongoDB", icon: <FiDatabase /> },
//       { name: "Jitsi API", icon: <FiVideo /> },
//       { name: "Socket.io", icon: <FiMessageSquare /> },
//       { name: "Razorpay", icon: <FiDollarSign /> }
//     ]
//   },
//   // ... (other projects)
// ];

const projectData = [
   {
    title: "Taxi Teaching Ecosystem",
    link: "https://taxiteachingbyprabha.netlify.app",
    description: "A comprehensive e-learning platform for driving license preparation with integrated live classes, real-time chat, and monetization features.",
    features: [
      "Interactive video lectures and tutorials with progress tracking",
      "Live conference video calls for doubt-solving sessions (Jitsi integration)",
      "Real-time chat system for student-teacher communication",
      "Monetization through course subscriptions and live class fees",
      "Multilingual interface supporting regional languages",
      "Admin dashboard for content and user management",
      "Student performance analytics and quiz system",
      "Mobile-responsive design for on-the-go learning"
    ],
    specialFeatures: [
      {
        icon: <FiVideo className="text-2xl" />,
        title: "Live Video Classes",
        description: "Interactive live sessions with screen sharing and recording capabilities"
      },
      {
        icon: <FiMessageSquare className="text-2xl" />,
        title: "Real-Time Chat",
        description: "Instant messaging during live sessions with file sharing support"
      },
      {
        icon: <FiDollarSign className="text-2xl" />,
        title: "Earning System",
        description: "Monetization through paid courses, live classes, and certifications"
      },
      {
        icon: <FiUsers className="text-2xl" />,
        title: "Community Learning",
        description: "Group study rooms and peer-to-peer learning features"
      }
    ]
  },
  {
    title: "OnePoint Store",
    link: "https://onepointservicesclone.netlify.app",
    description: "A fully dynamic multi-city platform for electronic product services like AC installation, repair, and maintenance. Built for real-world use with admin controls and booking flows.",
    features: [
      "Auto-location detection & city-based filtering",
      "Dynamic service navigation: Services → Sub-services → Tasks with direct booking options",
      "Admin-managed CMS: banners, testimonials, footer, blogs, Google Reviews",
      "AMC (Annual Maintenance Contract) module with category-based flow and checkout",
      "Team hiring (Join Our Team), FAQs, blogs, interlinked sections for SEO"
    ]
  },
  {
    title: "My Job Market",
    link: "https://myjobmarketbyprabha.netlify.app",
    description: "A job portal designed for efficient job searching and recruitment with an easy-to-use UI and secure access control.",
    features: [
      "Role-based login (User and Admin)",
      "Post, apply, and manage jobs in real-time",
      "Authentication and protected admin panel"
    ]
  },
  {
    title: "Test Design (Picol)",
    link: "https://testdesignbyprabha.netlify.app",
    description: "A UI/UX design demo project for a product company showcasing clean layout, responsiveness, and structure.",
    features: [
      "Fully responsive landing page",
      "Visually appealing layout with CTAs",
      "Includes product showcase and inquiry form"
    ]
  },
  {
    title: "Varanasi Ayodhya Tour",
    link: "https://varanasiayodhyatour.com",
    description: "A religious and spiritual tour booking site focused on Varanasi and Ayodhya tourism.",
    features: [
      "Custom tour packages and itinerary pages",
      "Integrated inquiry form and WhatsApp chat",
      "Optimized for mobile and quick load time"
    ]
  },
  {
    title: "Tech Connect",
    link: "https://techconnectclient.netlify.app",
    description: "A video conferencing web app designed for online classes and meetings with access control and detailed user tracking.",
    features: [
      "Jitsi SDK integration for real-time video",
      "Separate dashboards for Admin and Students",
      "JWT-based authentication and room access validation",
      "User behavior tracking (join/leave time, session history)"
    ]
  },
  {
    title: "Swaranjali SHC Website",
    link: "https://swranjalishcwebsite.netlify.app",
    description: "An informative and educational platform for Swaranjali Speech & Hearing Clinic built to empower parents and caregivers.",
    features: [
      "Covers two verticals: Child Development & Hearing Care",
      "Content-driven design with downloadable self-help tools",
      "Consultation booking, resources, blogs, careers, and team pages",
      "Future-ready for lead generation and email campaigns",
      "Mobile-friendly, compassionate, and clinical in tone"
    ]
  },
  {
    title: "Book My Space",
    link: "https://bookmyspace.today",
    description: "A comprehensive library/co-working space management system with mobile app, admin, and super admin dashboards.",
    features: [
      "User app with auto-location detection, filters, plan purchase, QR check-in/out, Razorpay/PhonePe integration",
      "Library panel to manage profile, seats, working hours, bookings, invoices, and announcements",
      "Super admin dashboard for plan control, library/user management, payment and attendance tracking",
      "Real-time logs, sync, analytics, and OTP-based login systems"
    ]
  },
  {
    title: "Taxi Teaching",
    link: "https://taxiteachingbyprabha.netlify.app",
    description: "An e-learning platform to prepare for driving license exams with structured content and quiz modules.",
    features: [
      "Video lectures and tutorials",
      "Practice quizzes with MCQs",
      "Multilingual interface for regional learners"
    ]
  },
  {
    title: "Taxi User Panel",
    link: "https://userpaneloftaxiteaching.netlify.app",
    description: "A dashboard for learners to access their enrolled taxi preparation courses and monitor progress.",
    features: [
      "Course access and learning materials",
      "Quiz performance tracking",
      "Video library organized by modules"
    ]
  },
  {
    title: "Taxi Admin Panel",
    link: "https://adminpaneloftaxiteaching.netlify.app",
    description: "A backend panel for managing users, content, and analytics of the taxi teaching platform.",
    features: [
      "Add/edit quizzes and video content",
      "Track student progress and performance",
      "User database and content monitoring"
    ]
  },
  {
    title: "Expense Calculator",
    link: "https://calc-expenses.netlify.app",
    description: "A minimalistic personal finance calculator to manage income and spending visually.",
    features: [
      "Simple income/expense input",
      "Monthly overview with running balance",
      "LocalStorage-based data saving (no backend)"
    ]
  }
];

const ProjectSec = () => {
  const { currentTheme } = useTheme();
  const [selectedProject, setSelectedProject] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [floatingElements, setFloatingElements] = useState([]);
  const sectionRef = useRef(null);

  // Generate floating elements
  useEffect(() => {
    const elements = [];
    const techEmojis = ["⚛️", "💻", "🚀", "🔧", "📱", "🌐", "💾", "📊", "🔒", "🎨"];
    
    for (let i = 0; i < 15; i++) {
      elements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 2 + 1,
        emoji: techEmojis[Math.floor(Math.random() * techEmojis.length)],
        opacity: Math.random() * 0.5 + 0.1
      });
    }
    setFloatingElements(elements);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const FloatingParticle = ({ element }) => {
    const [position, setPosition] = useState({ x: element.x, y: element.y });

    useEffect(() => {
      const interval = setInterval(() => {
        setPosition(prev => ({
          x: (prev.x + element.speed * 0.1) % 100,
          y: prev.y + Math.sin(Date.now() * 0.001 + element.id) * 0.1
        }));
      }, 100);
      return () => clearInterval(interval);
    }, [element.speed, element.id]);

    return (
      <div
        className="absolute pointer-events-none text-2xl transition-all duration-1000"
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
          opacity: element.opacity,
          fontSize: `${element.size}px`,
          filter: 'blur(0.5px)',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      >
        {element.emoji}
      </div>
    );
  };

  const ConnectionLines = () => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {Array.from({ length: 5 }).map((_, i) => (
        <path
          key={i}
          d={`M ${mousePosition.x},${mousePosition.y} Q ${50 + i * 20},${30 + i * 15} ${80 - i * 10},${70 + i * 5}`}
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          opacity="0.3"
          style={{
            strokeDasharray: '5,5',
            animation: `dash 2s linear infinite`
          }}
        />
      ))}
    </svg>
  );

  const currentProject = projectData[selectedProject];

  return (
    <>
      <style jsx>{`
        @keyframes dash {
          to { stroke-dashoffset: -10; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.6); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>

      <section
        ref={sectionRef}
        id="MyProject"
        className={`${currentTheme.bgColor} ${currentTheme.textColor} py-20 px-4 sm:px-8 relative overflow-hidden min-h-screen`}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {floatingElements.map((element) => (
            <FloatingParticle key={element.id} element={element} />
          ))}
          <ConnectionLines />
          
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative inline-block"
          >
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-spin" style={{ animation: 'spin 6s linear infinite' }}></div>
            
            <span className={`${currentTheme.button} text-white px-8 py-3 text-lg font-semibold rounded-full inline-flex items-center gap-2 shadow-lg relative z-10`}>
              <span className="animate-bounce">🚀</span>
              My Projects
              <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>✨</span>
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mt-8 mb-6 relative"
          >
            Detailed Showcase of My
            <span className={`${currentTheme.specialText} block relative`}>
              Work Portfolio
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-lg -z-10"></div>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="opacity-80 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Each project represents unique challenges solved with
            <span className="text-blue-400 font-semibold"> precision</span> and
            <span className="text-purple-400 font-semibold"> innovation</span>
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projectData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
                className={`${currentTheme.card} p-5 rounded-xl cursor-pointer transition-all duration-200 ${
                  selectedProject === index ? 'ring-2 ring-blue-400' : ''
                }`}
                onClick={() => setSelectedProject(index)}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`${currentTheme.button} text-white p-3 rounded-lg text-xl`}>
                    {project.emoji || (index + 1)}
                  </div>
                  <h3 className="text-lg font-bold">{project.title}</h3>
                </div>
                <p className="text-sm opacity-80 line-clamp-2">{project.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Project Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProject}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className={`${currentTheme.card} p-6 sm:p-8 rounded-2xl mb-12`}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Column - Project Visuals */}
                <div className="lg:w-1/2 space-y-6">
                  <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="absolute inset-0 flex items-center justify-center text-6xl">
                      {currentProject.emoji}
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <motion.a
                        href={currentProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${currentTheme.button} text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm sm:text-base`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Visit Live <FiExternalLink />
                      </motion.a>
                    </div>
                  </div>

                  {/* Special Features for Taxi Teaching */}
                  {currentProject.specialFeatures && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <span className={`${currentTheme.specialText}`}>Core Innovations</span>
                        <FiArrowRight className="text-blue-400" />
                      </h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {currentProject.specialFeatures.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`${currentTheme.card} p-3 rounded-lg`}
                            whileHover={{ y: -3 }}
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <div className={`${currentTheme.button} p-2 rounded-full`}>
                                {feature.icon}
                              </div>
                              <h4 className="font-bold text-sm sm:text-base">{feature.title}</h4>
                            </div>
                            <p className="text-xs sm:text-sm opacity-80">{feature.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column - Project Details */}
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3">{currentProject.title}</h2>
                    <p className="text-sm sm:text-base opacity-90 mb-4">{currentProject.description}</p>
                    
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 flex items-center gap-2">
                      <span className={`${currentTheme.specialText}`}>Key Features</span>
                      <FiArrowRight className="text-blue-400" />
                    </h3>
                    
                    <ul className="space-y-2">
                      {currentProject.features.map((feature, index) => (
                        <motion.li 
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          className="flex items-start gap-2 text-sm sm:text-base"
                        >
                          <span className={`${currentTheme.button} text-white p-1 rounded-full mt-1 flex-shrink-0`}>
                            <FiArrowRight size={12} />
                          </span>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Stack */}
                  {currentProject.techStack && (
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-3 flex items-center gap-2">
                        <span className={`${currentTheme.specialText}`}>Technology Stack</span>
                        <FiArrowRight className="text-blue-400" />
                      </h3>
                      
                      <div className="flex flex-wrap gap-2">
                        {currentProject.techStack.map((tech, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`${currentTheme.button} text-white px-3 py-1 text-xs sm:text-sm rounded-full flex items-center gap-2`}
                          >
                            {tech.icon}
                            {tech.name}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Video Conference Demo for Taxi Teaching */}
              {currentProject.title === "Taxi Teaching Ecosystem" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8"
                >
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className={`${currentTheme.specialText}`}>Live Class Experience</span>
                    <FiVideo className="text-blue-400" />
                  </h3>
                  
                  <div className={`${currentTheme.card} rounded-xl overflow-hidden`}>
                    <div className="aspect-w-16 aspect-h-9 bg-gray-800/50 flex items-center justify-center p-6">
                      <div className="text-center max-w-md">
                        <div className="inline-block p-4 rounded-full bg-blue-500/20 mb-4">
                          <FiVideo className="text-3xl text-blue-400" />
                        </div>
                        <h4 className="text-lg font-bold mb-3">Interactive Learning Platform</h4>
                        <p className="mb-4 text-sm sm:text-base">
                          Experience our real-time video conferencing with integrated chat and collaborative tools
                        </p>
                        <div className="grid grid-cols-2 gap-2 mb-6">
                          {[
                            "Multi-user video",
                            "Screen sharing",
                            "Live chat",
                            "Session recording",
                            "Virtual whiteboard",
                            "Breakout rooms"
                          ].map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-xs sm:text-sm">
                              <span className={`${currentTheme.button} p-1 rounded-full`}>
                                <FiArrowRight size={10} />
                              </span>
                              {feature}
                            </div>
                          ))}
                        </div>
                        <motion.a
                          href={currentProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${currentTheme.button} text-white px-5 py-2 rounded-full inline-flex items-center gap-2 text-sm sm:text-base`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Try Live Demo <FiExternalLink />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Floating contact icons */}
        <div className="fixed right-4 sm:right-6 top-1/2 transform -translate-y-1/2 space-y-3 z-20">
          {['💬', '📧', '🤝'].map((emoji, index) => (
            <motion.a
            href="#ContactMe"
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`${currentTheme.button} w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer text-lg sm:text-xl`}
              style={{
                animation: `float ${2 + index * 0.5}s ease-in-out infinite`,
                animationDelay: `${index * 0.3}s`
              }}
            >
              {emoji}
            </motion.a>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectSec;