import { Heart, Sparkles } from 'lucide-react';

export default function LoveLetterTemplate({ to_name, from_name, message }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950 dark:to-primary-900 flex items-center justify-center p-4 sm:p-8 relative overflow-hidden transition-colors duration-500">
      
      {/* Decorative floating hearts background */}
      <div className="absolute top-10 left-10 text-primary-200 animate-float" style={{ animationDelay: '0s' }}>
        <Heart size={48} fill="currentColor" />
      </div>
      <div className="absolute top-20 right-20 text-primary-200 animate-float" style={{ animationDelay: '1s' }}>
        <Sparkles size={32} />
      </div>
      <div className="absolute bottom-20 left-1/4 text-primary-200 animate-float" style={{ animationDelay: '1.5s' }}>
        <Heart size={32} fill="currentColor" />
      </div>
      <div className="absolute bottom-10 right-10 text-primary-200 animate-float" style={{ animationDelay: '0.5s' }}>
        <Heart size={64} fill="currentColor" />
      </div>

      <div className="bg-white/90 dark:bg-primary-950/40 backdrop-blur-3xl max-w-2xl w-full rounded-3xl p-8 sm:p-12 relative z-10 animate-fade-in mx-auto shadow-2xl border border-white/40 dark:border-primary-500/20">
        
        {/* Top Decoration */}
        <div className="flex justify-center mb-8 fade-in-delay-1">
          <div className="bg-primary-100 dark:bg-primary-900/50 p-4 rounded-full text-primary-500 dark:text-primary-400 shadow-inner">
            <Heart size={32} fill="currentColor" className="animate-pulse" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center font-serif">
          <h2 className="text-3xl sm:text-4xl text-gray-800 dark:text-white mb-8 fade-in-delay-2">
            Querido/a <span className="text-primary-600 dark:text-primary-400 font-bold">{to_name}</span>,
          </h2>

          <div className="relative py-8">
            <div className="absolute left-0 top-0 w-8 h-8 border-t-2 border-l-2 border-primary-300 dark:border-primary-700 rounded-tl-xl"></div>
            <div className="absolute right-0 top-0 w-8 h-8 border-t-2 border-r-2 border-primary-300 dark:border-primary-700 rounded-tr-xl"></div>
            <div className="absolute left-0 bottom-0 w-8 h-8 border-b-2 border-l-2 border-primary-300 dark:border-primary-700 rounded-bl-xl"></div>
            <div className="absolute right-0 bottom-0 w-8 h-8 border-b-2 border-r-2 border-primary-300 dark:border-primary-700 rounded-br-xl"></div>
            
            <p className="text-lg sm:text-xl text-gray-700 dark:text-white leading-relaxed whitespace-pre-wrap fade-in-delay-3 px-4">
              {message}
            </p>
          </div>

          <div className="mt-10 fade-in-delay-4">
            <p className="text-primary-600/60 dark:text-primary-300/60 text-sm mb-2 uppercase tracking-widest font-medium">Tuyo/a siempre,</p>
            <p className="text-2xl font-bold text-primary-600 dark:text-primary-400 italic">
              {from_name}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
