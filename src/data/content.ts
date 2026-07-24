// ---------------------------------------------------------------------------
// Conteúdo do universo Bleach.
// As imagens usam <Poster/> (arte gerada via CSS) como fallback premium.
// Para usar imagens oficiais, preencha o campo `img` com o caminho em /public.
// ---------------------------------------------------------------------------

export type Theme = 'spirit' | 'fire' | 'blood' | 'hollow' | 'quincy' | 'gold'

export interface ArcCard {
  id: string
  title: string
  kanji: string
  year: string
  episodes: string
  rating: string
  theme: Theme
  desc: string
  tag: string
  img?: string
}

export interface Character {
  id: string
  name: string
  kanji: string
  affiliation: string
  power: string
  bankai: string
  zanpakuto: string
  trivia: string
  theme: Theme
  img?: string
}

export interface Captain {
  id: string
  name: string
  division: string
  bankai: string
  element: string
  power: number
  theme: Theme
  img?: string
}

export interface Villain {
  id: string
  name: string
  kanji: string
  faction: string
  quote: string
  theme: Theme
  img?: string
}

export interface Zanpakuto {
  id: string
  name: string
  kanji: string
  user: string
  sealed: string
  shikai: string
  bankai: string
  theme: Theme
  img?: string
}

export interface Film {
  id: string
  title: string
  year: string
  runtime: string
  synopsis: string
  theme: Theme
  img?: string
}

export interface TimelineStep {
  id: string
  title: string
  subtitle: string
  desc: string
  theme: Theme
}

export interface Stat {
  id: string
  value: number
  suffix: string
  prefix: string
  label: string
  theme: Theme
}

export interface GalleryItem {
  id: string
  kanji: string
  label: string
  span: 'tall' | 'wide' | 'normal'
  theme: Theme
  img?: string
}

