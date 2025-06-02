"use client";
import Logo from "../public/logoE.jpg";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  EnvelopeIcon,
  PhoneIcon,
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  UserIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline"; // ✅ Imported WrenchScrewdriverIcon
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2  ">
          <Image src={Logo} alt="DSDW Logo" width={70} height={70} />
          <div className="flex flex-col">
            <span className="text-xs text-blue-500 -mt-1">Aesthetic Clinic</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-sm text-gray-700">
          <Link href="/" className="font-bold text-black">
            Home
          </Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

          <a href="mailto:rmemon500@gmail.com" target="_blank" rel="noopener noreferrer">
  <EnvelopeIcon className="w-5 h-5 text-slate-800" />
</a>

<a href="tel:+923432968466" target="_blank" rel="noopener noreferrer">
  <PhoneIcon className="w-5 h-5 text-slate-800" />
</a>

<a href="https://wa.me/923432968466" target="_blank" rel="noopener noreferrer">
  <FaWhatsapp className="w-5 h-5 text-slate-800" />
</a>

        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-6 text-slate-800">
          <Link href="/">
            <HomeIcon className="w-6 h-6 p-1 bg-slate-900 text-white rounded-full" />
          </Link>
          <Link href="/contact">
            <ChatBubbleLeftEllipsisIcon className="w-6 h-6" />
          </Link>
          <Link href="/about">
            <UserIcon className="w-6 h-6" />
          </Link>
          <Link href="/services">
            <WrenchScrewdriverIcon className="w-6 h-6" /> {/* ✅ New services icon */}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
