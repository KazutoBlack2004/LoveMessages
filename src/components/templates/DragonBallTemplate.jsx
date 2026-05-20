import { motion } from 'framer-motion';
import DragonBallExperience from '../experiences/DragonBallExperience';

export default function DragonBallTemplate({ to_name, from_name, message }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d0915] via-[#1c0d02] to-[#09060f] text-white flex flex-col items-center justify-center p-4 sm:p-8 transition-colors duration-500 overflow-hidden relative font-sans">
      
      {/* Super Saiyan Glowing Energy Aura Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/10 dark:bg-orange-500/15 blur-[120px] rounded-full pointer-events-none z-0 animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-yellow-500/10 blur-[100px] rounded-full pointer-events-none z-0 animate-pulse" style={{ animationDuration: '6s' }}></div>
      
      {/* Rising Ki Energy Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-t from-yellow-400 to-orange-500 rounded-full blur-[2px]"
            style={{
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
              bottom: '-20px',
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
            animate={{
              y: ['0vh', '-110vh'],
              x: [0, Math.random() * 80 - 40, Math.random() * 40 - 20],
              scale: [1, Math.random() * 1.5 + 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating Sparkles (Super Saiyan 2 Lightning style) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[2px] w-8 bg-cyan-400 shadow-[0_0_8px_#22d3ee] rotate-45"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0, 0.8, 0],
              scale: [0.5, 1.2, 0.8, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Title */}
      <div className="text-center mb-6 sm:mb-8 animate-fade-in relative z-10">
        <span className="px-3 py-1.5 text-[10px] uppercase tracking-widest bg-[#f97316]/10 border border-[#f97316]/30 text-[#fbbf24] rounded-full font-extrabold mb-3 inline-block shadow-[0_0_15px_rgba(249,115,22,0.15)]">
          CARTA DIGITAL LVL. SUPER SAIYAJIN
        </span>
        <h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] via-[#f97316] to-[#fbbf24] tracking-wider drop-shadow-[0_2px_12px_rgba(249,115,22,0.45)] uppercase italic">
          ¡Un amor de más de 9000!
        </h2>
      </div>
      
      {/* Experience Component */}
      <DragonBallExperience message={message} sender={from_name} to_name={to_name} />
      
      {/* Footer decoration */}
      <div className="mt-8 text-[#fbbf24]/30 text-xs tracking-[0.25em] uppercase font-black animate-pulse z-10 relative">
        ★ ★ ★ ★ ★ ★ ★
      </div>
    </div>
  );
}
