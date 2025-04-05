import React from "react";

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/64211049124"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 flex items-center justify-center transition-transform duration-300 bg-[#25D366] shadow-lg rounded-xl right-4 bottom-4 md:right-6 md:bottom-6 w-14 h-14 md:w-16 md:h-16 hover:scale-110 hover:shadow-xl"
      aria-label="Contact us on WhatsApp"
    >
      <img
        src="/whatsapp-icon.svg"
        alt="WhatsApp Icon"
        className="w-8 h-8 md:w-10 md:h-10"
      />
      <span className="sr-only">Contact us on WhatsApp</span>
    </a>
  );
};
