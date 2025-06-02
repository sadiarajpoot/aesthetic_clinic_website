"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import welcomeImage from "../public/welcome-image.webp"
import Image from "next/image";

const NewPatientsWelcome = () => {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center fonts">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight fonts">
              We&apos;re <span className="norican-regular text-rose-600 norican-regular font-bold">Welcoming New Patients</span> And Can&apos;t Wait to Meet You
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg text-gray-600 mb-8 fonts"
            >
              We utilize only premium, FDA-approved treatments and the latest techniques 
              to ensure our patients receive the best aesthetic care possible. Rest assured, 
              you&apos;re in good hands—book your appointment with confidence!
            </motion.p>

            {/* Phone Form */}
            {!submitted ? (
              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                onSubmit={handleSubmit}
                className="max-w-md"
              >
                <div className="mb-4 fonts">
                  <label htmlFor="phone" className="block text-gray-800 mb-2">
                    Submit phone number to schedule a consultation
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className=" fonts w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="fonts bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-indigo-700 transition-colors"
                >
                  Schedule My Consultation
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded max-w-md"
              >
                <p className="fonts">Thank you! We&apos;ll contact you shortly to schedule your appointment.</p>
              </motion.div>
            )}
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={welcomeImage}
                alt="Modern aesthetic clinic"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"></div>
              
              {/* Floating badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute top-6 right-6 bg-white px-4 py-2 rounded-full shadow-md flex items-center"
              >
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                <span className="font-medium fonts">Now Accepting New Patients</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NewPatientsWelcome;