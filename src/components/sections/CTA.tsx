import { motion } from 'framer-motion'
import { Play, ArrowRight } from 'lucide-react'
import { Reveal } from '../ui/Reveal'

export default function CTA() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 px-6 py-20 text-center sm:px-16">
            {/* fundo dinâmico */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_120%_at_50%_-10%,rgba(255,122,24,0.25),transparent_60%),radial-gradient(60%_100%_at_10%_100%,rgba(56,189,248,0.2),transparent_60%),radial-gradient(60%_100%_at_90%_100%,rgba(225,29,42,0.18),transparent_60%)]" />
            <div className="absolute inset-0 -z-10 bg-ink-800/40" />
            {/* kanji marca d'água */}
            <span className="pointer-events-none absolute inset-0 -z-10 grid place-items-center font-display text-[30vw] leading-none text-white/[0.03]">
              卍
            </span>

            <motion.p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-spirit"
              initial={{ opacity: 0, letterSpacing: '0.1em' }}
              whileInView={{ opacity: 1, letterSpacing: '0.4em' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Sua Zanpakutō aguarda
            </motion.p>
            <h2 className="mx-auto max-w-3xl font-title text-[clamp(2.5rem,7vw,5.5rem)] uppercase leading-[0.9] text-white">
              Desperte seu <span className="text-gradient-fire">Bankai</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/60">
              Entre para a Soul Society e assista à saga completa de Bleach em qualidade máxima,
              sem interrupções. A guerra espiritual começa agora.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button className="group flex items-center gap-2.5 rounded-full bg-white px-8 py-4 font-semibold text-ink-900 transition-transform hover:scale-105 active:scale-95">
                <Play size={20} className="fill-current" /> Começar a Assistir
              </button>
              <button className="group flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition-all hover:border-white/50 hover:shadow-glow-spirit">
                Ver Planos
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
