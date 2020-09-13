const sourceList = [
  {
    id: 'main033',
    title: '第33回定期演奏会',
    type: 'source',
    time: {
      timestamp: 1602392400,
      date: '2020年10月11日(日)',
      time: '14:00'
    },
    sourceStatus: true,
    contents: [
      {label: '第1部', music: [0, 1, 2]},
      {label: 'アンコール', music: [3, 4]},
    ],
    data: [
      {audio: 0, title: '五月の風', composer: '真島俊夫'},
      {audio: 1, title: '詩的間奏曲', composer: 'J.バーンズ'},
      {audio: 2, title: 'スラブ舞曲', composer: 'A.ドヴォルザーク'},
      {audio: 5, title: 'ロマネスク', composer: 'J.スウェアリンジェン'},
      {audio: 6, title: 'ブロックM', composer: 'J.H.ビリック'}
    ]
  }
]

module.exports = {
  sourceList
}