// --- Fileiras estilo Netflix -----------------------------------------------
export const rows: { id: string; title: string; items: ArcCard[] }[] = [
  {
    id: 'arcos',
    title: 'Últimos Arcos',
    items: [
      { id: 'ss', title: 'Soul Society', kanji: '尸魂界', year: '2005', episodes: '41 eps', rating: '9.1', theme: 'spirit', tag: 'Clássico', desc: 'Ichigo invade a Soul Society para salvar Rukia da execução no Sōkyoku.', img: '/images/arc-ss.png' },
      { id: 'arrancar', title: 'Arrancar', kanji: '破面', year: '2006', episodes: '55 eps', rating: '8.8', theme: 'hollow', tag: 'Guerra', desc: 'Aizen revela seu exército de Espadas. A batalha por Karakura começa.', img: '/images/arc-arrancar.png' },
      { id: 'hueco', title: 'Hueco Mundo', kanji: '虚圏', year: '2007', episodes: '34 eps', rating: '8.9', theme: 'blood', tag: 'Resgate', desc: 'Ichigo mergulha no deserto dos Hollows para resgatar Orihime.', img: '/images/arc-hueco.png' },
      { id: 'fake', title: 'Fake Karakura', kanji: '偽空座', year: '2009', episodes: '30 eps', rating: '9.0', theme: 'fire', tag: 'Batalha Final', desc: 'O Gotei 13 enfrenta os Espada acima da falsa cidade de Karakura.', img: '/images/arc-fake.png' },
      { id: 'fullbring', title: 'Fullbring', kanji: '完現術', year: '2011', episodes: '25 eps', rating: '8.3', theme: 'gold', tag: 'Retorno', desc: 'Ichigo recupera seus poderes através dos Xcution e do Fullbring.', img: '/images/arc-fullbring.png' },
      { id: 'tybw', title: 'Thousand-Year Blood War', kanji: '千年血戦', year: '2022', episodes: '52 eps', rating: '9.5', theme: 'quincy', tag: 'Épico', desc: 'Yhwach e os Quincy declaram guerra total à Soul Society.', img: '/images/arc-tybw.png' },
    ],
  },
  {
    id: 'continue',
    title: 'Continue Assistindo',
    items: [
      { id: 'c1', title: 'A Execução de Rukia', kanji: '処刑', year: 'S1', episodes: 'E58', rating: '9.3', theme: 'fire', tag: '48% assistido', desc: 'O Sōkyoku é erguido. Ichigo corre contra o tempo.', img: '/images/ep-sokyoku.png' },
      { id: 'c2', title: 'Ichigo vs Byakuya', kanji: '対決', year: 'S1', episodes: 'E59', rating: '9.4', theme: 'spirit', tag: '72% assistido', desc: 'Getsuga Tenshō contra Senbonzakura Kageyoshi.', img: '/images/ep-byakuya.png' },
      { id: 'c3', title: 'A Queda de Aizen', kanji: '崩落', year: 'S3', episodes: 'E110', rating: '9.2', theme: 'blood', tag: '12% assistido', desc: 'A traição que abalou os três mundos.', img: '/images/ep-aizen.png' },
      { id: 'c4', title: 'Mugetsu', kanji: '無月', year: 'S3', episodes: 'E309', rating: '9.6', theme: 'gold', tag: '90% assistido', desc: 'A forma final do Getsuga. O preço dos poderes de Ichigo.', img: '/images/ep-mugetsu.png' },
      { id: 'c5', title: 'A Invasão dos Quincy', kanji: '侵攻', year: 'TYBW', episodes: 'E01', rating: '9.5', theme: 'quincy', tag: 'Novo episódio', desc: 'O Wandenreich rouba os nomes dos Bankai.', img: '/images/ep-invasion.png' },
      { id: 'c6', title: 'Bankai de Zaraki', kanji: '卍解', year: 'TYBW', episodes: 'E20', rating: '9.7', theme: 'blood', tag: '5% assistido', desc: 'Kenpachi liberta Nozarashi pela primeira vez.', img: '/images/ep-zaraki.png' },
    ],
  },
  {
    id: 'bankais',
    title: 'Bankais Lendários',
    items: [
      { id: 'b1', title: 'Tensa Zangetsu', kanji: '天鎖斬月', year: 'Ichigo', episodes: 'Bankai', rating: '9.8', theme: 'gold', tag: 'Velocidade', desc: 'A lâmina negra que comprime toda a pressão espiritual de Ichigo.', img: '/images/b-tensa.png' },
      { id: 'b2', title: 'Senbonzakura Kageyoshi', kanji: '千本桜景厳', year: 'Byakuya', episodes: 'Bankai', rating: '9.6', theme: 'blood', tag: 'Mil pétalas', desc: 'Um milhão de lâminas dançando como pétalas de cerejeira.', img: '/images/b-senbonzakura.png' },
      { id: 'b3', title: 'Daiguren Hyōrinmaru', kanji: '大紅蓮氷輪丸', year: 'Hitsugaya', episodes: 'Bankai', rating: '9.4', theme: 'spirit', tag: 'Gelo', desc: 'Asas de gelo que congelam tudo em seu alcance.', img: '/images/b-hyorinmaru.png' },
      { id: 'b4', title: 'Zanka no Tachi', kanji: '残火の太刀', year: 'Yamamoto', episodes: 'Bankai', rating: '9.9', theme: 'fire', tag: 'Chamas', desc: 'O fogo que reduz até as cinzas a nada. Ryūjin Jakka desperto.', img: '/images/b-yamamoto.png' },
      { id: 'b5', title: 'Kannonbiraki Benihime', kanji: '観音開紅姫', year: 'Urahara', episodes: 'Bankai', rating: '9.5', theme: 'blood', tag: 'Restauração', desc: 'A princesa carmesim que reescreve a realidade da ferida.', img: '/images/b-benihime.png' },
    ],
  },
]

