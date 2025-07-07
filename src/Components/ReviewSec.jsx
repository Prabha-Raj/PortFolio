import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Star, MapPin, ChevronLeft, ChevronRight, Quote, CheckCircle, Users, Award, TrendingUp, Clock } from "lucide-react";

export default function ReviewSec() {
    const { currentTheme } = useTheme();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);

    const reviews = [
        {
            name: "Rajesh Kumar",
            profile: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
            reviewText: "Outstanding work! He built our e-commerce website with React and Node.js. The performance is amazing and our sales increased by 40% in just 2 months. Very professional and delivered before deadline.",
            post: "Business Owner",
            city: "Delhi, India",
            rating: 5,
            project: "E-commerce Platform",
            outcome: "40% Sales Increase"
        },
        {
            name: "Priya Sharma",
            profile: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format",
            reviewText: "Absolutely thrilled with my restaurant's website! The online ordering system works perfectly and the design is stunning. My customers love the user experience. Best investment for my business!",
            post: "Restaurant Owner",
            city: "Mumbai, India",
            rating: 5,
            project: "Restaurant Website",
            outcome: "Perfect UX Design"
        },
        {
            name: "Amit Verma",
            profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format",
            reviewText: "Incredible developer! He created a custom CRM system for our startup using MERN stack. The solution perfectly fits our needs and the code quality is top-notch. Highly recommended!",
            post: "Startup Founder",
            city: "Bangalore, India",
            rating: 5,
            project: "CRM System",
            outcome: "Top-notch Quality"
        },
        {
            name: "Sneha Gupta",
            profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format",
            reviewText: "Amazing experience! He built our educational platform with React and integrated payment gateway seamlessly. Students love the interface and our enrollment increased by 60%.",
            post: "Education Director",
            city: "Pune, India",
            rating: 5,
            project: "Educational Platform",
            outcome: "60% More Enrollments"
        },
        {
            name: "Vikash Singh",
            profile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format",
            reviewText: "Best decision to work with him! Our portfolio website looks professional and loads super fast. Got multiple client inquiries within the first week. Great communication and affordable rates!",
            post: "Freelance Designer",
            city: "Lucknow, India",
            rating: 5,
            project: "Portfolio Website",
            outcome: "Multiple Inquiries"
        },
        {
            name: "Kavita Mishra",
            profile: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop&crop=face&auto=format",
            reviewText: "Exceptional developer! He created our salon booking app with React Native. Customers can now easily book appointments online. The app is smooth, user-friendly and boosted our business significantly.",
            post: "Salon Owner",
            city: "Gurgaon, India",
            rating: 5,
            project: "Booking Mobile App",
            outcome: "Business Boost"
        }
    ];

    // Auto-play functionality
    useEffect(() => {
        if (autoPlay) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % reviews.length);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [autoPlay, reviews.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % reviews.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    return (
        <motion.section
            id="ClientsReviews"
            className={`${currentTheme.bgColor} py-20 px-4 sm:px-8 relative overflow-hidden`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-16"
                    variants={itemVariants}
                >
                    <motion.span 
                        className={`${currentTheme.button} text-white px-6 py-2 text-sm font-semibold rounded-full inline-block mb-4`}
                        whileHover={{ scale: 1.05 }}
                    >
                        ⭐ Client Success Stories
                    </motion.span>
                    
                    <motion.h2 
                        className={`${currentTheme.textColor} text-4xl md:text-6xl font-bold mb-4`}
                        variants={itemVariants}
                    >
                        What Clients Say About
                        <span className={`${currentTheme.specialText} block`}>My Work</span>
                    </motion.h2>

                    <motion.p 
                        className={`${currentTheme.textColor} opacity-80 text-lg max-w-2xl mx-auto`}
                        variants={itemVariants}
                    >
                        Real feedback from real clients who trusted me with their digital transformation
                    </motion.p>
                </motion.div>

                {/* Carousel Container */}
                <motion.div 
                    className="relative"
                    variants={itemVariants}
                    onHoverStart={() => setAutoPlay(false)}
                    onHoverEnd={() => setAutoPlay(true)}
                >
                    {/* Main Carousel */}
                    <div className="relative h-[500px] md:h-[400px] mb-8 overflow-hidden rounded-3xl">
                        <AnimatePresence initial={false} custom={currentSlide}>
                            <motion.div
                                key={currentSlide}
                                custom={currentSlide}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x);
                                    if (swipe < -swipeConfidenceThreshold) {
                                        nextSlide();
                                    } else if (swipe > swipeConfidenceThreshold) {
                                        prevSlide();
                                    }
                                }}
                                className="absolute inset-0 w-full"
                            >
                                <ReviewCard review={reviews[currentSlide]} currentTheme={currentTheme} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Arrows */}
                    <motion.button
                        onClick={prevSlide}
                        className={`absolute left-4 top-1/2 -translate-y-1/2 ${currentTheme.card} w-12 h-12 rounded-full flex items-center justify-center ${currentTheme.textColor} hover:${currentTheme.button} hover:text-white transition-all duration-300 shadow-lg z-10`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronLeft size={24} />
                    </motion.button>

                    <motion.button
                        onClick={nextSlide}
                        className={`absolute right-4 top-1/2 -translate-y-1/2 ${currentTheme.card} w-12 h-12 rounded-full flex items-center justify-center ${currentTheme.textColor} hover:${currentTheme.button} hover:text-white transition-all duration-300 shadow-lg z-10`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronRight size={24} />
                    </motion.button>

                    {/* Dot Indicators */}
                    <div className="flex justify-center gap-3 mt-8">
                        {reviews.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentSlide 
                                        ? currentTheme.button.replace('bg-gradient-to-r', 'bg-gradient-to-r') 
                                        : `${currentTheme.textColor} opacity-30`
                                }`}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Stats Section */}
                <motion.div 
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
                    variants={itemVariants}
                >
                    {[
                        { icon: Users, number: "50+", label: "Happy Clients", color: "text-blue-500" },
                        { icon: Award, number: "100+", label: "Projects Done", color: "text-green-500" },
                        { icon: Star, number: "5.0", label: "Average Rating", color: "text-yellow-500" },
                        { icon: Clock, number: "24/7", label: "Support", color: "text-purple-500" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className={`${currentTheme.card} p-6 rounded-2xl text-center`}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                            <div className={`text-3xl font-bold ${currentTheme.textColor} mb-1`}>
                                {stat.number}
                            </div>
                            <div className={`text-sm ${currentTheme.textColor} opacity-70`}>
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div 
                    className="text-center mt-16"
                    variants={itemVariants}
                >
                    <motion.h3 
                        className={`${currentTheme.textColor} text-2xl font-bold mb-4`}
                    >
                        Ready to Join Our Success Stories?
                    </motion.h3>
                    <motion.p 
                        className={`${currentTheme.textColor} opacity-80 mb-6 max-w-2xl mx-auto`}
                    >
                        Let's create something amazing together and make your business the next success story!
                    </motion.p>
                    <motion.a
                        href="#ContactMe"
                        className={`${currentTheme.button} text-white px-8 py-3 rounded-full font-semibold shadow-lg`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start Your Project Today 🚀
                    </motion.a>
                </motion.div>
            </div>
        </motion.section>
    );
}

function ReviewCard({ review, currentTheme }) {
    return (
        <div className={`${currentTheme.card} rounded-3xl p-8 md:p-12 h-full flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden`}>
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -mr-16 -mt-16"></div>
            
            {/* Left Side - Client Info */}
            <motion.div 
                className="flex-shrink-0 text-center md:text-left"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <div className="relative mb-6">
                    <motion.img
                        src={review.profile}
                        alt={review.name}
                        className="w-24 h-24 rounded-full object-cover mx-auto md:mx-0 border-4 border-white shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        onError={(e) => {
                            e.target.src = `https://ui-avatars.com/api/?name=${review.name}&background=4f46e5&color=fff&size=96`;
                        }}
                    />
                    <motion.div
                        className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 500 }}
                    >
                        <CheckCircle className="w-4 h-4 text-white" />
                    </motion.div>
                </div>

                <h3 className={`${currentTheme.textColor} text-xl font-bold mb-2`}>
                    {review.name}
                </h3>
                <p className={`${currentTheme.specialText} text-sm font-medium mb-1`}>
                    {review.post}
                </p>
                <p className={`${currentTheme.textColor} opacity-60 text-sm flex items-center justify-center md:justify-start gap-1 mb-4`}>
                    <MapPin size={14} />
                    {review.city}
                </p>

                {/* Project Badge */}
                <motion.div
                    className={`${currentTheme.button} text-white px-4 py-2 rounded-full text-xs font-semibold inline-block mb-4`}
                    whileHover={{ scale: 1.05 }}
                >
                    {review.project}
                </motion.div>

                {/* Outcome Badge */}
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1">
                    <TrendingUp size={12} />
                    {review.outcome}
                </div>
            </motion.div>

            {/* Right Side - Review Content */}
            <motion.div 
                className="flex-1"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                {/* Stars */}
                <div className="flex justify-center md:justify-start gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: 180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 500 }}
                        >
                            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                    ))}
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                    <Quote className="w-12 h-12 text-blue-500/20 absolute -top-2 -left-2" />
                    <p className={`${currentTheme.textColor} text-lg leading-relaxed pl-8`}>
                        {review.reviewText}
                    </p>
                </div>

                {/* Verified Badge */}
                <motion.div
                    className="flex items-center justify-center md:justify-start gap-2 text-green-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <CheckCircle size={16} />
                    <span className="text-sm font-medium">Verified Client Review</span>
                </motion.div>
            </motion.div>
        </div>
    );
}