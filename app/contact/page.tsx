"use client";

import WhatsAppFloat from "@/components/Floating_icon";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState, ChangeEvent } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const message = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nMessage: ${form.message}`;
    const whatsappUrl = `https://wa.me/923432968466?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    
    <div className="min-h-screen bg-gray-50 p-6 fonts mt-[90px]">
        <Navbar/>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-xl shadow-lg">
        {/* Form Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <div className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-3 rounded"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 p-3 rounded"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full border border-gray-300 p-3 rounded"
                value={form.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="w-full border border-gray-300 p-3 rounded"
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition duration-200 flex items-center gap-2"
            >
              <FaWhatsapp />
              Send via WhatsApp
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-6 text-gray-700 ">
          <h2 className="norican-regular text-rose-600 norican-regular font-bold text-3xl">Clinic Info</h2>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-lg" /> Gulshan, Karachi, Pakistan
          </p>
          <p className="flex items-center gap-2">
            <FaPhone className="text-lg" /> +92 343 2968466
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-lg" /> rmemon500@gmaill.com
          </p>
          <p className="flex items-center gap-2">
            <FaClock className="text-lg" /> Mon - Sat: 11am - 8pm
          </p>

          <div className="flex gap-4 mt-4 text-xl">
            <a href="https://www.facebook.com/drmemonraheel/" aria-label="Facebook" className="text-blue-600">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/rmemon500" aria-label="Instagram" className="text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter" className="text-blue-400">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <WhatsAppFloat/>
      <div className="mt-[20px]">
      <Footer/>
      </div>
    </div>
    
  );
}
