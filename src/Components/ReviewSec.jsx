import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

export default function ReviewSec() {
    useEffect(() => {
        // Initialize AOS animations on page load
        AOS.init({
          duration: 1000,
          once: false,           
          easing: "ease-in-out", 
          offset: 200, 
        });
      }, []);
    
    return (
        <>
            <div id="ClientsReviews" className="review-sec flex flex-col items-center justify-center gap-20 h-screen">
                <div className="heading text-6xl font-bold px-36 text-center max-md:text-2xl max-md:px-10 max-md:py-0" data-aos="fade-up">
                    What Clients And Colleagues Say About My Work
                </div>
                
                <div className="review-card-wrapper flex items-center justify-center gap-20 max-md:flex-col max-md:px-10 max-md:w-full">
                    <div 
                        className="review-card rounded-xl px-10 py-5 flex flex-col items-start justify-center gap-8"
                        style={{ height: "320px", width: "560px", boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.1)" }}
                        data-aos="fade-right"
                    >
                        <div className="stars flex gap-1 text-2xl text-amber-500">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                        </div>
                        <div className="review-quate text-gray-500 italic">
                            “There are many variations of passages of Lorem available,
                            the majority have suffered alteration in some form, injected
                            humor, words which don’t slightly.”
                        </div>
                        <div className="review-details flex items-center gap-5">
                            <div className="profile rounded-full">
                                <img className="rounded-full" src="https://demos.coderplace.com/wp/WP03/WP03057/wp-content/uploads/2023/07/user-01.jpg" alt="" />
                            </div>
                            <div className="details flex flex-col items-center justify-center gap-5">
                                <p className="name text-2xl font-extrabold">Sanjida Carlose</p>
                                <p className="post text-xl text-gray-500">Manager</p>
                            </div>
                        </div>
                    </div>

                    <div 
                        className="review-card rounded-xl px-10 py-5 flex flex-col items-start justify-center gap-8"
                        style={{ height: "320px", width: "560px", boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.1)" }}
                        data-aos="fade-left"
                    >
                        <div className="stars flex gap-1 text-2xl text-amber-500">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                        </div>
                        <div className="review-quate text-gray-500 italic">
                            “There are many variations of passages of Lorem available,
                            the majority have suffered alteration in some form, injected
                            humor, words which don’t slightly.”
                        </div>
                        <div className="review-details flex items-center gap-5">
                            <div className="profile rounded-full">
                                <img className="rounded-full" src="https://demos.coderplace.com/wp/WP03/WP03057/wp-content/uploads/2023/07/user-01.jpg" alt="" />
                            </div>
                            <div className="details flex flex-col items-center justify-center gap-5">
                                <p className="name text-2xl font-extrabold">Sanjida Carlose</p>
                                <p className="post text-xl text-gray-500">Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
