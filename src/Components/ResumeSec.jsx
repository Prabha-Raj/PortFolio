import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

export default function ResumeSec() {
    useEffect(() => {
        // Initialize AOS animations
        AOS.init({
          duration: 500,  // Animation duration (in ms)
          once: false,    // Animation will trigger every time the element comes into view
          easing: "ease-in-out", // Animation easing
          offset: 200,    // Offset for the trigger point (adjust as needed)
          delay:200
        });
      }, []);
    return (
        <>
            <div id="MyResume" className="resume_heading text-center mt-5">
                <p data-aos="fade-up" data-aos-duration="800"><span className="bg-[#9626b3] text-white px-5 py-2 text-xl">Resume</span></p>
                <p data-aos="fade-up" data-aos-duration="1200" className="text-4xl max-md:text-2xl max-md:px-3 font-bold text-gray-800 my-5">A summary of My Resume</p>
            </div>

            <div className="main-sec flex items-start justify-around gap-5 px-32 max-md:px-16 h-full my-10 max-md:flex-col">
                {/* Education Section with AOS */}
                <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    className="education-sec w-1/2 max-sm:w-full"
                >
                    <h1 className="text-3xl max-md:xl font-bold my-8" data-aos="fade-up">My Education</h1>
                    <div className="edu-wrapper grid grid-flow-row items-center justify-center gap-2 px-5 border-l-2 border-[#9626b3]">
                        <h3 className="text-xl font-semibold" data-aos="fade-up">Diploma in Computer Science & Engineering</h3>
                        <span className="font-semibold text-gray-700" data-aos="fade-up">Board of Technical Education Uttar Pradesh / 2021 - 2024</span>
                        <p className="text-gray-500" data-aos="fade-up">My diploma in Computer Science & Engineering provided a strong foundation in software development and engineering fundamentals, with coursework in:</p>
                        <ul className="text-gray-500">
                            <li data-aos="fade-up"><span className="font-bold">Programming & Algorithms: </span><span>Mastery in programming languages and algorithmic problem-solving.</span></li>
                            <li data-aos="fade-up"><span className="font-bold">Data Structures: </span><span>Proficient in efficient data handling and manipulation.</span></li>
                            <li data-aos="fade-up"><span className="font-bold">Database Management: </span><span>Skilled in designing and querying databases.</span></li>
                            <li data-aos="fade-up"><span className="font-bold">Computer Networks: </span><span>Understanding of networking protocols and data communication.</span></li>
                            <li data-aos="fade-up"><span className="font-bold">Software Engineering: </span><span>Knowledge of development methodologies and version control.</span></li>
                        </ul>
                        <p className="text-gray-500" data-aos="fade-up">This diploma equipped me with the technical skills that complement my hands-on experience in HTML, CSS, JavaScript, Python, Django, and the MERN stack.</p>
                        <hr className="my-3" />
                        <h3 className="text-xl font-semibold" data-aos="fade-up">Matriculation (10th Grade) In Science Stream</h3>
                        <span className="font-semibold text-gray-700" data-aos="fade-up">Uttar Pradesh Board / 2017 - 2019</span>
                        <p className="text-gray-500" data-aos="fade-up">I completed my matriculation with a focus on building a strong foundation in science and mathematics. During this time, I developed key analytical and problem-solving skills, which have been essential in my journey toward a career in technology. My coursework emphasized:</p>
                        <ul className="text-gray-500">
                            <li data-aos="fade-up"><span className="font-bold">Mathematics:</span><span> Advanced problem-solving, logical reasoning, and critical thinking.</span></li>
                            <li data-aos="fade-up"><span className="font-bold">Science:</span><span>A comprehensive understanding of core scientific principles, fostering curiosity and analytical thinking.</span></li>
                        </ul>
                        <hr className="my-3" />
                        <h3 className="text-xl font-semibold" data-aos="fade-up">Intermediate Education (12th Grade) In Science Stream</h3>
                        <span className="font-semibold text-gray-700" data-aos="fade-up">Uttar Pradesh Board / 2019 - 2021</span>
                        <p className="text-gray-500" data-aos="fade-up">In my intermediate studies, I focused on building a strong understanding of mathematics and science, which have been crucial in developing my analytical and problem-solving abilities. Key subjects included:</p>
                        <ul className="text-gray-500">
                            <li data-aos="fade-up"><span className="font-bold">Mathematics:</span><span> Advanced concepts in algebra, calculus, and trigonometry, strengthening my logical and critical thinking skills.</span></li>
                            <li data-aos="fade-up"><span className="font-bold">Physics and Chemistry:</span><span>A deep understanding of fundamental principles, fostering a scientific approach and analytical mindset.</span></li>
                        </ul>
                    </div>
                </div>

                {/* Experience Section with AOS */}
                <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="500"
                    className="experience-sec w-1/2 max-sm:w-full"
                >
                    <h1 className="text-3xl max-md:xl font-bold my-8" data-aos="fade-up">My Experience</h1>
                    <div className="ex-wrapper grid grid-flow-row items-center justify-center gap-2 px-5 border-l-2 border-[#9626b3]">
                        <h3 className="text-xl font-semibold" data-aos="fade-up">Jr. Developer</h3>
                        <span className="font-semibold text-gray-700" data-aos="fade-up">DigiCoders Technologies Pvt Ltd Lucknow / Aug-2024 - Present</span>
                        <p className="text-gray-500" data-aos="fade-up">In my role as an Associate Jr. Developer at Digicoders Technologies, I am responsible for developing and enhancing web applications with a focus on frontend technologies, particularly using React. My work involves:</p>
                        <ul className="text-gray-500">
                            <li data-aos="fade-up"><span className="font-bold">Developing Responsive Interfaces: </span><span>Creating user-friendly, responsive, and visually appealing interfaces using React, Tailwind CSS, Bootstrap, and Material UI.</span></li>
                            <li data-aos="fade-up"><span className="font-bold">Collaborative Development: </span><span>Working closely with team members to ensure efficient project workflows, leveraging Git and GitHub for version control and code management.</span></li>
                            <li data-aos="fade-up"><span className="font-bold">Optimization and Debugging: </span><span>Implementing best practices for performance optimization and debugging to deliver efficient and high-quality code.</span></li>
                            <li data-aos="fade-up"><span className="font-bold">Learning and Growth: </span><span>Actively expanding my skill set by collaborating on challenging projects, gaining hands-on experience, and refining my expertise in the MERN stack.</span></li>
                        </ul>
                        <hr className="my-3" />
                        <h3 className="text-xl font-semibold" data-aos="fade-up">Summer Internship</h3>
                        <span className="font-semibold text-gray-700" data-aos="fade-up">Softpro India Computer Technologies Pvt. Ltd., Lucknow, / July 2023 - September 2023</span>
                        <p className="text-gray-500" data-aos="fade-up">During my summer internship at Softpro India, I gained practical experience in Python and Django, working on real-world web development projects. My role as a trainee allowed me to:</p>
                        <ul className="text-gray-500">
                            <li data-aos="fade-up"><span className="font-bold">Develop Web Applications: </span><span>Built dynamic web applications using Python and Django, focusing on backend functionality and database integration.</span></li>
                            <li data-aos="fade-up"><span className="font-bold">Implement RESTful APIs: </span><span>Worked on API development, connecting front-end interfaces with backend logic, enhancing my backend development skills.</span></li>
                            <li data-aos="fade-up"><span className="font-bold">Problem Solving and Debugging: </span><span>Identified and resolved issues within code, optimized application performance, and ensured a smooth user experience.</span></li>
                            <li data-aos="fade-up"><span className="font-bold">Collaborate with Industry Mentors: </span><span>Received valuable guidance and feedback from experienced developers, helping me improve my coding practices and learn new technologies.</span></li>
                        </ul>
                        <p className="text-gray-500" data-aos="fade-up">This hands-on experience deepened my knowledge of web development and reinforced my interest in pursuing a career in software engineering. It provided a solid foundation in backend development and helped me understand the importance of clean, efficient code and best practices.</p>                       
                    </div>
                </div>
            </div>
        </>
    );
}
