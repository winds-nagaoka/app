const sourceList = [
  {
    id: 'mini2022',
    title: '春のミニコンサート2022',
    type: 'source',
    time: {
      timestamp: 1651899600,
      date: '2022年5月7日(土)',
      time: '14:00',
    },
    sourceStatus: true,
    contents: [
      {label: 'プログラム', music: [0, 1, 2, 3, 4, 5, 6, 7]},
      {label: 'アンコール', music: [8, 9]},
    ],
    data: [
      {audio: 0, title: 'ドラゴンクエストより序曲', composer: 'すぎやまこういち'},
      {audio: 1, title: 'Dear Mr.Jones', arranger: '熱帯JAZZ楽団'},
      {audio: 2, title: 'ツバメ', composer: 'YOASOBI'},
      {audio: 3, title: 'ヒットソング・プレイバック90s'},
      {audio: 4, title: 'ディープパープルメドレー'},
      {audio: 5, title: 'アルデバラン', composer: 'AI'},
      {audio: 6, title: 'ルパン三世メドレー'},
      {audio: 7, title: 'ディズニーメドレーII'},
      {audio: 8, title: '白い恋人たち', composer: 'フランシス・レイ'},
      {audio: 9, title: 'マツケンサンバII', composer: '宮川彬良'},
    ],
  }, {
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
      {label: 'アンコール', music: [6, 7, 8]},
    ],
    data: [
      {audio: 0, title: 'サンダーバード', composer: 'B.グレイ', arranger: 'P.スパーク'},
      {audio: 1, title: '海の歌', composer: 'R.ミッチェル'},
      {audio: 2, title: '「千と千尋の神隠し」ハイライト', composer: '久石譲'},
      {audio: 3, title: '祝典のための音楽', composer: 'P.スパーク', movement: ['第1楽章 con brio', '第2楽章 andantino', '第3楽章 vivo']},
      {audio: 6, title: '歌劇「ムラダ」より貴族たちの行進', composer: 'R.コルサコフ'},
      {audio: 7, title: 'ローマの噴水', composer: 'O.レスピーギ'},
      {audio: 8, title: '吹奏楽のための「エール・マーチ」', composer: '宮下秀樹'},
      {title: 'グリーンスリーブス/ロンドンデリー'},
      {audio: 9, title: 'ブロックM', composer: 'J.H.ビリック'},
    ],
  }
]

module.exports = {
  sourceList
}
