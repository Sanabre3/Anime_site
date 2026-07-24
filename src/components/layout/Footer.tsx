import { Github, Twitter, Instagram, Youtube } from 'lucide-react'

const COLS = [
  { title: 'Explorar', links: ['Arcos', 'Personagens', 'Capitães', 'Vilões', 'Zanpakutō'] },
  { title: 'Assistir', links: ['Filmes', 'Episódios', 'Continuar', 'Minha Lista', 'Novidades'] },
  { title: 'Suporte', links: ['Central de Ajuda', 'Dispositivos', 'Planos', 'Contato', 'Termos'] },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-16">
      <div className="mx-auto max-w-[1600px] px-5 pb-10 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <span className="font-title text-3xl uppercase tracking-[0.15em] text-white">
              BLE<span className="text-gradient-fire">A</span>CH
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Uma experiência de fã dedicada ao universo de Bleach. Projeto conceitual — sem afiliação
              oficial com Tite Kubo, Shueisha ou Studio Pierrot.
            </p>
            <div className="mt-6 flex gap-3">
              {[Twitter, Instagram, Youtube, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/60 transition-all hover:border-spirit hover:text-spirit hover:shadow-glow-spirit"
                  aria-label="Rede social"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#top" className="text-sm text-white/60 transition hover:text-white hover:underline underline-offset-4">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-white/35 sm:flex-row">
          <p>© {2026} BLEACH · Soul Society. Projeto conceitual de fã.</p>
          <p className="flex items-center gap-2">
            Feito com <span className="text-blood">reiatsu</span> · React · Framer Motion · GSAP
          </p>
        </div>
      </div>
      {/* glow inferior */}
      <div className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-spirit/40 to-transparent" />
    </footer>
  )
}
