import type { Source } from '../types/types'

export const sourceList: Source[] = [
  {
    id: 'main037',
    title: '第37回定期演奏会',
    type: 'source',
    time: {
      timestamp: 1728795600,
      date: '2024年10月13日(日)',
      time: '14:00',
    },
    sourceStatus: true,
    contents: [
      { label: '第1部', music: [0, 1, 2] },
      { label: '第2部', music: [3, 4] },
      { label: 'アンコール', music: [5, 6] },
    ],
    data: [
      { audio: 0, title: 'ホープタウンの休日', composer: 'S.ライニキー' },
      { audio: 1, title: '陽はまた昇る', composer: 'P.スパーク' },
      { audio: 2, title: '吹奏楽のための第二組曲', composer: 'A.リード' },
      { audio: 3, title: '天使の糧', composer: 'C.フランク', arranger: 'A.リード' },
      {
        audio: 4,
        title: '幻想交響曲より',
        composer: 'H.ベルリオーズ',
        arranger: '河本隆吉・齋藤淳',
        movement: ['第4楽章「断頭台への行進」', '第5楽章「魔女の夜宴の夢」'],
      },
      { audio: 6, title: '目覚めよ、と呼ぶ声あり', composer: 'J.S.バッハ', arranger: 'A.リード' },
      { audio: 7, title: 'ブロックM', composer: 'J.H.ビリック' },
    ],
  },
]
