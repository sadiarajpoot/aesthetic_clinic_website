"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import bg from "../public/bg.webp"
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const Testimonials_2 = () => {
  const testimonials = [
    {
      id: 1,
      quote: "I had been struggling with premature aging signs and lost confidence. The natural-looking results completely transformed my appearance without looking overdone.",
      author: "Sarah Khan",
      role: "Marketing Director",
      image: "/client1.jpg"
    },
    {
      id: 2,
      quote: "After years of acne scars, I'd given up on having clear skin. The laser treatments were life-changing - my skin texture improved dramatically in just a few sessions.",
      author: "Ali Rahman",
      role: "Software Engineer",
    },
    {
      id: 3,
      quote: "The subtle enhancements to my facial contours gave me a refreshed, youthful look without anyone noticing I'd had work done. The team understood exactly what I wanted.",
      author: "Fatima Ahmed",
      role: "Fashion Designer",
     
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bg}
          alt="Aesthetic Clinic Background"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-rose-300">HAPPY CLIENTS</span> <br />
            WITH HAPPY WORDS
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-rose-100"
          >
            View all our happy clients feedback
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative h-[400px] mb-12">
          <AnimatePresence custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 items-center">
               
                  <div>
                    <div className="text-rose-500 text-3xl mb-4">
                      <FaQuoteLeft />
                    </div>
                    <p className="text-gray-700 mb-6 italic text-lg">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="font-bold text-gray-800 text-xl">
                        {testimonials[currentIndex].author}
                      </h4>
                      <p className="text-rose-600">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-md z-20 ml-4"
          >
            <FaArrowLeft className="text-rose-600 text-xl" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-md z-20 mr-4"
          >
            <FaArrowRight className="text-rose-600 text-xl" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-rose-600 w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#f43f5e",
              color: "white"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-rose-600 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto"
          >
            View All Testimonials
            <FaArrowRight />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials_2;