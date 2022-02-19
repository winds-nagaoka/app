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
  },
]

module.exports = {
  sourceList
}