// --- Personagens -----------------------------------------------------------
export const characters: Character[] = [
  { id: 'ichigo', name: 'Ichigo Kurosaki', kanji: '黒崎 一護', affiliation: 'Shinigami Substituto', power: 'Getsuga Tenshō · Hollowficação', bankai: 'Tensa Zangetsu', zanpakuto: 'Zangetsu', theme: 'gold', trivia: 'Híbrido de Shinigami, Hollow, Quincy e Fullbringer — uma existência única nos três mundos.', img: '/images/ichigo.png' },
  { id: 'rukia', name: 'Rukia Kuchiki', kanji: '朽木 ルキア', affiliation: '13ª Divisão · Capitã', power: 'Controle absoluto de gelo', bankai: 'Hakka no Togame', zanpakuto: 'Sode no Shirayuki', theme: 'spirit', trivia: 'Sua Zanpakutō é considerada a mais bela de toda a Soul Society.', img: '/images/rukia.png' },
  { id: 'renji', name: 'Renji Abarai', kanji: '阿散井 恋次', affiliation: '6ª Divisão · Vice-capitão', power: 'Zanpakutō segmentada', bankai: 'Sōō Zabimaru', zanpakuto: 'Zabimaru', theme: 'blood', trivia: 'Treinou lado a lado com Ichigo para dominar o Bankai em três dias.', img: '/images/renji.png' },
  { id: 'byakuya', name: 'Byakuya Kuchiki', kanji: '朽木 白哉', affiliation: '6ª Divisão · Capitão', power: 'Kidō de alto nível', bankai: 'Senbonzakura Kageyoshi', zanpakuto: 'Senbonzakura', theme: 'blood', trivia: 'Nobre da Casa Kuchiki, coloca a lei acima dos próprios sentimentos.', img: '/images/byakuya.png' },
  { id: 'toshiro', name: 'Tōshirō Hitsugaya', kanji: '日番谷 冬獅郎', affiliation: '10ª Divisão · Capitão', power: 'Manipulação de gelo e céu', bankai: 'Daiguren Hyōrinmaru', zanpakuto: 'Hyōrinmaru', theme: 'spirit', trivia: 'O prodígio mais jovem a alcançar o posto de capitão em gerações.', img: '/images/toshiro.png' },
  { id: 'kenpachi', name: 'Kenpachi Zaraki', kanji: '更木 剣八', affiliation: '11ª Divisão · Capitão', power: 'Força espiritual bruta', bankai: 'Nozarashi', zanpakuto: 'Nozarashi', theme: 'fire', trivia: 'Vive apenas pela emoção da batalha — restringe o próprio poder por diversão.', img: '/images/kenpachi.png' },
  { id: 'urahara', name: 'Kisuke Urahara', kanji: '浦原 喜助', affiliation: 'Ex-Capitão · 12ª Divisão', power: 'Gênio inventor e estrategista', bankai: 'Kannonbiraki Benihime', zanpakuto: 'Benihime', theme: 'blood', trivia: 'Fundador do Instituto de Pesquisa e mente por trás do Hōgyoku.', img: '/images/urahara.png' },
  { id: 'yoruichi', name: 'Yoruichi Shihōin', kanji: '四楓院 夜一', affiliation: 'Ex-Comandante · Forças Especiais', power: 'Shunkō · Deusa do Flash', bankai: '—', zanpakuto: '—', theme: 'gold', trivia: 'A mais rápida da Soul Society, capaz de se transformar em gato.', img: '/images/yoruichi.png' },
]

// --- Capitães do Gotei 13 --------------------------------------------------
export const captains: Captain[] = [
  { id: 'yamamoto', name: 'Genryūsai Yamamoto', division: '1ª Divisão', bankai: 'Zanka no Tachi', element: 'Fogo', power: 100, theme: 'fire', img: '/images/yamamoto.png' },
  { id: 'unohana', name: 'Retsu Unohana', division: '4ª Divisão', bankai: 'Minazuki', element: 'Cura / Lâmina', power: 92, theme: 'blood', img: '/images/unohana.png' },
  { id: 'byakuya2', name: 'Byakuya Kuchiki', division: '6ª Divisão', bankai: 'Senbonzakura Kageyoshi', element: 'Pétalas', power: 90, theme: 'blood', img: '/images/byakuya.png' },
  { id: 'komamura', name: 'Sajin Komamura', division: '7ª Divisão', bankai: 'Kokujō Tengen Myō’ō', element: 'Titã', power: 84, theme: 'gold', img: '/images/komamura.png' },
  { id: 'kyoraku', name: 'Shunsui Kyōraku', division: '8ª Divisão', bankai: 'Katen Kyōkotsu: Karamatsu', element: 'Jogo Fatal', power: 95, theme: 'blood', img: '/images/kyoraku.png' },
  { id: 'toshiro2', name: 'Tōshirō Hitsugaya', division: '10ª Divisão', bankai: 'Daiguren Hyōrinmaru', element: 'Gelo', power: 88, theme: 'spirit', img: '/images/toshiro.png' },
  { id: 'kenpachi2', name: 'Kenpachi Zaraki', division: '11ª Divisão', bankai: 'Nozarashi', element: 'Devastação', power: 97, theme: 'fire', img: '/images/kenpachi.png' },
  { id: 'mayuri', name: 'Mayuri Kurotsuchi', division: '12ª Divisão', bankai: 'Konjiki Ashisogi Jizō', element: 'Veneno', power: 86, theme: 'hollow', img: '/images/mayuri.png' },
]

