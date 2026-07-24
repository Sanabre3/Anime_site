import { useRef, useCallback } from 'react'

/**
 * 3D tilt seguindo o mouse com glare. Manipula o DOM direto (sem re-render)
 * para máxima performance (GPU transforms via rAF).
 */
export function useTilt(max = 12) {
  const ref = useRef<HTMLDivElement>(null)
  const frame = useRef(0)

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width
      const py = (e.clientY - r.top) / r.height
      const rx = (0.5 - py) * max
      const ry = (px - 0.5) * max
      cancelAnimationFrame(frame.current)
      frame.current = requestAnimationFrame(() => {
        el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.03)`
        el.style.setProperty('--mx', `${px * 100}%`)
        el.style.setProperty('--my', `${py * 100}%`)
      })
    },
    [max],
  )

  const onLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    cancelAnimationFrame(frame.current)
    el.style.transform = 'perspective(900px) rotateX(0) rotateY(0) scale(1)'
  }, [])

  return { ref, onMove, onLeave }
}
