// http://misakikato.xyz/winds/practice/20190316/001.mp3
// https://winds-n.com/member/contents/audio/source_2019winds_spring/myfavorite.mp3
const sourceList = [
  // {
  //   id: '2019winds_spring',
  //   title: '春のミニコンサート2019',
  //   type: 'source',
  //   time: {
  //     timestamp: 1557550800,
  //     date: '2019年5月11日(土)',
  //     time: '14:00'
  //   },
  //   // sourceStatus を false にすると detabase に追加されなくなる
  //   sourceStatus: true,
  //   contents: [
  //     {label: 'プログラム', music: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
  //   ],
  //   data: [
  //     {audio: 0, title: 'ディズニーセレブレーション'},
  //     {audio: 1, title: '私のお気に入り', composer: '熱帯JAZZ楽団'},
  //     {audio: 2, title: 'おどるポンポコリン'},
  //     {audio: 3, title: '男の勲章'},
  //     {audio: 4, title: 'Can You Celebrate?', composer: '安室奈美恵'},
  //     {audio: 5, title: '恋するフォーチュンクッキー'},
  //     {audio: 6, title: 'U.S.A.'},
  //     {audio: 7, title: 'ど演歌えきすぷれす'},
  //     {audio: 8, title: 'ジャパニーズ・グラフィティ 12'},
  //     {audio: 9, title: 'オーメンズ・オブ・ラブ'},
  //     {audio: 10, title: 'アイデア', composer: '星野源'}
  //   ]
  // },
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