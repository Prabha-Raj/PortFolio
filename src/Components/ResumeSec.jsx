import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

export default function ResumeSec() {
  const { currentTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('experience');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);

  // Tech icons for background
  const techIcons = [
    { icon: "</>", name: "html" },
    { icon: "{ }", name: "code" },
    { icon: "⚛️", name: "react" },
    { icon: "λ", name: "lambda" },
    { icon: ">_", name: "terminal" },
    { icon: "() =>", name: "function" },
    { icon: "npm", name: "npm" },
    { icon: "git", name: "git" },
    { icon: "db", name: "database" },
    { icon: "API", name: "api" },
    { icon: "CSS", name: "css" },
    { icon: "JS", name: "javascript" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };
  const educationData = [
    {
      title: "Diploma in Computer Science & Engineering",
      period: "2021 - 2024",
      institution: "Board of Technical Education Uttar Pradesh",
      grade: "85%",
      description: "Comprehensive training in software development fundamentals with hands-on projects.",
      highlights: [
        "Mastered data structures and algorithms through 50+ coding challenges",
        "Built 3 full-stack projects using PHP and MySQL",
        "Completed coursework in DBMS, OS, and Computer Networks",
        "Maintained 85% aggregate score"
      ],
      icon: "🎓"
    },
    {
      title: "Intermediate Education (12th Grade) Science",
      period: "2019 - 2021",
      institution: "Uttar Pradesh Board",
      grade: "92%",
      description: "Specialized in Mathematics and Computer Science.",
      highlights: [
        "Scored 92% in Computer Science",
        "Developed first web project (School Management System)",
        "Won district-level coding competition"
      ],
      icon: "📚"
    }
  ];

  const experienceData = [
    {
      title: "Full Stack Developer (MERN)",
      period: "January 2025 - Present",
      company: "DigiCoders Technologies",
      location: "Lucknow",
      status: "Current Role",
      description: "Leading MERN stack development team for enterprise clients.",
      highlights: [
        "Architected 6+ production applications",
        "Reduced API response time by 65%",
        "Authentication & Autherization",
        "Mentored junior developers",
        "Introduced testing standards"
      ],
      projects: [
        {
          name: "Tech Connect",
          description: "Video conferencing app with role-based access and admin tracking",
          technologies: ["React", "Node.js", "MongoDB", "JWT", "Jitsi SDK"],
          impact: "Enables secure, scheduled classes and meetings with full participant tracking",
          features: ["Course-based access", "Student/Admin dashboards", "Join/Leave tracking"]
        },
        {
          name: "OnePoint Store",
          description: "Electronics service portal for repairs & installations",
          technologies: ["React", "Flask", "Bootstrap"],
          impact: "Streamlined service booking process for 100+ users",
          features: ["Booking management", "Technician dashboard", "Responsive design"]
        }
      ],
      icon: "💼",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Web Developer",
      period: "May 2024 - December 2024",
      company: "DigiCoders Technologies",
      location: "Lucknow",
      status: "7 months",
      description: "Full stack development with focus on MERN stack applications.",
      highlights: [
        "Delivered 4 production-ready MERN projects",
        "Implemented JWT authentication systems",
        "Optimized React performance by 30%",
        "Integrated payment gateways and mapping APIs"
      ],
      projects: [
        {
          name: "My Job Market",
          description: "A job portal with role-based user and admin panels",
          technologies: ["React", "Node.js", "MongoDB", "JWT", "Tailwind"],
          impact: "Live job platform for employers and job seekers",
          features: ["Job listing/posting", "User authentication", "Admin control"]
        },
        {
          name: "Taxi Teaching Platform",
          description: "Learning management app with tests and video content",
          technologies: ["React", "MongoDB", "Express", "JWT"],
          impact: "Adopted by coaching center for online taxi exam prep",
          features: ["Quizzes", "Video library", "Multi-dashboard support"]
        }
      ],
      icon: "🚀",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Junior Developer",
      period: "December 2023 - May 2024",
      company: "DigiCoders Technologies",
      location: "Lucknow",
      status: "6 months",
      description: "Frontend development and feature implementation.",
      highlights: [
        "Built 10+ reusable React components",
        "Fixed 50+ critical production bugs",
        "Reduced CSS bundle size by 40%",
        "Implemented responsive designs for 3 client projects"
      ],
      projects: [
        {
          name: "Varanasi Ayodhya Tour Site",
          description: "Tour booking site for a religious tourism company",
          technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
          impact: "Helped increase tourist inquiries via online platform",
          features: ["Contact forms", "Responsive sections", "Gallery"]
        },
        {
          name: "SSF Berries Website",
          description: "Business site for a fruit company",
          technologies: ["HTML", "CSS", "JS"],
          impact: "Enhanced brand visibility and trust online",
          features: ["Landing page", "About/Contact", "Mobile-friendly"]
        }
      ],
      icon: "⚡",
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Summer Intern (Python/Django)",
      period: "July 2023 - September 2023",
      company: "Softpro India Computer Technologies",
      location: "Lucknow",
      status: "3 months",
      description: "Intensive training in Python and Django web development.",
      highlights: [
        "Developed 3 Django applications with CRUD functionality",
        "Built REST APIs with Django REST Framework",
        "Optimized database queries reducing load time by 40%"
      ],
      projects: [
        {
          name: "ErrorQuiz App",
          description: "Quiz app with certificate generation for test takers",
          technologies: ["React", "Node.js", "MongoDB", "jsPDF"],
          impact: "Helped 100+ learners self-assess and receive auto-certificates",
          features: ["Quiz selection", "Score result", "jsPDF certificate download"]
        },
        {
          name: "Blog Management System",
          description: "Blog platform with admin authentication and user features",
          technologies: ["Django", "PostgreSQL", "Bootstrap"],
          impact: "Used internally for Django training and demos",
          features: ["User auth", "Comment system", "Post categories"]
        }
      ],
      icon: "🌱",
      color: "from-yellow-500 to-green-500"
    }
  ];


  const skills = {
    frontend: ["React", "JavaScript", "HTML/CSS", "Material UI", "Bootstrap"],
    backend: ["Node.js", "Django", "Python", "PHP", "REST APIs"],
    database: ["MongoDB", "PostgreSQL", "MySQL"],
    tools: ["Git", "Docker", "CI/CD", "WebRTC", "Socket.io"]
  };

  return (
    <section
      id="MyResume"
      className={`${currentTheme.bgColor} min-h-screen py-20 px-4 sm:px-8 relative overflow-hidden`}
    >
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Gradient blobs */}
        <motion.div
          className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full filter blur-3xl opacity-10 bg-gradient-to-br ${currentTheme.accent}`}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>

        <motion.div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full filter blur-3xl opacity-10 bg-gradient-to-br ${currentTheme.accent}`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>

        {/* Binary code rain effect */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className={`absolute top-0 ${currentTheme.textColor} font-mono text-xs whitespace-nowrap`}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
              initial={{ y: -100 }}
              animate={{ y: "100vh" }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {Array.from({ length: 50 }).map((_, j) => (
                <span key={j} className="opacity-70">
                  {Math.random() > 0.5 ? "1" : "0"}
                </span>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Floating tech icons */}
        {techIcons.map((tech, i) => (
          <motion.div
            key={tech.name}
            className={`absolute ${currentTheme.textColor} opacity-5 text-2xl md:text-4xl`}
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${5 + Math.random() * 90}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: Math.random() > 0.5 ? [0, 10, -10, 0] : [0, -10, 10, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            {tech.icon}
          </motion.div>
        ))}

        {/* Circuit connection lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M50,100 Q150,50 250,100 T450,100"
            fill="none"
            stroke={currentTheme.textColor}
            strokeWidth="1"
            strokeOpacity="0.05"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3 }}
          />
          <motion.path
            d="M800,300 Q700,250 600,300 T400,300"
            fill="none"
            stroke={currentTheme.textColor}
            strokeWidth="1"
            strokeOpacity="0.05"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 0.5 }}
          />
        </svg>
      </div>

      <motion.div
        className="relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={`${currentTheme.button} text-white px-8 py-3 text-lg font-medium rounded-full inline-block shadow-lg hover:shadow-xl transition-all duration-300`}>
              📄 Resume Overview
            </span>
          </motion.div>

          <motion.h2
            className={`${currentTheme.textColor} text-4xl md:text-6xl font-bold mt-8 mb-4`}
            variants={itemVariants}
          >
            Professional Journey
          </motion.h2>
          <motion.p
            className={`${currentTheme.highlight} text-xl max-w-2xl mx-auto`}
            variants={itemVariants}
          >
            A comprehensive overview of my education and experience in full-stack development
          </motion.p>

          {/* Interactive Tab Navigation */}
          <motion.div
            className="flex justify-center mt-12 mb-8"
            variants={itemVariants}
          >
            <div className={`${currentTheme.card} rounded-full p-2`}>
              {['experience', 'education', 'skills'].map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === tab
                      ? `${currentTheme.button} text-white shadow-lg`
                      : `${currentTheme.textColor} hover:bg-gray-700/50`
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  {tab === 'experience' && ' '}
                  {tab === 'education' && ''}
                  {tab === 'skills' && ' (15+ Technologies)'}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Content Area */}
        <div className="max-w-7xl mx-auto">
          {/* Experience Section */}
          {activeTab === 'experience' && (
            <motion.div className="space-y-10" variants={containerVariants}>
              <div className="grid lg:grid-cols-2 gap-8">
                {experienceData.map((exp, index) => (
                  <motion.div
                    key={index}
                    className={`${currentTheme.card} p-8 rounded-2xl border ${currentTheme.bgColor === 'bg-black' ? 'border-gray-800' : 'border-gray-200'} transition-all duration-300`}
                    variants={itemVariants}
                    whileHover="hover"
                    variants={cardVariants}
                    onMouseEnter={() => setHoveredItem(`exp-${index}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {/* Card Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <motion.div
                          className={`text-3xl bg-gradient-to-r ${exp.color} p-3 rounded-xl text-white shadow-lg`}
                          animate={{
                            rotate: hoveredItem === `exp-${index}` ? [0, 10, -10, 0] : 0
                          }}
                          transition={{
                            duration: 1,
                            repeat: hoveredItem === `exp-${index}` ? Infinity : 0
                          }}
                        >
                          {exp.icon}
                        </motion.div>
                        <div>
                          <h3 className={`${currentTheme.textColor} text-xl font-bold group-hover:text-purple-300 transition-colors`}>
                            {exp.title}
                          </h3>
                          <p className={`${currentTheme.highlight} font-semibold`}>{exp.company}</p>
                          <p className="text-gray-400 text-sm">{exp.location} • {exp.period}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${exp.status.includes('Current')
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        }`}>
                        {exp.status}
                      </span>
                    </div>

                    <p className={`${currentTheme.textColor} opacity-90 mb-6`}>{exp.description}</p>

                    {/* Achievements with Icons */}
                    <div className="mb-6">
                      <h4 className={`${currentTheme.textColor} font-semibold mb-3 flex items-center`}>
                        <motion.span
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatType: "mirror"
                          }}
                        >
                          🏆
                        </motion.span>
                        <span className="ml-2">Key Achievements</span>
                      </h4>
                      <div className="space-y-2">
                        {exp.highlights.slice(0, 3).map((highlight, i) => (
                          <motion.div
                            key={i}
                            className="flex items-start space-x-3 group/item"
                            whileHover={{ x: 5 }}
                          >
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2 group-hover/item:scale-150 transition-transform"></div>
                            <p className={`${currentTheme.textColor} opacity-90 group-hover/item:opacity-100 transition-opacity`}>
                              {highlight}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Projects */}
                    <div>
                      <h4 className={`${currentTheme.textColor} font-semibold mb-3 flex items-center`}>
                        <motion.span
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity
                          }}
                        >
                          🚀
                        </motion.span>
                        <span className="ml-2">Featured Project</span>
                      </h4>
                      {exp.projects.map((project, pIndex) => (
                        <motion.div
                          key={pIndex}
                          className={`${currentTheme.card} p-4 rounded-xl transition-all duration-300`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <div className="flex justify-between items-start mb-3">
                            <h5 className={`font-bold ${currentTheme.specialText} text-lg`}>{project.name}</h5>
                            <motion.button
                              onClick={() => setExpandedProject(expandedProject === `${index}-${pIndex}` ? null : `${index}-${pIndex}`)}
                              className={`${currentTheme.highlight} transition-colors`}
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              {expandedProject === `${index}-${pIndex}` ? '🔼' : '🔽'}
                            </motion.button>
                          </div>

                          <p className="text-gray-300 text-sm mb-3">{project.description}</p>

                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.technologies.map((tech, tIndex) => (
                              <motion.span
                                key={tIndex}
                                className={`text-xs px-3 py-1 rounded-full ${currentTheme.card} ${currentTheme.specialText} transition-colors`}
                                whileHover={{ scale: 1.1 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>

                          {expandedProject === `${index}-${pIndex}` && (
                            <motion.div
                              className="mt-4 space-y-2"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="flex items-center space-x-2">
                                <span className="text-green-400">📈</span>
                                <p className="text-sm font-semibold text-green-300">
                                  Impact: {project.impact}
                                </p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-300 mb-2">Key Features:</p>
                                <div className="flex flex-wrap gap-2">
                                  {project.features.map((feature, fIndex) => (
                                    <motion.span
                                      key={fIndex}
                                      className="text-xs px-2 py-1 bg-gray-700/50 text-gray-300 rounded"
                                      initial={{ scale: 0.8 }}
                                      animate={{ scale: 1 }}
                                      transition={{ delay: fIndex * 0.05 }}
                                    >
                                      {feature}
                                    </motion.span>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Education Section */}
          {activeTab === 'education' && (
            <motion.div
              className="max-w-4xl mx-auto"
              variants={containerVariants}
            >
              <div className="space-y-8">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    className={`${currentTheme.card} p-8 rounded-2xl border ${currentTheme.bgColor === 'bg-black' ? 'border-gray-800' : 'border-gray-200'} transition-all duration-300`}
                    variants={itemVariants}
                    whileHover="hover"
                    variants={cardVariants}
                  >
                    <div className="flex items-start space-x-6">
                      <motion.div
                        className={`text-4xl bg-gradient-to-r ${currentTheme.accent} p-4 rounded-xl shadow-lg`}
                        animate={{
                          y: [0, -5, 0],
                          transition: {
                            duration: 3,
                            repeat: Infinity
                          }
                        }}
                      >
                        {edu.icon}
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className={`${currentTheme.textColor} text-2xl font-bold mb-2`}>{edu.title}</h3>
                            <p className={`${currentTheme.highlight} font-semibold text-lg`}>{edu.institution}</p>
                            <p className="text-gray-400">{edu.period}</p>
                          </div>
                          <div className="text-right">
                            <motion.div
                              className={`bg-gradient-to-r ${currentTheme.accent} text-white px-4 py-2 rounded-full font-bold text-lg`}
                              whileHover={{ scale: 1.05 }}
                            >
                              {edu.grade}
                            </motion.div>
                            <p className="text-sm text-gray-400 mt-1">Grade</p>
                          </div>
                        </div>

                        <p className={`${currentTheme.textColor} opacity-90 mb-6`}>{edu.description}</p>

                        <div className="grid md:grid-cols-2 gap-4">
                          {edu.highlights.map((highlight, i) => (
                            <motion.div
                              key={i}
                              className="flex items-start space-x-3 group"
                              whileHover={{ x: 5 }}
                            >
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentTheme.accent} mt-2 group-hover:scale-150 transition-transform`}></div>
                              <p className={`${currentTheme.textColor} opacity-90 group-hover:opacity-100 transition-opacity`}>
                                {highlight}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Skills Section */}
          {activeTab === 'skills' && (
            <motion.div
              className="max-w-6xl mx-auto"
              variants={containerVariants}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(skills).map(([category, skillList]) => (
                  <motion.div
                    key={category}
                    className={`${currentTheme.card} p-6 rounded-2xl border ${currentTheme.bgColor === 'bg-black' ? 'border-gray-800' : 'border-gray-200'} transition-all duration-300`}
                    variants={itemVariants}
                    whileHover="hover"
                    variants={cardVariants}
                  >
                    <h3 className={`${currentTheme.textColor} text-xl font-bold mb-4 capitalize flex items-center`}>
                      {category === 'frontend' && (
                        <motion.span
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity
                          }}
                        >
                          🎨
                        </motion.span>
                      )}
                      {category === 'backend' && '⚙️'}
                      {category === 'database' && '🗄️'}
                      {category === 'tools' && '🛠️'}
                      <span className="ml-2">{category.replace('frontend', 'Frontend').replace('backend', 'Backend').replace('database', 'Database').replace('tools', 'Tools')}</span>
                    </h3>
                    <div className="space-y-3">
                      {skillList.map((skill, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center justify-between group"
                          whileHover={{ x: 5 }}
                        >
                          <span className={`${currentTheme.textColor} group-hover:text-purple-300 transition-colors`}>{skill}</span>
                          <motion.div
                            className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentTheme.accent}`}
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{
                              duration: 2 + index * 0.3,
                              repeat: Infinity
                            }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
        >
          <div className="inline-flex items-center space-x-4">
            <motion.button
              className={`${currentTheme.button} text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.a
                href="#ContactMe"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              >
                📧
              </motion.a>
              <span>Get in Touch</span>
            </motion.button>
            <motion.a
              href="/resume/Prabhakar_Rajput.pdf"
              download
              className={`border-2 border-purple-500 ${currentTheme.specialText} px-8 py-4 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center space-x-2`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Download Résumé</span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}