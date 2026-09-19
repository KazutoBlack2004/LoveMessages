import ConstellationExperience from '../experiences/ConstellationExperience';

export default function ConstellationTemplate({ to_name, from_name, message }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900 flex flex-col items-center justify-center p-4 sm:p-8 transition-colors duration-500 overflow-hidden relative">
      
      {/* Deep cosmic ambient background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>

      <div className="text-center mb-2 sm:mb-6 animate-fade-in relative z-10">
        <h1 className="text-3xl sm:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-indigo-100 to-pink-200 font-bold drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          Constelación del Amor
        </h1>
      </div>
      
      <ConstellationExperience message={message} sender={from_name} to_name={to_name} />
    </div>
  );
}
