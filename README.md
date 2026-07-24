<div align="center">

# ⚔️ BLEACH · Soul Society

**Landing page premium · experiência cinematográfica interativa**

Uma landing page imersiva inspirada no universo de **Bleach**, construída com a
estética de plataformas de streaming AAA — *Netflix · Disney+ · Crunchyroll · PlayStation Store*.

<br />

![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=flat-square&logo=framer&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=flat-square&logo=greensock&logoColor=black)

</div>

---

## 📖 Índice

- [⚔️ BLEACH · Soul Society](#️-bleach--soul-society)
  - [📖 Índice](#-índice)
  - [🌌 Sobre](#-sobre)
  - [✨ Destaques](#-destaques)
  - [🧱 Stack](#-stack)
  - [🚀 Começar](#-começar)
  - [📁 Estrutura](#-estrutura)
  - [🖼️ Imagens](#️-imagens)
  - [♿ Acessibilidade \& performance](#-acessibilidade--performance)
  - [📜 Licença](#-licença)

---

## 🌌 Sobre

Este não é apenas um site — é uma **jornada visual**. Da tela de loading, onde uma
Zanpakutō é forjada em tempo real, até o carrossel coverflow dos filmes, cada seção
foi desenhada para reproduzir a sensação de navegar por uma plataforma de streaming
premium dedicada a um único e grandioso universo.

Partículas de energia espiritual atravessam a página inteira. Cards reagem ao mouse
com inclinação 3D. O scroll é suave e cinematográfico. Números sobem em contagem
animada. Tudo isso mantendo **performance real** e respeitando quem prefere menos movimento.


---

## ✨ Destaques

| | Recurso | Descrição |
|:---:|---|---|
| 🔥 | **Loader cinematográfico** | Forja da Zanpakutō com timeline GSAP: barra de progresso, mensagens e explosão de energia |
| 🌀 | **Campo de partículas** | Fundo espiritual sempre em movimento, em Canvas, GPU-friendly |
| 🎴 | **Cards 3D tilt** | Personagens e Zanpakutō inclinam seguindo o mouse + modais de detalhe |
| 🎬 | **Carrossel coverflow** | Filmes em Swiper com profundidade estilo PlayStation Store |
| ⚡ | **Scroll cinematográfico** | Rolagem suave com Lenis + reveals disparados por scroll |
| 📊 | **Números animados** | Estatísticas do universo com count-up |
| 🖼️ | **Galeria + lightbox** | Grid estilo Pinterest com abertura em tela cheia |
| ♿ | **Acessível & responsivo** | Respeita `prefers-reduced-motion`, lazy loading e do mobile à TV |

---

## 🧱 Stack

| Camada | Tecnologia | Uso |
|---|---|---|
| **Base** | Vite · React 18 · TypeScript | SPA rápida, build com code-splitting |
| **Estilo** | Tailwind CSS | Design system (paleta Bleach, glassmorphism, glow) |
| **Animação** | Framer Motion | Scroll reveal, tilt 3D, modais, microinterações |
| **Cinemática** | GSAP | Timeline da tela de loading + forja da Zanpakutō |
| **Scroll** | Lenis | Rolagem suave cinematográfica |
| **Carrossel** | Swiper | Coverflow dos filmes |
| **Ícones** | Lucide React | Iconografia consistente |
| **Partículas** | Canvas + `requestAnimationFrame` | Fundo espiritual leve e fluido |

---

## 🚀 Começar

> [!TIP]
> Requer **Node.js 18+**.

```bash
# instalar dependências
npm install

# desenvolvimento  →  http://localhost:5173
npm run dev

# build de produção  →  /dist
npm run build

# servir o build localmente
npm run preview
```

---

## 📁 Estrutura

Os componentes são agrupados **por responsabilidade** — `sections/` (blocos de conteúdo),
`layout/` (cabeçalho e rodapé), `effects/` (camadas visuais e loader) e `ui/` (primitivos reutilizáveis).

```
src/
├── App.tsx                        # Composição da página + gate do loader
├── main.tsx                       # Entry point React
├── index.css                      # Estilos globais + camadas Tailwind
├── data/
│   └── content.ts                 # Todo o conteúdo (arcos, personagens, capitães, vilões, zanpakutō…)
├── lib/
│   └── theme.ts                   # Tokens de tema por afiliação (spirit/fire/blood/hollow/quincy/gold)
├── hooks/                         # useLenis · useCountUp · useTilt
└── components/
    ├── layout/
    │   ├── Navbar.tsx             # Navegação fixa translúcida
    │   └── Footer.tsx             # Rodapé
    ├── sections/
    │   ├── Hero.tsx               # Herói com parallax + mouse-follow
    │   ├── Row.tsx                # Fileiras estilo Netflix (hover-expand)
    │   ├── CharactersSection.tsx  # Cards 3D tilt + modal de detalhe
    │   ├── CaptainsSection.tsx    # Grade do Gotei 13 com barra de poder
    │   ├── VillainsSection.tsx    # Cards de vilões com citações
    │   ├── ZanpakutoSection.tsx   # Cards + modal com fumaça/energia
    │   ├── FilmsSection.tsx       # Carrossel Swiper coverflow
    │   ├── Timeline.tsx           # Linha do tempo animada por scroll
    │   ├── VsBand.tsx             # Faixa de confronto (herói × vilão)
    │   ├── Stats.tsx              # Números com count-up
    │   ├── Gallery.tsx            # Grid estilo Pinterest + lightbox
    │   └── CTA.tsx                # Chamada final
    ├── effects/
    │   ├── Loader.tsx             # Tela de loading (forja da Zanpakutō)
    │   ├── ParticleField.tsx      # Fundo espiritual em canvas
    │   └── BgVideo.tsx            # Camada de vídeo de fundo
    └── ui/
        ├── Poster.tsx             # Pôster híbrido (imagem oficial OU CSS gerado)
        ├── Modal.tsx              # Modal reutilizável com tema
        └── Reveal.tsx             # Reveal por scroll + SectionHeading
```

---

## 🖼️ Imagens

Personagens, capitães, vilões, o hero e os pôsteres dos filmes usam **imagens oficiais**
do anime, em `public/images/`.

O componente **`<Poster />`** funciona em dois modos:

- **Com `img`** → mostra a imagem oficial com overlay premium (glow + vinheta)
- **Sem `img`** → gera um pôster cinematográfico via CSS (kanji + gradiente temático + glow)

Arcos, Zanpakutō e Galeria usam o modo CSS de propósito (não têm um retrato único óbvio).
**Para trocar ou adicionar uma imagem**, coloque o arquivo em `public/images/` e preencha
o campo `img` do item em `src/data/content.ts`:

```ts
{ id: 'ichigo', name: 'Ichigo Kurosaki', img: '/images/ichigo.png', /* … */ }
```

---

## ♿ Acessibilidade & performance

- ✅ Respeita `prefers-reduced-motion` — partículas e animações pausam automaticamente
- ✅ Lazy loading de imagens + `will-change` / `translateZ` para aceleração de GPU
- ✅ Code-splitting por vendor / motion / gsap / swiper
- ✅ Responsivo de **mobile** a **ultrawide / TV**

---

## 📜 Licença

> [!IMPORTANT]
> As imagens são propriedade de **Tite Kubo / Shueisha / Studio Pierrot** e estão aqui apenas para fins
> de estudo.

<div align="center">

*Feito com ⚔️ e reiatsu.*

</div>
