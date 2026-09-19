import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Sparkles, Heart, RotateCcw, Compass } from 'lucide-react';

// Background twinkling stars
const CosmicBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.9)]"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
      {/* Nebula ambient glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600/20 dark:bg-purple-900/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-indigo-500/20 dark:bg-sky-900/30 blur-[120px] rounded-full"></div>
    </div>
  );
};

// Constellation star positions arranged in a heart shape (percentage coordinates)
const STAR_NODES = [
  { id: 1, x: 50, y: 35, label: '1' }, // Center indent top
  { id: 2, x: 28, y: 22, label: '2' }, // Left lobe top
  { id: 3, x: 18, y: 45, label: '3' }, // Left side
  { id: 4, x: 50, y: 78, label: '4' }, // Bottom point
  { id: 5, x: 82, y: 45, label: '5' }, // Right side
  { id: 6, x: 72, y: 22, label: '6' }, // Right lobe top
];

export default function ConstellationExperience({ message, sender, to_name }) {
  const [connectedStars, setConnectedStars] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleStarClick = (starId) => {
    if (isCompleted) return;

    if (!connectedStars.includes(starId)) {
      const nextConnected = [...connectedStars, starId];
      setConnectedStars(nextConnected);

      if (nextConnected.length === STAR_NODES.length) {
        setTimeout(() => {
          setIsCompleted(true);
        }, 800);
      }
    }
  };

  const resetConstellation = () => {
    setConnectedStars([]);
    setIsCompleted(false);
  };

  // Convert node percentages to SVG lines
  const getLineCoordinates = () => {
    const lines = [];
    for (let i = 0; i < connectedStars.length - 1; i++) {
      const startNode = STAR_NODES.find((s) => s.id === connectedStars[i]);
      const endNode = STAR_NODES.find((s) => s.id === connectedStars[i + 1]);
      if (startNode && endNode) {
        lines.push({
          x1: `${startNode.x}%`,
          y1: `${startNode.y}%`,
          x2: `${endNode.x}%`,
          y2: `${endNode.y}%`,
        });
      }
    }
    // If all stars connected, complete the heart loop back from 6 to 1
    if (connectedStars.length === STAR_NODES.length) {
      const lastNode = STAR_NODES.find((s) => s.id === connectedStars[connectedStars.length - 1]);
      const firstNode = STAR_NODES.find((s) => s.id === connectedStars[0]);
      if (lastNode && firstNode) {
        lines.push({
          x1: `${lastNode.x}%`,
          y1: `${lastNode.y}%`,
          x2: `${firstNode.x}%`,
          y2: `${firstNode.y}%`,
        });
      }
    }
    return lines;
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center min-h-[70vh] px-4 py-8">
      <CosmicBackground />

      <AnimatePresence mode="wait">
        {!isCompleted ? (
          <motion.div
            key="constellation-interactive"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-full max-w-xl flex flex-col items-center"
          >
            {/* Header instructions */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-900/60 border border-indigo-400/30 text-indigo-200 text-xs sm:text-sm font-medium backdrop-blur-md mb-3 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                <Compass size={16} className="text-amber-300 animate-spin-slow" />
                <span>Noche de las Estrellas</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                Conecta las estrellas para formar nuestra constelación
              </h2>
              <p className="text-indigo-200/80 text-sm mt-1">
                Toca cada estrella brillante ({connectedStars.length} / {STAR_NODES.length})
              </p>
            </div>

            {/* Interactive Canvas / Star Chart */}
            <div className="relative w-full aspect-square max-w-[420px] bg-slate-950/40 rounded-3xl border border-indigo-500/30 shadow-[0_0_50px_rgba(79,70,229,0.25)] backdrop-blur-md overflow-hidden p-6">
              
              {/* Decorative SVG grid / celestial rings */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <circle cx="50%" cy="50%" r="40%" fill="none" stroke="#a5b4fc" strokeDasharray="4 4" />
                <circle cx="50%" cy="50%" r="25%" fill="none" stroke="#818cf8" strokeDasharray="2 4" />
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#a5b4fc" strokeDasharray="2 4" />
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#a5b4fc" strokeDasharray="2 4" />
              </svg>

              {/* Connected Lines SVG Layer */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                {getLineCoordinates().map((line, idx) => (
                  <motion.line
                    key={idx}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    stroke="url(#goldGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]"
                  />
                ))}
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fef08a" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Star Nodes */}
              {STAR_NODES.map((star) => {
                const isSelected = connectedStars.includes(star.id);
                return (
                  <motion.button
                    key={star.id}
                    onClick={() => handleStarClick(star.id)}
                    style={{ left: `${star.x}%`, top: `${star.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group outline-none cursor-pointer"
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {/* Glowing pulse ring */}
                    <motion.div
                      className={`absolute -inset-3 rounded-full blur-md ${
                        isSelected
                          ? 'bg-amber-400/80 shadow-[0_0_20px_rgba(251,191,36,1)]'
                          : 'bg-indigo-400/40 group-hover:bg-amber-300/60'
                      }`}
                      animate={
                        !isSelected
                          ? { scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }
                          : { scale: 1.2, opacity: 1 }
                      }
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* Star Icon */}
                    <div
                      className={`relative p-2.5 rounded-full border transition-all duration-300 flex items-center justify-center ${
                        isSelected
                          ? 'bg-gradient-to-tr from-amber-400 to-rose-400 border-amber-200 text-slate-950 shadow-[0_0_15px_rgba(251,191,36,0.9)] scale-110'
                          : 'bg-slate-900/80 border-indigo-400/50 text-indigo-200 group-hover:border-amber-300 group-hover:text-amber-200'
                      }`}
                    >
                      <Star
                        size={20}
                        className={isSelected ? 'fill-slate-950 text-slate-950' : 'fill-none'}
                      />
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Helper message */}
            <p className="mt-6 text-indigo-300/70 italic text-sm text-center">
              {connectedStars.length === 0
                ? 'Presiona cualquier estrella para comenzar a trazar el mapa celeste...'
                : connectedStars.length < STAR_NODES.length
                ? '¡Sigue uniendo las estrellas celestiales!'
                : '¡Constelación completada! Revelando tu carta...'}
            </p>
          </motion.div>
        ) : (
          /* Revealed Glassmorphic Love Letter */
          <motion.div
            key="revealed-letter"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
            className="relative z-10 w-full max-w-lg"
          >
            {/* Glowing cosmic frame */}
            <div className="relative bg-slate-950/70 backdrop-blur-xl border border-indigo-400/40 rounded-3xl p-8 sm:p-10 shadow-[0_0_60px_rgba(99,102,241,0.3)] overflow-hidden">
              
              {/* Glowing Corner Elements */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-amber-500/10 rounded-br-full blur-xl pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-pink-500/10 rounded-tl-full blur-xl pointer-events-none"></div>

              {/* Header Constellation Icon */}
              <div className="flex flex-col items-center mb-6">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="p-3 bg-gradient-to-tr from-amber-400/20 via-pink-500/20 to-indigo-500/20 border border-amber-300/40 rounded-full text-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.4)] mb-3"
                >
                  <Sparkles size={32} />
                </motion.div>
                
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-pink-200 to-indigo-100 text-center">
                  Para: {to_name}
                </h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mt-2"></div>
              </div>

              {/* Message Content */}
              <div className="my-6">
                <p className="text-indigo-50 text-base sm:text-lg leading-relaxed font-serif whitespace-pre-wrap tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  {message}
                </p>
              </div>

              {/* Footer / Sender Sign */}
              <div className="mt-8 pt-6 border-t border-indigo-500/20 flex flex-col items-end">
                <span className="text-indigo-300/60 text-xs font-serif italic mb-1">
                  Escrito bajo la misma luz de las estrellas,
                </span>
                <span className="text-xl font-serif font-bold text-amber-300 flex items-center gap-1.5 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]">
                  <Heart size={18} className="fill-amber-300 text-amber-300 inline" />
                  {sender}
                </span>

                {/* Cosmic Seal */}
                <div className="mt-4 px-3 py-1 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-200 text-[10px] uppercase tracking-widest flex items-center gap-1.5">
                  <Star size={10} className="fill-amber-300 text-amber-300" />
                  Constelación Eterna
                </div>
              </div>

              {/* Replay action */}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={resetConstellation}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-900/40 hover:bg-indigo-900/70 border border-indigo-400/30 text-indigo-200 hover:text-white text-xs font-medium transition-all shadow-md backdrop-blur-md cursor-pointer"
                >
                  <RotateCcw size={14} />
                  Volver a contemplar las estrellas
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
