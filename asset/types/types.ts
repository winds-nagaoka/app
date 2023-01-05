type AllNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0

type OnesPlace = AllNumbers
type TensPlace = 0 | 1 | 2 | 3

type Date = string // yyyy年M月dd日(weekday)
type Time = string // hh:mm

export type ConcertTime = {
  timestamp: number
  date: Date
  time?: Time
  label?: '開演'
}

export type ConcertPlace =
  | '長岡市立劇場'
  | '長岡リリックホール'
  | 'コンサートホール'
  | 'シアター'
  | '千秋が原ふるさとの森'
  | '野外音楽堂'
  | 'ポケットステージ'
  | '第一スタジオ'
  | 'リリックホール前'
  | 'アオーレ長岡'

export type Conductor = { name: string }

export type Guest = { name: string; instrument: string; url?: string; blog?: string; belong?: string }

export type ConcertContent = {
  label:
    | 'ロビコン'
    | 'プレコン'
    | '第1部'
    | '第2部'
    | '第3部'
    | 'アンコール'
    | 'JCKサクソフォンアンサンブル'
    | 'クラリネットアンサンブル'
    | 'プレコン'
    | 'プログラム'
  music: number[]
}

export type ConcertMusic = {
  audio?: number
  video?: number
  title: string
  composer?: string
  arranger?: string
  movement?: string[]
  add?: string[]
}

export type MainConcert = {
  id: `main0${TensPlace}${OnesPlace}`
  type: 'main'
  title: `第${TensPlace | ''}${OnesPlace}回定期演奏会`
  time: ConcertTime
  place?: ConcertPlace[]
  conductor: Conductor[]
  guest?: Guest[]
  poster?: `https://winds-n.com/image/poster/main/${string}.jpg`
  guide?: `https://winds-n.com/${string}concert`
  contents: ConcertContent[]
  data: ConcertMusic[]
}

export type MiniConcert = {
  id: `mini${string}`
  type: 'mini'
  title: `${'春のミニコンサート' | '野外コンサート'}${string}`
  time: ConcertTime
  place?: ConcertPlace[]
  conductor?: Conductor[]
  poster?: `https://winds-n.com/image/poster/mini/${string}`
  guide?: `https://winds-n.com/${string}`
  contents: ConcertContent[]
  data: ConcertMusic[]
}

export type OtherConcert = {
  id: string
  type: 'other'
  title: string
  time: ConcertTime
  place: ConcertPlace[]
  conductor?: Conductor[]
  poster?: `https://winds-n.com/image/poster/other/${string}`
  guide?: `https://winds-n.com/${string}`
  contents: ConcertContent[]
  data: ConcertMusic[]
}

export type Audio = {
  id: `main0${TensPlace}${OnesPlace}` | `mini${string}` | string
  status: boolean
  baseSrc: string
  data: { available: boolean; data: number; path: `${string}.mp3`; addtitle?: string }[]
}

export type Photo = {
  id: `main0${TensPlace}${OnesPlace}` | `mini${string}` | string
  status: boolean
  baseSrcThumbnail: `${string}/thumbnail/`
  baseSrcOriginal: `${string}/original/`
  count: number
}

export type Video =
  | { id: string; status: false }
  | {
      id: `main0${TensPlace}${OnesPlace}` | `mini${string}` | string
      status: true
      baseSrc: `${string}/`
      poster?: `https://video.winds-n.com/poster_${string}.png`
      data: { available: boolean; data: number; path: string; addtitle?: string }[]
    }

export type Practice = {
  id: string
  recordStatus: boolean
  time: {
    timestamp: number
    date: Date
    time: Time
  }
  place: '第1スタジオ'[]
  label: string
}

export type PracticeAudio = {
  id: string
  directory: `${string}/`
  file: { label: string; path: `${string}.mp3` }[]
  contents: {
    file: number
    list: { time: string; label: string; contents?: { time: string; label: string }[] }[]
  }[]
}

export type Source = {
  id: string
  title: string
  type: string
  time: {
    timestamp: number
    date: string
    time: string
  }
  sourceStatus: boolean
  contents: { label: string; music: number[] }[]
  data: { audio?: number; title: string; composer?: string; arranger?: string; movement?: string[] }[]
}

export type SourceAudio = {
  id: string
  status: boolean
  directory: `${string}/`
  data: { available: boolean; data: number; path: `${string}.mp3`; addtitle?: string }[]
}
