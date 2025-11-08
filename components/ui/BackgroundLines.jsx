"use client";

const BackgroundLines = ({ 
  children, 
  className = "",
  lineColor = "rgba(255, 107, 53, 0.1)",
  fadeColor = "rgba(255, 255, 255, 0.9)",
  animated = true 
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated background lines */}
      <div className="absolute inset-0 opacity-30">
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke={lineColor}
                strokeWidth="1"
              />
            </pattern>
            <linearGradient id="fade-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={fadeColor} stopOpacity="0.1" />
              <stop offset="50%" stopColor={fadeColor} stopOpacity="0.8" />
              <stop offset="100%" stopColor={fadeColor} stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          <rect width="100%" height="100%" fill="url(#fade-gradient)" />
        </svg>
      </div>

      {/* Floating gradient orbs for premium feel */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full opacity-20 blur-3xl ${animated ? 'animate-float-slow' : ''}`}
        />
        <div 
          className={`absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-teal-200 to-teal-100 rounded-full opacity-20 blur-3xl ${animated ? 'animate-float-slower' : ''}`}
        />
        <div 
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-peach-200 to-peach-100 rounded-full opacity-15 blur-2xl ${animated ? 'animate-pulse-slow' : ''}`}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(0px) translateX(20px); }
          75% { transform: translateY(10px) translateX(10px); }
        }

        @keyframes float-slower {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(15px) translateX(-15px); }
          66% { transform: translateY(-10px) translateX(-5px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }

        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 16s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default BackgroundLines;