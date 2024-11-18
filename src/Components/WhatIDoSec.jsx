import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./styles/Card.css";

const cardsData = [
  {
    icon: "ri-code-s-slash-line",
    heading: "Front-End Development",
    description:
      "I specialize in building responsive and interactive interfaces using React, Tailwind CSS, and Material UI.",
    aosDelay: 0,
  },
  {
    icon: "ri-database-2-line",
    heading: "Back-End Development",
    description:
      "Experienced with Node.js, Express, and MySQL, I can develop and manage robust server-side applications and databases.",
    aosDelay: 200,
  },
  {
    icon: "ri-git-repository-line",
    heading: "Version Control",
    description:
      "Proficient in Git and GitHub, I manage code versions and collaborate effectively on projects with development teams.",
    aosDelay: 400,
  },
  {
    icon: "ri-line-chart-line",
    heading: "Data Management",
    description:
      "Skilled in MySQL and MongoDB for handling databases, including CRUD operations, queries, and optimizing data flow.",
    aosDelay: 0,
  },
  {
    icon: "ri-layout-line",
    heading: "UI/UX Design",
    description:
      "Creating user-friendly and visually appealing designs using Bootstrap, Tailwind CSS, and custom CSS for seamless UX.",
    aosDelay: 200,
  },
  {
    icon: "ri-server-line",
    heading: "API Integration",
    description:
      "Experienced in integrating RESTful APIs to enhance functionality and connect front-end interfaces with backend data.",
    aosDelay: 400,
  },
  {
    icon: "fa-brands fa-python",
    heading: "Python & Django",
    description:
      "Building efficient web applications and backend systems using Django, including routing, middleware, and database handling.",
    aosDelay: 0,
  },
  {
    icon: "ri-settings-3-line",
    heading: "Problem Solving",
    description:
      "Analytical and adept at debugging, I focus on finding optimal solutions to technical challenges using structured approaches.",
    aosDelay: 200,
  },
  {
    icon: "ri-stack-line",
    heading: "Full-Stack Development",
    description:
      "Capable of building complete applications with the MERN stack, from front-end interfaces to back-end logic and databases.",
    aosDelay: 400,
  },
];

export default function Card() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      easing: "ease-in-out",
      offset: 200,
    });
  }, []);

  return (
    <div id="WhatIDo" className="bg-slate-50">
      <div className="whatido_heading text-center p-5">
        <p>
          <span className="bg-[#9626b3] text-white px-5 py-2 text-xl">
            What I Do?
          </span>
        </p>
        <p className="text-4xl max-md:text-2xl max-md:px-3 font-bold mt-5 text-gray-800">
          How I can help with your next project
        </p>
      </div>
      <div className="card-wrapper max-md:flex-col max-md:p-0">
        {cardsData.map((card, index) => (
          <div
          className="card max-md:p-0 max-md:w-screen 
                     hover:bg-gradient-to-r 
                     hover:from-[#bd49da] 
                     hover:via-pink-300 
                     hover:to-[#bd49da] 
                     transition-all 
                     duration-500 
                     ease-in-out"
          key={index}
          data-aos="fade-up"
          data-aos-delay={card.aosDelay}
        >
        
            <i className={card.icon}></i>
            <h1>{card.heading}</h1>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
