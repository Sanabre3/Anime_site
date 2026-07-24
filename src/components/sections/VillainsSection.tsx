import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { villains } from '../../data/content'
import { THEME } from '../../lib/theme'
import Poster from '../ui/Poster'
import { SectionHeading, Reveal } from '../ui/Reveal'

export default function VillainsSection() {
  return (
    <section id="viloes" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_50%,rgba(167,139,250,0.07),transparent)]" />
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        <SectionHeading
          kicker="Os Antagonistas"
          title={<>Vilões <span className="text-gradient-fire">Lendários</span></>}
          desc="De traidores do Gotei 13 aos imperadores Quincy — as ameaças que moldaram a guerra espiritual."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {villains.map((v, i) => {
            const t = THEME[v.theme]
            const big = i === 0 || i === 1
            return (
              <Reveal key={v.id} delay={(i % 4) * 0.05} className={big ? 'sm:col-span-1 lg:col-span-2' : ''}>
                <motion.article
                  whileHover="hover"
                  className="group relative h-full min-h-[300px] overflow-hidden rounded-2xl border border-white/10"
                >
                  <div className="absolute inset-0">
                    <Poster theme={v.theme} kanji={v.kanji} img={v.img} className="transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  {/* scrim para garantir legibilidade do nome */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/50 to-transparent" />
                  <motion.div
                    variants={{ hover: { opacity: 1 } }}
                    className="absolute inset-0 opacity-0 transition-opacity duration-500"
                    style={{ background: `radial-gradient(80% 80% at 50% 20%, ${t.glow}, transparent 70%)` }}
                  />
                  <div className="relative flex h-full min-h-[300px] flex-col justify-end p-5">
                    <span
                      className="mb-2 w-fit rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest"
                      style={{ color: t.color, background: `rgba(${t.rgb},0.14)`, border: `1px solid rgba(${t.rgb},0.35)` }}
                    >
                      {v.faction}
                    </span>
                    <h4 className="font-title text-2xl uppercase leading-none text-white sm:text-3xl">{v.name}</h4>
                    <motion.div
                      variants={{ hover: { height: 'auto', opacity: 1, marginTop: 12 } }}
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="flex gap-2 text-sm italic leading-snug text-white/70">
                        <Quote size={16} className="mt-0.5 shrink-0" style={{ color: t.color }} />
                        {v.quote}
                      </p>
                    </motion.div>
                  </div>
                </motion.article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
