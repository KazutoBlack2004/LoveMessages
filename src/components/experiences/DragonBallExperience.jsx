import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Play, Sparkles, Heart } from 'lucide-react';

export default function DragonBallExperience({ message, sender, to_name }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const videoId = 'sar8EueaJn8';
  // If isPlaying is clicked, we load with mute=0 for full sound playback
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1`;

  return (
    <div className="relative w-full max-w-[440px] mx-auto flex flex-col items-center z-10 px-4">
      
      {/* Subtle Decorative Dragon Balls Row (Minimalist header) */}
      <div className="flex justify-center gap-2 mb-4">
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-yellow-300 via-orange-500 to-red-600 shadow-[0_0_8px_rgba(249,115,22,0.8)] relative flex items-center justify-center border border-yellow-200/20"
          >
            <span className="w-[3px] h-[3px] rounded-full bg-white opacity-90"></span>
          </motion.div>
        ))}
      </div>

      {/* Main Glassmorphic Container Card */}
      <div className="w-full bg-[#151023]/65 backdrop-blur-xl rounded-3xl p-5 border border-[#ffe8a1]/15 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_25px_rgba(251,191,36,0.15)] flex flex-col items-center overflow-hidden min-h-[400px] justify-center">
        
        <AnimatePresence mode="wait">
          {!isPlaying ? (
            /* WELCOME / PLAY STATE - No background text rendered, completely eliminating overlaps */
            <motion.div
              key="cover"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="w-full flex flex-col items-center text-center py-6"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[#f97316]/20 blur-2xl rounded-full animate-pulse"></div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="w-24 h-24 rounded-full border-2 border-dashed border-[#fbbf24]/40 flex items-center justify-center p-1.5"
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#f97316] to-[#d946ef] flex items-center justify-center shadow-lg shadow-[#f97316]/50">
                    <Heart size={32} fill="currentColor" className="text-yellow-100 animate-pulse" />
                  </div>
                </motion.div>
              </div>

              <span className="text-[10px] uppercase tracking-widest text-[#fbbf24] font-black mb-2 flex items-center gap-1.5">
                <Sparkles size={12} /> CARTA DE AMOR SAIYAJIN <Sparkles size={12} />
              </span>

              {/* Senders / Receivers badges clearly separated */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                <span className="px-3 py-1.5 bg-[#f97316]/15 text-[#f97316] font-extrabold uppercase rounded-full text-[10px] tracking-widest border border-[#f97316]/35 shadow-[0_0_10px_rgba(249,115,22,0.15)]">
                  DE: {sender}
                </span>
                <span className="text-[#fbbf24]/50 text-xs">➔</span>
                <span className="px-3 py-1.5 bg-[#fbbf24]/15 text-[#fbbf24] font-extrabold uppercase rounded-full text-[10px] tracking-widest border border-[#fbbf24]/35 shadow-[0_0_10px_rgba(251,191,36,0.15)]">
                  PARA: {to_name}
                </span>
              </div>

              <p className="text-yellow-100/70 text-sm max-w-xs mb-8 leading-relaxed font-medium italic">
                "¡Se ha detectado una vibración romántica inmensa! Pulsa el botón para desatar tu Ki y escuchar la serenata de Goku."
              </p>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(251, 191, 36, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPlaying(true)}
                className="px-8 py-4 bg-gradient-to-r from-[#fbbf24] via-[#f97316] to-amber-500 text-black font-black uppercase rounded-full text-sm tracking-wider border-2 border-white/20 flex items-center gap-2.5 cursor-pointer shadow-lg shadow-orange-500/20"
              >
                <Play size={16} fill="currentColor" />
                REPRODUCIR CON MÚSICA
              </motion.button>
            </motion.div>
          ) : (
            /* ACTIVE PLAYING STATE - Large vertical video and message rendered cleanly */
            <motion.div
              key="player"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full flex flex-col items-center"
            >
              {/* 9:16 Large Vertical Video Container - FIXED WITH EXPLICIT ASPECT RATIO STYLING */}
              <div 
                className="relative w-full rounded-2xl overflow-hidden border border-[#ffe8a1]/30 shadow-2xl bg-black"
                style={{ width: '100%', maxWidth: '340px', aspectRatio: '9/16' }}
              >
                <iframe
                  className="absolute inset-0 w-full h-full object-cover scale-[1.01]"
                  src={embedUrl}
                  title="Goku Cantando"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                
                {/* Floating Volume controller in top-right of the video */}
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="absolute top-3 right-3 px-3 py-2 bg-black/75 hover:bg-black/90 text-white rounded-full transition-all z-20 border border-white/10 shadow-lg cursor-pointer flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider"
                >
                  {isMuted ? (
                    <>
                      <VolumeX size={14} className="text-[#f97316] animate-pulse" />
                      <span className="text-[#f97316]">Activar Audio</span>
                    </>
                  ) : (
                    <>
                      <Volume2 size={14} className="text-[#fbbf24] animate-bounce" />
                      <span className="text-[#fbbf24]">Silenciar</span>
                    </>
                  )}
                </button>
              </div>

              {/* Clean, Non-overlapping Glassmorphic Dialogue Message Box */}
              <div className="w-full mt-4 bg-[#1b152a]/60 border border-[#ffe8a1]/15 rounded-2xl p-4 shadow-inner text-center backdrop-blur-sm">
                
                {/* Sender & Receiver badges - 100% clean and separate */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-[#f97316]/10 text-[#f97316] font-extrabold uppercase rounded-full text-[10px] tracking-widest border border-[#f97316]/30">
                    DE: {sender}
                  </span>
                  <span className="text-[#fbbf24]/50 text-xs">➔</span>
                  <span className="px-3 py-1 bg-[#fbbf24]/10 text-[#fbbf24] font-extrabold uppercase rounded-full text-[10px] tracking-widest border border-[#fbbf24]/30">
                    PARA: {to_name}
                  </span>
                </div>

                {/* Elegant and highly readable message text */}
                <p className="text-yellow-50/95 text-base sm:text-lg font-serif italic leading-relaxed px-1">
                  "{message}"
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
