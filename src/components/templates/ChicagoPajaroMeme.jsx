import { motion, AnimatePresence } from 'framer-motion';

export default function ChicagoPajaroExperience({ message, from_name, to_name }) {
    const videoId = "bp4_7T9J6Fg";
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=0&rel=0&modestbranding=1`;

    return (
        <div
            className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center py-8 px-4"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1516528387618-afa90b13e000?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8anVuZ2xhfGVufDB8fDB8fHww')"
            }}
        >
            <section className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center z-10">
                <div className="w-full bg-[#093d00]/20 backdrop-blur-xl rounded-3xl p-4 sm:p-6 border border-[#ffe8a1]/15 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_25px_rgba(251,191,36,0.15)] flex flex-col items-center justify-center gap-6 overflow-hidden">

                    <AnimatePresence mode="wait">
                        <motion.div
                            key="player"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="w-full flex flex-col items-center gap-6"
                        >
                            {/* 16:9 Player Container */}
                            <div
                                className="relative w-full rounded-2xl overflow-hidden border border-[#ffe8a1]/30 shadow-2xl bg-black"
                                style={{
                                    aspectRatio: "16 / 9",
                                    height: "auto"
                                }}
                            >
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src={embedUrl}
                                    title="Chicago song"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            {/* Info Box Uniforme */}
                            <div className="w-full max-w-md bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-xl flex flex-col items-center gap-3 text-center">
                                {/* Alerta del Documental */}
                                <p className="text-sm sm:text-base text-stone-200 font-medium tracking-wide">
                                    Se ha detectado un despliegue de pasos prohibidos.
                                </p>

                                {/* Bloque ORIGEN (Sender) */}
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 text-xs sm:text-sm text-stone-300 w-full">
                                    <span>Ritual de apareamiento iniciado por:</span>
                                    <span className="px-3 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-black uppercase rounded-full text-xs tracking-wider shadow-sm truncate max-w-[180px]">
                                        {from_name || 'Alguien'}
                                    </span>
                                </div>

                                {/* Bloque DESTINO (To Name) */}
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 text-xs sm:text-sm text-stone-300 w-full">
                                    <span>Con el único objetivo de conquistar a:</span>
                                    <span className="px-3 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 font-black uppercase rounded-full text-xs tracking-wider shadow-sm truncate max-w-[180px]">
                                        {to_name || 'Destinatario'}
                                    </span>
                                </div>
                            </div>

                            {/* Mensaje opcional del usuario */}
                            {message && (
                                <div className="relative w-full max-w-md px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 shadow-xl">
                                    <span className="absolute -top-4 -left-1 text-6xl text-white/10 font-serif select-none">“</span>
                                    <p className="text-stone-50 text-base sm:text-lg font-serif italic leading-relaxed text-center relative z-10 drop-shadow-sm break-words">
                                        {message}
                                    </p>
                                    <p className="text-[10px] text-stone-300/60 text-center mt-3 font-mono">
                                        * Si el baile no funciona, se procederá a hacer el Moonwalk *
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                </div>
            </section>
        </div>
    );
}