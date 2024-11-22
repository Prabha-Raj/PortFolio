    import resume from "../assets/Resume of Prabhakar.pdf";
    import { useEffect } from "react";
    import AOS from "aos";
    import "aos/dist/aos.css"; // Import AOS CSS

    export default function SkillsSec() {
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
            <>
                <div id="skills" className="w-full skills-container p-10 max-md:px-16 px-32">
                    <h1 className="text-2xl font-bold">My Skills</h1>
                    <div className="max-md:w-full skills-wrapper grid grid-cols-2 max-md:grid-cols-1 flex-wrap gap-5 my-5">
                        {/** Skills List */}
                        {[
                            { name: "MERN Stack", percentage: 75 },
                            { name: "Tailwind CSS", percentage: 75 },
                            { name: "Shadcn UI", percentage: 40 },
                            { name: "PHP", percentage: 65 },
                            { name: "MySQL", percentage: 55 },
                            { name: "Django", percentage: 80 },
                            { name: "Core Java", percentage: 85 },
                            { name: "Bootstrap", percentage: 70 },
                            { name: "JavaScript", percentage: 80 },
                            { name: "C/C++", percentage: 40 },
                            { name: "Git", percentage: 40 },
                            { name: "GitHub", percentage: 70 },
                        ].map((skill, index) => (
                            <div
                                key={index}
                                className="w-full flex max-md:flex-col items-center justify-between gap-14 "
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-delay={index * 100}
                            >
                                <div className="w-full max-md:w-full">
                                    <div className="w-full flex items-center justify-between my-1">
                                        <span>{skill.name}</span>
                                        <span>{skill.percentage}%</span>
                                    </div>
                                    <div className="w-full h-2 bg-slate-50">
                                        <div
                                            className="h-2 bg-[#9626b3] rounded-2xl z-[-3]"
                                            style={{
                                                
                                                width: 0, // Start at 0 width
                                                animation: `fillBar ${index * 0.5 + 1}s forwards`,
                                                animationDelay: `${index * 0.5}s`,
                                                '--skill-width': `${skill.percentage}%`,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div data-aos="zoom-in" className="text-center my-16">
                        <a href={resume} target="_blank" rel="noopener noreferrer" >
                            <button className="h-14 w-56 border-4 font-bold border-black text-black hover:text-white hover:bg-black">
                                Download CV
                            </button>
                        </a>
                    </div>
                </div>

                <style>
                    {`
                        @keyframes fillBar {
                            0% {
                                width: 0;
                            }
                            100% {
                                width: var(--skill-width);
                            }
                        }
                    `}
                </style>
            </>
        );
    }
