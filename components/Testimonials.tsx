"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import p1 from "../public/p1.avif"
import p2 from "../public/p2.jpg"
import p3 from "../public/p3.avif"

const testimonials = [
  {
    id: 1,
    name: "Bilal Khan ",
    role: "Actress",
    content: "Dr. Johnsons subtle enhancements made me look refreshed without changing my features. Absolutely natural results!",
    image: p1,
    rating: 5
  },
  {
    id: 2,
    name: "Amir Ali ",
    role: "CEO, TechCorp",
    content: "The thread lift treatment took 10 years off my appearance. My colleagues keep asking why I look so rested.",
    image: p2,
    rating: 5
  },
  {
    id: 3,
    name: "Ayesha Khan",
    role: "Fashion Designer",
    content: "Finally found an aesthetic doctor who understands Asian facial anatomy. The results are perfectly balanced.",
    image: p3,
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    // Auto-rotate on mobile only
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      const interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-rose-100 fonts">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 fonts"
          >
            Patient <span className="norican-regular text-rose-600 norican-regular font-bold"> Testimonials</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto fonts"
          >
            Hear what our patients say about their experience
          </motion.p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 fonts">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="text-rose-400 text-3xl mb-4">
                <FaQuoteLeft />
              </div>
              <p className="text-gray-600 italic mb-6">&quot;{testimonial.content}&quot;</p>
              
              <div className="flex items-center">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-rose-200">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-rose-500 text-sm">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative h-[400px] fonts">
          <AnimatePresence custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction === 1 ? 100 : direction === -1 ? -100 : 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0 bg-white p-8 rounded-xl shadow-lg mx-4"
            >
              <div className="h-full flex flex-col">
                <div className="text-rose-400 text-3xl mb-4">
                  <FaQuoteLeft />
                </div>
                <p className="text-gray-600 italic mb-6 flex-grow">&quot;{testimonials[currentIndex].content}&quot;</p>
                
                <div className="flex items-center">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-rose-200">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonials[currentIndex].name}</h4>
                    <p className="text-rose-500 text-sm">{testimonials[currentIndex].role}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-md z-20 ml-2 fonts"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-md z-20 mr-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-rose-600 w-4" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
