import { useParams, Link } from 'react-router-dom';
import { Eye } from 'lucide-react';
import CreateMessageForm from '../components/CreateMessageForm';

export default function CreatePage() {
  const { templateId } = useParams();

  // Mapping readable names for the header
  const templateNames = {
    'love_letter': 'Carta de Amor Clásica',
    'happy_birthday': 'Feliz Cumpleaños',
    'interactive_envelope': 'Sobre Interactivo',
    'proposal': 'Propuesta Directa',
    'sakura': 'Jardín Sakura',
    'dragonball': 'Amor Saiyajin',
    'chicago_pajaro_meme': 'Chicago Meme'
  };

  const selectedTemplateName = templateNames[templateId] || 'Diseño Personalizado';

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center py-12 px-4 sm:px-6">
      
      <div className="text-center max-w-2xl mx-auto mb-10 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-3">
          Redacta tu carta
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Diseño seleccionado: <span className="font-semibold text-primary-600 dark:text-primary-400">{selectedTemplateName}</span>
        </p>
        <Link
          to={`/preview/${templateId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-800/60 rounded-full font-medium transition-colors text-sm border border-primary-200 dark:border-primary-800"
        >
          <Eye size={16} />
          Ver vista previa del diseño
        </Link>
      </div>

      <div className="w-full max-w-md animate-[fadeIn_1.5s_ease-out_0.2s_forwards] opacity-0">
        <CreateMessageForm initialTemplate={templateId} />
      </div>

    </div>
  );
}
