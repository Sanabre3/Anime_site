import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import { gallery, type GalleryItem } from '../../data/content'
import { THEME } from '../../lib/theme'
import Poster from '../ui/Poster'
import { SectionHeading, Reveal } from '../ui/Reveal'

const SPAN: Record<GalleryItem['span'], string> = {
  tall: 'row-span-2',
  wide: 'col-span-2',
  normal: '',
}

export default function Gallery() {
  const [active, setActive] = useState<GalleryItem | null>(null)

  return (
    <section id="galeria" className="relative py-24">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        <SectionHeading
          kicker="Arte & Momentos"
          title={<>Galeria <span className="text-gradient-blood">Espiritual</span></>}
          desc="Um mosaico do universo Bleach. Clique em qualquer peça para ampliar."
          align="center"
        />

        <div className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:grid-cols-4">
          {gallery.map((g, i) => (
            <Reveal key={g.id} delay={(i % 4) * 0.05} className={`${SPAN[g.span]}`}>
              <button
                onClick={() => setActive(g)}
                className="group relative h-full w-full overflow-hidden rounded-2xl border border-white/10"
              >
                <Poster theme={g.theme} kanji={g.kanji} img={g.img} className="transition-transform duration-700 group-hover:scale-110" dim />
                <div className="absolute inset-0 bg-ink-900/20 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 grid place-items-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="grid h-11 w-11 place-items-center rounded-full glass-strong text-white">
                    <ZoomIn size={18} />
                  </div>
                </div>
                <span className="absolute bottom-3 left-3 text-sm font-semibold text-white/85 drop-shadow">{g.label}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[95] grid place-items-center p-4"
            onClick={() => setActive(null)}
          >
            <div className="absolute inset-0 bg-ink-900/90 backdrop-blur-xl" />
            <button className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full glass text-white" aria-label="Fechar">
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 240, damping: 24 }}
              className="relative flex max-h-[86vh] max-w-[92vw] items-center justify-center overflow-hidden rounded-2xl"
              style={{ boxShadow: `0 0 90px -20px ${THEME[active.theme].glow}` }}
              onClick={(e) => e.stopPropagation()}
            >
              {active.img ? (
                // imagem inteira, sem corte
                <img
                  src={active.img}
                  alt={active.label}
                  className="max-h-[86vh] max-w-[92vw] rounded-2xl object-contain"
                />
              ) : (
                <div className="relative aspect-video w-[min(92vw,56rem)]">
                  <Poster theme={active.theme} kanji={active.kanji} label={active.label} />
                </div>
              )}
              <span className="pointer-events-none absolute bottom-4 left-5 rounded-full bg-ink-900/70 px-3 py-1 text-sm font-semibold text-white backdrop-blur">
                {active.label}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
