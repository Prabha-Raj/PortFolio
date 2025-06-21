import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext'; // Adjust import path as needed
import { motion } from 'framer-motion';
import { 
  FiMail, FiPhone, FiMapPin, 
  FiTwitter, FiFacebook, FiInstagram, 
  FiGithub, FiDribbble 
} from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  const { currentTheme } = useTheme();
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

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
        stiffness: 100
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
    { icon: <FiInstagram />, url: "https://www.instagram.com/coding_lover_boy_2.0", color: "hover:text-pink-500" },
    { icon: <FiGithub />, url: "https://github.com/Prabha-Raj", color: "hover:text-gray-300" },
    { icon: <FiDribbble />, url: "https://dribbble.com", color: "hover:text-pink-400" },
    { icon: <FaLinkedin />, url: "https://linkedin.com", color: "hover:text-blue-500" }
  ];

  const quickLinks = [
    { name: "Home", href: "#Home" },
    { name: "About Me", href: "#AboutMe" },
    { name: "What I Do", href: "#WhatIDo" },
    { name: "My Resume", href: "#MyResume" },
    { name: "Portfolio", href: "#Portfolio" },
    { name: "Contact Me", href: "#ContactMe" }
  ];

  return (
    <footer className={`${currentTheme.bgColor} ${currentTheme.textColor} pt-16 pb-8`}>
      <motion.div 
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact Info */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center md:items-start"
            data-aos="fade-up"
          >
            <h3 className={`text-xl font-bold mb-6 ${currentTheme.highlight}`}>Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${currentTheme.button}`}>
                  <FiPhone className="text-white" />
                </div>
                <a href="tel:+918640049758" className="hover:underline">+91 8640049758</a>
              </li>
              <li className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${currentTheme.button}`}>
                  <FiMail className="text-white" />
                </div>
                <a href="mailto:prabhakarrajput78824@gmail.com" className="hover:underline">
                  prabhakarrajput78824@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${currentTheme.button}`}>
                  <FiMapPin className="text-white" />
                </div>
                <span>Lucknow, Uttar Pradesh, India</span>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className={`text-xl font-bold mb-6 ${currentTheme.highlight}`}>Quick Links</h3>
            <ul className="space-y-3 text-center md:text-left">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className={`hover:${currentTheme.highlight} transition-colors`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center md:items-start"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className={`text-xl font-bold mb-6 ${currentTheme.highlight}`}>Follow Me</h3>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
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
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className={`text-xl font-bold mb-6 ${currentTheme.highlight}`}>Newsletter</h3>
            <form onSubmit={submitEventHandler} className="w-full">
              <div className="flex flex-col gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email address"
                  className={`w-full p-3 rounded-lg ${currentTheme.card} border ${currentTheme.card.includes('border') ? '' : 'border-opacity-20'} focus:outline-none focus:ring-2 ${currentTheme.button.replace('bg-', 'ring-')}`}
                  required
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-3 text-green-500"
                >
                  {successMessage}
                </motion.p>
              )}
              {errorMessage && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
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
            <a 
              href="/privacy-policy" 
              className={`hover:${currentTheme.highlight} transition-colors`}
            >
              Privacy Policy
            </a>
            <a 
              href="/terms-of-service" 
              className={`hover:${currentTheme.highlight} transition-colors`}
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;