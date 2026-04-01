import { Link } from 'react-router-dom';
import { Heart, Sparkles, Send, Lock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col relative overflow-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-20 left-10 text-primary-300/30 dark:text-primary-800/20 animate-float" style={{ animationDelay: '0s' }}>
        <Heart size={80} fill="currentColor" />
      </div>
      <div className="absolute top-40 right-20 text-primary-300/40 dark:text-primary-800/30 animate-float" style={{ animationDelay: '1s' }}>
        <Sparkles size={60} />
      </div>
      <div className="absolute bottom-40 left-1/4 text-primary-300/30 dark:text-primary-800/20 animate-float" style={{ animationDelay: '2s' }}>
        <Heart size={100} fill="currentColor" />
      </div>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12 text-center relative z-10 animate-fade-in mt-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 mb-8 border border-primary-200 dark:border-primary-800 shadow-sm">
          <Sparkles size={16} />
          <span className="text-sm font-medium">Sorprende a esa persona especial</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-900 dark:text-white mb-6 tracking-tight">
          Mensajes que <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-500 to-primary-700">enamoran</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-700/70 dark:text-primary-300/70 max-w-2xl mx-auto mb-12 leading-relaxed">
          Crea una carta digital personalizada, elige un diseño hermoso y comparte un enlace único y privado con quien tú quieras.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link 
            to="/galeria" 
            className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-bold text-lg transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:-translate-y-1 flex items-center justify-center"
          >
            <Heart size={20} className="mr-2" fill="currentColor" />
            Explorar Diseños
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-primary-50/60 dark:bg-primary-950/50 backdrop-blur-sm border-t border-primary-100/60 dark:border-primary-900/50 py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center text-primary-900 dark:text-white mb-12">¿Cómo funciona?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/70 dark:bg-primary-950/60 backdrop-blur-md border border-primary-100/50 dark:border-primary-900/40 shadow-lg shadow-primary-100/30 dark:shadow-primary-900/20 p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-primary-100 dark:bg-primary-900/50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-600 dark:text-primary-400">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-3">1. Elige un diseño</h3>
              <p className="text-primary-700/70 dark:text-primary-300/70">Navega por nuestra galería y selecciona el estilo visual que mejor exprese tus sentimientos.</p>
            </div>

            <div className="bg-white/70 dark:bg-primary-950/60 backdrop-blur-md border border-primary-100/50 dark:border-primary-900/40 shadow-lg shadow-primary-100/30 dark:shadow-primary-900/20 p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-primary-100 dark:bg-primary-900/50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-600 dark:text-primary-400">
                <Send size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-3">2. Escribe tu mensaje</h3>
              <p className="text-primary-700/70 dark:text-primary-300/70">Redacta unas palabras desde el corazón. Nosotros nos encargamos de que se vea espectacular.</p>
            </div>

            <div className="bg-white/70 dark:bg-primary-950/60 backdrop-blur-md border border-primary-100/50 dark:border-primary-900/40 shadow-lg shadow-primary-100/30 dark:shadow-primary-900/20 p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-primary-100 dark:bg-primary-900/50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-600 dark:text-primary-400">
                <Lock size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-3">3. Comparte el enlace</h3>
              <p className="text-primary-700/70 dark:text-primary-300/70">Obtén un enlace único y privado para enviar. El mensaje se auto-destruirá después de 7 días.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
