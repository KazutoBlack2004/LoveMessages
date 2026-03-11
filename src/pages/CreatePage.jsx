import { useParams } from 'react-router-dom';
import CreateMessageForm from '../components/CreateMessageForm';

export default function CreatePage() {
  const { templateId } = useParams();

  // Mapping readable names for the header
  const templateNames = {
    'love_letter': 'Carta de Amor Clásica',
    'happy_birthday': 'Feliz Cumpleaños'
  };

  const selectedTemplateName = templateNames[templateId] || 'Diseño Personalizado';

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center py-12 px-4 sm:px-6">
      
      <div className="text-center max-w-2xl mx-auto mb-10 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-3">
          Redacta tu carta
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Diseño seleccionado: <span className="font-semibold text-primary-600 dark:text-primary-400">{selectedTemplateName}</span>
        </p>
      </div>

      <div className="w-full max-w-md animate-[fadeIn_1.5s_ease-out_0.2s_forwards] opacity-0">
        <CreateMessageForm initialTemplate={templateId} />
      </div>

    </div>
  );
}
