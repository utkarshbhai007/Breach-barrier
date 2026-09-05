import React from 'react';
import { Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import GradientWaves from './GradientWaves';
import BlurText from './BlurText';
import FoldText from './FoldText';

export default function Hero() {
  return (
    <section className="relative border-b border-[#D4D4D8] bg-[#F8FAFC] overflow-hidden py-16 sm:py-24 px-4 sm:px-8">
      {/* Interactive GradientWaves WebGL Canvas Background for Light Theme */}
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

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8 relative z-10">
        
        {/* Top Tag Badge */}

        {/* Centered Headline with BlurText */}
        <div className="space-y-3">
          <h1 className="font-hero-brutal text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight uppercase flex flex-col items-center justify-center">
            <BlurText
              text="SECURE YOUR BUSINESS."
              delay={120}
              animateBy="words"
              direction="top"
              className="text-[#0F172A]"
            />
            <span className="text-[#6D28D9] relative inline-block mt-1">
              <BlurText
                text="EMPOWER YOUR GROWTH."
                delay={120}
                initialDelay={0.36}
                animateBy="words"
                direction="top"
                className="text-[#6D28D9]"
              />
            </span>
          </h1>
        </div>

        {/* Centered Subheading / Description with FoldText */}
        <div className="max-w-2xl mx-auto text-center px-2 sm:px-0">
          <FoldText
            text="Breach Barrier delivers enterprise-grade, 24×7 managed cybersecurity services that help organizations detect, prevent, and respond to cyber threats — while reducing security costs through our expert remote delivery model."
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

        {/* Centered Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2 w-full max-w-xs sm:max-w-none"
        >
          <Link
            to="/services/soc"
            className="brutal-btn-outline w-full sm:w-auto px-7 py-4 text-xs font-black tracking-wider flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>EXPLORE SERVICES</span>
            <Maximize2 className="w-3.5 h-3.5 text-[#6D28D9] group-hover:rotate-90 transition-transform" />
          </Link>
        </motion.div>



      </div>
    </section>
  );
}
