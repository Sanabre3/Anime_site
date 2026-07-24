import { useState } from 'react'
import { useLenis } from './hooks/useLenis'
import Loader from './components/effects/Loader'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Row from './components/sections/Row'
import CharactersSection from './components/sections/CharactersSection'
import CaptainsSection from './components/sections/CaptainsSection'
import VillainsSection from './components/sections/VillainsSection'
import ZanpakutoSection from './components/sections/ZanpakutoSection'
import FilmsSection from './components/sections/FilmsSection'
import Timeline from './components/sections/Timeline'
import VsBand from './components/sections/VsBand'
import Stats from './components/sections/Stats'
import Gallery from './components/sections/Gallery'
import CTA from './components/sections/CTA'
import Footer from './components/layout/Footer'
import { rows } from './data/content'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  useLenis(loaded)

  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}

      {/* céu carmesim do Seireitei (TYBW) — fundo ambiente fixo */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(120%_85%_at_50%_-10%,rgba(225,29,42,0.14),transparent_55%),radial-gradient(90%_70%_at_80%_10%,rgba(122,10,18,0.18),transparent_60%)]" />

      <div className={`relative z-10 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <main>
          <Hero />
          {rows.map((r) => (
            <Row key={r.id} id={r.id} title={r.title} items={r.items} />
          ))}
          <CharactersSection />
          <CaptainsSection />
          <VillainsSection />
          <ZanpakutoSection />
          <FilmsSection />
          <Timeline />
          <VsBand />
          <Stats />
          <Gallery />
          <CTA />
        </main>
        <Footer />
      </div>

      {/* color grade cinematográfico (grão + vinheta + tom carmesim) */}
      {loaded && (
        <div className="cine-grade pointer-events-none fixed inset-0 z-[80] opacity-[0.5] mix-blend-soft-light" />
      )}
    </>
  )
}
