"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import doctorImage from "../public/hero2.jpg";
import newdoctor from "../public/new 2.jpg";
import img1 from "../public/1.jpg";
import img2 from "../public/2.jpg";
import img3 from "../public/3.jpg";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Modal / Popup */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4">
          <Dialog.Panel className="bg-white rounded-xl max-w-lg w-full p-6 shadow-xl">
            <Dialog.Title className="text-xl font-bold text-center mb-4 text-blue-700 fonts font-[700]">
              Book Your Appointment Now 🧑‍⚕️
            </Dialog.Title>

            <div className="flex justify-center gap-2 mb-4">
              {[img1, img2, img3].map((src, i) => (
                <Image key={i} src={src} alt={`doctor-${i}`} className="w-20 h-20 rounded-lg object-cover shadow" />
              ))}
            </div>

            {/* Form */}
            <form className="space-y-3 fonts">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="Tell us a bit about yourself"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded hover:from-pink-600 hover:to-purple-700 transition font-semibold shadow-md"
              >
                Submit
              </button>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-100 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 mt-[50px]">
        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl ">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl fonts font-[750] text-gray-900 mb-6"
          >
            Get Ready For Your Best Ever Aesthetic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 norican-regular font-extrabold">
              Experience
            </span>
            !
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-lg mb-6 fonts font-medium"
          >
            We offer premium, FDA-approved aesthetic treatments tailored to you. Whether it&apos;s skincare, anti-aging, or body sculpting—your transformation begins here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-4"
          >
            {/* Booking Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 hover:from-blue-700 hover:to-pink-600 text-white px-6 py-3 rounded-full font-medium transition duration-300 shadow-lg"
            >
              <PhoneIcon className="w-5 h-5" />
              Book an appointment
            </button>

            <div className="text-left">
              <p className="text-blue-600 font-semibold fonts">Aesthetic 24H Emergency</p>
              <p className="text-gray-800 font-bold fonts">0313-3233733</p>
            </div>
          </motion.div>

          {/* Doctor Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-6"
          >
            <p className="font-semibold text-gray-800 fonts">Dr. Raheel Memon</p>
            <p className="text-gray-600 fonts">Certified Aesthetic Specialist</p>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 md:mt-0"
        >
          <Image
            src={newdoctor}
            alt="Aesthetic Specialist"
            className="w-[500px] object-cover rounded-xl shadow-lg"
            priority
          />
        </motion.div>
      </div>
    </>
  );
};

export default HeroSection;
