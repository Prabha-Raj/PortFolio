import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // import AOS styles

export default function HeroSec() {
  useEffect(() => {
    // Initialize AOS animations on page load
    AOS.init({
      duration: 1000,  // Animation duration (in ms)
      once: false,    // Animation will trigger every time the element comes into view
      easing: "ease-in-out", // Animation easing
      offset: 200,    // Offset for the trigger point (adjust as needed)
    });

    // Re-initialize AOS on scroll to ensure animations are re-triggered
    const handleScroll = () => {
      AOS.refresh(); // This will refresh AOS and trigger animations on scroll
    };
    
    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
    
      id="Home"
      className="hero-sec flex items-center justify-around max-md:flex-col-reverse max-md:gap-10 p-10"
      data-aos="fade-in" // Adding animation to the background
      data-aos-duration="1500"
    >
      <div
        className="hero-text-wrapper flex flex-col items-start justify-center gap-5"
        data-aos="fade-up" // Example of animation for the text
        data-aos-duration="1200"
      >
        <h1 className="text-5xl max-md:text-3xl uppercase"
        data-aos="zoom-in-down"
        data-aos-duration="1000"
        data-aos-delay="200"
        >
          Hi, I'm a <span className="text-[#b64be7]">Web Developer</span>
        </h1>
        <span className="text-8xl max-md:text-5xl lg:text-7xl font-bold text-[#b415ff] uppercase"
         data-aos="zoom-in"
         data-aos-duration="1000"
         data-aos-delay="200"
        >
          Prabhakar
        </span>
        <p className="text-2xl max-md:text-xl"
        data-aos="zoom-in-right"
        data-aos-duration="1000"
        data-aos-delay="200"
        >
          Located in Lucknow, Uttar Pradesh, India.
        </p>
        <div className="grid grid-flow-col gap-x-10 max-md:gap-x-5 items-center">
          <button className="h-12 w-40 bg-black text-white"
          data-aos="slide-right"
          data-aos-duration="1000"
          data-aos-delay="200"
          >
            <a href="#ViewMyWorks">View My Works</a>
          </button>
          <span className=""
           data-aos="slide-left"
           data-aos-duration="1000"
           data-aos-delay="200"
          >
            <a href="#ContactMe" className="underline mx-2 max-md:mx-1">
              Contact Me
            </a>
            <i className="fa-regular fa-circle-down"></i>
          </span>
        </div>
      </div>
      <div
        className="hero-img-wrapper flex items-center justify-center"
        data-aos="zoom-in" // Animation for the image
        data-aos-duration="2000"
        data-aos-delay="200"
      >
        <div className="h-94 w-96 max-md:h-72 max-md:w-7 border-8  rounded-full flex items-center justify-center">
          <img
            // src="images/profile_pic.jpg"
            src="images/Prabhakar_half_size_2.jpg"
            alt="Profile"
            className="h-96 w-96 max-md:h-72 max-md:w-72 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
