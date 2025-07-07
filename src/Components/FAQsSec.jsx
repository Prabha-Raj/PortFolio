import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function FAQsSec() {
    const { currentTheme } = useTheme();
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is your educational background?",
            answer: "I completed my diploma in Computer Science & Engineering from UP Polytechnic (BTEUP), Government Polytechnic Bijnor, where I built a solid foundation in programming, data structures, and modern web development technologies.",
            icon: "🎓"
        },
        {
            question: "What modern technologies do you specialize in?",
            answer: "I specialize in React 18+, Next.js 14, TypeScript, Node.js, Python, Django, MongoDB, PostgreSQL, AWS, Docker, and the complete MERN stack. I also work with AI/ML technologies like OpenAI APIs and LangChain.",
            icon: "💻"
        },
        {
            question: "What services do you offer to clients?",
            answer: "I provide comprehensive web development services including custom website development, e-commerce solutions, mobile app development with React Native, API development, database design, performance optimization, and complete digital transformation solutions for businesses.",
            icon: "🎯"
        },
        {
            question: "Do you work as a freelancer? What are your rates?",
            answer: "Yes! I offer freelancing services with competitive and affordable rates. I believe in providing high-quality solutions at budget-friendly prices. My rates vary based on project complexity, but I always ensure maximum value for your investment. Let's discuss your project for a custom quote!",
            icon: "💰"
        },
        {
            question: "What is your current professional experience?",
            answer: "Currently working as an Associate Jr. Developer at Digicoders Technologies, focusing on full-stack development with React, Node.js, and modern deployment practices. I collaborate on enterprise-level projects and contribute to architectural decisions.",
            icon: "🚀"
        },
        {
            question: "How can you help my business grow digitally?",
            answer: "I can help transform your business with modern web solutions - from creating responsive websites that convert visitors to customers, building e-commerce platforms to sell online, developing custom dashboards for business analytics, to implementing SEO strategies and performance optimization for better online visibility.",
            icon: "📈"
        },
        {
            question: "Can you build websites at affordable prices?",
            answer: "Absolutely! I specialize in creating professional, modern websites at very competitive rates. Whether you need a simple business website, portfolio, or complex web application, I ensure you get premium quality without breaking your budget. Quality doesn't have to be expensive!",
            icon: "💡"
        },
        {
            question: "Can you tell me about your recent projects?",
            answer: "I've built scalable web applications, implemented microservices architecture, created AI-powered solutions, and developed mobile apps with React Native. My projects include e-commerce platforms, SaaS applications, and performance-optimized websites.",
            icon: "🛠️"
        },
        {
            question: "What types of businesses do you work with?",
            answer: "I work with startups, small businesses, restaurants, retail stores, service providers, educational institutions, and individual entrepreneurs. From creating their first website to building complex business management systems - I adapt my solutions to fit any industry and budget.",
            icon: "🏢"
        },
        {
            question: "Do you provide ongoing support and maintenance?",
            answer: "Yes! I offer comprehensive post-launch support including regular updates, security patches, performance monitoring, content updates, and technical assistance. I believe in long-term partnerships with my clients to ensure their digital success.",
            icon: "🔧"
        },
        {
            question: "How do you handle project collaboration and version control?",
            answer: "I'm proficient with Git workflows, GitHub Actions for CI/CD, Docker for containerization, and agile development practices. I use modern tools like Jira, Slack, and conduct code reviews to ensure high-quality deliverables.",
            icon: "🔄"
        },
        {
            question: "Can you help with e-commerce and online stores?",
            answer: "Definitely! I can build complete e-commerce solutions with payment gateways, inventory management, order tracking, admin panels, and mobile-responsive designs. Whether it's Shopify customization or custom-built solutions, I'll help you start selling online efficiently.",
            icon: "🛒"
        },
        {
            question: "What's your approach to staying current with technology?",
            answer: "I'm passionate about continuous learning through tech blogs, contributing to open-source projects, attending webinars, and experimenting with cutting-edge frameworks. I regularly update my skills with the latest industry standards and best practices.",
            icon: "📚"
        },
        {
            question: "Do you work with AI and modern deployment practices?",
            answer: "Yes! I integrate AI solutions using OpenAI APIs, implement JAMstack architecture, optimize for Core Web Vitals, and deploy on modern platforms like Vercel, AWS, and Railway with automated CI/CD pipelines.",
            icon: "🤖"
        },
        {
            question: "How fast can you deliver a project?",
            answer: "Project timelines depend on complexity, but I pride myself on quick turnarounds. Simple websites can be delivered in 1-2 weeks, while complex applications may take 4-8 weeks. I always provide realistic timelines and keep you updated throughout the development process.",
            icon: "⚡"
        },
        {
            question: "What's your development process and methodology?",
            answer: "I follow agile methodologies, implement comprehensive testing with Jest and Cypress, ensure security best practices, and focus on performance optimization. I also emphasize clean code, documentation, and scalable architecture patterns.",
            icon: "⚙️"
        }
    ];

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
                damping: 12
            }
        }
    };

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 15,
                delay: 0.3
            }
        }
    };

    return (
        <motion.section
            id="FAQs"
            className={`${currentTheme.bgColor} py-20 px-4 sm:px-8 relative overflow-hidden`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>
                <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto flex items-center justify-between gap-16 max-lg:flex-col relative z-10">
                {/* Left - FAQ Content */}
                <motion.div 
                    className="flex-1 max-w-2xl"
                    variants={itemVariants}
                >
                    {/* Section Header */}
                    <div className="text-center lg:text-left mb-12">
                        <motion.span 
                            className={`${currentTheme.button} text-white px-6 py-2 text-sm font-semibold rounded-full inline-block mb-4`}
                            whileHover={{ scale: 1.05 }}
                        >
                            ❓ Got Questions?
                        </motion.span>
                        
                        <motion.h2 
                            className={`${currentTheme.textColor} text-4xl md:text-5xl font-bold mb-4`}
                            variants={itemVariants}
                        >
                            Frequently Asked
                            <span className={`${currentTheme.specialText} block`}>Questions</span>
                        </motion.h2>

                        <motion.p 
                            className={`${currentTheme.textColor} opacity-80 text-lg`}
                            variants={itemVariants}
                        >
                            Everything you need to know about my services, rates, and how I can help your business succeed online
                        </motion.p>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                faq={faq}
                                index={index}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                currentTheme={currentTheme}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Right - Interactive Visual */}
                <motion.div 
                    className="flex-1 max-w-lg relative"
                    variants={imageVariants}
                >
                    {/* Floating Elements */}
                    <div className="relative">
                        {/* Main Illustration */}
                        <motion.div
                            className={`${currentTheme.card} p-8 rounded-3xl text-center relative overflow-hidden`}
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <motion.div
                                className="text-8xl mb-6"
                                animate={{ 
                                    rotate: [0, 10, -10, 0],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{ 
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            >
                                💡
                            </motion.div>
                            
                            <h3 className={`${currentTheme.textColor} text-2xl font-bold mb-4`}>
                                Ready to Start Your Project?
                            </h3>
                            
                            <p className={`${currentTheme.textColor} opacity-80 mb-6`}>
                                Get affordable, professional web solutions that help your business grow online
                            </p>

                            <motion.a
                                href="#ContactMe"
                                className={`${currentTheme.button} text-white px-6 py-3 rounded-full font-semibold`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get Free Quote 💰
                            </motion.a>
                        </motion.div>

                        {/* Floating Tech Icons */}
                        <motion.div
                            className={`absolute -top-4 -right-4 ${currentTheme.button} w-16 h-16 rounded-2xl flex items-center justify-center text-2xl`}
                            animate={{ 
                                y: [0, -10, 0],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{ 
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            ⚛️
                        </motion.div>

                        <motion.div
                            className={`absolute -bottom-4 -left-4 ${currentTheme.highlight} w-14 h-14 rounded-xl flex items-center justify-center text-xl`}
                            animate={{ 
                                y: [0, 10, 0],
                                rotate: [0, -5, 5, 0]
                            }}
                            transition={{ 
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                        >
                            🚀
                        </motion.div>

                        <motion.div
                            className={`absolute top-1/2 -left-8 ${currentTheme.card} w-12 h-12 rounded-full flex items-center justify-center text-lg border-2 border-purple-500/20`}
                            animate={{ 
                                x: [0, -5, 0],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{ 
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                            }}
                        >
                            💻
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}

function FAQItem({ faq, index, isOpen, onClick, currentTheme }) {
    return (
        <motion.div
            className={`${currentTheme.card} rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.01 }}
        >
            <motion.button
                onClick={onClick}
                className="w-full px-6 py-5 text-left flex justify-between items-center group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <div className="flex items-center gap-4">
                    <span className="text-2xl">{faq.icon}</span>
                    <span className={`${currentTheme.textColor} text-lg font-semibold group-hover:${currentTheme.specialText.replace('text-transparent bg-clip-text bg-gradient-to-r', 'text-transparent bg-clip-text bg-gradient-to-r')} transition-all duration-300`}>
                        {faq.question}
                    </span>
                </div>
                
                <motion.div
                    className={`${currentTheme.button} w-8 h-8 rounded-full flex items-center justify-center text-white font-bold`}
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                    +
                </motion.div>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 30 
                        }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6">
                            <motion.div
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ delay: 0.1 }}
                                className="pl-12"
                            >
                                <p className={`${currentTheme.textColor} opacity-90 leading-relaxed text-base`}>
                                    {faq.answer}
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}