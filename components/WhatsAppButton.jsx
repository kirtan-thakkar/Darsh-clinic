"use client";
import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, Phone, X, Clock } from "lucide-react";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const buttonRef = useRef(null);
  const whatsappNumber = "+919428305428";

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I would like to book an appointment at Darsh Dental Clinic. Please help me with the details."
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const handleCallClick = () => {
    window.location.href = `tel:${whatsappNumber}`;
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Hide button when near bottom to avoid overlapping footer
      if (scrolled + windowHeight > documentHeight - 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main WhatsApp Button */}
      <div
        ref={buttonRef}
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <div className="relative">
          {/* Expanded Menu */}
          {isOpen && (
            <div className="absolute bottom-full right-0 mb-4 bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 w-80 max-w-[90vw]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-lg font-semibold text-gray-800">Quick Contact</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Hi! 👋 Need help with dental care? Contact us for quick assistance.
              </p>

              <div className="space-y-3">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl transition-all duration-200 font-medium text-sm shadow-md hover:shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </button>

                <button
                  onClick={handleCallClick}
                  className="w-full flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-xl transition-all duration-200 font-medium text-sm shadow-md hover:shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call {whatsappNumber}</span>
                </button>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 flex items-center gap-2 text-xs text-gray-500">
                <Clock className="w-3 h-3" />
                <span>Available Mon-Sat: 9:30 AM - 8:00 PM</span>
              </div>
            </div>
          )}

          {/* Main Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 active:scale-95 border-4 border-white relative"
            aria-label="Contact WhatsApp"
          >
            <MessageCircle className="w-8 h-8" />
            
            {/* Notification dot */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </button>

          {/* Tooltip */}
          {!isOpen && (
            <div className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              💬 Chat with us
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WhatsAppButton;