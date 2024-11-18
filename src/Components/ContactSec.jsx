import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactSec = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({ duration: 1000 });
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
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const submitEventHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      to_name: 'Prabhakar Rajput',
    };
    emailjs
      .send('service_e4fxwkb', 'template_eqjdq4n', templateParams, 'PBRLIR32x6QxbKOTz')
      .then(
        (result) => {
          setLoading(false);
          setSuccessMessage('Your message has been sent successfully!');
        },
        (error) => {
          setLoading(false);
          setErrorMessage('Oops! Something went wrong. Please try again later.');
        }
      );
  };

  return (
    <div id='ContactMe' className="contact-sec flex max-md:flex-col max-md:gap-10 items-center justify-around py-10 px-6 gap-8 md:gap-16 bg-yellow-400">
      {/* Left Section */}
      <div data-aos="fade-right" className="left max-w-lg flex flex-col gap-5">
        <h1 className="text-5xl font-bold text-gray-950">Let's get in touch</h1>
        <p className="text-gray-900 text-xl">
          I enjoy discussing new projects and design challenges. Please share as much info as possible, so we can get the most out of our first catch-up.
        </p>
        <div className="contact-info text-gray-800 flex flex-col gap-3">
          <p className="text-lg" data-aos="fade-up" data-aos-delay="100">
            <span className="font-bold text-xl">Living In:</span> <br /> Aliganj Sactor A Lucknow, Uttar Pradesh, India.
          </p>
          <p className="text-lg" data-aos="fade-up" data-aos-delay="200">
            <span className="font-bold text-xl">Call:</span> <br /> <a href="callto:8630049758">+91 8630049758</a>
          </p>
          <p className="text-lg" data-aos="fade-up" data-aos-delay="300">
            <span className="font-bold text-xl">Mail:</span> <br /> <a href="mailto:prabhakarrajput78824@gmail.com"> prabhakarrajput78824@gmail.com</a>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div data-aos="fade-left" className="right w-2/5 max-md:w-full flex flex-col gap-6 shadow-md rounded-lg p-8" style={{ backgroundColor: 'rgba(0,0,0,.15 )' }}>
        <h1 className="text-3xl font-bold text-gray-800">Estimate your Project</h1>
        <form onSubmit={submitEventHandler} className="flex flex-col justify-around gap-4 w-full p-5">
          <div className="form-group flex flex-col" data-aos="fade-up" data-aos-delay="100">
            <label htmlFor="name" className="text-gray-900 text-xl mb-2">What is Your Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              className="p-3 border-b-2 text-white placeholder:text-gray-600 text-xl font-bold focus:outline-none focus:border-yellow-500 bg-transparent"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group flex flex-col" data-aos="fade-up" data-aos-delay="200">
            <label htmlFor="email" className="text-gray-900 text-xl mb-2">Your Email Address:</label>
            <input
              type="email"
              name="email"
              id="email"
              className="p-3 border-b-2 text-white text-xl placeholder:text-gray-600 font-bold focus:outline-none focus:border-yellow-500 bg-transparent"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group flex flex-col" data-aos="fade-up" data-aos-delay="300">
            <label htmlFor="message" className="text-gray-900 text-xl mb-2">How Can I Help You?</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              className="p-3 border-b-2 text-white text-xl placeholder:text-gray-600 font-bold focus:outline-none focus:border-yellow-500 bg-transparent"
              placeholder="Describe your project needs"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{ margin: '0 auto' }}
            className="w-3/5 bg-yellow-400 hover:text-white border-2 border-black text-xl font-bold py-3 hover:bg-black transition-colors"
            disabled={loading}
            // data-aos="zoom-in"
            // data-aos-delay="400"
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>

          {successMessage && <p className="text-green-500 mt-4" data-aos="fade-in" data-aos-delay="500">{successMessage}</p>}
          {errorMessage && <p className="text-red-500 mt-4" data-aos="fade-in" data-aos-delay="500">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactSec;
