"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import about from "../public/about.webp"
import { useState } from 'react';
import { FaAward, FaClinicMedical, FaUserGraduate } from 'react-icons/fa';

const AboutDoctor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

  const credentials = [
    {
      icon: <FaUserGraduate className="text-rose-500 text-2xl" />,
      title: "Harvard Medical School",
      description: "Graduated with honors in Dermatology"
    },
    {
      icon: <FaAward className="text-rose-500 text-2xl" />,
      title: "Board Certified",
      description: "American Board of Cosmetic Surgery"
    },
    {
      icon: <FaClinicMedical className="text-rose-500 text-2xl" />,
      title: "15+ Years Experience",
      description: "Specializing in non-surgical treatments"
    }
  ];

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'approach', label: 'Approach' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Doctor Image */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2 relative"
          >
            <motion.div
              whileHover={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className="relative rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src={about}
                alt="Dr. Raheel Memon"
                width={600}
                height={800}
                className="w-full h-auto"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end">
                <motion.h3 
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  className="text-white text-3xl font-bold mb-1"
                >
                  Dr. Raheel Memon
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-rose-300 text-xl"
                >
                  Board Certified Aesthetic Specialist
                </motion.p>
              </div>
            </motion.div>

            {/* Floating Certifications */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 mt-8"
            >
              {credentials.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-4 rounded-lg shadow-md text-center"
                >
                  <div className="flex justify-center mb-2">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-gray-800">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Doctor Info */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2"
          >
            {/* Animated Tabs */}
            <div className="flex gap-2 mb-8 border-b border-gray-200 pb-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-2 rounded-t-lg font-medium ${
                    activeTab === tab.id ? 'text-rose-600' : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {tab.id === activeTab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-rose-500 rounded-t-full"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              {activeTab === 'about' && (
                <>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    About <span className="text-rose-500">Dr. Raheel Memon</span>
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    With over 15 years of experience in aesthetic medicine, Dr. Memon combines his 
                    artistic vision with surgical precision to deliver natural, harmonious results 
                    that enhance your unique beauty.
                  </p>
                </>
              )}

              {activeTab === 'philosophy' && (
                <p className="text-lg text-gray-600 mb-6">
                  Dr. Memon believes in a patient-centered approach where less is more. His philosophy 
                  focuses on enhancing natural features rather than creating artificial looks, ensuring 
                  results that age gracefully with you.
                </p>
              )}

              {activeTab === 'approach' && (
                <p className="text-lg text-gray-600 mb-6">
                  Using a combination of advanced techniques and an artistic eye, Dr. Memon customizes 
                  each treatment plan to the individual. His approach emphasizes safety, precision, 
                  and achieving balanced, natural-looking outcomes.
                </p>
              )}
            </motion.div>

            {/* Qualifications */}
            <ul className="space-y-4 mb-8">
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-start bg-white p-4 rounded-lg shadow-sm"
              >
                <span className="text-rose-500 mr-3 mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Harvard Medical School Graduate</h4>
                  <p className="text-gray-600">Specialized in Dermatology & Aesthetic Medicine</p>
                </div>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-start bg-white p-4 rounded-lg shadow-sm"
              >
                <span className="text-rose-500 mr-3 mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Board Certified in Dermatology</h4>
                  <p className="text-gray-600">Fellowship trained in Cosmetic Procedures</p>
                </div>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                className="flex items-start bg-white p-4 rounded-lg shadow-sm"
              >
                <span className="text-rose-500 mr-3 mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-800">International Trainer</h4>
                  <p className="text-gray-600">For leading aesthetic brands and techniques</p>
                </div>
              </motion.li>
            </ul>

            {/* CTA Button */}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#e11d48",
                boxShadow: "0 10px 15px -3px rgba(225, 29, 72, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="bg-rose-600 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2"
            >
              View Full Credentials
              <motion.span
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ type: 'spring', stiffness: 500 }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;