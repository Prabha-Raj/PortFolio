import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

export default function FAQsSec() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is your educational background?",
            answer: "I completed my diploma in Computer Science & Engineering from UP Polytechnic (BTEUP), Government Polytechnic Bijnor, where I built a solid foundation in programming, data structures, and web development.",
        },
        {
            question: "What technologies are you experienced with?",
            answer: "I have experience with HTML, CSS, JavaScript, PHP, MySQL, Python, Django, React, Tailwind CSS, Bootstrap, Material UI, and the MERN stack.",
        },
        {
            question: "Can you tell me about your recent work experience?",
            answer: "Currently, I am working as an Associate Jr. Developer at Digicoders Technologies, focusing on front-end development with React and working collaboratively on various projects.",
        },
        {
            question: "What projects have you worked on in the past?",
            answer: "In my role at Digicoders and during my internship at Softpro India, I have worked on a range of web applications, focusing on backend functionality, frontend user interfaces, and API integrations.",
        },
        {
            question: "Do you have any experience with version control?",
            answer: "Yes, I am proficient with Git and GitHub, which I use regularly to collaborate on projects, manage code versions, and keep track of project progress.",
        },
        {
            question: "What is your approach to learning new technologies?",
            answer: "I am passionate about continuous learning. I stay updated with industry trends, take online courses, and experiment with new tools and frameworks to enhance my skill set.",
        },
    ];

    return (
        <div
            id="FAQs"
            className="w-full flex items-center justify-around bg-slate-50 py-10 my-8 max-md:flex-col max-md:gap-16"
            data-aos="fade-up"
        >
            <div className="left w-2/5 max-md:w-full max-md:px-16" data-aos="fade-right">
                <h2 className="text-2xl font-bold text-center mb-4 max-md:mb-10" data-aos="fade-up">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            data-aos="fade-up"
                        />
                    ))}
                </div>
            </div>
            <div className="right w-2/5" data-aos="fade-left">
                <img
                    src="https://harnishdesign.net/demo/react/callum/demo/images/faq.png"
                    alt="faq_image"
                    data-aos="zoom-in"
                />
            </div>
        </div>
    );
}

function FAQItem({ question, answer, isOpen, onClick }) {
    return (
        <div className="border-b border-gray-200 pb-4" data-aos="fade-up">
            <button
                onClick={onClick}
                className="w-full text-left flex justify-between items-center py-2 text-lg font-semibold text-gray-800"
                data-aos="fade-right"
            >
                {question}
                <span className={`text-xl transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
                    {isOpen ? "-" : "+"}
                </span>
            </button>
            {isOpen && <p className="text-gray-600 mt-2" data-aos="fade-in">{answer}</p>}
        </div>
    );
}
