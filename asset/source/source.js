const sourceList = [
  {
    id: 'main035',
    title: '第35回定期演奏会',
    type: 'source',
    time: {
      timestamp: 1633842000,
      date: '2022年10月9日(日)',
      time: '14:00',
    },
    sourceStatus: true,
    contents: [
      {label: '第1部', music: [0, 1, 2, 3]},
      {label: '第2部', music: [4, 5]},
      {label: 'アンコール', music: [6, 7]},
    ],
    data: [
      {audio: 0, title: 'サンダーバード', composer: 'B.グレイ', arranger: 'P.スパーク'},
      {audio: 1, title: '海の歌', composer: 'R.ミッチェル'},
      {audio: 2, title: '「千と千尋の神隠し」ハイライト', composer: '久石譲'},
      {audio: 3, title: '祝典のための音楽', composer: 'P.スパーク', movement: ['第1楽章 con brio', '第2楽章 andantino', '第3楽章 vivo']},
      {audio: 6, title: '吹奏楽のための「エール・マーチ」', composer: '宮下秀樹'},
      {audio: 7, title: 'ローマの噴水', composer: 'O.レスピーギ'},
      {audio: 8, title: 'ロンドンデリーの歌'},
      {audio: 9, title: 'ブロックM', composer: 'J.H.ビリック'},
    ],
  }
]

module.exports = {
  sourceList
}
