import "./styles/HireMeSec.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

export default function HireMeSec(){
    useEffect(() => {
        // Initialize AOS animations on page load
        AOS.init({
          duration: 1000,
          once: false,           
          easing: "ease-in-out", 
          offset: 200, 
        });
      }, []);
    
    return(
        <>
        <div data-aos="zoom-n" className="hireme-sec flex items-center justify-center">
            <div className="flex flex-col items-center justify-center  gap-10 max-md:gap-y-16 h-full w-full" style={{backgroundColor:"rgba(0, 0, 0, 0.7)"}}>
            <h1 data-aos="slide-down" className="text-4xl text-white font-bold max-md:text-3xl">Interested in working with me?</h1>
            <a data-aos="zoom-in" href="#ContactMe" className="text-lg h-12 w-36 flex items-center justify-center bg-yellow-500"><span>Hire Me!</span></a>
            </div>
        </div>
        </>
    )
}