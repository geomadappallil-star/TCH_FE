import React from 'react';

export const BackgroundMotion: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden" 
      aria-hidden="true"
    >
      {/* 1. Base Sand/Cream wash with gentle ambient glow */}
      <div className="absolute inset-0 bg-[#FBF5EA]/90" />

      {/* 2. Floating Animated Gradient Orbs */}
      {/* Top-Left Reef Teal Orb */}
      <div className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full bg-[#0B5563]/18 blur-[120px] animate-orb-1" />

      {/* Mid-Right Warm Mango Glow */}
      <div className="absolute top-[35%] -right-40 w-[600px] h-[600px] rounded-full bg-[#F4A62A]/22 blur-[110px] animate-orb-2" />

      {/* Bottom-Center Deep Teal / Seafoam Anchor */}
      <div className="absolute -bottom-40 left-[20%] w-[700px] h-[700px] rounded-full bg-[#0A3D47]/16 blur-[130px] animate-orb-3" />

      {/* Extra Subtle Seafoam Ripple in upper right */}
      <div className="absolute top-[10%] right-[15%] w-[450px] h-[450px] rounded-full bg-[#5FB3AA]/20 blur-[90px] animate-orb-1" />

      {/* 3. Subtle Flowing Wave Graphic Lines overlay */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.06] mix-blend-multiply" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="tropical-waves" width="160" height="80" patternUnits="userSpaceOnUse">
            <path 
              d="M0 40 Q40 20 80 40 T160 40" 
              fill="none" 
              stroke="#0B5563" 
              strokeWidth="2.5" 
            />
            <path 
              d="M0 60 Q40 40 80 60 T160 60" 
              fill="none" 
              stroke="#F4A62A" 
              strokeWidth="1.5" 
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tropical-waves)" />
      </svg>
    </div>
  );
};
