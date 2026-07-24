import { useEffect, useState } from 'react'
import { Search, Bell, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { href: '#arcos', label: 'Arcos' },
  { href: '#personagens', label: 'Personagens' },
  { href: '#capitaes', label: 'Capitães' },
  { href: '#viloes', label: 'Vilões' },
  { href: '#zanpakuto', label: 'Zanpakutō' },
  { href: '#filmes', label: 'Filmes' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong py-3 shadow-card' : 'bg-gradient-to-b from-ink-900/80 to-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center gap-6 px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2">
          <span className="font-title text-2xl uppercase tracking-[0.15em] text-white">
            BLE<span className="text-gradient-fire">A</span>CH
          </span>
        </a>

        <ul className="ml-6 hidden items-center gap-6 text-sm text-white/70 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative py-1 transition-colors hover:text-white after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-spirit after:to-bankai after:transition-transform hover:after:scale-x-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <button className="grid h-9 w-9 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white">
            <Search size={18} />
          </button>
          <button className="grid h-9 w-9 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white">
            <Bell size={18} />
          </button>
          <button className="hidden h-9 items-center rounded-full bg-white px-4 text-sm font-semibold text-ink-900 transition hover:bg-spirit hover:shadow-glow-spirit sm:flex">
            Entrar
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full text-white lg:hidden"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden px-6 lg:hidden"
          >
            {LINKS.map((l) => (
              <li key={l.href} className="border-b border-white/5">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-white/80 transition hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
