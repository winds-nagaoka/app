const otherConcert = [
  {
///////////////////////////////
////// フラッシュモブ2016 //////
///////////////////////////////
        id: 'other001',
        type: 'other',
        title: 'フラッシュモブ2016',
        time: {
          date: '2016年5月14日(土)',
          timestamp: 1463198400,
        },
        place: ['リリックホール前'],
        contents: [
          {label: 'プログラム', music: [0]}
        ],
        data: [
          {video: 0, title: '情熱大陸', composer: '葉加瀬太郎'},
        ]
  }, {
////////////////////////////////////////
////// 市民バンドフェスティバル2018 //////
////////////////////////////////////////
    id: 'other002',
    type: 'other',
    title: '市民バンドフェスティバル2018',
    time: {
      date: '2018年2月25日(日)',
      timestamp: 1519531200,
    },
    place: ['アオーレ長岡'],
    conductor: [{name: '宮口弘明'}],
    contents: [
      {label: 'プログラム', music: [0, 1, 2]}
    ],
    data: [
      {audio: 0, video: 0, title: 'ヴィヴァ・ムジカ！', composer: 'A.リード'},
      {audio: 1, video: 1, title: 'ウェールズの歌より第二楽章', composer: 'A.デイヴィス'},
      {audio: 2, video: 2, title: 'スクーティン・オン・ハードロック', composer: 'D.R.ホルジンガー'}
    ]
  }
]

module.exports = {
  otherConcert
}