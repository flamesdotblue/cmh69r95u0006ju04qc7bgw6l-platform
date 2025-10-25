import React from 'react';

// Simple custom SVG "anime style" spark logo with gradient — free to use
export default function AnimeLogo({ className = 'h-8 w-8' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="50%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#FB7185" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(167,139,250,0.9)" />
          <stop offset="100%" stopColor="rgba(167,139,250,0)" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="url(#glow)" opacity="0.15" />
      <path
        d="M32 6l4.8 10.6L48 19.2l-8.6 8.3 2 11.8L32 34.2 22.6 39.3l2-11.8L16 19.2l11.2-2.6L32 6z"
        fill="url(#g1)"
      />
      <path
        d="M32 40c6 2 9.5 4.8 10.8 8.7.4 1.3-1 2.3-2.2 1.7-4.5-2.2-8.6-3-13.5-3s-9 0.8-13.5 3c-1.2.6-2.6-.4-2.2-1.7C12.7 44.8 16.2 42 22.2 40"
        stroke="url(#g1)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
