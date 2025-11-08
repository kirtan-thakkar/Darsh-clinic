"use client";

const WaveDivider = ({ 
  flip = false, 
  className = "",
  topColor = "fill-white",
  bottomColor = "fill-gray-50"
}) => {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <svg
        className={`w-full h-auto ${flip ? "rotate-180" : ""}`}
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          className={topColor}
        />
        <path
          d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,85.3C672,85,768,75,864,69.3C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          className={bottomColor}
          opacity="0.5"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
