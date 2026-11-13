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
    sm: { w: 32, h: 35, title: 'text-base', sub: 'text-[9.5px]' },
    md: { w: 40, h: 43.5, title: 'text-lg sm:text-[19px]', sub: 'text-[10px] sm:text-[11px]' },
    lg: { w: 48, h: 52, title: 'text-xl sm:text-2xl', sub: 'text-xs' },
  };

  const currentSize = iconSizes[size] || iconSizes.md;
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Original Dual-Tone Heart & Sprout Emblem */}
      <div 
        style={{ width: currentSize.w, height: currentSize.h }} 
        className="relative flex-shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
      >
        <svg 
          viewBox="0 0 96 104.5" 
          className="w-full h-full" 
          aria-hidden="true"
        >
          {/* Sprout Bud & Rays */}
          <path 
            fill={isLight ? '#F4A62A' : '#E3A83B'} 
            d="M51.01 12.6c0 3.85-5.78 3.85-5.78 0s5.78-3.85 5.78 0z"
          />
          <path 
            stroke={isLight ? '#F4A62A' : '#E3A83B'} 
            strokeWidth="2.17" 
            strokeLinecap="round" 
            fill="none" 
            d="M42.35 8.27 38.73 3.93"
          />
          <path 
            stroke={isLight ? '#F4A62A' : '#E3A83B'} 
            strokeWidth="2.17" 
            strokeLinecap="round" 
            fill="none" 
            d="M53.90 8.27 57.51 3.93"
          />
          {/* Left Heart Lobe (Teal) */}
          <path 
            fill={isLight ? '#5FB3AA' : '#0E6E64'} 
            d="M48.13 83.38C22.85 63.52 2.99 47.27 2.99 27.41c0-12.64 10.83-21.67 23.47-21.67 9.03 0 16.25 5.42 21.67 14.44z"
          />
          {/* Right Heart Lobe (Sage Green) */}
          <path 
            fill={isLight ? '#A5CECA' : '#8FAE7D'} 
            d="M48.13 20.18c5.42-9.02 12.63-14.44 21.66-14.44 12.64 0 23.47 9.03 23.47 21.67 0 19.86-19.86 36.11-45.13 55.97z"
          />
          {/* Gold Curved Smile Underline */}
          <path 
            stroke={isLight ? '#F4A62A' : '#E3A83B'} 
            strokeWidth="7.94" 
            strokeLinecap="round" 
            fill="none" 
            d="M19.96 87.72c18.87 14.03 37.73 14.03 56.6 0"
          />
        </svg>
      </div>

      {/* Typography: TCH Support Services + NURSING · ALLIED HEALTH · HOME & YARD */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <span 
            className={`font-sans font-bold leading-snug tracking-tight ${currentSize.title} ${
              isLight ? 'text-white' : 'text-[#0A3D47]'
            }`}
          >
            TCH Support Services
          </span>
          <span 
            className={`font-sans font-semibold tracking-wider uppercase ${currentSize.sub} ${
              isLight ? 'text-teal-200/90' : 'text-[#2D6A5D]'
            }`}
          >
            Nursing · Allied Health · Home &amp; Yard
          </span>
        </div>
      )}
    </div>
  );
};
