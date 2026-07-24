import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import BgVideo from '../effects/BgVideo'

// Embed oficial da VIZ Media — cena Ichigo Kurosaki × Yhwach (TYBW).
const VIDEO_ID = 'bNgur2EuJxc'

/**
 * Faixa cinematográfica full-bleed com vídeo de fundo em loop (mudo, autoplay)
 * de um trecho da batalha Ichigo × Yhwach — sem o selo "VIZ" do fim.
 * O vídeo só é montado quando a seção entra na viewport (performance).
 */
export default function VsBand() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.2 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative h-[70vh] min-h-[440px] w-full overflow-hidden">
      {/* vídeo de fundo — trecho curto em loop */}
      <div className="absolute inset-0 -z-10 bg-ink-800">
        {inView && (
          <BgVideo
            videoId={VIDEO_ID}
            startAt={5}
            endTrim={10}
            maxDuration={24}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[135%] w-[135%] -translate-x-1/2 -translate-y-1/2 md:h-[130%] md:w-[130%]"
            style={{ minWidth: '177.77vh', minHeight: '56.25vw' }}
          />
        )}
      </div>

      {/* overlays cinematográficos */}
      <div className="pointer-events-none absolute inset-0 bg-ink-900/55" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-900/80 via-transparent to-ink-900/40" />
      {/* linhas cinematográficas (letterbox sutil) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-ink-900 to-transparent" />

      {/* conteúdo */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-center px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-2xl"
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blood" />
            Thousand-Year Blood War
          </span>
          <h2 className="font-title text-[clamp(2.6rem,7vw,6rem)] uppercase leading-[0.85] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
            Ichigo <span className="text-gradient-fire">×</span> Yhwach
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/75 sm:text-base">
            O confronto final entre o Shinigami Substituto e o Imperador Quincy. O destino
            dos três mundos decidido em uma única batalha.
          </p>
          <button className="mt-7 flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 font-semibold text-ink-900 transition-transform hover:scale-105 active:scale-95">
            <Play size={20} className="fill-current" /> Assistir a Batalha
          </button>
        </motion.div>
      </div>
    </section>
  )
}
