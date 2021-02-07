const sourceList = [
  {
    id: 'mini2021',
    title: '春のミニコンサート2021',
    type: 'source',
    time: {
      timestamp: 1620450000,
      date: '2021年10月8日(土)',
      time: '14:00',
    },
    sourceStatus: true,
    contents: [
      {label: 'プログラム', music: [0, 1, 2, 3, 4, 5, 6, 7]},
      {label: 'アンコール', music: [8, 9]},
    ],
    data: [
      {title: 'Happiness', composer: '嵐'},
      {title: 'スペイン', composer: 'C.コリア', arranger: '熱帯JAZZ楽団'},
      {title: '炎', composer: 'LiSA'},
      {title: 'ディズニーヴィランズ・メドレー', composer: 'B.ヒーレー, B.ベーカー, M.ムソルグスキ, A.メンケン', arranger: '鈴木 英史'},
      {title: 'コンパス・オブ・ユア・ハート', composer: 'A.メンケン'},
      {title: 'Make you happy', composer: 'NiziU'},
      {title: '夜に駆ける', composer: 'YOASOBI'},
      {title: '「となりのトトロ」～コンサート・バンドのためのセレクション', composer: '後藤洋'},
      {title: '虹', composer: '菅田将暉'},
      {title: 'アフリカン・シンフォニー', composer: 'V.マッコイ'},
    ],
  }, {
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
      {title: 'コンサート・プレリュード', composer: 'P.スパーク'},
      {title: '星の船', composer: '西邑由記子'},
      {audio: 0, title: '春の猟犬', composer: 'A.リード'},
      {audio: 1, title: '富士山', composer: '真島俊夫'},
      {title: '『海』管弦楽のための3つの交響的素描より', composer: 'C.ドビュッシー', arranger: '河本隆吉', movement: ['第3楽章 「風と海との対話」']},
      {title: '木陰の散歩道', composer: 'E.F.ゴールドマン'},
      {audio: 2, title: 'ブロックM', composer: 'J.H.ビリック'},
    ],
  }
]

module.exports = {
  sourceList
}
