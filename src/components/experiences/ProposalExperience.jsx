import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Stars } from 'lucide-react';

const ProposalExperience = ({ title = "¿Quieres ser mi novia?" }) => {
  const [noPosition, setNoPosition] = useState({ x: 150, y: 300 });
  const [isSuccess, setIsSuccess] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Initial center position once mounted
    if (containerRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      setNoPosition({
        x: container.width / 2 - 50,
        y: container.height - 100
      });
    }
  }, []);

  const moveButton = () => {
    if (!containerRef.current) return;
    
    const container = containerRef.current.getBoundingClientRect();
    const btnWidth = 100;
    const btnHeight = 40;
    
    // Calculate possible area (padding of 20px)
    const maxX = container.width - btnWidth - 40;
    const maxY = container.height - btnHeight - 40;
    
    // New absolute positions within the container
    const nextX = Math.random() * maxX + 20;
    const nextY = Math.random() * maxY + 20;
    
    setNoPosition({ x: nextX, y: nextY });
  };

  const celebrate = () => {
    setIsSuccess(true);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[500px] flex flex-col items-center justify-center overflow-hidden bg-primary-50/30 dark:bg-primary-950/20 rounded-3xl border border-primary-100/50 dark:border-primary-900/30 backdrop-blur-sm px-6"
    >
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.div 
            key="proposal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="text-center z-10"
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="text-primary-500 mb-8 flex justify-center"
            >
              <Heart size={80} fill="currentColor" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 dark:text-white mb-12 tracking-tight">
              {title}
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 min-h-[100px]">
              <button
                onClick={celebrate}
                className="px-12 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-bold text-xl transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:scale-110 z-20"
              >
                ¡Sí! ❤️
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center relative z-10"
          >
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -20, 0],
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ delay: i * 0.1, repeat: Infinity, duration: 2 }}
                  className="text-primary-500 mx-1"
                >
                  <Heart size={40} fill="currentColor" />
                </motion.div>
              ))}
            </div>
            
            <h2 className="text-5xl font-serif font-bold text-primary-900 dark:text-white mb-4">
              ¡Sabía que dirías que sí!
            </h2>
            <p className="text-xl text-primary-700/70 dark:text-primary-300/70">
              Eres lo mejor que me ha pasado. ❤️
            </p>

            {/* Confetti simulation */}
            <div className="absolute inset-0 pointer-events-none -z-10">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 0, x: 0, opacity: 1 }}
                  animate={{ 
                    y: [-100, 400], 
                    x: (Math.random() - 0.5) * 600,
                    opacity: [0, 1, 0],
                    rotate: 360
                  }}
                  transition={{ 
                    duration: 4 + Math.random() * 2, 
                    repeat: Infinity,
                    delay: Math.random() * 2 
                  }}
                  className="absolute left-1/2 top-0"
                >
                  <Stars size={16 + Math.random() * 10} className="text-primary-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón "No" posicionado absolutamente respecto al contenedor principal */}
      {!isSuccess && (
        <motion.button
          id="btnNo"
          style={{ position: 'absolute', left: 0, top: 0 }}
          animate={{ x: noPosition.x, y: noPosition.y }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          onMouseEnter={moveButton}
          onClick={moveButton}
          className="px-8 py-3 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full font-medium text-lg border border-gray-300 dark:border-gray-700 pointer-events-auto cursor-pointer whitespace-nowrap z-50 shadow-md"
        >
          No... 🥺
        </motion.button>
      )}

      {/* Decorative background hearts */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10"><Heart size={100} fill="currentColor" className="text-primary-300" /></div>
        <div className="absolute bottom-10 right-10"><Heart size={150} fill="currentColor" className="text-primary-300" /></div>
      </div>
    </div>
  );
};

export default ProposalExperience;
