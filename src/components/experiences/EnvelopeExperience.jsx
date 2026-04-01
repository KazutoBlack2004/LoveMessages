import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const EnvelopeExperience = ({ message = "Espero tengas un lindo día", sender = "Con amor" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleEnvelope = () => setIsOpen(!isOpen);

  return (
    <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center pt-32 pb-12">
      <div 
        className="relative cursor-pointer group"
        onClick={toggleEnvelope}
      >
        {/* Envelope Body */}
        <motion.div 
          initial={false}
          animate={{ y: isOpen ? 120 : 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-[400px] h-[260px] bg-primary-100 rounded-b-xl shadow-2xl border-none"
        >
          {/* Front Pocket Left */}
          <div className="absolute inset-0 z-20 overflow-hidden rounded-b-xl">
            <div className="absolute left-0 bottom-0 w-0 h-0 border-l-[200px] border-l-primary-200 border-t-[130px] border-t-transparent border-b-[130px] border-b-transparent"></div>
          </div>
          
          {/* Front Pocket Right */}
          <div className="absolute inset-0 z-20 overflow-hidden rounded-b-xl">
            <div className="absolute right-0 bottom-0 w-0 h-0 border-r-[200px] border-r-primary-200 border-t-[130px] border-t-transparent border-b-[130px] border-b-transparent"></div>
          </div>

          {/* Front Pocket Bottom */}
          <div className="absolute inset-0 z-20 overflow-hidden rounded-b-xl">
            <div className="absolute right-0 bottom-0 w-0 h-0 border-b-[140px] border-b-primary-300 border-l-[200px] border-l-transparent border-r-[200px] border-r-transparent"></div>
          </div>

          {/* Flap (Top side) */}
          <motion.div 
            className="absolute top-0 left-0 w-0 h-0 border-l-[200px] border-l-transparent border-r-[200px] border-r-transparent border-t-[146px] border-t-primary-500 z-30 origin-top"
            animate={{ rotateX: isOpen ? 180 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ backfaceVisibility: 'hidden' }}
          />

          {/* Letter */}
          <motion.div 
            className="absolute left-1/2 -ml-[185px] w-[370px] h-[240px] bg-white rounded-xl shadow-md p-8 flex flex-col justify-between"
            animate={{ 
              y: isOpen ? -240 : 0,
              scale: isOpen ? 1.1 : 1,
              zIndex: isOpen ? 50 : 10,
              opacity: 1
            }}
            transition={{ 
              delay: isOpen ? 0.3 : 0, 
              duration: 0.6, 
              type: "spring", 
              stiffness: 100 
            }}
          >
            <div className="space-y-4">
              <div className="h-2 w-1/4 bg-primary-100 rounded-full"></div>
              <p className="text-primary-900 font-serif text-xl leading-relaxed italic text-center py-4">
                "{message}"
              </p>
              <div className="h-0.5 w-full bg-primary-50 rounded"></div>
            </div>
            <div className="text-right italic text-primary-600 font-medium font-serif border-t border-primary-50 pt-2">
              — {sender}
            </div>
          </motion.div>

          {/* Animated Hearts when open */}
          <AnimatePresence>
            {isOpen && (
              <div className="absolute inset-0 pointer-events-none z-50">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 0, x: 0, opacity: 1, scale: 0 }}
                    animate={{ 
                      y: -200 - Math.random() * 200, 
                      x: (Math.random() - 0.5) * 300,
                      opacity: 0,
                      scale: 1 + Math.random()
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 3, delay: i * 0.2 }}
                    className="absolute left-1/2 top-0 text-red-500"
                  >
                    <Heart size={24} fill="currentColor" />
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Indicator if closed */}
        {!isOpen && (
          <motion.div 
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-primary-500 italic text-sm font-medium"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Haz clic para abrir el sobre
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default EnvelopeExperience;
