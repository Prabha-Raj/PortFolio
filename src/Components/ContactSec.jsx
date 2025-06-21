import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext'; // Adjust import path as needed
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactSec = () => {
  const { currentTheme } = useTheme();
  
  useEffect(() => {
    AOS.init({ 
      duration: 800,
      once: true
    });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const submitEventHandler = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill all fields');
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
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_name: 'Prabhakar Rajput',
        },
        'PBRLIR32x6QxbKOTz'
      );
      
      setSuccessMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setErrorMessage('Failed to send message. Please try again.');
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

  return (
    <section 
      id='ContactMe' 
      className={`min-h-screen py-20 px-6 md:px-12 lg:px-24 ${currentTheme.bgColor}`}
    >
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h1 
          variants={itemVariants}
          className={`text-5xl md:text-6xl font-bold mb-4 ${currentTheme.highlight}`}
          data-aos="fade-down"
        >
          Let's Collaborate
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className={`text-xl mb-12 max-w-3xl ${currentTheme.textColor}`}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
        </motion.p>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div 
            variants={itemVariants}
            className="lg:w-1/2"
            data-aos="fade-right"
          >
            <div className={`p-8 rounded-2xl backdrop-blur-sm ${currentTheme.card}`}>
              <h2 className={`text-3xl font-bold mb-6 ${currentTheme.highlight}`}>Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${currentTheme.button}`}>
                    <FiMapPin className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${currentTheme.textColor}`}>Location</h3>
                    <p className={`${currentTheme.textColor} opacity-80`}>
                      Aliganj Sector A, Lucknow, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${currentTheme.button}`}>
                    <FiPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${currentTheme.textColor}`}>Phone</h3>
                    <a 
                      href="tel:+918630049758" 
                      className={`${currentTheme.textColor} opacity-80 hover:opacity-100 transition-opacity`}
                    >
                      +91 8630049758
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${currentTheme.button}`}>
                    <FiMail className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${currentTheme.textColor}`}>Email</h3>
                    <a 
                      href="mailto:prabhakarrajput78824@gmail.com" 
                      className={`${currentTheme.textColor} opacity-80 hover:opacity-100 transition-opacity`}
                    >
                      prabhakarrajput78824@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className={`text-lg font-semibold mb-4 ${currentTheme.textColor}`}>Connect with me</h3>
                <div className="flex gap-4">
                  {[
                    { icon: <FaLinkedin />, url: "https://linkedin.com" },
                    { icon: <FaGithub />, url: "https://github.com" },
                    { icon: <FaTwitter />, url: "https://twitter.com" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className={`p-3 rounded-full ${currentTheme.card} text-xl ${currentTheme.textColor} hover:${currentTheme.button} transition-colors`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={itemVariants}
            className="lg:w-1/2"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className={`p-8 rounded-2xl backdrop-blur-sm ${currentTheme.card}`}>
              <h2 className={`text-3xl font-bold mb-6 ${currentTheme.highlight}`}>Send Me a Message</h2>
              
              <form onSubmit={submitEventHandler} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label 
                    htmlFor="name" 
                    className={`block text-lg font-medium mb-2 ${currentTheme.textColor}`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full p-4 rounded-lg ${currentTheme.textColor} placeholder-opacity-50 ${currentTheme.card} border ${currentTheme.card.includes('border') ? '' : 'border-opacity-20'} focus:outline-none focus:ring-2 ${currentTheme.button.replace('bg-', 'ring-')}`}
                    placeholder="Enter your name"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label 
                    htmlFor="email" 
                    className={`block text-lg font-medium mb-2 ${currentTheme.textColor}`}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full p-4 rounded-lg ${currentTheme.textColor} placeholder-opacity-50 ${currentTheme.card} border ${currentTheme.card.includes('border') ? '' : 'border-opacity-20'} focus:outline-none focus:ring-2 ${currentTheme.button.replace('bg-', 'ring-')}`}
                    placeholder="Enter your email"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label 
                    htmlFor="message" 
                    className={`block text-lg font-medium mb-2 ${currentTheme.textColor}`}
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full p-4 rounded-lg ${currentTheme.textColor} placeholder-opacity-50 ${currentTheme.card} border ${currentTheme.card.includes('border') ? '' : 'border-opacity-20'} focus:outline-none focus:ring-2 ${currentTheme.button.replace('bg-', 'ring-')}`}
                    placeholder="Tell me about your project"
                    required
                  ></textarea>
                </motion.div>

                <motion.div variants={itemVariants} className="pt-2">
                  <motion.button
                    type="submit"
                    variants={buttonVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    className={`w-full py-4 px-6 rounded-lg text-lg font-bold flex items-center justify-center gap-2 ${currentTheme.button} ${currentTheme.textColor.includes('text-white') ? 'text-white' : 'text-gray-900'}`}
                    disabled={loading}
                  >
                    {loading ? (
                      'Sending...'
                    ) : (
                      <>
                        <FiSend className="text-xl" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.div>

                {successMessage && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg bg-green-500/10 text-green-500`}
                  >
                    {successMessage}
                  </motion.div>
                )}

                {errorMessage && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg bg-red-500/10 text-red-500`}
                  >
                    {errorMessage}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSec;