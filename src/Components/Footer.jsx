import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { 
  FiMail, FiPhone, FiMapPin, 
  FiTwitter, FiFacebook, FiInstagram, 
  FiGithub, FiDribbble, FiCode, FiCpu, FiDatabase, FiSmartphone
} from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Footer = () => {
  const { currentTheme } = useTheme();
  
  const [formData, setFormData] = useState({ email: '' });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const submitEventHandler = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      setErrorMessage('Please enter your email');
      return;
    }

    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      await emailjs.send(
        'service_e4fxwkb',
        'template_eqjdq4n',
        {
          email: formData.email,
          to_name: 'Prabhakar Rajput',
        },
        'PBRLIR32x6QxbKOTz'
      );
      setSuccessMessage('Subscribed successfully!');
      setFormData({ email: '' });
    } catch (error) {
      setErrorMessage('Subscription failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
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
      backgroundColor: currentTheme.button.includes('bg-') ? 
        currentTheme.button.split(' ')[0].replace('bg-', '') : 'var(--primary)'
    },
    tap: { scale: 0.98 }
  };

  const socialLinks = [
    { icon: <FiTwitter />, url: "https://x.com/codingworld434", color: "hover:text-blue-400" },
    { icon: <FiFacebook />, url: "https://www.facebook.com/profile.php?id=100057055627269", color: "hover:text-blue-600" },
    { icon: <FiInstagram />, url: "https://www.instagram.com/dev.prabhakar.life", color: "hover:text-pink-500" },
    { icon: <FiGithub />, url: "https://github.com/Prabha-Raj", color: "hover:text-gray-300" },
    // { icon: <FiDribbble />, url: "https://dribbble.com", color: "hover:text-pink-400" },
    { icon: <FaLinkedin />, url: "www.linkedin.com/in/prabhakar-rajput-5721652a3", color: "hover:text-blue-500" }
  ];

  const quickLinks = [
    { name: "Home", href: "#Home" },
    { name: "About Me", href: "#AboutMe" },
    { name: "What I Do", href: "#WhatIDo" },
    { name: "My Resume", href: "#MyResume" },
    { name: "Portfolio", href: "#Portfolio" },
    { name: "Contact Me", href: "#ContactMe" }
  ];

  // Floating tech icons for background
  const techIcons = [
    { icon: FiCode, name: "code", size: "text-4xl" },
    { icon: FiCpu, name: "cpu", size: "text-5xl" },
    { icon: FiDatabase, name: "database", size: "text-3xl" },
    { icon: FiSmartphone, name: "mobile", size: "text-2xl" }
  ];

  return (
    <footer className={`${currentTheme.bgColor} ${currentTheme.textColor} pt-16 pb-8 relative overflow-hidden`}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Gradient blobs */}
        <motion.div 
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full filter blur-3xl opacity-10 bg-gradient-to-br ${currentTheme.accent}`}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
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
        />

        {/* Floating tech icons */}
        {techIcons.map((tech, i) => (
          <motion.div
            key={tech.name}
            className={`absolute ${currentTheme.textColor} opacity-5 ${tech.size}`}
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
            <tech.icon className="w-full h-full" />
          </motion.div>
        ))}

        {/* Binary code rain effect */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          {Array.from({ length: 20 }).map((_, i) => (
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
              {Array.from({ length: 30 }).map((_, j) => (
                <span key={j} className="opacity-70">
                  {Math.random() > 0.5 ? "1" : "0"}
                </span>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact Info */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center md:items-start"
          >
            <motion.h3 
              className={`text-xl font-bold mb-6 ${currentTheme.highlight}`}
              whileHover={{ scale: 1.02 }}
            >
              Contact Info
            </motion.h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className={`p-2 rounded-full ${currentTheme.button}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FiPhone className="text-white" />
                </motion.div>
                <a href="tel:+918640049758" className="hover:underline">+91 8640049758</a>
              </motion.li>
              <motion.li 
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className={`p-2 rounded-full ${currentTheme.button}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FiMail className="text-white" />
                </motion.div>
                <a href="mailto:prabhakarrajput78824@gmail.com" className="hover:underline">
                  prabhakarrajput78824@gmail.com
                </a>
              </motion.li>
              <motion.li 
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className={`p-2 rounded-full ${currentTheme.button}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FiMapPin className="text-white" />
                </motion.div>
                <span>Lucknow, Uttar Pradesh, India</span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <motion.h3 
              className={`text-xl font-bold mb-6 ${currentTheme.highlight}`}
              whileHover={{ scale: 1.02 }}
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-3 text-center md:text-left">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <a 
                    href={link.href} 
                    className={`hover:${currentTheme.highlight} transition-colors`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center md:items-start"
          >
            <motion.h3 
              className={`text-xl font-bold mb-6 ${currentTheme.highlight}`}
              whileHover={{ scale: 1.02 }}
            >
              Follow Me
            </motion.h3>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full ${currentTheme.card} text-xl ${currentTheme.textColor} ${social.color} transition-colors`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center md:items-start"
          >
            <motion.h3 
              className={`text-xl font-bold mb-6 ${currentTheme.highlight}`}
              whileHover={{ scale: 1.02 }}
            >
              Newsletter
            </motion.h3>
            <form onSubmit={submitEventHandler} className="w-full">
              <div className="flex flex-col gap-4">
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email address"
                  className={`w-full p-3 rounded-lg ${currentTheme.card} border ${currentTheme.card.includes('border') ? '' : 'border-opacity-20'} focus:outline-none focus:ring-2 ${currentTheme.button.replace('bg-', 'ring-')}`}
                  required
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.button
                  type="submit"
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  className={`py-3 px-6 rounded-lg font-bold ${currentTheme.button} ${currentTheme.textColor.includes('text-white') ? 'text-white' : 'text-gray-900'}`}
                  disabled={loading}
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </motion.button>
              </div>
              {successMessage && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-green-500"
                >
                  {successMessage}
                </motion.p>
              )}
              {errorMessage && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-red-500"
                >
                  {errorMessage}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="mt-16 pt-8 border-t border-opacity-20 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p>
            Copyright © {new Date().getFullYear()}{" "}
            <a 
              href="#" 
              className={`${currentTheme.highlight} hover:underline`}
            >
              Prabhakar Rajput
            </a>. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <motion.a 
              href="/privacy-policy" 
              className={`hover:${currentTheme.highlight} transition-colors`}
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="/terms-of-service" 
              className={`hover:${currentTheme.highlight} transition-colors`}
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;