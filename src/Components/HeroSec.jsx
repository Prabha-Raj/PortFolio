import { useState, useEffect } from "react";

export default function HeroSec() {
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Theme configuration
  const currentTheme = {
    bgColor: "bg-gradient-to-br from-gray-900 via-black to-gray-800",
    textColor: "text-white",
    specialText: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600",
    accent: "from-blue-500/30 to-purple-500/30",
    button: "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700",
    accentBorder: "border-blue-500/50"
  };
  
  const roles = [
    { 
      title: "Web Developer", 
      emoji: "🌐", 
      code: "const buildWeb = () => { return 'awesome'; }", 
      color: "text-blue-400",
      gradient: "from-blue-400 to-cyan-400"
    },
    { 
      title: "Frontend Engineer", 
      emoji: "💻", 
      code: "<Component render={() => magic} />", 
      color: "text-purple-400",
      gradient: "from-purple-400 to-pink-400"
    },
    { 
      title: "UI/UX Designer", 
      emoji: "🎨", 
      code: "design.system({ beautiful: true })", 
      color: "text-pink-400",
      gradient: "from-pink-400 to-rose-400"
    },
    { 
      title: "React Specialist", 
      emoji: "⚛️", 
      code: "useEffect(() => { magic() }, [always])", 
      color: "text-cyan-400",
      gradient: "from-cyan-400 to-blue-400"
    },
    { 
      title: "Full Stack Developer", 
      emoji: "🚀", 
      code: "server.connect().then(deploy)", 
      color: "text-green-400",
      gradient: "from-green-400 to-emerald-400"
    }
  ];

  // Enhanced floating tech icons
  const techIcons = [
    { icon: "⚛️", size: "text-4xl", pos: "top-1/4 left-1/4", delay: 0 },
    { icon: "⚡", size: "text-3xl", pos: "top-1/3 right-1/4", delay: 0.5 },
    { icon: "🚀", size: "text-5xl", pos: "bottom-1/3 right-1/3", delay: 1 },
    { icon: "💻", size: "text-3xl", pos: "bottom-1/4 left-1/3", delay: 1.5 },
    { icon: "🎨", size: "text-2xl", pos: "top-10 right-10", delay: 2 },
    { icon: "🌐", size: "text-xl", pos: "bottom-20 left-20", delay: 2.5 },
    { icon: "{ }", size: "text-4xl", pos: "top-1/2 left-10", delay: 3 },
    { icon: "</>", size: "text-3xl", pos: "bottom-1/2 right-10", delay: 3.5 }
  ];

  // Code snippets for background
  const codeSnippets = [
    "const developer = 'Prabhakar';",
    "function createMagic() {",
    "  return innovation + passion;",
    "}",
    "export default AwesomeCode;",
    "// Building the future...",
    "npm install creativity",
    "git commit -m 'Amazing work'",
    "const skills = ['React', 'Node'];",
    "while(learning) { grow(); }",
    "const passion = Infinity;",
    "deploy('to-production');"
  ];

  // Auto-rotate roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Floating animation component
  const FloatingIcon = ({ icon, size, pos, delay, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), delay * 1000);
      return () => clearTimeout(timer);
    }, [delay]);

    return (
      <div
        className={`absolute ${pos} ${size} text-white/20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{
          animation: `float ${5 + index}s ease-in-out infinite`,
          animationDelay: `${delay}s`,
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      >
        {icon}
      </div>
    );
  };

  // Typing effect component
  const TypingEffect = ({ text, speed = 100 }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      }
    }, [currentIndex, text, speed]);

    return <span>{displayText}<span className="animate-pulse">|</span></span>;
  };

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .gradient-animate {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        .glow-effect {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      <section
        id="Home"
        className={`min-h-screen ${currentTheme.bgColor} ${currentTheme.textColor} flex items-center justify-between max-lg:flex-col-reverse max-lg:gap-10 p-10 relative overflow-hidden`}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          {/* Gradient Blobs */}
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

          {/* Floating Tech Icons */}
          {techIcons.map((tech, index) => (
            <FloatingIcon
              key={index}
              icon={tech.icon}
              size={tech.size}
              pos={tech.pos}
              delay={tech.delay}
              index={index}
            />
          ))}

          {/* Animated Code Background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="font-mono text-sm p-4 space-y-2">
              {codeSnippets.map((line, index) => (
                <div
                  key={index}
                  className="whitespace-nowrap overflow-hidden"
                  style={{
                    animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 z-10 max-lg:text-center">
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl max-md:text-3xl font-bold leading-tight">
                <span className="block opacity-0 animate-pulse" style={{ animation: 'fadeInUp 1s ease-out 0.5s forwards' }}>
                  Hi, I'm
                </span>
                <span 
                  className={`text-7xl max-md:text-5xl font-black ${currentTheme.specialText} gradient-animate block transform hover:scale-105 transition-transform duration-300 cursor-pointer`}
                  style={{ animation: 'fadeInUp 1s ease-out 1s forwards', opacity: 0 }}
                >
                  PRABHAKAR
                </span>
              </h1>
            </div>

            {/* Animated Role Display */}
            <div className="h-32 relative overflow-hidden">
              <div
                key={currentRole}
                className={`absolute inset-0 flex flex-col items-start max-lg:items-center gap-2 transition-all duration-700 transform`}
                style={{
                  animation: 'slideInUp 0.7s ease-out forwards'
                }}
              >
                <div className="flex items-center gap-4 text-4xl max-md:text-2xl font-bold">
                  <span className="text-5xl animate-bounce" style={{ animationDelay: '0.5s' }}>
                    {roles[currentRole].emoji}
                  </span>
                  <span className={`bg-gradient-to-r ${roles[currentRole].gradient} bg-clip-text text-transparent`}>
                    {roles[currentRole].title}
                  </span>
                </div>
                <div className="text-lg font-mono text-gray-400 bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700/50">
                  <TypingEffect text={roles[currentRole].code} speed={80} />
                </div>
              </div>
            </div>

            {/* Description */}
            <p 
              className="text-2xl max-md:text-xl opacity-80 max-w-lg"
              style={{ animation: 'fadeInUp 1s ease-out 2s forwards', opacity: 0 }}
            >
              Crafting digital experiences with passion from{' '}
              <span className="text-orange-400 font-semibold">Lucknow, India</span> 🇮🇳
            </p>

            {/* Action Buttons */}
            <div 
              className="flex items-center gap-6 max-md:flex-col max-md:gap-4"
              style={{ animation: 'fadeInUp 1s ease-out 2.5s forwards', opacity: 0 }}
            >
              <button className={`px-8 py-4 ${currentTheme.button} rounded-xl font-bold text-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 glow-effect`}>
                <a href="#ViewMyWorks" className="flex items-center gap-2">
                  <span>View My Works</span>
                  <span className="text-xl">🚀</span>
                </a>
              </button>
              
              <a 
                href="#ContactMe" 
                className={`text-xl ${currentTheme.specialText} hover:underline transition-all duration-300 flex items-center gap-2 group`}
              >
                <span>Contact Me</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="flex-1 flex justify-center items-center z-10">
          <div className="relative">
            {/* Floating badges around image */}
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl shadow-xl animate-bounce">
              ⚛️
            </div>
            <div className="absolute -bottom-6 -right-6 w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-xl shadow-xl animate-bounce" style={{ animationDelay: '0.5s' }}>
              🚀
            </div>
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-lg shadow-xl animate-bounce" style={{ animationDelay: '1s' }}>
              💻
            </div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-lg shadow-xl animate-bounce" style={{ animationDelay: '1.5s' }}>
              🎨
            </div>

            {/* Main profile image */}
            <div className="w-80 h-80 max-md:w-64 max-md:h-64 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl glow-effect">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                <img
                  src="images/Prabhakar_half_size_2.jpg"
                  alt="Prabhakar Rajput - Full Stack Developer"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Orbital rings */}
            <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full animate-spin" style={{ animation: 'spin 10s linear infinite' }}></div>
            <div className="absolute inset-4 border border-purple-500/30 rounded-full animate-spin" style={{ animation: 'spin 15s linear infinite reverse' }}></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-sm">Scroll down</span>
            <div className="w-1 h-8 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse"></div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}