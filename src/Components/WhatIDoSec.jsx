import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // import AOS styles
import "./styles/Card.css";

export default function Card() {
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
    <div id="WhatIDo" className="bg-slate-50">
      <div className="whatido_heading text-center p-5">
        <p><span className="bg-yellow-400 px-1">What I Do?</span></p>
        <p className="text-4xl max-md:text-2xl max-md:px-3 font-bold text-gray-800">
          How I can help with your next project
        </p>
      </div>
      <div className="card-wrapper max-md:flex-col max-md:p-0">
        {/* Card 1 */}
        <div className="card max-md:p-0 max-md:w-screen" data-aos="fade-up">
          <i className="ri-code-s-slash-line"></i>
          <h1>Front-End Development</h1>
          <p>
            I specialize in building responsive and interactive interfaces using React, Tailwind CSS, and Material UI.
          </p>
        </div>
        {/* Card 2 */}
        <div className="card" data-aos="fade-up" data-aos-delay="200">
          <i className="ri-database-2-line"></i>
          <h1>Back-End Development</h1>
          <p>
            Experienced with Node.js, Express, and MySQL, I can develop and manage robust server-side applications and databases.
          </p>
        </div>
        {/* Card 3 */}
        <div className="card" data-aos="fade-up" data-aos-delay="400">
          <i className="ri-git-repository-line"></i>
          <h1>Version Control</h1>
          <p>
            Proficient in Git and GitHub, I manage code versions and collaborate effectively on projects with development teams.
          </p>
        </div>
      </div>
      <div className="card-wrapper max-md:flex-col max-md:p-0">
        {/* Card 4 */}
        <div className="card max-md:p-0 max-md:w-screen" data-aos="fade-up">
          <i className="ri-line-chart-line"></i>
          <h1>Data Management</h1>
          <p>
            Skilled in MySQL and MongoDB for handling databases, including CRUD operations, queries, and optimizing data flow.
          </p>
        </div>
        {/* Card 5 */}
        <div className="card" data-aos="fade-up" data-aos-delay="200">
          <i className="ri-layout-line"></i>
          <h1>UI/UX Design</h1>
          <p>
            Creating user-friendly and visually appealing designs using Bootstrap, Tailwind CSS, and custom CSS for seamless UX.
          </p>
        </div>
        {/* Card 6 */}
        <div className="card" data-aos="fade-up" data-aos-delay="400">
          <i className="ri-server-line"></i>
          <h1>API Integration</h1>
          <p>
            Experienced in integrating RESTful APIs to enhance functionality and connect front-end interfaces with backend data.
          </p>
        </div>
      </div>
      <div className="card-wrapper max-md:flex-col max-md:p-0">
        {/* Card 7 */}
        <div className="card max-md:p-0 max-md:w-screen" data-aos="fade-up">
          <i className="fa-brands fa-python"></i>
          <h1>Python & Django</h1>
          <p>
            Building efficient web applications and backend systems using Django, including routing, middleware, and database handling.
          </p>
        </div>
        {/* Card 8 */}
        <div className="card" data-aos="fade-up" data-aos-delay="200">
          <i className="ri-settings-3-line"></i>
          <h1>Problem Solving</h1>
          <p>
            Analytical and adept at debugging, I focus on finding optimal solutions to technical challenges using structured approaches.
          </p>
        </div>
        {/* Card 9 */}
        <div className="card" data-aos="fade-up" data-aos-delay="400">
          <i className="ri-stack-line"></i>
          <h1>Full-Stack Development</h1>
          <p>
            Capable of building complete applications with the MERN stack, from front-end interfaces to back-end logic and databases.
          </p>
        </div>
      </div>
      {/* Additional Cards */}
      <div className="card-wrapper max-md:flex-col max-md:p-0">
        {/* Card 10 */}
        <div className="card max-md:p-0 max-md:w-screen" data-aos="fade-up">
          <i className="ri-checkbox-line"></i>
          <h1>Testing & Debugging</h1>
          <p>
            Proficient in unit testing, integration testing, and debugging with tools like Jest, Mocha, and Chrome DevTools to ensure high-quality code.
          </p>
        </div>
        {/* Card 11 */}
        <div className="card" data-aos="fade-up" data-aos-delay="200">
          <i className="ri-cloud-line"></i>
          <h1>Cloud Deployment</h1>
          <p>
            Experience with cloud platforms like AWS and Heroku for deploying full-stack applications, ensuring scalability and reliability.
          </p>
        </div>
        {/* Card 12 */}
        <div className="card" data-aos="fade-up" data-aos-delay="400">
          <i className="ri-tools-line"></i>
          <h1>Automation</h1>
          <p>
            Automating repetitive tasks and workflows with tools like Gulp, Webpack, and CI/CD pipelines to improve efficiency and consistency in development.
          </p>
        </div>
      </div>
      <div className="card-wrapper max-md:flex-col max-md:p-0">
        {/* Card 13 */}
        <div className="card max-md:p-0 max-md:w-screen" data-aos="fade-up">
          <i className="ri-chat-1-line"></i>
          <h1>Client Communication</h1>
          <p>
            Effective communication with clients to gather requirements, provide updates, and ensure that the final product aligns with their needs and expectations.
          </p>
        </div>
        {/* Card 14 */}
        <div className="card" data-aos="fade-up" data-aos-delay="200">
          <i className="ri-file-3-line"></i>
          <h1>Documentation</h1>
          <p>
            Writing clear and comprehensive documentation for codebases, APIs, and workflows, ensuring teams can work efficiently and with clarity.
          </p>
        </div>
        {/* Card 15 */}
        <div className="card" data-aos="fade-up" data-aos-delay="400">
          <i className="ri-heart-line"></i>
          <h1>Passion for Learning</h1>
          <p>
            Always eager to stay up-to-date with new technologies, frameworks, and best practices to provide cutting-edge solutions for every project.
          </p>
        </div>
      </div>
    </div>
  );
}
