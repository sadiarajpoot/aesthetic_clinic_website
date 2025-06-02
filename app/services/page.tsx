"use client"; // Mark this as a client component

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Services() {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Handle input changes
  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form clear
  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  // Handle WhatsApp redirect
  const handleWhatsApp = () => {
    const phoneNumber = '+923xxxxxxxxxx'; // Replace with your WhatsApp number (e.g., +923001234567)
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const services = [
    { title: "FUE Hair Transplant", description: "Restores hair for individuals with thinning or baldness using advanced techniques.", icon: "🧑‍🦲" },
    { title: "Gynecomastia Surgery", description: "Corrects enlarged male breast tissue through surgical procedures.", icon: "👨‍⚕️" },
    { title: "Acne Scar Treatment", description: "Reduces scars using advanced therapies like laser and microneedling.", icon: "🧴" },
    { title: "Hymenoplasty", description: "Restores the hymen for cultural or personal reasons with precision.", icon: "👩‍⚕️" },
    { title: "Rhinoplasty", description: "Reshapes the nose aesthetically to improve facial harmony.", icon: "👃" },
    { title: "Liposuction", description: "Removes excess fat for body contouring in targeted areas.", icon: "💪" },
    { title: "Botox Injections", description: "Reduces wrinkles for a youthful appearance with minimal downtime.", icon: "💉" },
    { title: "Facelift", description: "Tightens facial skin for a rejuvenated and youthful look.", icon: "😊" },
    { title: "Breast Augmentation", description: "Enhances breast size with implants for a fuller look.", icon: "👩" },
    { title: "Laser Hair Removal", description: "Reduces unwanted hair permanently with laser technology.", icon: "🔥" },
    { title: "Chemical Peels", description: "Improves skin texture and tone through chemical exfoliation.", icon: "🧪" },
    { title: "Eyelid Surgery", description: "Enhances eyelid appearance by removing excess skin.", icon: "👁️" },
    { title: "Lip Augmentation", description: "Enhances lip volume and shape with fillers.", icon: "💋" },
    { title: "Skin Tightening", description: "Lifts sagging skin non-surgically with advanced methods.", icon: "🌞" },
    { title: "Microdermabrasion", description: "Exfoliates skin for a refreshed and glowing complexion.", icon: "🧽" },
    { title: "Thread Lift", description: "Lifts skin minimally invasively using dissolvable threads.", icon: "🪡" },
    { title: "Body Contouring", description: "Sculpts body shape non-surgically with modern techniques.", icon: "🎨" },
    { title: "Scar Revision", description: "Minimizes scar appearance with surgical or laser methods.", icon: "🩹" },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i:any) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-8 px-4 relative ">
     <Navbar/>
       
      {/* Hero Section */}
      <section className="mt-[70px] flex flex-col md:flex-row justify-between items-start max-w-6xl w-full mb-12">
        <div>
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Leave Your Worries At The Door And Enjoy A Healthier, More <span className="text-pink-500 norican-regular">Precise Smile.</span></h1>
          <p className="text-gray-600 mb-2">At our practice, we are dedicated to excellence, utilizing only the finest materials to provide exceptional care and outstanding results for our patients. Your comfort and confidence are our top priorities. Trust in our expertise and let us guide you toward achieving your best smile.</p>
          <p className="text-gray-600">Take the first step today—relax, and book your appointment. We look forward to helping you shine with a healthy, beautiful smile!</p>
        </div>
        <div className="mt-6 md:mt-0 p-6 bg-white border border-gray-200 rounded-lg shadow-md ">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Request Appointment</h3>
          <form>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter Your Name"
              className="w-full p-2 mb-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Your Email"
              className="w-full p-2 mb-3 border border-gray-300 rounded"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter Your Phone Number"
              className="w-full p-2 mb-3 border border-gray-300 rounded"
            />
           <input
              type="text"
              name="text"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter Your Treatments"
              className="w-full p-2 mb-3 border border-gray-300 rounded"
            />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleClear}
                className="flex-1 p-2 bg-gray-200 text-gray-800 rounded"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="flex-1 p-2 bg-black text-white rounded"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full max-w-6xl mb-[30px] fonts">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-8 text-gray-800 norican-regular">Our Aesthetic Treatments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className={`p-6 bg-white border-2 border-blue-300 rounded-lg shadow-md flex items-center text-center transition-all duration-300 ${
                index === 2 ? "border-4 border-blue-500" : ""
              } hover:border-blue-500 hover:shadow-lg hover:scale-105`}
            >
              <span className="text-4xl mr-4">{service.icon}</span>
              <div className="flex-1 text-left">
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 hover:px-5 hover:py-2.5 transition-all duration-200"
                >
                  Explore
                </button>
              </div>
              
            </motion.div>
          ))}
        </div>
        
      </section>
      <Footer/>
    </div>
  );
}


// <div className="fixed bottom-4 left-4 bg-white border border-blue-100 rounded-lg p-4 shadow-lg flex items-center">
//         <span className="text-green-500 text-2xl mr-2">📞</span>
//         <div>
//           <p className="text-gray-800 font-semibold">Hello 👋</p>
//           <p className="text-gray-600 text-sm">How Can I help you?</p>
//         </div>