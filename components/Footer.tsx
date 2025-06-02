"use client";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logoE.jpg";

const Footer = () => {
  return (
    <footer className="bg-rose-100 text-gray-800 pt-12 pb-6 fonts">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div className="fonts">
          <div className="flex items-center mb-4 fonts">
            <Image src={Logo} alt="Clinic Logo" width={80} height={80} className="mr-2" />
            <h1  className="norican-regular text-rose-600 norican-regular font-bold text-xl" >Glow Aesthetics</h1>
          </div>
          <p className="text-sm text-gray-600">
            Enhancing your natural beauty with the latest aesthetic technologies. Trusted care. Lasting results.
          </p>
        </div>

        {/* Quick Links */}
        <div className="fonts">
          <h2 className="text-lg font-semibold mb-4 fonts">Quick Links</h2>
          <ul className="space-y-2 text-sm fonts">
            <li><Link href="/" className="hover:text-rose-600 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-rose-600 transition">About</Link></li>
            <li><Link href="/services" className="hover:text-rose-600 transition">Services</Link></li>
            <li><Link href="/contact" className="hover:text-rose-600 transition">Contact</Link></li>
            <li><Link href="/faq" className="hover:text-rose-600 transition">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="fonts">
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-rose-600" />
             <p>Phase 1 , Azam Basti </p>
              <p >street 8 </p>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-rose-600" />
              <a href="tel:0313-3233733" className="hover:text-rose-600 transition">0313-3233733</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-rose-600" />
              <a href="rmemon500@gmaill.com" className="hover:text-rose-600 transition">rmemon500@gmaill.com</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4 fonts">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/drmemonraheel/" className="bg-rose-600 hover:bg-rose-700 text-white p-2 rounded-full transition">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/rmemon500" className="bg-rose-600 hover:bg-rose-700 text-white p-2 rounded-full transition">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/drmemonraheel/" className="bg-rose-600 hover:bg-rose-700 text-white p-2 rounded-full transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-rose-200 pt-4 text-center text-sm text-gray-500 fonts">
        &copy; {new Date().getFullYear()} Glow Aesthetics. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
