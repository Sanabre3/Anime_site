import { stats } from '../../data/content'
import { THEME } from '../../lib/theme'
import { useCountUp } from '../../hooks/useCountUp'
import { Reveal } from '../ui/Reveal'

function StatItem({ value, prefix, suffix, label, color, glow }: {
  value: number; prefix: string; suffix: string; label: string; color: string; glow: string
}) {
  const { value: n, ref } = useCountUp(value)
  return (
    <div className="relative text-center">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-2xl"
        style={{ background: glow }}
      />
      <span
        ref={ref}
        className="relative block font-title text-4xl leading-none sm:text-6xl md:text-7xl"
        style={{ color, textShadow: `0 0 30px ${glow}` }}
      >
        {prefix}
        {n}
        {suffix}
      </span>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">{label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_100%_at_50%_50%,rgba(255,122,24,0.06),transparent)]" />
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="grid grid-cols-2 gap-6 rounded-3xl glass-strong p-6 sm:gap-8 sm:p-10 md:grid-cols-4 md:p-14">
            {stats.map((s) => {
              const t = THEME[s.theme]
              return (
                <StatItem
                  key={s.id}
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  label={s.label}
                  color={t.color}
                  glow={t.glow}
                />
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
