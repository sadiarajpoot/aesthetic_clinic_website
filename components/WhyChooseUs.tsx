"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import treatment from  "../public/treatment.webp"
import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    "World-class aesthetic specialists",
    "FDA-approved premium treatments",
    "Personalized treatment plans",
    "Discreet & comfortable environment",
    "Membership benefits & discounts",
    "Quick and easy enrollment"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex items-center py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
              Why Choose <span className="text-indigo-600">Elite Aesthetics</span> For Your Transformation?
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-600 mb-10"
            >
              We use only premium, FDA-approved treatments and cutting-edge techniques to provide 
              natural-looking aesthetic enhancements you'll love.
            </motion.p>

            {/* Features List */}
            <ul className="space-y-4 mb-12">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="w-6 h-6 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* Appointment Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-indigo-700 transition-colors"
              >
                Book Your Consultation
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image 
                src={treatment} // Replace with your image
                alt="Modern aesthetic treatment room"
                className="w-full h-auto"
              />
              {/* Floating review card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-6 left-6 bg-white p-6 rounded-lg shadow-md max-w-xs"
              >
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-800 font-medium mb-2">"Life-changing results! The team made me feel completely comfortable."</p>
                <p className="text-gray-600">- Sarah K.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
    </div>
  );
};

export default WhyChooseUs;