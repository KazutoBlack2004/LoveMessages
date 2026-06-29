import { Link } from 'react-router-dom';
import { Heart, Send, Cake, Mail, Gift, Flower2, Zap, Bird, Eye } from 'lucide-react';

// Hardcoded template list (for now, just one, but prepared for more)
const TEMPLATES = [
  {
    id: 'love_letter',
    name: 'Carta de Amor Clásica',
    description: 'Un diseño romántico con fondo difuminado, corazones animados y texto estilo máquina de escribir.',
    icon: Heart,
    color: 'from-primary-400 to-primary-600'
  },
  {
    id: 'happy_birthday',
    name: 'Feliz Cumpleaños',
    description: 'Un diseño alegre y festivo con globos, regalos y animaciones divertidas para celebrar su día especial.',
    icon: Cake,
    color: 'from-orange-400 to-yellow-500'
  },
  {
    id: 'interactive_envelope',
    name: 'Sobre Interactivo',
    description: 'Un sobre elegante que esconde tu mensaje y se abre con una lluvia de corazones al tocarlo.',
    icon: Mail,
    color: 'from-primary-600 to-rose-400'
  },
  {
    id: 'proposal',
    name: 'Propuesta Directa',
    description: 'Haz la gran pregunta con estilo. Incluye un botón que huye y una celebración inolvidable.',
    icon: Gift,
    color: 'from-primary-700 to-purple-600'
  },
  {
    id: 'sakura',
    name: 'Jardín Sakura',
    description: 'Una experiencia poética y japonesa con pétalos cayendo y un pergamino elegante.',
    icon: Flower2,
    color: 'from-pink-400 to-rose-300'
  },
  {
    id: 'dragonball',
    name: 'Amor Saiyajin',
    description: '¡Demuestra tu amor nivel Super Saiyajin! Con Goku de fondo cantando "Mi corazón encantado" y las 7 esferas del amor.',
    icon: Zap,
    color: 'from-orange-500 to-yellow-500 font-bold'
  },
  {
    id: 'chicago_pajaro_meme',
    name: 'Chicago Meme',
    description: 'Meme de Chicago de Michael Jacson',
    icon: Bird,
    color: 'from-neutral-600 to-neutral-800 font-bold'
  }
];

export default function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
          Galería de Diseños
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Elige el estilo perfecto para tu mensaje especial.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TEMPLATES.map((template, index) => {
          const Icon = template.icon;
          return (
            <div
              key={template.id}
              className="bg-white/70 dark:bg-primary-950/60 backdrop-blur-md border border-primary-100/50 dark:border-primary-900/40 shadow-lg shadow-primary-100/30 dark:shadow-primary-900/20 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary-500/20 hover:-translate-y-1 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Header / Preview area */}
              <div className={`h-48 bg-linear-to-br ${template.color} relative overflow-hidden flex items-center justify-center`}>
                <Icon size={64} className="text-white opacity-80 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {template.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 min-h-12">
                  {template.description}
                </p>

                <div className="flex flex-col gap-3">
                  <Link
                    to={`/preview/${template.id}`}
                    className="w-full py-3 bg-white dark:bg-primary-950 border-2 border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/50 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Eye size={18} />
                    Vista Previa
                  </Link>
                  <Link
                    to={`/crear/${template.id}`}
                    className="w-full py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-md shadow-primary-400/30"
                  >
                    <Send size={18} />
                    Usar este diseño
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
