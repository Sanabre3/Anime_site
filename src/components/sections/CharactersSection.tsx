import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sword, Shield, Sparkles, ChevronRight } from 'lucide-react'
import { characters, type Character } from '../../data/content'
import { THEME } from '../../lib/theme'
import { useTilt } from '../../hooks/useTilt'
import Poster from '../ui/Poster'
import { SectionHeading, Reveal } from '../ui/Reveal'
import Modal from '../ui/Modal'

function CharacterCard({ c, onOpen }: { c: Character; onOpen: () => void }) {
  const { ref, onMove, onLeave } = useTilt(10)
  const t = THEME[c.theme]
  return (
    <Reveal className="perspective">
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onClick={onOpen}
        className="gpu group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-ink-700 transition-[border-color] duration-300 hover:border-white/25"
        style={{ transition: 'transform .2s ease-out' }}
      >
        <div className="relative aspect-[3/4]">
          <Poster theme={c.theme} kanji={c.kanji} img={c.img} imgPosition="top" />
          {/* glare seguindo o mouse */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: 'radial-gradient(200px circle at var(--mx) var(--my), rgba(255,255,255,0.18), transparent 60%)' }}
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4">
          <h4 className="font-title text-xl uppercase leading-none text-white">{c.name}</h4>
          <p className="mt-1 text-xs" style={{ color: t.color }}>
            {c.zanpakuto !== '—' ? `Zanpakutō · ${c.zanpakuto}` : 'Forças Especiais'}
          </p>
          <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-white/50 transition group-hover:text-white">
            Ver detalhes <ChevronRight size={12} />
          </span>
        </div>
      </div>
    </Reveal>
  )
}

export default function CharactersSection() {
  const [active, setActive] = useState<Character | null>(null)
  const t = active ? THEME[active.theme] : THEME.spirit

  return (
    <section id="personagens" className="relative py-24">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        <SectionHeading
          kicker="Almas em Batalha"
          title={<>Personagens</>}
          desc="Os guerreiros que definem o destino dos três mundos. Passe o mouse para o efeito 3D e clique para conhecer cada história."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {characters.map((c) => (
            <CharacterCard key={c.id} c={c} onOpen={() => setActive(c)} />
          ))}
        </div>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} theme={active?.theme}>
        {active && (
          <div className="grid gap-0 sm:grid-cols-[42%_1fr]">
            <div className="relative aspect-[3/4] sm:aspect-auto">
              <Poster theme={active.theme} kanji={active.kanji} img={active.img} imgPosition="top" />
            </div>
            <div className="p-6 sm:p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: t.color }}>
                {active.affiliation}
              </span>
              <h3 className="mt-1 font-title text-4xl uppercase leading-none text-white">{active.name}</h3>
              <p className="mt-1 font-display text-sm text-white/40">{active.kanji}</p>

              <div className="mt-6 space-y-3">
                <Detail icon={<Sparkles size={16} />} label="Poder" value={active.power} color={t.color} />
                <Detail icon={<Sword size={16} />} label="Zanpakutō" value={active.zanpakuto} color={t.color} />
                <Detail icon={<Shield size={16} />} label="Bankai" value={active.bankai} color={t.color} />
              </div>

              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Curiosidade</p>
                <p className="mt-1 text-sm leading-relaxed text-white/75">{active.trivia}</p>
              </div>

              <motion.button
                whileTap={{ scale: 0.96 }}
                className="mt-6 w-full rounded-full py-3 font-semibold text-ink-900"
                style={{ background: t.color, boxShadow: `0 0 30px -6px ${t.glow}` }}
              >
                Assistir Cenas
              </motion.button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}

function Detail({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: string; color: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/5" style={{ color }}>
        {icon}
      </span>
      <div>
        <p className="text-[11px] uppercase tracking-wider text-white/40">{label}</p>
        <p className="text-sm font-medium text-white">{value}</p>
      </div>
    </div>
  )
}
