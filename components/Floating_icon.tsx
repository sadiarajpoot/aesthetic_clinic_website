'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloat = () => {
  const whatsappNumber = '+923133233733'; // Replace with your WhatsApp number without '+'

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=Hello!%20How%20can%20I%20help%20you?`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-5 right-5 z-50 flex items-center gap-3
        bg-green-500 text-white px-5 py-3 rounded-full shadow-lg
        hover:bg-green-600 transition-colors duration-300
        group
      "
    >
      <FaWhatsapp
        size={28}
        className="
          animate-floating
          transition-transform duration-300
          group-hover:scale-125
        "
      />
      <span
        className="
          hidden sm:inline-block
          opacity-0 translate-x-[-10px]
          group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-300 ease-in-out
          select-none font-semibold
        "
      >
        Hello! How can I help you?
      </span>

      <style jsx>{`
        @keyframes floating {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-floating {
          animation: floating 2s ease-in-out infinite;
        }
      `}</style>
    </a>
  );
};

export default WhatsAppFloat;
