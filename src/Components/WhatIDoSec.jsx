import { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

const cardsData = [
  {
    icon: "⚛️",
    heading: "Modern React Development",
    description: "Expert in React 18+, Next.js 14, TypeScript, and state management with Redux Toolkit and Zustand for scalable web applications.",
    skills: ["React 18", "Next.js 14", "TypeScript", "Redux Toolkit"],
    color: "from-blue-400 to-cyan-400",
    particles: ["💫", "⭐", "✨"],
    codeSnippet: "const App = () => <Magic />"
  },
  {
    icon: "🚀",
    heading: "Full-Stack Node.js",
    description: "Building high-performance APIs with Node.js, Express, Fastify, and implementing microservices architecture with Docker containers.",
    skills: ["Node.js", "Express", "Fastify", "Docker"],
    color: "from-green-400 to-emerald-400",
    particles: ["🔥", "💚", "🌟"],
    codeSnippet: "app.listen(3000, () => 'Ready!')"
  },
  {
    icon: "🗄️",
    heading: "Cloud & Database Solutions",
    description: "Experienced with MongoDB, PostgreSQL, Redis, and cloud platforms like AWS, Vercel, and Railway for scalable deployments.",
    skills: ["MongoDB", "PostgreSQL", "AWS", "Redis"],
    color: "from-orange-400 to-red-400",
    particles: ["☁️", "⚡", "🔶"],
    codeSnippet: "db.connect().then(scale)"
  },
  {
    icon: "🔧",
    heading: "DevOps & CI/CD",
    description: "Proficient in Git workflows, GitHub Actions, Docker containerization, and automated deployment pipelines for efficient development.",
    skills: ["Git", "GitHub Actions", "Docker", "CI/CD"],
    color: "from-purple-400 to-pink-400",
    particles: ["🔄", "⚙️", "🎯"],
    codeSnippet: "git push && deploy()"
  },
  {
    icon: "📱",
    heading: "Mobile Development",
    description: "Creating cross-platform mobile apps with React Native and Flutter, ensuring seamless user experience across iOS and Android.",
    skills: ["React Native", "Flutter", "Expo", "Mobile UI"],
    color: "from-indigo-400 to-blue-400",
    particles: ["📲", "💎", "🌈"],
    codeSnippet: "Mobile.render({ cross: 'platform' })"
  },
  {
    icon: "🤖",
    heading: "AI & Machine Learning",
    description: "Integrating AI solutions with OpenAI APIs, LangChain, and building intelligent applications with Python and TensorFlow.",
    skills: ["OpenAI API", "LangChain", "Python", "TensorFlow"],
    color: "from-yellow-400 to-orange-400",
    particles: ["🧠", "⚡", "🔮"],
    codeSnippet: "AI.think().then(innovate)"
  },
  {
    icon: "🎨",
    heading: "Modern UI/UX Design",
    description: "Crafting beautiful interfaces with Tailwind CSS, Framer Motion animations, and design systems using Figma and Shadcn/ui.",
    skills: ["Tailwind CSS", "Framer Motion", "Figma", "Shadcn/ui"],
    color: "from-pink-400 to-rose-400",
    particles: ["🌸", "🎭", "🦄"],
    codeSnippet: "design({ beautiful: true })"
  },
  {
    icon: "⚡",
    heading: "JAMstack & Performance",
    description: "Building lightning-fast websites with JAMstack architecture, optimizing Core Web Vitals, and implementing advanced caching strategies.",
    skills: ["JAMstack", "Core Web Vitals", "Performance", "Caching"],
    color: "from-teal-400 to-cyan-400",
    particles: ["🚀", "💨", "⭐"],
    codeSnippet: "performance.optimize()"
  },
  {
    icon: "🔒",
    heading: "Security & Testing",
    description: "Implementing robust security practices, comprehensive testing with Jest and Cypress, and ensuring code quality with ESLint.",
    skills: ["Security", "Jest", "Cypress", "ESLint"],
    color: "from-red-400 to-pink-400",
    particles: ["🛡️", "🔐", "✅"],
    codeSnippet: "test('secure', () => pass())"
  }
];

export default function WhatIDoSec() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [floatingElements, setFloatingElements] = useState([]);
  const sectionRef = useRef(null);
  
  // Get theme from context
  const { currentTheme } = useTheme();

  // Generate floating elements
  useEffect(() => {
    const elements = [];
    for (let i = 0; i < 20; i++) {
      elements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 2 + 1,
        emoji: ['💫', '⭐', '✨', '🌟', '💎', '🔮', '🎯', '🚀'][Math.floor(Math.random() * 8)],
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

  const FloatingParticle = ({ element, index }) => {
    const [position, setPosition] = useState({ x: element.x, y: element.y });

    useEffect(() => {
      const interval = setInterval(() => {
        setPosition(prev => ({
          x: (prev.x + element.speed * 0.1) % 100,
          y: prev.y + Math.sin(Date.now() * 0.001 + index) * 0.1
        }));
      }, 100);

      return () => clearInterval(interval);
    }, [element.speed, index]);

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

  const createParticleExplosion = (cardIndex) => {
    const card = cardsData[cardIndex];
    return card.particles.map((particle, index) => (
      <div
        key={`${cardIndex}-${index}`}
        className="absolute pointer-events-none text-2xl animate-ping"
        style={{
          left: `${50 + (index - 1) * 20}%`,
          top: `${30 + (index - 1) * 15}%`,
          animationDelay: `${index * 0.1}s`,
          animationDuration: '2s'
        }}
      >
        {particle}
      </div>
    ));
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

  return (
    <>
      <style jsx>{`
        @keyframes dash {
          to { stroke-dashoffset: -10; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }
        @keyframes matrix {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .card-3d {
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        .glow-effect {
          animation: glow 3s ease-in-out infinite alternate;
        }
      `}</style>

      <section
        ref={sectionRef}
        id="WhatIDo"
        className={`${currentTheme.bgColor} ${currentTheme.textColor} py-20 px-4 sm:px-8 relative overflow-hidden min-h-screen`}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {floatingElements.map((element, index) => (
            <FloatingParticle key={element.id} element={element} index={index} />
          ))}

          {/* Matrix-style code rain */}
          <div className="absolute inset-0 opacity-5">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute text-green-400 font-mono text-xs"
                style={{
                  left: `${i * 5}%`,
                  animation: `matrix ${3 + Math.random() * 2}s linear infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              >
                {Array.from({ length: 10 }).map((_, j) => (
                  <div key={j} className="whitespace-nowrap">
                    {Math.random().toString(36).substring(2, 8)}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <ConnectionLines />

          {/* Gradient orbs */}
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16 relative z-10">
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-spin" style={{ animation: 'pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite' }}></div>
            <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 animate-spin" style={{ animation: 'pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite', animationDelay: '1s' }}></div>
            
            <span className={`${currentTheme.button} text-white px-8 py-3 text-lg font-semibold rounded-full inline-flex items-center gap-2 shadow-lg relative z-10 glow-effect`}>
              <span className="animate-bounce">✨</span>
              What I Do?
              <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🚀</span>
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mt-8 mb-6 relative">
            How I can help with your 
            <span className={`${currentTheme.specialText} block relative`}>
              next big project
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-lg -z-10"></div>
            </span>
          </h2>

          <p className="opacity-80 text-xl max-w-3xl mx-auto leading-relaxed">
            Leveraging cutting-edge technologies and modern development practices to build 
            <span className="text-blue-400 font-semibold"> scalable</span>, 
            <span className="text-purple-400 font-semibold"> high-performance</span> solutions
          </p>
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className={`${currentTheme.card} p-8 rounded-2xl flex flex-col items-start gap-6 h-full transition-all duration-500 hover:shadow-2xl cursor-pointer group relative overflow-hidden card-3d`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                transform: hoveredCard === index ? 'translateY(-15px) rotateY(5deg) scale(1.02)' : 'translateY(0) rotateY(0deg) scale(1)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
            >
              {hoveredCard === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {createParticleExplosion(index)}
                </div>
              )}

              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.color} rounded-2xl transition-all duration-500`}
                style={{
                  opacity: hoveredCard === index ? 0.15 : 0,
                  transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)'
                }}
              />

              <div
                className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500"
                style={{
                  background: hoveredCard === index ? `linear-gradient(45deg, transparent, ${card.color.split(' ')[1]}, transparent) border-box` : 'none',
                  WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'source-out'
                }}
              />

              <div className={`${currentTheme.highlight} rounded-2xl p-4 relative z-10 transition-all duration-500 group-hover:scale-110`}>
                <div
                  className="text-4xl transition-all duration-500"
                  style={{
                    transform: hoveredCard === index ? 'rotateY(360deg) scale(1.2)' : 'rotateY(0deg) scale(1)',
                    filter: hoveredCard === index ? 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.8))' : 'none'
                  }}
                >
                  {card.icon}
                </div>
                
                {hoveredCard === index && (
                  <>
                    <div className="absolute inset-0 rounded-2xl border-2 border-blue-500/50 animate-ping"></div>
                    <div className="absolute inset-0 rounded-2xl border-2 border-purple-500/50 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  </>
                )}
              </div>

              <div className="relative z-10 flex-grow">
                <h3 className="text-xl font-bold mb-3 transition-all duration-300 group-hover:text-blue-400">
                  {card.heading}
                </h3>
                
                <p className="opacity-90 leading-relaxed mb-4 transition-all duration-300">
                  {card.description}
                </p>

                <div className="bg-gray-900/50 rounded-lg p-3 mb-4 border border-gray-700/50">
                  <code className="text-green-400 font-mono text-sm">
                    {card.codeSnippet}
                  </code>
                </div>

                <div
                  className="flex flex-wrap gap-2 transition-all duration-500"
                  style={{
                    opacity: hoveredCard === index ? 1 : 0.7,
                    transform: hoveredCard === index ? 'translateY(0)' : 'translateY(10px)'
                  }}
                >
                  {card.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`${currentTheme.button} text-white px-3 py-1 text-sm rounded-full font-medium shadow-sm transition-all duration-300 hover:scale-105`}
                      style={{
                        animationDelay: `${skillIndex * 0.1}s`,
                        animation: hoveredCard === index ? 'float 2s ease-in-out infinite' : 'none'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                style={{
                  width: hoveredCard === index ? '100%' : '0%'
                }}
              />

              <div
                className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500"
                style={{
                  transform: hoveredCard === index ? 'scale(3)' : 'scale(1)',
                  opacity: hoveredCard === index ? 0.8 : 0.3
                }}
              />
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20 relative z-10">
          <div className="relative inline-block">
            <p className="opacity-80 text-xl mb-8 relative">
              Ready to bring your ideas to life?
              <span className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-lg -z-10"></span>
            </p>
            
            <button
              className={`${currentTheme.button} text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl relative overflow-hidden group transition-all duration-500 hover:scale-105`}
              style={{ animation: 'glow 2s ease-in-out infinite alternate' }}
            >
              <a href="#ContactMe" className="relative z-10 flex items-center gap-3">
                Let's Create Something Amazing
                <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">🚀</span>
              </a>
              
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}