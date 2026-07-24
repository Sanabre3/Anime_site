import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { timeline } from '../../data/content'
import { THEME } from '../../lib/theme'
import { SectionHeading, Reveal } from '../ui/Reveal'

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24 })

  return (
    <section id="timeline" className="relative py-24">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        <SectionHeading
          kicker="A Jornada"
          title={<>Linha do <span className="text-gradient-blood">Tempo</span></>}
          desc="Do primeiro contato com Rukia até a guerra de mil anos. A saga completa de Ichigo."
          align="center"
        />

        <div ref={ref} className="relative mx-auto mt-16 max-w-3xl">
          {/* trilho central */}
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY: progress }}
            className="absolute left-4 top-0 h-full w-px origin-top bg-gradient-to-b from-spirit via-bankai to-blood md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-10">
            {timeline.map((step, i) => {
              const t = THEME[step.theme]
              const left = i % 2 === 0
              return (
                <Reveal key={step.id} y={40}>
                  <div className={`relative flex items-center gap-6 pl-12 md:pl-0 ${left ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* nó */}
                    <span
                      className="absolute left-4 z-10 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full md:left-1/2"
                      style={{ background: t.color, boxShadow: `0 0 20px ${t.glow}` }}
                    >
                      <span className="h-4 w-4 animate-ping rounded-full opacity-40" style={{ background: t.color }} />
                    </span>

                    <div className="md:w-1/2" />
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`w-full rounded-2xl glass p-5 md:w-1/2 ${left ? 'md:text-right' : ''}`}
                      style={{ borderColor: `rgba(${t.rgb},0.25)` }}
                    >
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: t.color }}>
                        {step.subtitle}
                      </span>
                      <h4 className="mt-1 font-title text-xl uppercase leading-none text-white">{step.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-white/60">{step.desc}</p>
                    </motion.div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