// --- Vilões ----------------------------------------------------------------
export const villains: Villain[] = [
  { id: 'aizen', name: 'Sōsuke Aizen', kanji: '藍染 惣右介', faction: 'Traidor · Hōgyoku', quote: 'Desde o início, ninguém esteve no topo. Nem você, nem eu, nem os deuses.', theme: 'hollow', img: '/images/aizen.png' },
  { id: 'yhwach', name: 'Yhwach', kanji: 'ユーハバッハ', faction: 'Imperador Quincy', quote: 'Todo medo tem origem no desconhecido. Eu conheço todos os futuros.', theme: 'quincy', img: '/images/yhwach.png' },
  { id: 'ulquiorra', name: 'Ulquiorra Cifer', kanji: 'ウルキオラ', faction: '4º Espada', quote: 'Vocês, humanos, sempre falam disso: coração. Onde está esse coração?', theme: 'spirit', img: '/images/ulquiorra.png' },
  { id: 'grimmjow', name: 'Grimmjow Jaegerjaquez', kanji: 'グリムジョー', faction: '6º Espada', quote: 'Não me importa vencer. Eu só quero te esmagar completamente.', theme: 'spirit', img: '/images/grimmjow.png' },
  { id: 'gin', name: 'Gin Ichimaru', kanji: '市丸 ギン', faction: 'Ex-Capitão · 3ª Divisão', quote: 'Você não acha que os deuses são cruéis? Eu tinha um plano o tempo todo.', theme: 'fire', img: '/images/gin.png' },
  { id: 'tousen', name: 'Kaname Tōsen', kanji: '東仙 要', faction: 'Ex-Capitão · 9ª Divisão', quote: 'Eu escolho o caminho com menor derramamento de sangue.', theme: 'hollow', img: '/images/tousen.png' },
  { id: 'nnoitra', name: 'Nnoitra Gilga', kanji: 'ノイトラ', faction: '5º Espada', quote: 'A coisa mais bela deste mundo é a destruição absoluta.', theme: 'gold', img: '/images/nnoitra.png' },
  { id: 'baraggan', name: 'Baraggan Louisenbairn', kanji: 'バラガン', faction: '2º Espada · Antigo Rei', quote: 'Todas as coisas envelhecem e morrem. Este é o poder de um deus.', theme: 'hollow', img: '/images/baraggan.png' },
]

// --- Zanpakutō -------------------------------------------------------------
export const zanpakuto: Zanpakuto[] = [
  { id: 'zangetsu', name: 'Zangetsu', kanji: '斬月', user: 'Ichigo Kurosaki', sealed: 'Lâmina khyber gigante', shikai: 'Getsuga Tenshō', bankai: 'Tensa Zangetsu', theme: 'gold', img: '/images/z-zangetsu.png' },
  { id: 'shirayuki', name: 'Sode no Shirayuki', kanji: '袖白雪', user: 'Rukia Kuchiki', sealed: 'Katana branca de fita', shikai: 'Some no mai, Tsukishiro', bankai: 'Hakka no Togame', theme: 'spirit', img: '/images/z-shirayuki.png' },
  { id: 'senbonzakura', name: 'Senbonzakura', kanji: '千本桜', user: 'Byakuya Kuchiki', sealed: 'Katana comum', shikai: 'Dispersão em mil lâminas', bankai: 'Senbonzakura Kageyoshi', theme: 'blood', img: '/images/z-senbonzakura.png' },
  { id: 'hyorinmaru', name: 'Hyōrinmaru', kanji: '氷輪丸', user: 'Tōshirō Hitsugaya', sealed: 'Katana de corrente', shikai: 'Dragão de gelo', bankai: 'Daiguren Hyōrinmaru', theme: 'spirit', img: '/images/z-hyorinmaru.png' },
  { id: 'ryujin', name: 'Ryūjin Jakka', kanji: '流刃若火', user: 'Genryūsai Yamamoto', sealed: 'Katana envelhecida', shikai: 'Chamas oceânicas', bankai: 'Zanka no Tachi', theme: 'fire', img: '/images/z-ryujin.png' },
  { id: 'benihime', name: 'Benihime', kanji: '紅姫', user: 'Kisuke Urahara', sealed: 'Bengala-espada', shikai: 'Nake, Benihime', bankai: 'Kannonbiraki Benihime', theme: 'blood', img: '/images/z-benihime.png' },
]

