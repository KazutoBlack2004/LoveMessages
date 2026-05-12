import SakuraExperience from '../experiences/SakuraExperience';

export default function SakuraTemplate({ to_name, from_name, message }) {
  return (
    <div className="min-h-screen bg-linear-to-b from-pink-200 via-rose-100 to-pink-50 dark:from-rose-950 dark:via-pink-900 dark:to-fuchsia-950 flex flex-col items-center justify-center p-4 sm:p-8 transition-colors duration-500 overflow-hidden relative">
      
      {/* Background glowing orb representing setting sun */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-400/30 dark:bg-rose-500/20 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-linear-to-t from-pink-300/30 to-transparent dark:from-rose-900/40 pointer-events-none"></div>

      <div className="text-center mb-4 sm:mb-10 animate-fade-in relative z-10">
        <h2 className="text-3xl sm:text-4xl font-serif text-rose-900 dark:text-pink-100 italic drop-shadow-sm">
          Un instante en el tiempo...
        </h2>
      </div>
      
      <SakuraExperience message={message} sender={from_name} to_name={to_name} />
      
      <div className="mt-12 sm:mt-16 text-rose-800/60 dark:text-pink-200/50 text-sm animate-pulse font-serif z-10 relative">
        ~ Deja que los pétalos caigan ~
      </div>
    </div>
  );
}
