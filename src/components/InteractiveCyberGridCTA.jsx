import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function InteractiveCyberGridCTA({
  title = "READY TO STRENGTHEN",
  highlightText = "YOUR CYBERSECURITY?",
  subtitle = "Schedule a free initial security architecture consultation with our Technical Lead.",
  buttonText = "BOOK A FREE SECURITY CONSULTATION",
  buttonLink = "/contact"
}) {
  const containerRef = useRef(null);
  const [activeCells, setActiveCells] = useState(new Map());
  const [gridDimensions, setGridDimensions] = useState({ cols: 24, rows: 8 });
  const cellSize = 54; // Size of each square grid cell in pixels

  // Calculate number of rows and columns based on container size
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const cols = Math.ceil(width / cellSize);
        const rows = Math.ceil(height / cellSize);
        setGridDimensions({ cols, rows });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Handle pointer move to light up grid cells in theme purple (#6D28D9)
  const handlePointerMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const col = Math.floor(x / cellSize);
    const row = Math.floor(y / cellSize);
    const key = `${row}-${col}`;

    setActiveCells((prev) => {
      const next = new Map(prev);
      next.set(key, Date.now());
      return next;
    });
  }, []);

  // Handle touch events on mobile / tablets
  const handleTouchMove = useCallback((e) => {
    if (!containerRef.current || !e.touches || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    const col = Math.floor(x / cellSize);
    const row = Math.floor(y / cellSize);
    const key = `${row}-${col}`;

    setActiveCells((prev) => {
      const next = new Map(prev);
      next.set(key, Date.now());
      return next;
    });
  }, []);

  // Cleanup old cells after 1.2s fade out
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setActiveCells((prev) => {
        let hasExpired = false;
        const next = new Map();
        prev.forEach((timestamp, key) => {
          if (now - timestamp < 1100) {
            next.set(key, timestamp);
          } else {
            hasExpired = true;
          }
        });
        return hasExpired ? next : prev;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handlePointerMove}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchMove}
      className="relative py-20 px-4 sm:px-8 bg-[#090D16] text-white text-center overflow-hidden border-b border-black select-none"
    >
      {/* 1. Interactive Dark Grid Canvas (Photo 2 reference) */}
      <div 
        className="absolute inset-0 grid pointer-events-none"
        style={{
          gridTemplateColumns: `repeat(${gridDimensions.cols}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${gridDimensions.rows}, ${cellSize}px)`,
        }}
      >
        {Array.from({ length: gridDimensions.rows * gridDimensions.cols }).map((_, idx) => {
          const row = Math.floor(idx / gridDimensions.cols);
          const col = idx % gridDimensions.cols;
          const key = `${row}-${col}`;
          const timestamp = activeCells.get(key);
          const isActive = !!timestamp;

          return (
            <div
              key={idx}
              className={`border-[0.5px] border-slate-800/60 transition-colors duration-500 relative ${
                isActive 
                  ? 'bg-[#DC2626] border-[#EF4444] shadow-[0_0_15px_rgba(220,38,38,0.8)] z-10' 
                  : 'bg-transparent hover:bg-[#DC2626]'
              }`}
            >
              {isActive && (
                <span className="absolute inset-0 bg-gradient-to-br from-[#EF4444] to-[#B91C1C] opacity-90" />
              )}
            </div>
          );
        })}
      </div>

      {/* 2. Top-Right Corner HUD Stamp */}
      <div className="absolute top-4 right-6 text-[10px] text-slate-500 font-mono hidden sm:flex items-center gap-2 pointer-events-none z-20">
        <span className="w-1.5 h-1.5 bg-[#E2F952] rounded-full animate-ping" />
        <span>INTERACTIVE_MATRIX // 0xDC2626</span>
      </div>

      {/* 3. Section Content Layer (Above the interactive grid) */}
      <div className="max-w-2xl mx-auto space-y-6 relative z-20 pointer-events-auto">
        
        <h2 className="font-brutal text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none drop-shadow-md">
          {title}<br />
          <span className="text-[#EF4444]">{highlightText}</span>
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed max-w-xl mx-auto font-normal">
          {subtitle}
        </p>

        <div className="pt-2 flex justify-center">
          <Link
            to={buttonLink}
            className="brutal-btn-purple px-5 sm:px-8 py-3.5 sm:py-4 text-xs font-black inline-flex items-center justify-center gap-2 group cursor-pointer shadow-[4px_4px_0px_0px_#000] max-w-full text-center"
          >
            <span>{buttonText}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" />
          </Link>
        </div>

      </div>
    </section>
  );
}
