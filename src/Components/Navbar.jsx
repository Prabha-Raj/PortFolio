import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { id: "home", label: "Home", highlight: true },
  { id: "about", label: "About Me" },
  { id: "services", label: "What I Do" },
  { id: "resume", label: "My Resume" },
  { id: "portfolio", label: "Portfolio" },
  { id: "faqs", label: "FAQs" },
  { id: "testimonials", label: "Clients Reviews" },
  { id: "contact", label: "Contact Me" }
];

const socialLinks = [
  { icon: "ri-twitter-fill", url: "https://twitter.com" },
  { icon: "ri-facebook-fill", url: "https://facebook.com" },
  { icon: "ri-instagram-line", url: "https://instagram.com" },
  { icon: "ri-github-fill", url: "https://github.com" },
  { icon: "ri-linkedin-fill", url: "https://linkedin.com" }
];

export default function Navbar() {
  const { currentTheme, themes, switchTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { 
    navBg, 
    textColor, 
    highlight,
    fontFamily,
    button,
    specialText 
  } = currentTheme;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const changeTheme = () => {
    const currentIndex = themes.findIndex(t => t.name === currentTheme.name);
    const nextIndex = (currentIndex + 1) % themes.length;
    switchTheme(themes[nextIndex].name);
  };

  // Animation variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 25 }
    }
  };

  const menuItemVariants = {
    closed: { x: -50, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1 }
    })
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`${navBg} ${fontFamily} fixed w-full top-0 z-50 backdrop-blur-md border-b border-gray-800/30`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          {/* Logo/Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`${specialText} text-xl sm:text-2xl font-bold`}
          >
            Prabhakar
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <div className="flex gap-4 lg:gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`${link.highlight ? highlight : textColor} hover:${highlight} transition-colors font-medium text-sm lg:text-base`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 lg:gap-4">
              <button
                onClick={changeTheme}
                className={`${textColor} hover:${highlight} text-xl transition-colors`}
                aria-label="Switch theme"
              >
                <i className="ri-contrast-2-fill"></i>
              </button>
              
              <a 
                href="tel:+918630049758" 
                className={`flex items-center gap-1 ${textColor} text-sm lg:text-base`}
              >
                <i className="ri-phone-fill"></i>
                <span className="hidden lg:inline">+91 8630049758</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={changeTheme}
              className={`${textColor} text-xl`}
              aria-label="Switch theme"
            >
              <i className="ri-contrast-2-fill"></i>
            </button>
            
            <button
              onClick={toggleMenu}
              className={`${textColor} text-2xl`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <i className="ri-close-line"></i>
              ) : (
                <i className="ri-menu-line"></i>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 bg-black/95 z-40 pt-20 ${fontFamily}`}
          >
            <div className="container mx-auto px-6 flex flex-col h-full">
              {/* Close Button */}
              <button
                onClick={toggleMenu}
                className={`absolute top-5 right-5 ${textColor} text-2xl`}
                aria-label="Close menu"
              >
                <i className="ri-close-line"></i>
              </button>

              {/* Navigation Links */}
              <motion.div 
                className="flex flex-col gap-8 text-center mt-12"
                initial="closed"
                animate="open"
              >
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    variants={menuItemVariants}
                    custom={i}
                    whileHover={{ scale: 1.05 }}
                    className={`text-2xl ${link.highlight ? highlight : textColor} font-bold`}
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.div>

              {/* Contact and Social Links */}
              <div className="mt-auto pb-12 flex flex-col items-center gap-8">
                <a 
                  href="tel:+918630049758" 
                  className={`flex items-center gap-2 ${highlight} text-xl font-bold`}
                >
                  <i className="ri-phone-fill"></i>
                  <span>+91 8630049758</span>
                </a>

                <div className="flex gap-6 text-2xl">
                  {socialLinks.map((social) => (
                    <a
                      key={social.icon}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${textColor} hover:${highlight} transition-colors`}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}