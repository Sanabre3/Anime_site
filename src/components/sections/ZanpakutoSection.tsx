import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sword } from 'lucide-react'
import { zanpakuto, type Zanpakuto } from '../../data/content'
import { THEME } from '../../lib/theme'
import Poster from '../ui/Poster'
import { SectionHeading, Reveal } from '../ui/Reveal'
import Modal from '../ui/Modal'

export default function ZanpakutoSection() {
  const [active, setActive] = useState<Zanpakuto | null>(null)
  const t = active ? THEME[active.theme] : THEME.spirit

  return (
    <section id="zanpakuto" className="relative py-24">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        <SectionHeading
          kicker="斬魄刀"
          title={<>As <span className="text-gradient-quincy">Zanpakutō</span></>}
          desc="Lâminas vivas com alma própria. Clique para revelar Shikai e Bankai em detalhe."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {zanpakuto.map((z, i) => {
            const zt = THEME[z.theme]
            return (
              <Reveal key={z.id} delay={(i % 3) * 0.06}>
                <button
                  onClick={() => setActive(z)}
                  className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-700 text-left transition-all duration-300 hover:border-white/25 hover:shadow-glow-spirit"
                >
                  <div className="relative aspect-video">
                    <Poster theme={z.theme} kanji={z.kanji} img={z.img} />
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{ boxShadow: `inset 0 -60px 60px -30px ${zt.glow}` }}
                    />
                    {/* lâmina animada atravessando no hover */}
                    <motion.span
                      className="pointer-events-none absolute -left-1/2 top-1/2 h-px w-1/2 -translate-y-1/2"
                      style={{ background: `linear-gradient(90deg, transparent, ${zt.color}, transparent)` }}
                      initial={{ x: 0, opacity: 0 }}
                      whileHover={{}}
                    />
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <h4 className="font-title text-lg uppercase leading-none text-white">{z.name}</h4>
                      <p className="mt-1 text-xs text-white/50">{z.user}</p>
                    </div>
                    <Sword size={18} className="text-white/30 transition group-hover:rotate-12" style={{ color: zt.color }} />
                  </div>
                </button>
              </Reveal>
            )
          })}
        </div>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} theme={active?.theme}>
        {active && (
          <div className="relative">
            {/* fumaça / energia animada */}
            <div className="relative h-44 overflow-hidden">
              <Poster theme={active.theme} kanji={active.kanji} img={active.img} />
              <SmokeFx color={t.color} />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,12,14,0.95)] to-transparent" />
              <div className="absolute bottom-4 left-6">
                <p className="font-display text-sm text-white/50">{active.kanji}</p>
                <h3 className="font-title text-4xl uppercase leading-none text-white">{active.name}</h3>
                <p className="text-sm" style={{ color: t.color }}>{active.user}</p>
              </div>
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-3">
              <Field label="Forma Selada" value={active.sealed} color={t.color} />
              <Field label="Shikai" value={active.shikai} color={t.color} />
              <Field label="Bankai" value={active.bankai} color={t.color} highlight />
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}

function Field({ label, value, color, highlight }: { label: string; value: string; color: string; highlight?: boolean }) {
  return (
    <div
      className="rounded-xl border p-4"
      style={{
        borderColor: highlight ? color : 'rgba(255,255,255,0.1)',
        background: highlight ? `rgba(${THEME_RGB(color)},0.08)` : 'rgba(255,255,255,0.03)',
      }}
    >
      <p className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: highlight ? color : 'rgba(255,255,255,0.4)' }}>
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-white">{value}</p>
    </div>
  )
}

// utilitário: extrai rgb de um hex simples para rgba
function THEME_RGB(hex: string) {
  const h = hex.replace('#', '')
  const r = parseInt(h.substring(0, 2), 16)
  const g = parseInt(h.substring(2, 4), 16)
  const b = parseInt(h.substring(4, 6), 16)
  return `${r},${g},${b}`
}

/** Fumaça/energia sutil via camadas com blur animado. */
function SmokeFx({ color }: { color: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute h-40 w-40 rounded-full blur-2xl"
          style={{ background: color, opacity: 0.18, left: `${15 + i * 30}%`, bottom: '-30%' }}
          animate={{ y: [0, -60, 0], opacity: [0.05, 0.22, 0.05] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
        />
      ))}
    </div>
  )
}
