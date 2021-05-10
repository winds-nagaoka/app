const sourceList = [
  {
    id: 'main034',
    title: '第34回定期演奏会',
    type: 'source',
    time: {
      timestamp: 1633842000,
      date: '2021年10月10日(日)',
      time: '14:00',
    },
    sourceStatus: true,
    contents: [
      {label: '第1部', music: [0, 1, 2]},
      {label: '第2部', music: [3, 4]},
      {label: 'アンコール', music: [5, 6]},
    ],
    data: [
      {audio: 0, title: 'コンサート・プレリュード', composer: 'P.スパーク'},
      {audio: 1, title: '星の船', composer: '西邑由記子'},
      {audio: 2, title: '春の猟犬', composer: 'A.リード'},
      {audio: 3, title: '富士山', composer: '真島俊夫'},
      {audio: 4, title: '『海』管弦楽のための3つの交響的素描より', composer: 'C.ドビュッシー', arranger: '河本隆吉', movement: ['第3楽章 「風と海との対話」']},
      {audio: 5, title: '木陰の散歩道', composer: 'E.F.ゴールドマン'},
      {audio: 6, title: 'ブロックM', composer: 'J.H.ビリック'},
    ],
  }
]

module.exports = {
  sourceList
}
