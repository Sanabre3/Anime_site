import { useEffect, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import type { Theme } from '../../data/content'
import { THEME } from '../../lib/theme'

interface ModalProps {
  open: boolean
  onClose: () => void
  theme?: Theme
  children: ReactNode
}

export default function Modal({ open, onClose, theme = 'spirit', children }: ModalProps) {
  const t = THEME[theme]

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] grid place-items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* backdrop com fumaça */}
          <div className="absolute inset-0 bg-ink-900/80 backdrop-blur-md" onClick={onClose}>
            <div
              className="absolute inset-0 opacity-40"
              style={{ background: `radial-gradient(60% 60% at 50% 50%, ${t.glow}, transparent 70%)` }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            className="no-scrollbar relative z-10 max-h-[90dvh] w-full max-w-3xl overflow-y-auto overflow-x-hidden overscroll-contain rounded-2xl glass-strong shadow-card"
            style={{ boxShadow: `0 30px 90px -20px #000, 0 0 60px -20px ${t.glow}` }}
          >
            {/* faíscas/partículas decorativas no topo */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-24"
              style={{ background: `linear-gradient(to bottom, ${t.glow}, transparent)` }}
            />
            <button
              onClick={onClose}
              className="sticky right-3 top-3 z-20 ml-auto mr-3 mt-3 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-white/20"
              aria-label="Fechar"
            >
              <X size={18} />
            </button>
            <div className="-mt-12">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
