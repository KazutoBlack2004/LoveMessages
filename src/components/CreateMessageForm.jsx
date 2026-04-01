import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { Copy, CheckCircle2, Heart, Loader2 } from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function CreateMessageForm({ initialTemplate = 'love_letter' }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState(null);
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    to_name: '',
    from_name: '',
    message: '',
    template: initialTemplate,
  });

  const generateSlug = () => {
    return Math.random().toString(36).substring(2, 10);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const slug = generateSlug();
      const expires_at = new Date();
      // Expiración en 7 días (1 semana)
      expires_at.setDate(expires_at.getDate() + 7);

      const { error } = await supabase
        .from('messages')
        .insert([
          {
            slug,
            template: formData.template,
            to_name: formData.to_name,
            from_name: formData.from_name,
            message: formData.message,
            expires_at: expires_at.toISOString(),
          }
        ]);

      if (error) throw error;

      const link = `${window.location.origin}/m/${slug}`;
      setSuccessData({ slug, link });
      toast.success('¡Mensaje creado con éxito!');
      
    } catch (error) {
      console.error('Error creating message:', error.message);
      toast.error('Error al crear el mensaje. Asegúrate de estar conectado a Supabase.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    if (!successData) return;
    try {
      await navigator.clipboard.writeText(successData.link);
      setCopied(true);
      toast.success('¡Enlace copiado al portapapeles!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy!', err);
      toast.error('No se pudo copiar el enlace.');
    }
  };

  /* ---------- SUCCESS CARD ---------- */
  if (successData) {
    return (
      <div className="bg-white/70 dark:bg-primary-950/60 backdrop-blur-md border border-primary-100/50 dark:border-primary-900/40 shadow-lg shadow-primary-100/30 dark:shadow-primary-900/20 rounded-2xl p-8 text-center animate-fade-in relative overflow-hidden">
        <div className="absolute -top-10 -left-10 text-primary-200 dark:text-primary-900/40 opacity-50 z-0">
          <Heart size={100} fill="currentColor" />
        </div>
        <div className="absolute -bottom-10 -right-10 text-primary-200 dark:text-primary-900/40 opacity-50 z-0">
          <Heart size={100} fill="currentColor" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 p-3 rounded-full mb-4">
            <CheckCircle2 size={32} />
          </div>
          <h2 className="text-2xl font-serif font-bold text-primary-800 dark:text-white mb-2">¡Tu mensaje está listo!</h2>
          <p className="text-primary-600/80 dark:text-primary-300/70 mb-6">Comparte este enlace único con {formData.to_name}</p>
          
          <div className="w-full bg-primary-50 dark:bg-primary-900/40 border border-primary-200/60 dark:border-primary-800/50 rounded-lg p-3 flex items-center justify-between mb-6 shadow-sm">
            <span className="text-sm text-primary-700/70 dark:text-primary-300/70 truncate mr-3">{successData.link}</span>
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-primary-100 dark:bg-primary-800/60 text-primary-700 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-800 rounded-md font-medium text-sm transition-colors flex items-center shrink-0"
            >
              {copied ? <CheckCircle2 size={16} className="mr-1" /> : <Copy size={16} className="mr-1" />}
              {copied ? '¡Copiado!' : 'Copiar'}
            </button>
          </div>

          <button
            onClick={() => navigate(`/m/${successData.slug}`)}
            className="w-full py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors shadow-md shadow-primary-500/30"
          >
            Ver Mensaje
          </button>
        </div>
      </div>
    );
  }

  /* ---------- FORM ---------- */
  const inputClass = "w-full px-4 py-2.5 bg-primary-50/60 dark:bg-primary-900/30 border border-primary-200/60 dark:border-primary-800/50 text-primary-900 dark:text-white placeholder-primary-400/60 dark:placeholder-primary-500/50 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all";
  const labelClass = "block text-sm font-medium text-primary-700 dark:text-primary-300 mb-1";

  return (
    <form onSubmit={handleSubmit} className="bg-white/70 dark:bg-primary-950/60 backdrop-blur-md border border-primary-100/50 dark:border-primary-900/40 shadow-lg shadow-primary-100/30 dark:shadow-primary-900/20 rounded-2xl p-6 sm:p-8 relative">
      <div className="space-y-5 relative z-10">
        <div>
          <label htmlFor="to_name" className={labelClass}>Para (Nombre del destinatario)</label>
          <input
            id="to_name"
            type="text"
            required
            className={inputClass}
            placeholder="Ej. Mi amor"
            value={formData.to_name}
            onChange={(e) => setFormData({...formData, to_name: e.target.value})}
          />
        </div>

        {formData.template !== 'proposal' && (
          <>
            <div>
              <label htmlFor="from_name" className={labelClass}>De (Tu Nombre)</label>
              <input
                id="from_name"
                type="text"
                required
                className={inputClass}
                placeholder="Ej. Tu admirador secreto"
                value={formData.from_name}
                onChange={(e) => setFormData({...formData, from_name: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>Tu Mensaje</label>
              <textarea
                id="message"
                required
                rows="4"
                className={`${inputClass} resize-none`}
                placeholder="Escribe palabras desde el fondo de tu corazón..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
          </>
        )}

        {/* Template selector removed as requested (redundant) */}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 mt-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors shadow-md shadow-primary-500/30 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin mr-2" size={20} />
              Creando...
            </>
          ) : (
            'Generar el enlace de mi mensaje'
          )}
        </button>
      </div>
    </form>
  );
}
