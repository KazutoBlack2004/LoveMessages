import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, X, Sun, Copy, Check, Flower2 } from 'lucide-react';
import './CssFlowers.css';

const FLOWER_INSTANCES = [
  { id: 1, left: '-5%',  scale: 0.75, delay: 0.1 },
  { id: 2, left: '20%',  scale: 0.85, delay: 0.3 },
  { id: 3, left: '50%',  scale: 1.00, delay: 0.5 },
  { id: 4, left: '75%',  scale: 0.85, delay: 0.7 },
  { id: 5, left: '100%', scale: 0.75, delay: 0.9 },
];

function SingleFlowerCluster() {
  return (
    <div className="flowers">
      <div className="flower flower--1">
        <div className="flower__leafs flower__leafs--1">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>

          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
          <div className="flower__light flower__light--6"></div>
          <div className="flower__light flower__light--7"></div>
          <div className="flower__light flower__light--8"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
          <div className="flower__line__leaf flower__line__leaf--5"></div>
          <div className="flower__line__leaf flower__line__leaf--6"></div>
        </div>
      </div>

      <div className="flower flower--2">
        <div className="flower__leafs flower__leafs--2">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>

          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
          <div className="flower__light flower__light--6"></div>
          <div className="flower__light flower__light--7"></div>
          <div className="flower__light flower__light--8"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>

      <div className="flower flower--3">
        <div className="flower__leafs flower__leafs--3">
          <div className="flower__leaf flower__leaf--1"></div>
          <div className="flower__leaf flower__leaf--2"></div>
          <div className="flower__leaf flower__leaf--3"></div>
          <div className="flower__leaf flower__leaf--4"></div>
          <div className="flower__white-circle"></div>

          <div className="flower__light flower__light--1"></div>
          <div className="flower__light flower__light--2"></div>
          <div className="flower__light flower__light--3"></div>
          <div className="flower__light flower__light--4"></div>
          <div className="flower__light flower__light--5"></div>
          <div className="flower__light flower__light--6"></div>
          <div className="flower__light flower__light--7"></div>
          <div className="flower__light flower__light--8"></div>
        </div>
        <div className="flower__line">
          <div className="flower__line__leaf flower__line__leaf--1"></div>
          <div className="flower__line__leaf flower__line__leaf--2"></div>
          <div className="flower__line__leaf flower__line__leaf--3"></div>
          <div className="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>

      <div className="grow-ans" style={{ '--d': '1.2s' }}>
        <div className="flower__g-long">
          <div className="flower__g-long__top"></div>
          <div className="flower__g-long__bottom"></div>
        </div>
      </div>

      <div className="growing-grass">
        <div className="flower__grass flower__grass--1">
          <div className="flower__grass--top"></div>
          <div className="flower__grass--bottom"></div>
          <div className="flower__grass__leaf flower__grass__leaf--1"></div>
          <div className="flower__grass__leaf flower__grass__leaf--2"></div>
          <div className="flower__grass__leaf flower__grass__leaf--3"></div>
          <div className="flower__grass__leaf flower__grass__leaf--4"></div>
          <div className="flower__grass__leaf flower__grass__leaf--5"></div>
          <div className="flower__grass__leaf flower__grass__leaf--6"></div>
          <div className="flower__grass__leaf flower__grass__leaf--7"></div>
          <div className="flower__grass__leaf flower__grass__leaf--8"></div>
          <div className="flower__grass__overlay"></div>
        </div>
      </div>

      <div className="growing-grass">
        <div className="flower__grass flower__grass--2">
          <div className="flower__grass--top"></div>
          <div className="flower__grass--bottom"></div>
          <div className="flower__grass__leaf flower__grass__leaf--1"></div>
          <div className="flower__grass__leaf flower__grass__leaf--2"></div>
          <div className="flower__grass__leaf flower__grass__leaf--3"></div>
          <div className="flower__grass__leaf flower__grass__leaf--4"></div>
          <div className="flower__grass__leaf flower__grass__leaf--5"></div>
          <div className="flower__grass__leaf flower__grass__leaf--6"></div>
          <div className="flower__grass__leaf flower__grass__leaf--7"></div>
          <div className="flower__grass__leaf flower__grass__leaf--8"></div>
          <div className="flower__grass__overlay"></div>
        </div>
      </div>

      <div className="grow-ans" style={{ '--d': '2.4s' }}>
        <div className="flower__g-right flower__g-right--1">
          <div className="leaf"></div>
        </div>
      </div>

      <div className="grow-ans" style={{ '--d': '2.8s' }}>
        <div className="flower__g-right flower__g-right--2">
          <div className="leaf"></div>
        </div>
      </div>

      <div className="grow-ans" style={{ '--d': '2.8s' }}>
        <div className="flower__g-front">
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
            <div className="flower__g-front__leaf"></div>
          </div>
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
            <div className="flower__g-front__leaf"></div>
          </div>
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
            <div className="flower__g-front__leaf"></div>
          </div>
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
            <div className="flower__g-front__leaf"></div>
          </div>
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
            <div className="flower__g-front__leaf"></div>
          </div>
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
            <div className="flower__g-front__leaf"></div>
          </div>
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
            <div className="flower__g-front__leaf"></div>
          </div>
          <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
            <div className="flower__g-front__leaf"></div>
          </div>
          <div className="flower__g-front__line"></div>
        </div>
      </div>

      <div className="grow-ans" style={{ '--d': '3.2s' }}>
        <div className="flower__g-fr">
          <div className="leaf"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
          <div className="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
        </div>
      </div>

      <div className="long-g long-g--0">
        <div className="grow-ans" style={{ '--d': '3s' }}>
          <div className="leaf leaf--0"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '2.2s' }}>
          <div className="leaf leaf--1"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '3.4s' }}>
          <div className="leaf leaf--2"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '3.6s' }}>
          <div className="leaf leaf--3"></div>
        </div>
      </div>

      <div className="long-g long-g--1">
        <div className="grow-ans" style={{ '--d': '3.6s' }}>
          <div className="leaf leaf--0"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '3.8s' }}>
          <div className="leaf leaf--1"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '4s' }}>
          <div className="leaf leaf--2"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '4.2s' }}>
          <div className="leaf leaf--3"></div>
        </div>
      </div>

      <div className="long-g long-g--2">
        <div className="grow-ans" style={{ '--d': '4s' }}>
          <div className="leaf leaf--0"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '4.2s' }}>
          <div className="leaf leaf--1"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '4.4s' }}>
          <div className="leaf leaf--2"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '4.6s' }}>
          <div className="leaf leaf--3"></div>
        </div>
      </div>

      <div className="long-g long-g--3">
        <div className="grow-ans" style={{ '--d': '4s' }}>
          <div className="leaf leaf--0"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '4.2s' }}>
          <div className="leaf leaf--1"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '3s' }}>
          <div className="leaf leaf--2"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '3.6s' }}>
          <div className="leaf leaf--3"></div>
        </div>
      </div>

      <div className="long-g long-g--4">
        <div className="grow-ans" style={{ '--d': '4s' }}>
          <div className="leaf leaf--0"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '4.2s' }}>
          <div className="leaf leaf--1"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '3s' }}>
          <div className="leaf leaf--2"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '3.6s' }}>
          <div className="leaf leaf--3"></div>
        </div>
      </div>

      <div className="long-g long-g--5">
        <div className="grow-ans" style={{ '--d': '4s' }}>
          <div className="leaf leaf--0"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '4.2s' }}>
          <div className="leaf leaf--1"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '3s' }}>
          <div className="leaf leaf--2"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '3.6s' }}>
          <div className="leaf leaf--3"></div>
        </div>
      </div>

      <div className="long-g long-g--6">
        <div className="grow-ans" style={{ '--d': '4.2s' }}>
          <div className="leaf leaf--0"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '4.4s' }}>
          <div className="leaf leaf--1"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '4.6s' }}>
          <div className="leaf leaf--2"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '4.8s' }}>
          <div className="leaf leaf--3"></div>
        </div>
      </div>

      <div className="long-g long-g--7">
        <div className="grow-ans" style={{ '--d': '3s' }}>
          <div className="leaf leaf--0"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '3.2s' }}>
          <div className="leaf leaf--1"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '3.5s' }}>
          <div className="leaf leaf--2"></div>
        </div>
        <div className="grow-ans" style={{ '--d': '3.6s' }}>
          <div className="leaf leaf--3"></div>
        </div>
      </div>
    </div>
  );
}

