import { motion } from 'framer-motion'
import { Flame, Snowflake, Skull, Zap, Droplet, Swords } from 'lucide-react'
import { captains, type Captain } from '../../data/content'
import { THEME } from '../../lib/theme'
import Poster from '../ui/Poster'
import { SectionHeading, Reveal } from '../ui/Reveal'

const ELEMENT_ICON: Record<string, React.ReactNode> = {
  Fogo: <Flame size={14} />,
  Gelo: <Snowflake size={14} />,
  Veneno: <Skull size={14} />,
  Devastação: <Swords size={14} />,
  Titã: <Zap size={14} />,
}

function iconFor(el: string) {
  return ELEMENT_ICON[el] ?? <Droplet size={14} />
}

function CaptainCard({ c, i }: { c: Captain; i: number }) {
  const t = THEME[c.theme]
  return (
    <Reveal delay={(i % 4) * 0.06}>
      <motion.article
        whileHover={{ y: -8 }}
        className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-ink-700"
      >
        <div className="relative aspect-[4/5]">
          <Poster theme={c.theme} kanji={c.division.replace('ª Divisão', '')} img={c.img} imgPosition="top" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent" />
          {/* barra de energia lateral no hover */}
          <div
            className="absolute inset-y-0 left-0 w-1 origin-bottom scale-y-0 transition-transform duration-500 group-hover:scale-y-100"
            style={{ background: t.color, boxShadow: `0 0 20px ${t.glow}` }}
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: t.color }}>
            {c.division}
          </p>
          <h4 className="mt-0.5 font-title text-lg uppercase leading-none text-white">{c.name}</h4>
          <div className="mt-2 flex items-center gap-2 text-[11px] text-white/60">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/8 px-2 py-0.5" style={{ color: t.color }}>
              {iconFor(c.element)} {c.element}
            </span>
          </div>
          {/* detalhes revelados no hover */}
          <div className="mt-3 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
            <p className="text-[11px] text-white/45">Bankai</p>
            <p className="text-xs font-medium text-white/85">{c.bankai}</p>
            <div className="mt-2">
              <div className="flex justify-between text-[10px] text-white/40">
                <span>Poder espiritual</span>
                <span>{c.power}</span>
              </div>
              <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${c.power}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${t.color}, #fff)` }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </Reveal>
  )
}

export default function CaptainsSection() {
  return (
    <section id="capitaes" className="relative py-24">
      {/* faixa de fundo temática */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(225,29,42,0.1),transparent)]" />
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        <SectionHeading
          kicker="護廷十三隊"
          title={<>Capitães do <span className="text-gradient-blood">Gotei 13</span></>}
          desc="A elite dos Shinigami. Cada capitão comanda uma divisão e domina um Bankai único."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {captains.map((c, i) => (
            <CaptainCard key={c.id} c={c} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
