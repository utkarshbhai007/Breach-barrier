import React from 'react';
import { motion } from 'framer-motion';
import GradientWaves from './GradientWaves';
import BlurText from './BlurText';
import FoldText from './FoldText';

export default function PageHero({
  tag,
  title,
  titleAccent,
  description,
  pillars = [],
  children
}) {
  return (
    <section className="relative border-b border-[#D6D0C2] bg-[#EAE7E0] overflow-hidden py-16 sm:py-20 px-4 sm:px-8">
      {/* Interactive GradientWaves WebGL Canvas Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-45">
        <GradientWaves
          horizonColor="#5227FF"
          waveColor="#A855F7"
          crestColor="#FFFFFF"
          speed={0.4}
          amplitude={2.5}
          waveScale={0.6}
          waveRatio={0.9}
          swell={35}
          turbulence={20}
          tilt={1.11}
          zoom={1.0}
          height={5.5}
          fogDepth={15}
          detail="medium"
          brightness={1.0}
          opacity={1.0}
          mouseInteraction={true}
          parallaxStrength={0.5}
          grain={true}
          grainIntensity={0.04}
        />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6 relative z-10">
        
        {/* Top Tag */}
        {tag && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-xs font-bold text-[#6D28D9] uppercase tracking-wide"
          >
            <span>{tag}</span>
          </motion.div>
        )}

        {/* Centered Headline with BlurText */}
        <div className="space-y-3">
          <h1 className="font-brutal text-3xl sm:text-5xl md:text-7xl font-black leading-[1.08] tracking-tight uppercase flex flex-col items-center justify-center">
            {title && (
              <BlurText
                text={title}
                delay={120}
                animateBy="words"
                direction="top"
                className="text-[#0F172A]"
              />
            )}
            {titleAccent && (
              <span className="text-[#6D28D9] relative inline-block mt-1">
                <BlurText
                  text={titleAccent}
                  delay={120}
                  initialDelay={0.36}
                  animateBy="words"
                  direction="top"
                  className="text-[#6D28D9]"
                />
              </span>
            )}
          </h1>
          
          {/* Centered Pillars */}
          {pillars && pillars.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs sm:text-sm font-bold text-[#6D28D9] tracking-wide uppercase pt-2">
              {pillars.map((p, idx) => (
                <React.Fragment key={idx}>
                  <span className="hover:text-black transition-colors cursor-default">{p}</span>
                  {idx < pillars.length - 1 && <span className="text-slate-400 font-normal">•</span>}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>

        {/* Centered Subheading / Description with FoldText */}
        {description && (
          <div className="max-w-2xl mx-auto text-center">
            <FoldText
              text={description}
              splitBy="word"
              hinge="top"
              trigger="mount"
              duration={0.55}
              stagger={0.025}
              ease="power3.out"
              color="#334155"
              fontSize="clamp(0.875rem, 1.5vw, 1.025rem)"
              fontWeight={400}
              className="font-sans text-center"
              style={{ lineHeight: '1.65', letterSpacing: 'normal' }}
            />
          </div>
        )}

        {/* Extra Children (Buttons, tabs, etc.) */}
        {children && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2 flex flex-wrap items-center justify-center gap-4"
          >
            {children}
          </motion.div>
        )}

      </div>
    </section>
  );
}
