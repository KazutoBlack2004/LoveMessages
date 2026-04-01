import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { Loader2, HeartCrack, ArrowLeft } from 'lucide-react';
import LoveLetterTemplate from '../components/templates/LoveLetterTemplate';
import HappyBirthdayTemplate from '../components/templates/HappyBirthdayTemplate';
import EnvelopeTemplate from '../components/templates/EnvelopeTemplate';
import ProposalTemplate from '../components/templates/ProposalTemplate';

// Component Map - making it easy to add new templates in the future
const TEMPLATES = {
  'love_letter': LoveLetterTemplate,
  'happy_birthday': HappyBirthdayTemplate,
  'interactive_envelope': EnvelopeTemplate,
  'proposal': ProposalTemplate,
};

export default function MessagePage() {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [messageData, setMessageData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const { data, error } = await supabase
          .from('messages')
          .select('*')
          .eq('slug', slug)
          .single();

        if (error) throw error;
        
        // Check if message is expired
        if (new Date(data.expires_at) < new Date()) {
          throw new Error('This message has expired.');
        }

        setMessageData(data);
        
        // Optional: Attempt to update open status, no await needed.
        // This might fail if RLS doesn't allow updates, but that's fine.
        supabase
          .from('messages')
          .update({ is_opened: true, opened_at: new Date().toISOString() })
          .eq('slug', slug)
          .then()
          .catch(() => {});
          
      } catch (err) {
        console.error('Error fetching message:', err);
        setError('Message not found or expired.');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchMessage();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-primary-500">
        <Loader2 className="animate-spin mb-4" size={48} />
        <p className="text-gray-500 dark:text-gray-400 animate-pulse font-medium">Abriendo carta...</p>
      </div>
    );
  }

  if (error || !messageData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-950 text-center">
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 max-w-md w-full animate-fade-in">
          <div className="text-gray-400 dark:text-gray-600 mb-6 flex justify-center">
            <HeartCrack size={64} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">¡Ups!</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">El mensaje no se encontró o ha expirado.</p>
          <Link to="/" className="inline-flex items-center justify-center px-6 py-3 bg-primary-50 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900 rounded-lg font-medium transition-colors w-full">
            <ArrowLeft size={18} className="mr-2" />
            Crea tu propio mensaje
          </Link>
        </div>
      </div>
    );
  }

  const TemplateComponent = TEMPLATES[messageData.template] || TEMPLATES['love_letter'];

  return <TemplateComponent {...messageData} />;
}