/* Filigree SVG corner ornamentation */
function CornerFiligree({ position = 'top-left' }) {
  const rotation = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position];

  return (
    <svg
      viewBox="0 0 100 100"
      className={`w-14 h-14 text-amber-700/30 fill-current pointer-events-none absolute ${rotation} ${
        position.includes('top') ? 'top-3' : 'bottom-3'
      } ${position.includes('left') ? 'left-3' : 'right-3'}`}
    >
      <path d="M10,10 L50,10 C55,10 60,15 60,20 C60,25 55,30 50,30 L30,30 L30,50 C30,55 25,60 20,60 C15,60 10,55 10,50 Z M20,20 L20,40 C20,43 23,45 25,45 L45,45 C48,45 50,43 50,40 L50,25 L20,20 Z" />
      <circle cx="15" cy="15" r="4" />
      <circle cx="28" cy="15" r="2" />
      <circle cx="15" cy="28" r="2" />
    </svg>
  );
}

export default function AnimatedCssFlowersExperience({ message, sender, to_name }) {
  const [showLetter, setShowLetter] = useState(false);

  return (
    <div className="animated-flowers-wrapper select-none">
      {/* Night Sky Background */}
      <div className="night"></div>

      {/* Organic Curved Green Garden Ground Hill */}
      <div className="grass-ground-hill">
        <svg viewBox="0 0 1440 180" preserveAspectRatio="none" className="w-full h-28 sm:h-40 block">
          <defs>
            <linearGradient id="grassGroundGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#15803d" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#166534" stopOpacity="0.98" />
              <stop offset="75%" stopColor="#052e16" stopOpacity="1" />
              <stop offset="100%" stopColor="#021f0e" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="grassGroundGradBack" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#14532d" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          {/* Layered Back Hill */}
          <path d="M0,60 C320,10 640,110 960,40 C1200,0 1360,70 1440,50 L1440,180 L0,180 Z" fill="url(#grassGroundGradBack)" />
          {/* Main Curved Front Hill */}
          <path d="M0,80 C360,20 720,120 1080,40 C1280,-10 1400,60 1440,40 L1440,180 L0,180 Z" fill="url(#grassGroundGrad)" />
        </svg>
      </div>

      {/* 5 Replicated Flower Clusters across the Garden Horizon */}
      <div className="flowers-garden-container">
        {FLOWER_INSTANCES.map((inst) => (
          <motion.div
            key={inst.id}
            initial={{ opacity: 0, y: 40, scale: inst.scale * 0.8 }}
            animate={{ opacity: 1, y: 0, scale: inst.scale }}
            transition={{ delay: inst.delay, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flower-group-instance"
            style={{
              left: inst.left,
            }}
          >
            <SingleFlowerCluster />
          </motion.div>
        ))}
      </div>

      {/* Elegant Professional Glass Button Overlay */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        onClick={() => setShowLetter(true)}
        className="fixed bottom-8 z-30 px-8 py-3.5 rounded-full bg-amber-500/15 hover:bg-amber-500/25 backdrop-blur-xl border border-amber-300/50 text-amber-100 font-semibold shadow-2xl shadow-amber-500/20 hover:shadow-amber-500/40 transition-all flex items-center gap-3 group cursor-pointer"
      >
        <Heart size={18} className="text-amber-400 fill-amber-400/30 group-hover:scale-110 transition-transform" />
        <span className="text-base sm:text-lg font-serif tracking-wide">
          Abrir Carta de Flores Amarillas
        </span>
        <Sparkles size={18} className="text-amber-300" />
      </motion.button>

      {/* Interactive Letter Modal Popup */}
      <AnimatePresence>
        {showLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
          >
            {/* Main Letter Card */}
            <motion.div
              initial={{ scale: 0.85, y: 40, rotateX: 10 }}
              animate={{ scale: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.85, y: 40, opacity: 0 }}
              transition={{ type: 'spring', damping: 22, stiffness: 260 }}
              className="w-full max-w-2xl bg-amber-50 parchment-paper rounded-3xl p-8 sm:p-14 text-amber-950 relative border-2 border-amber-400/80 shadow-[0_25px_80px_rgba(245,158,11,0.35),_0_0_50px_rgba(251,191,36,0.15)] overflow-hidden my-auto"
            >
              {/* Gold Inset Inner Line Frame */}
              <div className="absolute inset-3 border border-amber-500/30 rounded-2xl pointer-events-none" />

              {/* Corner Filigree Decorations */}
              <CornerFiligree position="top-left" />
              <CornerFiligree position="top-right" />
              <CornerFiligree position="bottom-left" />
              <CornerFiligree position="bottom-right" />

              {/* 3D Wax Seal at Top Center */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
                <div className="relative flex items-center justify-center">
                  {/* Outer Wax Ring */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 shadow-lg border-2 border-amber-200/90 flex items-center justify-center ring-4 ring-amber-500/20">
                    <div className="w-12 h-12 rounded-full border border-amber-200/60 bg-gradient-to-br from-amber-600 via-amber-500 to-amber-400 flex items-center justify-center shadow-inner">
                      <Sun size={24} className="text-amber-100 drop-shadow-sm" />
                    </div>
                  </div>
                </div>
                {/* Ribbon Tag */}
                <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-amber-950 font-semibold text-[10px] uppercase tracking-widest px-4 py-0.5 rounded-full shadow-md border border-amber-200/50 mt-1 flex items-center gap-1.5 text-white">
                  <Sparkles size={10} className="text-amber-200" />
                  <span>21 de Septiembre</span>
                  <Sparkles size={10} className="text-amber-200" />
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setShowLetter(false)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-amber-200/60 hover:bg-amber-300/80 text-amber-950 flex items-center justify-center transition-all cursor-pointer z-30 shadow-sm hover:scale-105"
                title="Cerrar carta"
              >
                <X size={18} />
              </button>

              {/* Header / Recipient */}
              <div className="pt-6 mb-4 text-center sm:text-left">
                <h3 className="text-3xl sm:text-5xl font-cursive font-bold text-amber-950 tracking-tight leading-tight">
                  Para: {to_name || 'Mi Persona Especial'}
                </h3>
              </div>

              {/* Decorative Divider */}
              <div className="w-full flex items-center justify-center gap-3 my-4 opacity-70">
                <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent flex-1" />
                <Heart size={14} className="text-amber-600 fill-amber-500" />
                <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent flex-1" />
              </div>

              {/* Parchment Message Body */}
              <div className="bg-white/60 backdrop-blur-xs border border-amber-300/50 rounded-2xl p-6 sm:p-8 my-6 text-amber-950 font-serif-luxury text-xl sm:text-2xl leading-relaxed shadow-inner whitespace-pre-wrap relative min-h-[160px]">
                {/* Watermark quote icon */}
                <span className="absolute top-3 left-4 text-6xl font-serif text-amber-300/20 pointer-events-none select-none">
                  “
                </span>
                <p className="relative z-10 italic">{message || 'Que este día esté lleno de sol, flores amarillas y muchísima felicidad para ti.'}</p>
                <span className="absolute bottom-1 right-4 text-6xl font-serif text-amber-300/20 pointer-events-none select-none">
                  ”
                </span>
              </div>

              {/* Sender Signature */}
              <div className="text-right mt-6">
                <span className="text-amber-800 font-script text-2xl sm:text-3xl block">
                  Con todo mi amor y cariño,
                </span>
                <div className="flex items-center justify-end gap-2 mt-1">
                  <p className="text-2xl sm:text-4xl font-cursive font-bold text-amber-950">
                    {sender || 'Tu Admirador/a'}
                  </p>
                  <Sparkles size={18} className="text-amber-500 fill-amber-300" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

