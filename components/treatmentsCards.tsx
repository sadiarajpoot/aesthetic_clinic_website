"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const TreatmentBoxes = () => {
  const treatments = [
    {
      title: "Botox & Fillers",
      description: "Precision injections for wrinkle reduction and natural-looking facial enhancement.",
      cta: "Explore",
      logo: "/icons/botox.svg",
      color: "bg-purple-100"
    },
    {
      title: "Laser Treatments",
      description: "Advanced laser technology for skin rejuvenation and pigmentation correction.",
      cta: "Explore",
      logo: "/icons/laser.svg",
      color: "bg-blue-100"
    },
    {
      title: "Thread Lifts",
      description: "Non-surgical facelift with immediate lifting effect using bio-stimulating threads.",
      cta: "Explore",
      logo: "/icons/threads.svg",
      color: "bg-pink-100"
    },
    {
      title: "Skin Boosters",
      description: "Deep hydration treatments for glowing, youthful skin from within.",
      cta: "Explore",
      logo: "/icons/skin.svg",
      color: "bg-teal-100"
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Our Signature Treatments
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              className={`${treatment.color} rounded-xl shadow-md overflow-hidden transition-all duration-300 group hover:shadow-lg`}
            >
              <div className="p-6 h-full flex flex-col">
                {/* Logo with floating animation */}
                <motion.div
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.7 }
                  }}
                  className="mb-5 w-16 h-16 relative self-center"
                >
                  <Image
                    src={treatment.logo}
                    alt={treatment.title}
                    fill
                    className="object-contain"
                  />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center group-hover:text-indigo-600 transition-colors">
                  {treatment.title}
                </h3>
                
                <p className="text-gray-600 mb-6 flex-grow text-center">
                  {treatment.description}
                </p>
                
                <motion.button
                  whileHover={{ 
                    x: 5,
                    backgroundColor: "#4f46e5",
                    color: "white"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-auto w-fit mx-auto px-5 py-2 rounded-full border border-indigo-600 text-indigo-600 font-medium flex items-center gap-1 transition-colors"
                >
                  {treatment.cta}
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TreatmentBoxes;