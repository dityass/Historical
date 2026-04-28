
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { HISTORICAL_QUOTES } from '../constants';

export default function Splash({ onFinish }: { onFinish: () => void }) {
  const [quote] = useState(() => HISTORICAL_QUOTES[Math.floor(Math.random() * HISTORICAL_QUOTES.length)]);

  useEffect(() => {
    const timer = setTimeout(onFinish, 4000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
    >
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ 
        backgroundImage: "url('https://www.transparenttextures.com/patterns/old-map.png')" 
      }} />
      
      {/* Wax Seal Logo */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative mb-12"
      >
        <div className="w-48 h-48 rounded-full bg-honor/20 flex items-center justify-center border-4 border-honor/30">
             <div className="w-40 h-40 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] bg-[#8B0000] flex items-center justify-center text-honor border-2 border-honor/40">
                <span className="font-serif-header text-6xl font-bold italic">AN</span>
             </div>
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-honor/10 blur-3xl rounded-full -z-10" />
      </motion.div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="max-w-xs text-center"
      >
        <p className="text-honor/80 font-serif-body italic text-lg leading-relaxed px-6">
          "{quote}"
        </p>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-8 font-serif-header text-2xl tracking-widest text-manuscript uppercase"
      >
        Arsip Nusantara
      </motion.h1>
    </motion.div>
  );
}
