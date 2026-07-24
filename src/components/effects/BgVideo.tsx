import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'

/**
 * Vídeo de fundo do YouTube em loop de um TRECHO (sem intro/outro).
 * Usa a IFrame Player API (não requer API key) para reposicionar o playback,
 * cortando o card final "VIZ" e repetindo apenas o segmento
 * [startAt, fim - endTrim] (ou startAt + maxDuration).
 */

// carrega a API do YouTube uma única vez
let apiPromise: Promise<void> | null = null
function loadYouTubeApi(): Promise<void> {
  if (apiPromise) return apiPromise
  apiPromise = new Promise((resolve) => {
    const w = window as unknown as { YT?: { Player: unknown }; onYouTubeIframeAPIReady?: () => void }
    if (w.YT && w.YT.Player) return resolve()
    const prev = w.onYouTubeIframeAPIReady
    w.onYouTubeIframeAPIReady = () => {
      prev?.()
      resolve()
    }
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    document.head.appendChild(tag)
  })
  return apiPromise
}

type YTPlayer = {
  getCurrentTime?: () => number
  getDuration?: () => number
  seekTo?: (n: number, allowSeekAhead: boolean) => void
  mute?: () => void
  playVideo?: () => void
  destroy?: () => void
}

interface BgVideoProps {
  videoId: string
  /** segundos a pular no início */
  startAt?: number
  /** segundos a cortar do fim (remove o selo "VIZ") */
  endTrim?: number
  /** duração máxima do loop em segundos (deixa o trecho curto) */
  maxDuration?: number
  className?: string
  style?: CSSProperties
}

export default function BgVideo({
  videoId,
  startAt = 3,
  endTrim = 10,
  maxDuration,
  className,
  style,
}: BgVideoProps) {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false
    let player: YTPlayer | null = null
    let timer = 0

    loadYouTubeApi().then(() => {
      if (cancelled || !hostRef.current) return
      const YT = (window as unknown as {
        YT: { Player: new (el: HTMLElement, cfg: unknown) => YTPlayer }
      }).YT
      player = new YT.Player(hostRef.current, {
        videoId,
        width: '100%',
        height: '100%',
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          iv_load_policy: 3,
          start: Math.floor(startAt),
        },
        events: {
          onReady: (e: { target: { mute: () => void; playVideo: () => void } }) => {
            e.target.mute()
            e.target.playVideo()
          },
        },
      })

      // vigia o tempo e reinicia o trecho antes do fim/outro
      const watch = () => {
        try {
          if (player?.getDuration && player.getCurrentTime && player.seekTo) {
            const dur = player.getDuration()
            const t = player.getCurrentTime()
            if (dur > 0) {
              let loopEnd = dur - endTrim
              if (maxDuration) loopEnd = Math.min(loopEnd, startAt + maxDuration)
              if (t >= loopEnd || t < startAt - 1) player.seekTo(startAt, true)
            }
          }
        } catch {
          /* player ainda inicializando */
        }
        timer = window.setTimeout(watch, 300)
      }
      timer = window.setTimeout(watch, 600)
    })

    return () => {
      cancelled = true
      clearTimeout(timer)
      try {
        player?.destroy?.()
      } catch {
        /* noop */
      }
    }
  }, [videoId, startAt, endTrim, maxDuration])

  return (
    <div className={className} style={style}>
      <div ref={hostRef} className="pointer-events-none h-full w-full" />
    </div>
  )
}
