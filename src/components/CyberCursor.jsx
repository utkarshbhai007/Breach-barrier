import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CyberCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [clickBursts, setClickBursts] = useState([]);
  const [cursorLabel, setCursorLabel] = useState('');
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const lastPos = useRef({ x: 0, y: 0 });

  // Detect whether device has a fine pointer (mouse/trackpad) or is purely touch
  useEffect(() => {
    const checkPointer = () => {
      const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
      setIsTouchDevice(!hasFinePointer);
      
      if (hasFinePointer) {
        document.body.style.cursor = 'none';
      } else {
        document.body.style.cursor = 'auto';
      }
    };

    checkPointer();
    window.addEventListener('resize', checkPointer);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('resize', checkPointer);
    };
  }, []);

  // Mouse move and hover detection (only for desktop/laptop)
  useEffect(() => {
    if (isTouchDevice) return;

    let animId;

    const onMouseMove = (e) => {
      const vx = e.clientX - lastPos.current.x;
      const vy = e.clientY - lastPos.current.y;
      lastPos.current = { x: e.clientX, y: e.clientY };

      setVelocity({ x: vx, y: vy });
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      const target = e.target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer, .brutal-panel');
      if (target) {
        setIsHovered(true);
        if (target.tagName === 'A' || target.getAttribute('role') === 'button') {
          setCursorLabel('LOCK // ACCESS');
        } else if (target.tagName === 'BUTTON') {
          setCursorLabel('EXEC // TRIGGER');
        } else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
          setCursorLabel('DATA // INPUT');
        } else {
          setCursorLabel('INSPECT // PROTOCOL');
        }
      } else {
        setIsHovered(false);
        setCursorLabel('');
      }
    };

    const onMouseDown = (e) => {
      setIsClicked(true);

      const burstId = Date.now() + Math.random();
      const newBurst = {
        id: burstId,
        x: e.clientX,
        y: e.clientY,
        hexCode: '0x' + Math.floor(Math.random() * 16777215).toString(16).toUpperCase().padStart(6, '0'),
      };

      setClickBursts((prev) => [...prev.slice(-4), newBurst]);

      setTimeout(() => {
        setClickBursts((prev) => prev.filter((b) => b.id !== burstId));
      }, 650);
    };

    const onMouseUp = () => {
      setIsClicked(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animId);
    };
  }, [isTouchDevice]);

  // If touch device (phone/tablet), do not render desktop cursor overlay
  if (isTouchDevice) {
    return null;
  }

  // Calculate speed for dynamic trailing stretch
  const speed = Math.min(Math.sqrt(velocity.x ** 2 + velocity.y ** 2), 25);

  return (
    <>
      {/* === 1. Digital Ghost Trail (Velocity reactive) === */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] w-1.5 h-1.5 bg-[#A855F7]/50"
        animate={{
          x: mousePos.x - 3,
          y: mousePos.y - 3,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.2 }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9996] w-1 h-1 bg-[#6D28D9]/30"
        animate={{
          x: mousePos.x - 2,
          y: mousePos.y - 2,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 20, mass: 0.35 }}
      />

      {/* === 2. Center Tactical Crosshair Laser Dot === */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
        animate={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
          scale: isClicked ? 0.7 : isHovered ? 1.4 : 1,
        }}
        transition={{ type: "spring", stiffness: 1200, damping: 35, mass: 0.05 }}
      >
        <div
          className={`w-2 h-2 transition-colors duration-150 ${
            isHovered
              ? 'bg-[#E2F952] rotate-45 border border-black shadow-[0_0_8px_#E2F952]'
              : 'bg-[#6D28D9] rounded-none shadow-[0_0_6px_#6D28D9]'
          }`}
        />
      </motion.div>

      {/* === 3. Outer Rotating Tactical HUD Ring & Crosshair Notches === */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center"
        animate={{
          x: mousePos.x - (isHovered ? 26 : 18),
          y: mousePos.y - (isHovered ? 26 : 18),
          width: isHovered ? 52 : 36,
          height: isHovered ? 52 : 36,
          rotate: isHovered ? 90 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.15 }}
      >
        <div
          className={`w-full h-full border relative transition-all duration-200 ${
            isHovered
              ? 'border-dashed border-[#6D28D9] bg-[#6D28D9]/10'
              : 'border-[#0F172A]/40 bg-transparent'
          }`}
        >
          {/* Corner tick marks */}
          <span className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t border-l border-black" />
          <span className="absolute -top-1 -right-1 w-1.5 h-1.5 border-t border-r border-black" />
          <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 border-b border-l border-black" />
          <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b border-r border-black" />
        </div>
      </motion.div>

      {/* === 4. Tactical Status Chip on Hover === */}
      <AnimatePresence>
        {isHovered && cursorLabel && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 14, y: 14 }}
            animate={{ opacity: 1, scale: 1, x: 20, y: 20 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-0 left-0 pointer-events-none z-[10000] px-2 py-0.5 bg-black text-[#E2F952] border border-[#6D28D9] font-mono-code text-[9px] font-black tracking-widest uppercase shadow-[2px_2px_0px_0px_#6D28D9] whitespace-nowrap"
            style={{
              left: mousePos.x,
              top: mousePos.y,
            }}
          >
            {cursorLabel}
          </motion.div>
        )}
      </AnimatePresence>

      {/* === 5. On-Click Sonar Diamond Shockwaves & Hex Stamps === */}
      {clickBursts.map((burst) => (
        <React.Fragment key={burst.id}>
          {/* Sonar Ring 1 */}
          <motion.div
            initial={{ scale: 0.3, opacity: 0.9 }}
            animate={{ scale: 2.8, opacity: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="fixed pointer-events-none z-[9995] w-12 h-12 border-2 border-[#E2F952] rotate-45"
            style={{
              left: burst.x - 24,
              top: burst.y - 24,
            }}
          />

          {/* Sonar Ring 2 (Purple) */}
          <motion.div
            initial={{ scale: 0.1, opacity: 1 }}
            animate={{ scale: 4.2, opacity: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="fixed pointer-events-none z-[9994] w-12 h-12 border border-[#6D28D9]"
            style={{
              left: burst.x - 24,
              top: burst.y - 24,
            }}
          />

          {/* Floating Hex Stamp */}
          <motion.div
            initial={{ opacity: 1, y: 0, scale: 0.9 }}
            animate={{ opacity: 0, y: -30, scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed pointer-events-none z-[10001] px-1.5 py-0.5 bg-[#6D28D9] text-white border border-black font-mono-code text-[8px] font-bold shadow-[2px_2px_0px_0px_#000]"
            style={{
              left: burst.x + 12,
              top: burst.y - 18,
            }}
          >
            HIT_ACK {burst.hexCode}
          </motion.div>
        </React.Fragment>
      ))}
    </>
  );
}
