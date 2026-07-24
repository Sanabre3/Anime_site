import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  once?: boolean
}

/** Scroll reveal com easing suave via IntersectionObserver (Framer whileInView). */
export function Reveal({ children, delay = 0, y = 34, className, once = true }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}

interface SectionHeadingProps {
  kicker: string
  title: ReactNode
  desc?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ kicker, title, desc, align = 'left' }: SectionHeadingProps) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <div
        className={`mb-2 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-blood ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-blood" />
        {kicker}
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-blood" />
      </div>
      <h2 className="font-title text-4xl uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {desc && <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">{desc}</p>}
    </Reveal>
  )
}
