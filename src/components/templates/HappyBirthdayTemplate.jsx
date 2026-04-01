import { Cake, Sparkles, Gift, PartyPopper } from 'lucide-react';

export default function HappyBirthdayTemplate({ to_name, from_name, message }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-orange-950 dark:to-red-950 flex items-center justify-center p-4 sm:p-8 relative overflow-hidden transition-colors duration-500">
      
      {/* Decorative floating icons */}
      <div className="absolute top-10 left-10 text-orange-300 animate-float" style={{ animationDelay: '0s' }}>
        <Cake size={48} />
      </div>
      <div className="absolute top-20 right-20 text-yellow-400 animate-float" style={{ animationDelay: '1s' }}>
        <Sparkles size={32} />
      </div>
      <div className="absolute bottom-20 left-1/4 text-orange-400 animate-float" style={{ animationDelay: '1.5s' }}>
        <PartyPopper size={40} />
      </div>
      <div className="absolute bottom-10 right-10 text-yellow-500 animate-float" style={{ animationDelay: '0.5s' }}>
        <Gift size={56} />
      </div>

      <div className="bg-white/90 dark:bg-orange-950/20 backdrop-blur-3xl max-w-2xl w-full rounded-3xl p-8 sm:p-12 relative z-10 animate-fade-in mx-auto shadow-2xl border border-white/40 dark:border-orange-500/20">
        
        {/* Top Decoration */}
        <div className="flex justify-center mb-8 fade-in-delay-1">
          <div className="bg-orange-100 dark:bg-orange-900/50 p-4 rounded-full text-orange-500 dark:text-orange-400 shadow-inner">
            <Cake size={40} className="animate-bounce" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center font-sans">
          <h2 className="text-3xl sm:text-4xl text-gray-800 dark:text-white mb-6 fade-in-delay-2 font-bold">
            ¡Feliz Cumpleaños, <span className="text-orange-600 dark:text-orange-400">{to_name}</span>!
          </h2>

          <div className="relative py-8">
            <div className="absolute left-0 top-0 w-8 h-8 border-t-4 border-l-4 border-yellow-300 dark:border-yellow-700 rounded-tl-2xl"></div>
            <div className="absolute right-0 top-0 w-8 h-8 border-t-4 border-r-4 border-yellow-300 dark:border-yellow-700 rounded-tr-2xl"></div>
            <div className="absolute left-0 bottom-0 w-8 h-8 border-b-4 border-l-4 border-yellow-300 dark:border-yellow-700 rounded-bl-2xl"></div>
            <div className="absolute right-0 bottom-0 w-8 h-8 border-b-4 border-r-4 border-yellow-300 dark:border-yellow-700 rounded-br-2xl"></div>
            
            <p className="text-lg sm:text-xl text-gray-700 dark:text-white leading-relaxed whitespace-pre-wrap fade-in-delay-3 px-4 font-medium">
              {message}
            </p>
          </div>

          <div className="mt-10 fade-in-delay-4">
            <p className="text-orange-600/60 dark:text-orange-300/60 text-sm mb-2 uppercase tracking-widest font-semibold">Con mucho cariño,</p>
            <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
              {from_name}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
