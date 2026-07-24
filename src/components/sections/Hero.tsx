import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Play, Info, Star, ChevronDown } from 'lucide-react'
import BgVideo from '../effects/BgVideo'

// Clipe oficial VIZ — Ichigo × Byakuya sob a chuva (TYBW ep. 7, "Born in the Dark").
const HERO_VIDEO_ID = 'MpHR0OPqCbs'

/**
 * Hero cinematográfico com vídeo de fundo (a conversa de Ichigo e Byakuya
 * na chuva, TYBW). Sem partículas — a chuva do vídeo dá o movimento.
 */
export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])

  return (
    <section id="top" ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* vídeo de fundo (chuva) — trecho curto em loop, sem o selo VIZ do fim */}
      <motion.div style={{ scale: videoScale }} className="absolute inset-0 -z-10 bg-ink-900">
        <BgVideo
          videoId={HERO_VIDEO_ID}
          startAt={4}
          endTrim={11}
          maxDuration={26}
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: '100vw', height: '56.25vw', minHeight: '100svh', minWidth: '177.77svh' }}
        />
      </motion.div>

      {/* overlays (mais leves — vídeo mais claro; legibilidade só do lado do texto) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-ink-900/25" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-ink-900/90 via-ink-900/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/35" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink-900 to-transparent" />

      {/* conteúdo */}
      <motion.div
        style={{ y: yContent, opacity }}
        className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-2xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="rounded-full border border-bankai/40 bg-bankai/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-bankai">
              Série Original
            </span>
            <span className="flex items-center gap-1 text-sm text-white/70">
              <Star size={14} className="fill-bankai text-bankai" /> 9.1 · 2004–2023 · 16+
            </span>
          </div>

          <h1 className="font-title text-[clamp(2.8rem,11vw,9rem)] uppercase leading-[0.82] tracking-tight text-white">
            <span className="block title-stroke text-white/90">Entre na</span>
            <span className="block text-gradient-fire drop-shadow-[0_0_40px_rgba(255,122,24,0.35)]">
              Soul Society
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] sm:text-lg">
            Ichigo Kurosaki nunca pediu para ver fantasmas. Quando a Shinigami Rukia Kuchiki
            transfere seus poderes, ele se torna o elo entre os vivos, os mortos e algo muito
            maior. Uma jornada de Zanpakutō, Bankai e guerra espiritual.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button className="group relative flex items-center gap-2.5 overflow-hidden rounded-full bg-white px-7 py-3.5 font-semibold text-ink-900 transition-transform hover:scale-[1.04] active:scale-95">
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-spirit via-white to-bankai opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
              <Play size={20} className="relative fill-current" />
              <span className="relative">Assistir Agora</span>
            </button>
            <button className="flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/10 hover:shadow-glow-spirit">
              <Info size={20} />
              Explorar
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* indicador de scroll */}
      <motion.a
        href="#arcos"
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Role</span>
        <ChevronDown size={18} />
      </motion.a>
    </section>
  )
}
