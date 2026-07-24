import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { loadingMessages } from '../../data/content'
import BgVideo from './BgVideo'

// Vídeo da cena do loading. Troque o ID por qualquer clipe desejado.
const LOADER_VIDEO_ID = 'mb4lwSEWybI'

/**
 * Tela de loading cinematográfica.
 * - vídeo da cena rolando em tela cheia (sem efeito na imagem)
 * - logo + barra + percentual + mensagens dinâmicas por cima
 * - ao concluir: flash branco + fade cinematográfico
 */
export default function Loader({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0)
  const [msg, setMsg] = useState(0)
  const [exiting, setExiting] = useState(false)
  const root = useRef<HTMLDivElement>(null)

  // progresso + mensagens
  useEffect(() => {
    let p = 0
    let msgIdx = 0
    const totalMs = 8500
    const start = performance.now()
    let raf = 0

    const tick = (now: number) => {
      const elapsed = now - start
      // easing não-linear para dar "respiração" ao carregamento
      const target = Math.min(100, (elapsed / totalMs) * 100)
      p += (target - p) * 0.12
      const shown = Math.min(100, Math.round(p))
      setPct(shown)

      const nextMsg = Math.min(loadingMessages.length - 1, Math.floor((shown / 100) * loadingMessages.length))
      if (nextMsg !== msgIdx) {
        msgIdx = nextMsg
        setMsg(nextMsg)
      }

      if (shown < 100) {
        raf = requestAnimationFrame(tick)
      } else {
        finish()
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const finish = () => {
    setExiting(true)
    gsap.to(root.current, {
      opacity: 0,
      duration: 0.9,
      delay: 0.7,
      ease: 'power2.inOut',
      onComplete: onDone,
    })
  }

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-ink-900"
    >
      {/* vídeo da cena rolando em tela cheia */}
      <div className="absolute inset-0 bg-ink-900">
        <BgVideo
          videoId={LOADER_VIDEO_ID}
          startAt={23}
          endTrim={8}
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: '100vw', height: '56.25vw', minHeight: '100svh', minWidth: '177.77svh' }}
        />
      </div>

      {/* overlays escuros (legibilidade do texto) */}
      <div className="pointer-events-none absolute inset-0 bg-ink-900/40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/15 to-ink-900/55" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(130%_130%_at_50%_45%,transparent_55%,rgba(0,0,0,0.6))]" />

      {/* logo + progresso ancorado embaixo */}
      <div className="absolute inset-x-0 bottom-[9vh] z-10 mx-auto w-[min(88vw,520px)] px-6 text-center">
        <h1 className="font-title text-6xl uppercase tracking-[0.2em] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
          BLE<span className="text-gradient-fire">A</span>CH
        </h1>
        <p className="mt-1 text-[11px] uppercase tracking-[0.5em] text-spirit/80">Soul Society</p>

        <div className="mt-8 flex items-center justify-between text-xs font-medium text-white/75">
          <span key={msg} className="animate-floatUp drop-shadow">
            {loadingMessages[msg]}
          </span>
          <span className="font-display text-spirit tabular-nums">{pct}%</span>
        </div>

        {/* barra personalizada */}
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/15">
          <div
            className="relative h-full rounded-full bg-gradient-to-r from-spirit via-bankai to-blood transition-[width] duration-150 ease-out"
            style={{ width: `${pct}%` }}
          >
            <span className="absolute inset-0 animate-shimmer bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.6),transparent)] bg-[length:200%_100%]" />
          </div>
        </div>
      </div>

      {/* flash branco final */}
      <div
        className={`pointer-events-none absolute inset-0 bg-white transition-opacity duration-500 ${
          exiting ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ mixBlendMode: 'screen' }}
      />
    </div>
  )
}
