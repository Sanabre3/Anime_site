import type { Theme } from '../../data/content'
import { THEME } from '../../lib/theme'

interface PosterProps {
  theme: Theme
  kanji: string
  label?: string
  img?: string
  className?: string
  /** intensidade dos elementos decorativos */
  dim?: boolean
  /** object-position da imagem (ex: 'top' p/ priorizar rosto em renders de corpo inteiro) */
  imgPosition?: 'top' | 'center'
}

/**
 * Poster: arte cinematográfica gerada via CSS quando não há imagem oficial.
 * Se `img` for informado, usa a imagem com o mesmo overlay premium.
 */
export default function Poster({ theme, kanji, label, img, className = '', dim, imgPosition = 'center' }: PosterProps) {
  const t = THEME[theme]
  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={{ background: img ? '#050505' : t.gradient }}
    >
      {img && (
        <img
          src={img}
          alt={label ?? kanji}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover ${imgPosition === 'top' ? 'object-top' : 'object-center'}`}
        />
      )}

      {/* halo radial */}
      <div
        className="pointer-events-none absolute -inset-10"
        style={{
          background: `radial-gradient(60% 55% at 50% 30%, ${t.glow}, transparent 70%)`,
          opacity: dim ? 0.35 : 0.7,
        }}
      />

      {/* linhas de energia diagonais */}
      {!img && (
        <>
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-screen"
            style={{
              backgroundImage: `repeating-linear-gradient(115deg, ${t.color} 0 1px, transparent 1px 26px)`,
            }}
          />
          <div
            className="pointer-events-none absolute -right-10 top-1/2 h-[140%] w-[2px] -translate-y-1/2 rotate-12"
            style={{ background: t.color, boxShadow: `0 0 30px 6px ${t.glow}`, opacity: 0.5 }}
          />
        </>
      )}

      {/* kanji gigante */}
      {!img && (
        <div className="absolute inset-0 grid place-items-center">
          <span
            className="select-none font-display leading-none"
            style={{
              fontSize: 'clamp(3rem, 9vw, 7rem)',
              color: 'rgba(255,255,255,0.92)',
              textShadow: `0 0 24px ${t.glow}, 0 6px 40px rgba(0,0,0,.7)`,
            }}
          >
            {kanji}
          </span>
        </div>
      )}

      {/* grão / vinheta */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,transparent_45%,rgba(0,0,0,0.75)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink-900 via-ink-900/60 to-transparent" />

      {label && (
        <div className="absolute bottom-3 left-4 right-4">
          <span
            className="inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: t.color, background: `rgba(${t.rgb},0.12)`, border: `1px solid rgba(${t.rgb},0.3)` }}
          >
            {label}
          </span>
        </div>
      )}
    </div>
  )
}
