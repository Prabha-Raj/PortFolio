import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import emailjs from 'emailjs-com';
const Footer = () => {

  useEffect(() => {
    // Initialize AOS animations on page load
    AOS.init({
      duration: 1000,
      once: false,           
      easing: "ease-in-out", 
      offset: 200, 
    });
  }, []);

  const [formData, setFormData] = useState({
    email: ''
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
      email: formData.subscriberEmail,
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
    <div className='bg-black '>
        <div className="footer h-auto w-full bg-black text-white flex items-center justify-around py-8 px-4 max-sm:flex-col max-sm:gap-6 max-sm:px-2">
      <div className="footer-content flex gap-12 max-sm:flex-col max-sm:items-center max-sm:text-center">
        {/* Left Section */}

 {/* Contact Information */}
 <div data-aos="fade-up" className='flex flex-col items-center gap-5 justify-around'>
        <div
          className="contact-info text-center mt-6">
          <h2 className="font-semibold text-yellow-400 mb-4 text-xl">Contact Info</h2>
          <p className="mb-2">
            <span className="font-bold">Phone:</span> +91 8640049758
          </p>
          <p className="mb-2">
            <span className="font-bold">Email:</span>{" "}
            <a href="mailto:prabhakarrajput78824@gmail.com" className="text-yellow-500 underline">
              prabhakarrajput78824@gmail.com
            </a>
          </p>
          <p className="mb-2">
            <span className="font-bold">Location:</span> Lucknow, Uttar Pradesh, India
          </p>
          
        </div>

         {/* Right Section - Social Links */}
         <div
          className="social-links text-center"
        >
          <h2 className="font-semibold mb-4 text-yellow-400 text-xl">Follow Me</h2>
          <div className="flex justify-center gap-6 text-2xl">
            <a
              href="https://x.com/codingworld434?t=-hK2IC1TGFqW--EusfmpYg&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition duration-300"
            >
              <i className="ri-twitter-fill"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100057055627269&mibextid=JRoKGi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition duration-300"
            >
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a
              href="https://www.instagram.com/coding_lover_boy_2.0/profilecard/?igsh=aDl1M2hqenM5cTFx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition duration-300"
            >
              <i className="ri-instagram-line"></i>
            </a>
            <a
              href="https://github.com/Prabha-Raj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition duration-300"
            >
              <i className="ri-github-fill"></i>
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition duration-300"
            >
              <i className="ri-dribbble-fill"></i>
            </a>
          </div>
        </div>
</div>

</div>

        {/* Middle Section - Quick Links */}
        <div
          className="quick-links text-center max-sm:mb-6"
          data-aos="fade-up"
        >
          <h2 className="font-semibold mb-4 text-yellow-400  text-xl">
            Quick Links
          </h2>
          <ul className="text-lg font-medium">
            <li className="hover:text-yellow-400 transition duration-300">
              <a href="#Home">Home</a>
            </li>
            <li className="hover:text-yellow-400 transition duration-300">
              <a href="#AboutMe">About Me</a>
            </li>
            <li className="hover:text-yellow-400 transition duration-300">
              <a href="#WhatIDo">What I Do</a>
            </li>
            <li className="hover:text-yellow-400 transition duration-300">
              <a href="#MyResume">My Resume</a>
            </li>
            <li className="hover:text-yellow-400 transition duration-300">
              <a href="#Portfolio">Portfolio</a>
            </li>
            <li className="hover:text-yellow-400 transition duration-300">
              <a href="#ContactMe">Contact Me</a>
            </li>
          </ul>
        </div>

       

      {/* Additional Sections */}
      <div className="additional-sections flex flex-col items-center max-sm:gap-4">
        {/* Newsletter Signup */}
        <div
          className="newsletter text-center"
          data-aos="fade-up"
        >
          <form action="" onSubmit={submitEventHandler}>
          <h2 className="font-semibold text-yellow-400 mb-4 text-xl">Subscribe to Newsletter</h2>
          <div className='flex items-center justify-center gap-2'>
          <input
            type="email"
            name='subscriberEmail'
            value={formData.subscriberEmail}
            onChange={handleInputChange}
            placeholder="Your email address"
            className="p-2 bg-transparent border-2 border-white text-white placeholder-gray-300 rounded-md"
          />
          <button
            type="submit"
            style={{ margin: '0 auto' }}
            className="w-[200px] bg-yellow-400 hover:text-black  text-black text-xl font-bold py-3 hover:bg-white transition-colors"
            disabled={loading}
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            {loading ? 'Sending...' : 'Subscibe'}
          </button>
        </div>
        </form>
          {successMessage && <p className="text-green-500 mt-4" data-aos="fade-in" data-aos-delay="500">{successMessage}</p>}
          {errorMessage && <p className="text-red-500 mt-4" data-aos="fade-in" data-aos-delay="500">{errorMessage}</p>}
        </div>

               {/* Privacy Policy & Terms */}
        <div
          className="legal-links text-center mt-6"
          // data-aos="zoom-in"
        >
          <ul className="text-2xl font-medium text-gray-400">
            <li>
              <a href="/privacy-policy" className="hover:text-yellow-400 transition duration-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-of-service" className="hover:text-yellow-400 transition duration-300">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

      </div>
      
    </div>

    <div
          className="bg-black flex max-sm:flex-col max-sm:justify-center max-sm:gap-5 text-center  items-center justify-around text-white   max-sm:mb-6 mt-5 py-5"
          // data-aos="fade-up"
        >
          <p className="font-semibold mb-2 ">
            Copyright © 2023{" "}
            <a
              href=""
              className="text-yellow-500 underline hover:text-yellow-300 transition duration-300"
            >
              Prabhakar
            </a>
            . All Rights Reserved.
          </p>
          
          <p className="font-semibold">
            Designed By{" "}
            <a
              href=""
              className="text-yellow-500 underline hover:text-yellow-300 transition duration-300"
            >
              Prabhakar Rajput
            </a>
          </p>
        </div>
    </div>

  );
};

export default Footer;
