import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import LoveLetterTemplate from '../components/templates/LoveLetterTemplate';
import HappyBirthdayTemplate from '../components/templates/HappyBirthdayTemplate';
import EnvelopeTemplate from '../components/templates/EnvelopeTemplate';
import ProposalTemplate from '../components/templates/ProposalTemplate';
import SakuraTemplate from '../components/templates/SakuraTemplate';
import DragonBallTemplate from '../components/templates/DragonBallTemplate';
import ChicagoPajaroMeme from '../components/templates/ChicagoPajaroMeme';

const TEMPLATES = {
  'love_letter': LoveLetterTemplate,
  'happy_birthday': HappyBirthdayTemplate,
  'interactive_envelope': EnvelopeTemplate,
  'proposal': ProposalTemplate,
  'sakura': SakuraTemplate,
  'dragonball': DragonBallTemplate,
  'chicago_pajaro_meme': ChicagoPajaroMeme,
};

const DEFAULT_MESSAGES = {
  'love_letter': {
    from_name: 'Tu Enamorado/a',
    to_name: 'Amor Mío',
    message: 'Esta es una vista previa de cómo se verá tu mensaje. Las palabras que escribas aparecerán aquí, con el mismo formato y estilo.',
    music_url: ''
  },
  'happy_birthday': {
    from_name: 'Tu Amigo/a',
    to_name: 'Cumpleañero/a',
    message: '¡Feliz Cumpleaños! Esta es una vista previa de la tarjeta. ¡Imagina tu mensaje personalizado aquí lleno de alegría y buenos deseos!',
    music_url: ''
  },
  'interactive_envelope': {
    from_name: 'Tu Admirador/a',
    to_name: 'Alguien Especial',
    message: 'Al abrir este sobre, descubrirás la sorpresa. Así de genial se verá el mensaje que le envíes a esa persona especial.',
    music_url: ''
  },
  'proposal': {
    from_name: 'Tu Futuro/a',
    to_name: 'Mi Vida',
    message: '¿Quieres pasar el resto de tu vida conmigo? Esta es la vista previa de una de las preguntas más importantes.',
    music_url: ''
  },
  'sakura': {
    from_name: 'Alguien que te quiere',
    to_name: 'Mi Flor de Cerezo',
    message: 'Bajo la lluvia de pétalos, este mensaje muestra cómo se verá tu texto en este hermoso jardín zen.',
    music_url: ''
  },
  'dragonball': {
    from_name: 'Guerrero Z',
    to_name: 'Mi Bulma',
    message: '¡Mi poder de pelea aumenta cuando estoy contigo! Esta es la vista previa del mensaje saiyajin.',
    music_url: ''
  },
  'chicago_pajaro_meme': {
    from_name: 'Meme Lover',
    to_name: 'Mi Pajarito',
    message: 'Pío pío, esto es una vista previa del meme para que veas cómo se ríe esa persona especial.',
    music_url: ''
  }
};

export default function PreviewPage() {
  const { templateId } = useParams();
  const navigate = useNavigate();
  
  const TemplateComponent = TEMPLATES[templateId] || TEMPLATES['love_letter'];
  const mockData = DEFAULT_MESSAGES[templateId] || DEFAULT_MESSAGES['love_letter'];

  return (
    <div className="relative min-h-screen">
      {/* Back to Gallery/Create Button */}
      <button 
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-black transition-colors text-gray-800 dark:text-white"
      >
        <ArrowLeft size={20} />
        Volver
      </button>

      {/* Preview Overlay Label */}
      <div className="absolute top-4 right-4 z-50 px-4 py-2 bg-primary-500 text-white rounded-full font-bold shadow-lg shadow-primary-500/50 animate-pulse">
        Vista Previa
      </div>

      <div className="w-full h-full min-h-screen">
        <TemplateComponent {...mockData} />
      </div>
    </div>
  );
}
