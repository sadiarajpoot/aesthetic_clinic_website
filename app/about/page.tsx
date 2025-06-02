"use client";

import WhatsAppFloat from "@/components/Floating_icon";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Header */}
     <Navbar/>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-12 space-y-20">
        {/* Intro Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-extrabold mb-4 text-pink-700 norican-regular font-extrabold">About  Aesthetic Clinic</h1>
          <p className="text-gray-700 text-lg leading-relaxed fonts">
            At DSDW Aesthetic Clinic, we specialize in enhancing your natural beauty through
            safe, personalized, and cutting-edge aesthetic treatments. Our mission is to
            empower you with confidence and radiance at every age.
          </p>
        </motion.section>

        {/* Our Story */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="bg-white p-8 rounded-lg shadow max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-pink-600 mb-4 norican-regular">Our Story</h2>
          <p className="text-gray-700 leading-relaxed fonts">
            Founded by Dr. Sadia, a board-certified aesthetic physician with over a decade of
            experience, DSDW Aesthetic Clinic was created to offer holistic, scientifically-backed
            cosmetic solutions tailored to your unique skin and body needs.
          </p>
          <p className="mt-3 text-gray-700 leading-relaxed fonts">
            From non-invasive skin rejuvenation to advanced injectables and contouring,
            we blend artistry with medical precision to help you look and feel your best.
          </p>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-pink-600 mb-8 text-center  norican-regular">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow fonts">
              <h3 className="text-xl font-semibold mb-2 text-pink-500">Expert Aesthetic Physician</h3>
              <p>Dr. Sadia combines medical expertise with artistic vision for natural results.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow fonts">
              <h3 className="text-xl font-semibold mb-2 text-pink-500">Latest Technologies</h3>
              <p>We use advanced, FDA-approved devices and treatments ensuring safety and efficacy.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow fonts">
              <h3 className="text-xl font-semibold mb-2 text-pink-500">Personalized Care</h3>
              <p>Every treatment plan is customized to your goals and lifestyle for the best outcome.</p>
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="bg-white p-8 rounded-lg shadow max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-pink-600 mb-8 text-center norican-regular">Patient Testimonials</h2>
          <div className="space-y-8">
            <blockquote className="border-l-4 border-pink-500 pl-6 italic text-gray-700 fonts">
              &quot;Dr. Sadia gave me a natural glow that boosted my confidence. The staff is so caring and professional!&quot;
              <footer className="mt-2 font-semibold text-pink-600">— Ayesha R.</footer>
            </blockquote>
            <blockquote className="border-l-4 border-pink-500 pl-6 italic text-gray-700 fonts">
              &quot;I love the results of my skin treatments here. The clinic feels welcoming and the service is top-notch.&quot;
              <footer className="mt-2 font-semibold text-pink-600">— Kamran M.</footer>
            </blockquote>
            <blockquote className="border-l-4 border-pink-500 pl-6 italic text-gray-700 fonts">
              &quot;Highly recommend DSDW Aesthetic Clinic for anyone wanting expert care and natural-looking results.&quot;
              <footer className="mt-2 font-semibold text-pink-600">— Sana K.</footer>
            </blockquote>
          </div>
        </motion.section>

        {/* Fun Facts or Achievements */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-pink-600 mb-8 norican-regular">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-gray-700">
            <div>
              <span className="text-4xl font-extrabold text-pink-500 fonts">12+</span>
              <p className="mt-2 fonts">Years of Experience</p>
            </div>
            <div>
              <span className="text-4xl font-extrabold text-pink-500 fonts">3000+</span>
              <p className="mt-2 fonts">Satisfied Patients</p>
            </div>
            <div>
              <span className="text-4xl font-extrabold text-pink-500 fonts ">8</span>
              <p className="mt-2 fonts">Industry Awards</p>
            </div>
            <div>
              <span className="text-4xl font-extrabold text-pink-500 fonts">15+</span>
              <p className="mt-2 fonts">Workshops & Community Events</p>
            </div>
           <WhatsAppFloat/>
          </div>
        </motion.section>
      </main>
       <Footer/>
    </div>
  );
}

