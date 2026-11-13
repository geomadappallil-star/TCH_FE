import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showText = true,
  className = '',
}) => {
  const iconSizes = {
    sm: 36,
    md: 46,
    lg: 56,
  };

  const dim = iconSizes[size] || 46;
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Sun over Sea-Wave Emblem */}
      <svg 
        width={dim} 
        height={dim} 
        viewBox="0 0 48 48" 
        aria-hidden="true" 
        className="flex-shrink-0 drop-shadow-sm transition-transform hover:scale-105 duration-300"
      >
        {/* Reef Teal Circular Backdrop */}
        <circle cx="24" cy="24" r="24" fill="#0B5563" />
        {/* Radiant Mango Golden Sun */}
        <circle cx="24" cy="21" r="8" fill="#F4A62A" />
        {/* Seafoam Tropical Wave */}
        <path 
          d="M6 31c4-3 8-3 12 0s8 3 12 0 8-3 12 0v6a20 20 0 0 1-36 0z" 
          fill="#5FB3AA" 
        />
        {/* White Wave Crest Foam Stroke */}
        <path 
          d="M6 36c4-3 8-3 12 0s8 3 12 0 8-3 12 0" 
          stroke="#ffffff" 
          strokeWidth="2" 
          strokeLinecap="round"
          fill="none" 
        />
      </svg>

      {/* Typography: Outfit 700 + Nunito Sans 700 */}
      {showText && (
        <span className="flex flex-col leading-[1.05]">
          <span 
            className={`font-heading font-extrabold text-[22px] md:text-[24px] tracking-tight ${
              isLight ? 'text-white' : 'text-[#0A3D47]'
            }`}
          >
            TCH
          </span>
          <span 
            className={`font-sans font-bold text-[11px] md:text-[12px] tracking-[0.06em] uppercase ${
              isLight ? 'text-teal-100/80' : 'text-[#3D6B70]'
            }`}
          >
            SUPPORT SERVICES
          </span>
        </span>
      )}
    </div>
  );
};
