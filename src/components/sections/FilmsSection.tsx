import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Play, Calendar, Clock } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'
import { films } from '../../data/content'
import { THEME } from '../../lib/theme'
import Poster from '../ui/Poster'
import { SectionHeading } from '../ui/Reveal'

export default function FilmsSection() {
  return (
    <section id="filmes" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        <SectionHeading
          kicker="Nas Telonas"
          title={<>Os <span className="text-gradient-fire">Filmes</span></>}
          desc="Quatro histórias exclusivas fora do cânone principal. Arraste para explorar."
          align="center"
        />
      </div>

      {/* estilo do destaque do slide ativo */}
      <style>{`
        .films-swiper .swiper-slide {
          transition: transform .5s cubic-bezier(.2,.8,.2,1), opacity .5s ease;
          transform: scale(.82);
          opacity: .45;
          filter: saturate(.7);
        }
        .films-swiper .swiper-slide-active {
          transform: scale(1);
          opacity: 1;
          filter: saturate(1);
        }
        .films-swiper .swiper-pagination-bullet {
          background: #7dd3fc;
        }
      `}</style>

      <div className="mt-14">
        <Swiper
          modules={[Pagination, Autoplay]}
          grabCursor
          centeredSlides
          loop
          slidesPerView="auto"
          spaceBetween={28}
          speed={650}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="films-swiper !px-5 !pb-14 sm:!px-8"
        >
          {films.map((f) => {
            const t = THEME[f.theme]
            return (
              <SwiperSlide key={f.id} className="!w-[280px] sm:!w-[380px]">
                <div
                  className="group relative aspect-[2/3] overflow-hidden rounded-2xl border border-white/10"
                  style={{ boxShadow: `0 30px 80px -30px #000, 0 0 50px -25px ${t.glow}` }}
                >
                  <Poster theme={f.theme} kanji={f.title.split(' ')[0]} img={f.img} />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
                  {/* botão play cinematográfico */}
                  <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button
                      className="grid h-16 w-16 place-items-center rounded-full backdrop-blur-md transition-transform hover:scale-110"
                      style={{ background: `rgba(${t.rgb},0.25)`, border: `1px solid ${t.color}`, boxShadow: `0 0 40px ${t.glow}` }}
                    >
                      <Play size={26} className="fill-white text-white" />
                    </button>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h4 className="font-title text-2xl uppercase leading-none text-white">{f.title}</h4>
                    <div className="mt-2 flex items-center gap-4 text-xs text-white/60">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {f.year}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {f.runtime}</span>
                    </div>
                    <p className="mt-3 text-sm leading-snug text-white/70">
                      {f.synopsis}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}
