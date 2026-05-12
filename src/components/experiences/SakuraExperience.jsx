import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Component for falling petals
const Petals = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Generate petals on mount
    const newPetals = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 8 + 6, // 6 to 14 seconds
      scale: Math.random() * 0.4 + 0.6,
      sway: Math.random() * 100 + 50,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute -top-10 bg-pink-300 dark:bg-pink-400/80 rounded-tl-full rounded-br-full w-4 h-4 opacity-70 shadow-[0_0_10px_rgba(244,114,182,0.5)]"
          style={{ left: `${petal.x}%`, scale: petal.scale }}
          animate={{
            y: ['-5vh', '110vh'],
            x: [`0px`, `${petal.sway}px`, `-${petal.sway/2}px`, `0px`],
            rotate: [0, 360, 720],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export default function SakuraExperience({ message, sender, to_name }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full flex flex-col items-center justify-center min-h-[60vh] px-4">
      <Petals />
      
      {/* Scroll container */}
      <div 
        className="relative z-10 flex flex-col items-center justify-center w-full max-w-lg cursor-pointer" 
        onClick={() => !isOpen && setIsOpen(true)}
      >
        
        {/* Closed Scroll */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div 
              className="flex flex-col items-center py-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0, transition: { duration: 0.4 } }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <div className="relative group cursor-pointer flex flex-col items-center">
                
                {/* Scroll Cylinder */}
                <div className="h-64 w-16 bg-gradient-to-r from-[#8B5A2B] via-[#A0522D] to-[#5C3A21] dark:from-[#5C3A21] dark:via-[#3E2723] dark:to-[#2d1a11] rounded-full shadow-[10px_10px_30px_rgba(0,0,0,0.4),_inset_-4px_0_10px_rgba(0,0,0,0.6),_inset_4px_0_10px_rgba(255,255,255,0.15)] relative flex flex-col items-center justify-center overflow-hidden transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-[15px_15px_40px_rgba(0,0,0,0.5)] z-10">
                  
                  {/* Fine Wood/Bamboo Texture */}
                  <div className="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(to_bottom,transparent,transparent_2px,#000_2px,#000_3px)] pointer-events-none mix-blend-overlay"></div>
                  
                  {/* Center Silk Ribbon */}
                  <div className="absolute top-1/2 -translate-y-1/2 w-full h-10 bg-gradient-to-r from-[#800000] via-[#A52A2A] to-[#4A0000] shadow-lg border-y border-[#FFC125]/30 flex items-center justify-center">
                      {/* Golden String */}
                      <div className="w-full h-[2px] bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] shadow-[0_0_8px_rgba(255,215,0,0.8)]"></div>
                  </div>
                  
                  {/* Top & Bottom inner shadows for 3D effect */}
                  <div className="absolute top-0 w-full h-6 bg-gradient-to-b from-[#3E2723] to-transparent opacity-80 rounded-t-full pointer-events-none"></div>
                  <div className="absolute bottom-0 w-full h-6 bg-gradient-to-t from-[#3E2723] to-transparent opacity-80 rounded-b-full pointer-events-none"></div>
                </div>

                {/* Ambient glow behind the scroll */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-72 bg-amber-500/20 dark:bg-pink-500/10 blur-3xl rounded-full z-0 group-hover:bg-amber-500/30 transition-colors duration-500"></div>

                {/* Elegant floating label */}
                <div className="absolute -bottom-14 opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20">
                  <span className="text-[#FFD700] bg-[#3E2723]/95 px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-[0_4px_15px_rgba(0,0,0,0.3)] backdrop-blur-md border border-[#FFD700]/30 whitespace-nowrap">
                    Desenrrollar
                  </span>
                </div>
              </div>

              {/* Helper text below everything */}
              <div className="mt-20 text-rose-800/80 dark:text-pink-300/80 font-serif text-xl italic animate-pulse">
                Toca para abrir
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Opened Scroll */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="relative w-full"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} // smooth ease-out
            >
              {/* Top wooden roller */}
              <div className="h-5 w-[calc(100%+2rem)] -ml-4 bg-amber-800 dark:bg-amber-900 rounded-full shadow-lg z-20 relative border-b-2 border-amber-950 flex items-center justify-center">
                 <div className="w-full h-1 bg-black/20 absolute bottom-1"></div>
                 <div className="h-8 w-8 bg-amber-900 absolute -left-2 rounded-full shadow-md"></div>
                 <div className="h-8 w-8 bg-amber-900 absolute -right-2 rounded-full shadow-md"></div>
              </div>
              
              {/* Paper */}
              <motion.div 
                className="bg-[#fdf5e6] dark:bg-[#e6ddcd] w-full px-6 py-10 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                style={{ originY: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Bamboo texture overlay */}
                <div className="absolute inset-0 opacity-[0.04] bg-[repeating-linear-gradient(to_right,transparent,transparent_10px,#000_10px,#000_12px)] pointer-events-none"></div>
                <div className="absolute inset-0 opacity-[0.02] bg-[repeating-linear-gradient(to_bottom,transparent,transparent_10px,#000_10px,#000_11px)] pointer-events-none"></div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="relative z-10"
                >
                  <h3 className="text-3xl text-[#5c3a1e] font-serif mb-8 border-b-2 border-[#5c3a1e]/20 pb-4 text-center">
                    Para: {to_name}
                  </h3>
                  <p className="text-[#5c3a1e] text-lg md:text-xl leading-relaxed md:leading-loose font-serif whitespace-pre-wrap min-h-[150px]">
                    {message}
                  </p>
                  <div className="mt-16 text-right">
                    <p className="text-[#5c3a1e]/60 text-sm mb-2 italic">Con afecto,</p>
                    <p className="text-2xl text-[#8B1A1A] font-bold font-serif">{sender}</p>
                    {/* Hanko stamp style for sender */}
                    <div className="inline-block mt-4 border-2 border-[#8B1A1A] text-[#8B1A1A] p-2 rounded-sm opacity-80 mix-blend-multiply">
                        <span className="font-bold text-xs uppercase tracking-widest">{sender.substring(0,2)}</span>
                    </div>
                  </div>
                </motion.div>
                
                {/* Sakura watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none w-64 h-64">
                   <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-pink-700">
                    <path d="M12 2C8 2 4 6 4 10C4 14 8 18 12 22C16 18 20 14 20 10C20 6 16 2 12 2ZM12 18.5C9.5 15.5 6 12 6 10C6 7 8.5 4 12 4C15.5 4 18 7 18 10C18 12 14.5 15.5 12 18.5Z" />
                   </svg>
                </div>
              </motion.div>
              
              {/* Bottom wooden roller */}
              <div className="h-5 w-[calc(100%+2rem)] -ml-4 bg-amber-800 dark:bg-amber-900 rounded-full shadow-lg z-20 relative border-t-2 border-amber-950 flex items-center justify-center">
                 <div className="w-full h-1 bg-black/20 absolute top-1"></div>
                 <div className="h-8 w-8 bg-amber-900 absolute -left-2 rounded-full shadow-md"></div>
                 <div className="h-8 w-8 bg-amber-900 absolute -right-2 rounded-full shadow-md"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
