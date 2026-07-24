import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Play, Heart, Plus, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import type { ArcCard } from '../../data/content'
import { THEME } from '../../lib/theme'
import Poster from '../ui/Poster'
import { Reveal } from '../ui/Reveal'

function Card({ item }: { item: ArcCard }) {
  const t = THEME[item.theme]
  const [fav, setFav] = useState(false)
  return (
    <div className="group/card relative w-[240px] shrink-0 snap-start sm:w-[280px]">
      <motion.div
        whileHover={{ scale: 1.14, zIndex: 30 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="relative z-10 origin-bottom"
      >
        <div
          className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-ink-700 shadow-card transition-shadow duration-300 group-hover/card:border-white/25"
          style={{ boxShadow: undefined }}
        >
          <Poster theme={item.theme} kanji={item.kanji} img={item.img} className="transition-transform duration-500 group-hover/card:scale-110" />
          {/* brilho no hover */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
            style={{ boxShadow: `inset 0 0 60px ${t.glow}` }}
          />
          {/* tag */}
          <span
            className="absolute left-2.5 top-2.5 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur"
            style={{ background: `rgba(${t.rgb},0.25)`, border: `1px solid rgba(${t.rgb},0.4)` }}
          >
            {item.tag}
          </span>

          {/* painel de informações que surge no hover */}
          <div className="absolute inset-x-0 bottom-0 translate-y-4 p-3 opacity-0 transition-all duration-300 group-hover/card:translate-y-0 group-hover/card:opacity-100">
            <div className="rounded-lg glass-strong p-3">
              <div className="flex items-center justify-between">
                <h4 className="font-title text-lg uppercase leading-none text-white">{item.title}</h4>
                <span className="flex items-center gap-1 text-xs font-semibold text-bankai">
                  <Star size={12} className="fill-bankai" />
                  {item.rating}
                </span>
              </div>
              <div className="mt-1 flex items-center gap-2 text-[11px] text-white/50">
                <span>{item.year}</span>
                <span className="h-1 w-1 rounded-full bg-white/30" />
                <span>{item.episodes}</span>
              </div>
              <p className="mt-1.5 line-clamp-2 text-[11px] leading-snug text-white/60">{item.desc}</p>
              <div className="mt-2.5 flex items-center gap-1.5">
                <button className="flex flex-1 items-center justify-center gap-1 rounded-md bg-white py-1.5 text-xs font-semibold text-ink-900 transition hover:bg-spirit">
                  <Play size={13} className="fill-current" /> Assistir
                </button>
                <button
                  onClick={() => setFav((v) => !v)}
                  className={`grid h-7 w-7 place-items-center rounded-md border transition ${
                    fav ? 'border-blood bg-blood/20 text-blood' : 'border-white/20 text-white/70 hover:border-white/50'
                  }`}
                  aria-label="Favoritar"
                >
                  <Heart size={13} className={fav ? 'fill-blood' : ''} />
                </button>
                <button className="grid h-7 w-7 place-items-center rounded-md border border-white/20 text-white/70 transition hover:border-white/50" aria-label="Mais informações">
                  <Plus size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* título fixo abaixo (fora do hover) */}
      <div className="mt-2 px-1 transition-opacity duration-200 group-hover/card:opacity-0">
        <p className="truncate text-sm font-medium text-white/80">{item.title}</p>
        <p className="text-[11px] text-white/40">{item.year} · {item.episodes}</p>
      </div>
    </div>
  )
}

export default function Row({ id, title, items }: { id: string; title: string; items: ArcCard[] }) {
  const scroller = useRef<HTMLDivElement>(null)

  const scroll = (dir: -1 | 1) => {
    const el = scroller.current
    if (!el) return
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: 'smooth' })
  }

  return (
    <section id={id} className="relative py-6">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        <Reveal>
          <div className="mb-3 flex items-end justify-between">
            <h3 className="group flex cursor-default items-center gap-2 font-title text-xl uppercase tracking-wide text-white/90 sm:text-2xl">
              {title}
              <ChevronRight size={18} className="translate-x-0 text-spirit opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
            </h3>
            <div className="hidden gap-1.5 sm:flex">
              <button onClick={() => scroll(-1)} className="grid h-8 w-8 place-items-center rounded-full glass text-white/80 transition hover:text-white hover:shadow-glow-spirit" aria-label="Anterior">
                <ChevronLeft size={18} />
              </button>
              <button onClick={() => scroll(1)} className="grid h-8 w-8 place-items-center rounded-full glass text-white/80 transition hover:text-white hover:shadow-glow-spirit" aria-label="Próximo">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      {/* scroller com padding vertical p/ o hover "pular" sem cortar */}
      <div
        ref={scroller}
        className="no-scrollbar snap-x snap-mandatory overflow-x-auto px-5 py-10 sm:px-8"
        style={{ scrollPaddingLeft: '2rem' }}
      >
        {/* w-max + mx-auto: centraliza quando os cards cabem, rola quando não cabem */}
        <div className="mx-auto flex w-max gap-3">
          {items.map((it) => (
            <Card key={it.id} item={it} />
          ))}
        </div>
      </div>
    </section>
  )
}
