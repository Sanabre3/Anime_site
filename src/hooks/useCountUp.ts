import { useEffect, useRef, useState } from 'react'

/** Count-up animado disparado quando o elemento entra na viewport. */
export function useCountUp(target: number, duration = 1800) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          let start: number | null = null
          const step = (ts: number) => {
            if (start === null) start = ts
            const p = Math.min((ts - start) / duration, 1)
            // easeOutExpo
            const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p)
            setValue(Math.round(eased * target))
            if (p < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target, duration])

  return { value, ref }
}
