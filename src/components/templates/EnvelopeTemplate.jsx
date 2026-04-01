import EnvelopeExperience from '../experiences/EnvelopeExperience';

export default function EnvelopeTemplate({ to_name, from_name, message }) {
  return (
    <div className="min-h-screen bg-linear-to-br from-primary-50 to-primary-100 dark:from-primary-950 dark:to-primary-900 flex flex-col items-center justify-center p-4 sm:p-8 transition-colors duration-500 overflow-hidden">
      <div className="text-center mb-8 animate-fade-in">
        <h2 className="text-2xl font-serif text-primary-900 dark:text-primary-100 italic">
          Un mensaje especial para {to_name}
        </h2>
      </div>
      
      <EnvelopeExperience message={message} sender={from_name} />
      
      <div className="mt-12 text-primary-700/50 dark:text-primary-300/40 text-sm animate-pulse">
        Haz clic en el sobre para descubrir lo que hay dentro
      </div>
    </div>
  );
}
