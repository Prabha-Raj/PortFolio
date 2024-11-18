import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // import AOS styles

export default function AboutSec() {
  useEffect(() => {
    // Initialize AOS animations on page load
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: false, // Animation will trigger every time the element comes into view
      easing: "ease-in-out", // Animation easing
      offset: 200, // Offset for the trigger point (adjust as needed)
    });
  }, []);

  return (
    <section
      id="AboutMe"
      className="section flex flex-col max-md:px-0 items-center justify-center gap-2 py-20 overflow-x-hidden"
    >
      <p>
        <span className="bg-[#9626b3] text-white px-5 py-2 text-xl">About Me</span>
      </p>
      <h2 className="text-3xl font-bold max-md:text-2xl" data-aos="fade-up">
        Know Me More
      </h2>
      <div
        className="about-main flex items-center justify-center gap-16 max-md:flex-col max-md:p-5"
        data-aos="fade-up"
      >
        <div className="about-left w-2/3 max-md:w-full px-5 " data-aos="fade-right">
          <p className="text-4xl max-md:text-xl">
            Hi, I'm <span className="font-bold text-[#a034bb]">Prabhakar Rajput</span>
          </p>
          <p className="text-2xl max-md:text-base mt-2 leading-relaxed">
            I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and
            slick websites that provide real value to the end user. Thousands of clients have procured
            exceptional results while working with me. Delivering work within time and budget which meets
            client’s requirements is our moto.
          </p>
        </div>
        <div
          className="about-right flex flex-col items-center justify-center gap-7 max-md:w-full"
          data-aos="fade-left"
        >
          <div className="h-32 w-32 max-md:w-full bg-[#bd49da] rounded-full flex items-center content-center justify-center pb-3">
            <span className="text-9xl font-bold">01</span>
          </div>
          <p className="text-2xl font-medium">
            Years of <span className="font-bold">Experience</span>
          </p>
        </div>
      </div>
      <div
        className="about-parsonal w-screen grid grid-flow-col max-md:grid-flow-row max-md:px-0 max-md:justify-center max-md:gap-y-5 items-center justify-around p-10 font-medium text-gray-400"
        
      >
        <div className="name max-md:w-full" data-aos="zoom-in-right" data-aos-duration="00"
            data-aos-delay="200">
          <p>Name:</p>
          <p className="text-base font-bold text-black">Prabhakar Rajput</p>
        </div>
        <div className="email" data-aos="zoom-in-down" data-aos-duration="00"
            data-aos-delay="200">
          <p>Email:</p>
          <p className="text-base font-bold text-black">
            <a href="mailto:prabhakarraj434@gmail.com">prabhakarraj434@gmail.com</a>
          </p>
        </div>
        <div className="dob" data-aos="zoom-in-up" data-aos-duration="00"
            data-aos-delay="200">
          <p>Date of birth</p>
          <p className="text-base font-bold text-black">4 November, 2005</p>
        </div>
        <div className="from" 
            data-aos="zoom-in-left"  
            data-aos-duration="00"
            data-aos-delay="200">
          <p>From:</p>
          <p className="text-base font-bold text-black">Kalyanpur, Etawah UP, India</p>
        </div>
      </div>
    </section>
  );
}