// --- Filmes ----------------------------------------------------------------
export const films: Film[] = [
  { id: 'memories', title: 'Memories of Nobody', year: '2006', runtime: '1h33', theme: 'spirit', synopsis: 'Almas em branco invadem Karakura e Ichigo conhece Senna, uma shinigami sem memórias.', img: '/images/film-memories.png' },
  { id: 'diamonddust', title: 'The DiamondDust Rebellion', year: '2007', runtime: '1h34', theme: 'spirit', synopsis: 'Hitsugaya desaparece após um ataque a um comboio real. A Soul Society o declara traidor.', img: '/images/film-diamonddust.png' },
  { id: 'fadetoblack', title: 'Fade to Black', year: '2008', runtime: '1h34', theme: 'blood', synopsis: 'Rukia perde suas memórias e volta-se contra Ichigo enquanto a Soul Society se apaga.', img: '/images/film-fadetoblack.png' },
  { id: 'hellverse', title: 'Hell Verse', year: '2010', runtime: '1h34', theme: 'fire', synopsis: 'Pecadores fogem do Inferno e sequestram a irmã de Ichigo, forçando-o a descer ao abismo.', img: '/images/film-hellverse.png' },
]

// --- Timeline --------------------------------------------------------------
export const timeline: TimelineStep[] = [
  { id: 't1', title: 'Substitute Shinigami', subtitle: 'O Início', desc: 'Ichigo recebe os poderes de Rukia e assume o dever de proteger Karakura.', theme: 'gold' },
  { id: 't2', title: 'Soul Society', subtitle: 'O Resgate', desc: 'A invasão do Seireitei e a queda das ilusões sobre a justiça dos Shinigami.', theme: 'spirit' },
  { id: 't3', title: 'Arrancar', subtitle: 'A Ameaça', desc: 'Aizen revela seu exército de Espadas nascidos do Hōgyoku.', theme: 'hollow' },
  { id: 't4', title: 'Hueco Mundo', subtitle: 'O Deserto', desc: 'A missão de resgate no mundo dos Hollows e o despertar do Vasto Lorde.', theme: 'blood' },
  { id: 't5', title: 'Fake Karakura', subtitle: 'A Guerra', desc: 'O confronto final contra Aizen e o sacrifício do Mugetsu.', theme: 'fire' },
  { id: 't6', title: 'Fullbring', subtitle: 'O Retorno', desc: 'Ichigo recupera seus poderes através de um novo tipo de habilidade.', theme: 'gold' },
  { id: 't7', title: 'Thousand-Year Blood War', subtitle: 'O Fim', desc: 'Yhwach e o Wandenreich lançam a guerra que definirá os três mundos.', theme: 'quincy' },
]

// --- Estatísticas ----------------------------------------------------------
export const stats: Stat[] = [
  { id: 's1', value: 366, suffix: '', prefix: '+', label: 'Episódios', theme: 'gold' },
  { id: 's2', value: 4, suffix: '', prefix: '+', label: 'Filmes', theme: 'blood' },
  { id: 's3', value: 13, suffix: '', prefix: '', label: 'Divisões', theme: 'spirit' },
  { id: 's4', value: 100, suffix: '+', prefix: '', label: 'Personagens', theme: 'fire' },
]

// --- Galeria ---------------------------------------------------------------
export const gallery: GalleryItem[] = [
  { id: 'g1', kanji: '卍解', label: 'Bankai', span: 'tall', theme: 'gold', img: '/images/gal-bankai.png' },
  { id: 'g2', kanji: '虚', label: 'Hollow', span: 'normal', theme: 'hollow', img: '/images/gal-hollow.png' },
  { id: 'g3', kanji: '月牙', label: 'Getsuga', span: 'wide', theme: 'spirit', img: '/images/gal-getsuga.png' },
  { id: 'g4', kanji: '死神', label: 'Shinigami', span: 'normal', theme: 'blood', img: '/images/gal-shinigami.png' },
  { id: 'g5', kanji: '滅却師', label: 'Quincy', span: 'tall', theme: 'quincy', img: '/images/gal-quincy.png' },
  { id: 'g6', kanji: '斬魄刀', label: 'Zanpakutō', span: 'normal', theme: 'fire', img: '/images/gal-zanpakuto.png' },
  { id: 'g7', kanji: '護廷十三隊', label: 'Gotei 13', span: 'wide', theme: 'spirit', img: '/images/gal-gotei.png' },
  { id: 'g8', kanji: '空座町', label: 'Karakura', span: 'normal', theme: 'gold', img: '/images/gal-karakura.png' },
]

// --- Mensagens do loading --------------------------------------------------
export const loadingMessages = [
  'Carregando Soul Society...',
  'Reunindo energia espiritual...',
  'Sincronizando Zanpakutō...',
  'Preparando Bankai...',
  'Abrindo Garganta...',
  'Materializando Hollows...',
]
