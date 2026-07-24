import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  hue: number
  a: number
  tw: number
}

const PALETTE = [
  [56, 189, 248], // spirit
  [255, 122, 24], // bankai
  [225, 29, 42], // blood
  [245, 179, 1], // gold
]

/**
 * Fundo espiritual persistente: partículas flutuantes com glow, névoa e
 * leve reação ao mouse. Canvas + requestAnimationFrame (GPU-friendly).
 */
export default function ParticleField({ density = 1 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d', { alpha: true })!
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let w = 0
    let h = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let particles: Particle[] = []
    const mouse = { x: -9999, y: -9999 }

    const count = () => {
      const base = Math.min(window.innerWidth, 1600)
      return Math.round((base / 12) * density)
    }

    const make = (): Particle => {
      const [r, g, b] = PALETTE[Math.floor(Math.random() * PALETTE.length)]
      void r
      void g
      void b
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -0.15 - Math.random() * 0.4,
        r: 0.6 + Math.random() * 2.4,
        hue: Math.floor(Math.random() * PALETTE.length),
        a: 0.15 + Math.random() * 0.5,
        tw: Math.random() * Math.PI * 2,
      }
    }

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      particles = Array.from({ length: count() }, make)
    }

    let raf = 0
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'lighter'
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.tw += 0.03

        // interação suave com o mouse
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const d2 = dx * dx + dy * dy
        if (d2 < 14000) {
          const f = (14000 - d2) / 14000
          p.x += (dx / Math.sqrt(d2 + 1)) * f * 1.4
          p.y += (dy / Math.sqrt(d2 + 1)) * f * 1.4
        }

        if (p.y < -20) {
          p.y = h + 20
          p.x = Math.random() * w
        }
        if (p.x < -20) p.x = w + 20
        if (p.x > w + 20) p.x = -20

        const [r, g, b] = PALETTE[p.hue]
        const alpha = p.a * (0.6 + 0.4 * Math.sin(p.tw))
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6)
        grad.addColorStop(0, `rgba(${r},${g},${b},${alpha})`)
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`)
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalCompositeOperation = 'source-over'
      if (!reduce) raf = requestAnimationFrame(draw)
    }

    const onMouse = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouse, { passive: true })
    if (reduce) draw()
    else raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [density])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  )
}
