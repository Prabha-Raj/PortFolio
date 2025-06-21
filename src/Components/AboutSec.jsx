import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function AboutSec() {
  const { currentTheme } = useTheme();

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
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        mass: 0.5
      }
    }
  };

  const statVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 80,
        damping: 10
      }
    })
  };

  const experienceCircleVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 10
      }
    }
  };

  // Floating tech icon animation
  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 5 + Math.random() * 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section
      id="AboutMe"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={`${currentTheme.bgColor} min-h-screen flex flex-col items-center justify-center gap-10 py-20 px-4 sm:px-8 overflow-hidden relative`}
    >
      {/* Enhanced Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Gradient blobs */}
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full filter blur-3xl opacity-10 bg-gradient-to-br ${currentTheme.accent}`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full filter blur-3xl opacity-10 bg-gradient-to-br ${currentTheme.accent}`}></div>
        
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
            variants={floatingVariants}
            initial="float"
            animate="float"
          >
            {tech.icon}
          </motion.div>
        ))}

        {/* Code grid pattern */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-1 opacity-5">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div
              key={i}
              className={`${currentTheme.textColor} border ${currentTheme.textColor} opacity-10`}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.1, 0],
                transition: {
                  delay: Math.random() * 2,
                  duration: 3 + Math.random() * 5,
                  repeat: Infinity
                } 
              }}
            />
          ))}
        </div>
      </div>

      {/* Section Header */}
      <motion.div 
        variants={itemVariants}
        className="relative z-10 text-center"
      >
        <span className={`${currentTheme.button} text-white px-8 py-3 text-lg font-medium rounded-full shadow-lg`}>
          About Me
        </span>
      </motion.div>

      <motion.h2 
        variants={itemVariants}
        className={`${currentTheme.textColor} text-4xl md:text-5xl font-bold text-center relative z-10`}
      >
        Know Me <span className={currentTheme.highlight}>More</span>
      </motion.h2>

      {/* Main Content */}
      <motion.div 
        className="flex items-center justify-center gap-12 w-full max-w-6xl flex-col lg:flex-row relative z-10"
        variants={containerVariants}
      >
        {/* Left Side - Bio */}
        <motion.div 
          className="w-full lg:w-2/3 px-4"
          variants={itemVariants}
        >
          <motion.p 
            className={`${currentTheme.textColor} text-3xl md:text-4xl font-bold mb-6 leading-tight`}
            variants={itemVariants}
          >
            Hi, I'm <span className={currentTheme.highlight}>Prabhakar Rajput</span>
          </motion.p>
          
          <motion.p 
            className={`${currentTheme.textColor} text-lg md:text-xl leading-relaxed mb-6`}
            variants={itemVariants}
          >
            I'm a passionate Full Stack Developer specializing in MERN stack development with 2+ years of hands-on experience. I create robust, scalable web applications with clean code and intuitive user interfaces.
          </motion.p>

          <motion.p 
            className={`${currentTheme.textColor} text-lg md:text-xl leading-relaxed`}
            variants={itemVariants}
          >
            My expertise includes JavaScript, React.js, Node.js, Express.js, and MongoDB. I'm dedicated to continuous learning and staying updated with the latest web technologies to deliver cutting-edge solutions.
          </motion.p>
        </motion.div>

        {/* Right Side - Experience */}
        <motion.div 
          className="flex flex-col items-center justify-center gap-6"
          variants={itemVariants}
        >
          <motion.div 
            className={`h-44 w-44 rounded-full flex items-center justify-center ${currentTheme.button} text-white shadow-xl relative`}
            variants={experienceCircleVariants}
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-7xl font-bold">2+</span>
            {/* Animated tech orbit */}
            <motion.div 
              className="absolute h-full w-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {["⚛️", "💻", "🚀"].map((icon, i) => (
                <motion.span
                  key={i}
                  className="absolute text-xl"
                  style={{
                    left: `${50 + 40 * Math.cos((i * 120 * Math.PI) / 180)}%`,
                    top: `${50 + 40 * Math.sin((i * 120 * Math.PI) / 180)}%`
                  }}
                >
                  {icon}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.p 
            className={`${currentTheme.textColor} text-2xl font-semibold text-center`}
            variants={itemVariants}
          >
            Years of <span className={currentTheme.highlight}>Experience</span>
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Personal Info Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mt-12 px-4 relative z-10"
        variants={containerVariants}
      >
        {[
          { label: "Full Name:", value: "Prabhakar Rajput" },
          { 
            label: "Email:", 
            value: "prabhakarraj434@gmail.com", 
            link: true 
          },
          { 
            label: "Education:", 
            value: "Diploma in Computer Science (2021-2024)" 
          },
          { 
            label: "Location:", 
            value: "Lucknow, Uttar Pradesh" 
          },
          { 
            label: "Phone:", 
            value: "+91 8630049758" 
          },
          { 
            label: "Freelance:", 
            value: "Available", 
            highlight: true 
          },
          { 
            label: "Languages:", 
            value: "Hindi, English" 
          },
          { 
            label: "Interests:", 
            value: "Coding, Music, Gaming" 
          }
        ].map((item, i) => (
          <motion.div 
            key={item.label}
            className={`${currentTheme.card} p-6 rounded-xl border ${currentTheme.bgColor === 'bg-black' ? 'border-gray-800' : 'border-gray-200'} hover:border-${currentTheme.accent.split(' ')[1].split('-')[1]}-400 transition-all relative overflow-hidden`}
            variants={statVariants}
            custom={i}
            whileHover={{ 
              y: -5,
              boxShadow: `0 10px 20px -5px rgba(var(--${currentTheme.name}-shadow), 0.1)`
            }}
          >
            {/* Mini code decoration */}
            <div className={`absolute -bottom-2 -right-2 text-6xl opacity-5 ${currentTheme.textColor}`}>
              {i % 3 === 0 ? "</>" : i % 3 === 1 ? "{ }" : "()"}
            </div>
            <p className={`${currentTheme.textColor} opacity-80 text-sm mb-1 relative z-10`}>{item.label}</p>
            {item.link ? (
              <a 
                href={`mailto:${item.value}`} 
                className={`${currentTheme.highlight} text-lg font-bold hover:underline break-all relative z-10`}
              >
                {item.value}
              </a>
            ) : (
              <p className={`${item.highlight ? currentTheme.highlight : currentTheme.textColor} text-lg font-bold relative z-10`}>
                {item.value}
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}