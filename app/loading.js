"use client";
import React from "react";
import { LoaderOne, LoaderTwo, LoaderThree, LoaderFour, LoaderFive } from "../components/ui/loader.jsx";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 max-w-md mx-4">
        {/* Main Lightning Loader */}
        <div className="mb-8">
          <LoaderThree />
        </div>
        
        {/* Glitch Text Effect */}
        <div className="mb-6">
          <LoaderFour text="Loading Feed..." />
        </div>
        
        {/* Multiple Dot Loaders */}
        <div className="flex justify-center gap-6 mb-6">
          <LoaderOne />
          <LoaderTwo />
        </div>
        
        {/* Animated Text */}
        <div className="mb-4">
          <LoaderFive text="Please wait while we prepare your content" />
        </div>
        
        {/* Loading Progress Indicator */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full animate-pulse w-3/4"></div>
        </div>
        
        {/* Status Text */}
        <p className="text-sm text-gray-600 font-medium">
          Setting up your experience...
        </p>
      </div>
      
      {/* Background Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-100/40 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-green-100/30 rounded-full blur-md animate-ping"></div>
      </div>
    </div>
  );
}