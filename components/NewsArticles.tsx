"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// Import images directly
import skinCare from "../public/skin.webp";
import facial from "../public/FACIAL CONTOURING.webp";
import botox from "../public/BOTOX TREATMENTS.avif";
import laser from "../public/LASER THERAPY.avif";

const NewsArticles = () => {
  const articles = [
    {
      id: 1,
      category: "BOTOX TREATMENTS",
      title: "The Science Behind Natural-Looking Results",
      excerpt: "Discover how our specialists achieve subtle, youthful enhancements while preserving your natural expressions.",
      image: botox,
      delay: 0.1
    },
    {
      id: 2,
      category: "LASER THERAPY",
      title: "Revolutionary Skin Rejuvenation Techniques",
      excerpt: "Learn about our advanced laser treatments that target pigmentation and signs of aging with no downtime.",
      image: laser,
      delay: 0.2
    },
    {
      id: 3,
      category: "FACIAL CONTOURING",
      title: "Non-Surgical Facelift Options in 2024",
      excerpt: "Explore how modern techniques can restore facial volume without invasive procedures.",
      image: facial,
      delay: 0.3
    },
    {
      id: 4,
      category: "SKIN CARE",
      title: "Maintaining Results After Treatment",
      excerpt: "Essential aftercare tips to prolong and enhance your aesthetic treatment results.",
      image: skinCare,
      delay: 0.4
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredArticles = selectedCategory === "ALL" 
    ? articles 
    : articles.filter(article => article.category.includes(selectedCategory));

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            News & <span className="text-indigo-600">Articles</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Insights about premium aesthetic treatments using FDA-approved products and cutting-edge techniques.
          </motion.p>
        </motion.div>

        

        {/* Articles Grid with Animated Presence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredArticles.map((article) => (
              <motion.article
                key={article.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.6,
                  delay: article.delay,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
              >
                <motion.div className="relative h-60 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <motion.div 
                    className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full shadow-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-xs font-medium text-indigo-600">
                      {article.category}
                    </span>
                  </motion.div>
                </motion.div>
                <div className="p-6">
                  <motion.h2 
                    className="text-xl font-bold text-gray-800 mb-3"
                    whileHover={{ color: "#4f46e5" }}
                    transition={{ duration: 0.3 }}
                  >
                    {article.title}
                  </motion.h2>
                  <p className="text-gray-600 mb-6">{article.excerpt}</p>
                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-indigo-600 font-medium flex items-center gap-1"
                  >
                    Read More
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 1.5,
                        repeatType: "loop"
                      }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#4f46e5",
              color: "white"
            }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-medium transition-colors"
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsArticles;