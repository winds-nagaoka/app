const sourceList = [
  {
    id: '2020spring',
    title: 'スプリングコンサート',
    type: 'source',
    time: {
      timestamp: 1589007600,
      date: '2020年5月9日(土)',
      time: '16:00'
    },
    sourceStatus: false,
    contents: [
      {label: '第1部', music: [0, 1, 2]},
      {label: '第2部', music: [3, 4]},
      {label: 'アンコール', music: [5, 6]},
    ],
    data: [
      {audio: 0, title: '五月の風', composer: '真島俊夫'},
      {audio: 1, title: '詩的間奏曲', composer: 'J.バーンズ'},
      {audio: 2, title: '祝典のための音楽', composer: 'P.スパーク'},
      {audio: 5, title: 'スラブ舞曲', composer: 'A.ドヴォルザーク'},
      {audio: 8, title: '富士山 〜北斎の版画に触発されて〜', composer: '真島俊夫'},
      {audio: 9, title: 'ロマネスク', composer: 'J.スウェアリンジェン'},
      {audio: 10, title: '木陰の散歩道', composer: 'E.F.ゴールドマン'}
    ]
  }
]

module.exports = {
  sourceList
}