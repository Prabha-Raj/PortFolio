import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  function handleChange() {
    setOpenMenu(!openMenu);
  }

  // function blackTheme() {
  //   setBgColor("black");
  //   setTextColor("white");
  // }

  // function redTheme() {
  //   setBgColor("red");
  //   setTextColor("white");
  // }

  // function purpleTheme() {
  //   setBgColor("#B415FF");
  //   setTextColor("white");
  // }

  return (
    <>
      {/* Navbar Container */}
      <div
        // style={{ backgroundColor: bgColor, color: textColor }}
        className="navbar-container z-30 bg-gradient-to-r from-[#bd49da] via-pink-300 to-[#bd49da] flex items-center justify-between px-20 max-ms:px-1 max-ms:justify-around gap-5 h-14 w-full sticky top-0 left-0 right-0"
        data-aos="fade-down"
      >
        <div  className="nav_left text-sm font-bold md:text-2xl uppercase" data-aos="fade-right" data-aos-delay="100"
          // style={{
          //   background: "linear-gradient(270deg, #DF8908 10%, #B415FF 100%)",
          //   WebkitBackgroundClip: "text",
          //   color:  "transparent",
            
          // }}
          // style={{
          //     color:textColor
          // }}
        
        >
          Prabhakar
        </div>

        {/* Color Options */}
        {/* <div className="flex items-center justify-center gap-1">
          <div onClick={blackTheme} className="cursor-pointer bg-black h-5 w-5 rounded-full border border-2-white"></div>
          <div onClick={redTheme} className="cursor-pointer bg-red-600 h-5 w-5 rounded-full border border-2-white"></div>
          <div onClick={purpleTheme} className="cursor-pointer bg-[#B415FF] h-5 w-5 rounded-full border border-2-white"></div>
        </div> */}

        <div className="nav_right flex justify-between items-center gap-10 max-sm:gap-2" data-aos="fade-left" data-aos-delay="200">
          <div className="max-sm:text-xs font-bold">
            <i className="ri-phone-fill fa-spin"></i>
            &nbsp;&nbsp;
            <span >(+91) 8630049758, 7668569926</span>
          </div>
          <i className={openMenu ? " " : "ri-menu-line font-bold text-3xl"} onClick={handleChange}></i>
        </div>
      </div>

      {/* Menu Overlay */}
      {openMenu && (
        <div
          style={{ backgroundColor: "rgba(0,0,0,.9)" }}
          className="openMenu text-2xl h-screen w-screen text-white fixed top-10 bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-20 z-20"
          data-aos="fade-in"
        >
          <div className="first absolute top-10 right-20 max-sm:top-5 max-sm:right-10" data-aos="fade-up" data-aos-delay="100">
            <i className="ri-close-line" onClick={handleChange}></i>
          </div>

          {/* Navigation Links */}
          <div className="second grid items-center grid-flow-row gap-4 text-xl font-bold text-center" data-aos="zoom-in" data-aos-delay="200">
            <h1 className="text-yellow-400"><a href="#Home" onClick={handleChange}>Home</a></h1>
            <h1 className="hover:text-yellow-400"><a href="#AboutMe" onClick={handleChange}>About Me</a></h1>
            <h1 className="hover:text-yellow-400"><a href="#WhatIDo" onClick={handleChange}>What I Do</a></h1>
            <h1 className="hover:text-yellow-400"><a href="#MyResume" onClick={handleChange}>My Resume</a></h1>
            <h1 className="hover:text-yellow-400"><a href="#Portfolio" onClick={handleChange}>Portfolio</a></h1>
            <h1 className="hover:text-yellow-400"><a href="#FAQs" onClick={handleChange}>FAQs</a></h1>
            <h1 className="hover:text-yellow-400"><a href="#ClientsReviews" onClick={handleChange}>Clients Reviews</a></h1>
            <h1 className="hover:text-yellow-400"><a href="#ContactMe" onClick={handleChange}>Contact Me</a></h1>
          </div>

          {/* Social Icons */}
          <div className="social-icons flex gap-4 text-4xl text-gray-200">
            <a href="https://x.com/codingworld434?t=-hK2IC1TGFqW--EusfmpYg&s=09" target="_blank" rel="noopener noreferrer">
              <i className="ri-twitter-fill cursor-pointer hover:text-blue-500"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100057055627269&mibextid=JRoKGi" target="_blank" rel="noopener noreferrer">
              <i className="ri-facebook-circle-fill cursor-pointer hover:text-blue-600"></i>
            </a>
            <a href="https://www.instagram.com/coding_lover_boy_2.0/profilecard/?igsh=aDl1M2hqenM5cTFx" target="_blank" rel="noopener noreferrer">
              <i className="ri-instagram-line cursor-pointer hover:text-pink-500"></i>
            </a>
            <a href="https://github.com/Prabha-Raj" target="_blank" rel="noopener noreferrer">
              <i className="ri-github-fill cursor-pointer hover:text-gray-800"></i>
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
              <i className="ri-dribbble-fill cursor-pointer hover:text-pink-400"></i>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
