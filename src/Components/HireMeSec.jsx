import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext"; // Adjust the import path as needed

export default function HireMeSec() {
  const { currentTheme } = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
      offset: 200,
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };


const socials = [
  {
    href: "tel:+918630049758",
    label: "Call Prabhakar Rajput",
    svg: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2
               19.79 19.79 0 0 1-8.63-3.07
               19.5 19.5 0 0 1-6-6
               19.79 19.79 0 0 1-3.07-8.67
               A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72
               12.84 12.84 0 0 0 .7 2.81
               2 2 0 0 1-.45 2.11L8.09 9.91
               a16 16 0 0 0 6 6l1.27-1.27
               a2 2 0 0 1 2.11-.45
               12.84 12.84 0 0 0 2.81.7
               A2 2 0 0 1 22 16.92z" />
    ),
  },
    {
    href: "https://wa.me/918630049758",
    label: "Chat on WhatsApp",
    svg: (
      <>
        <path d="M16.2 13.6c-.2-.1-1.3-.6-1.5-.7s-.3-.1-.5.1-.6.7-.8.9-.3.2-.5.1c-.2-.1-.9-.4-1.7-1.1-.6-.5-1-1.1-1.1-1.3-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3.1-.1.1-.2.2-.4s0-.3-.1-.4c-.1-.1-.5-1.2-.7-1.6-.2-.4-.4-.3-.5-.3h-.4c-.2 0-.4 0-.6.2-.2.2-.8.8-.8 2s.8 2.3.9 2.4c.1.1 1.6 2.4 3.9 3.3 2.4.9 2.4.6 2.9.6.4 0 1.4-.6 1.6-1.1.2-.5.2-1 .2-1.1 0-.1-.1-.2-.3-.3z"/>
        <path d="M12 2a10 10 0 0 0-8.5 15l-1.5 4.5 4.7-1.5A10 10 0 1 0 12 2z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </>
    ),
  },
  {
    href: "mailto:prabhakarrajput78824@gmail.com",
    label: "Send Email to Prabhakar",
    svg: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12
                 c0 1.1-.9 2-2 2H4
                 c-1.1 0-2-.9-2-2V6
                 c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </>
    ),
  },
  {
    href: "https://www.google.com/maps/place/Aliganj,+Lucknow,+Uttar+Pradesh/@26.8975791,80.9362831,3107m/data=!3m2!1e3!4b1!4m6!3m5!1s0x399957cbf43233f5:0x3a22b7c8a77962f0!8m2!3d26.8983705!4d80.9491069!16s%2Fg%2F122fptvt?entry=ttu",
    label: "Location - Aliganj, Lucknow",
    svg: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13 a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
];


  return (
    <section className="relative overflow-hidden py-20">
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, ${currentTheme.bgColor.includes('gradient') ? 
            'var(--tw-gradient-from)' : currentTheme.bgColor} 0%, ${currentTheme.bgColor.includes('gradient') ? 
            'var(--tw-gradient-to)' : currentTheme.bgColor} 100%)`,
          opacity: 0.8
        }}
      />
      
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <motion.div 
        className="relative z-10 container mx-auto px-6 py-16 rounded-2xl backdrop-blur-sm border"
        style={{
          backgroundColor: currentTheme.card.includes('bg-') ? 
            currentTheme.card.split(' ')[0].replace('bg-', '') : 'rgba(0,0,0,0.7)',
          borderColor: currentTheme.card.includes('border-') ? 
            currentTheme.card.split('border-')[1].split(' ')[0] : 'rgba(255,255,255,0.1)'
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="flex flex-col items-center justify-center gap-10 max-md:gap-y-16 h-full w-full">
          <motion.h1 
            variants={itemVariants}
            className={`text-5xl font-bold max-md:text-3xl ${currentTheme.highlight}`}
            data-aos="slide-down"
          >
            Interested in working together?
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className={`text-xl text-center max-w-2xl ${currentTheme.textColor}`}
            data-aos="fade-up"
          >
            Let's create something amazing! I'm available for freelance work and full-time positions.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              href="#ContactMe"
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              initial="rest"
              animate="rest"
              variants={buttonVariants}
              className={`px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center ${currentTheme.button}`}
              data-aos="zoom-in"
            >
              <span>Hire Me!</span>
            </motion.a>

            <motion.a
              href="#MyProject"
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              initial="rest"
              animate="rest"
              variants={buttonVariants}
              className={`px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center border ${currentTheme.textColor}`}
              style={{
                borderColor: currentTheme.card.includes('border-') ? 
                  currentTheme.card.split('border-')[1].split(' ')[0] : 'rgba(255,255,255,0.3)'
              }}
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <span>View Projects</span>
            </motion.a>
          </div>


<motion.div
  variants={itemVariants}
  className="flex items-center gap-4 mt-8"
  data-aos="fade-up"
  data-aos-delay="400"
>
  {socials.map(({ href, label, svg }) => (
    <motion.a
      key={label}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      aria-label={label}
      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-purple-500 transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={currentTheme.textColor}
      >
        {svg}
      </svg>
    </motion.a>
  ))}
</motion.div>

        </div>
      </motion.div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, ${currentTheme.textColor.replace('text-', '')} 1px, transparent 1px),
            linear-gradient(to bottom, ${currentTheme.textColor.replace('text-', '')} 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}