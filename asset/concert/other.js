const otherConcert = [
  // {
  //   ////////////////////
  //   //// ブロックM //////
  //   ////////////////////
  //       id: 'other000',
  //       type: 'other',
  //       title: 'ブロックM',
  //       time: {
  //         date: '1988年5月15日以降',
  //         timestamp: 579625100,
  //       },
  //       place: ['長岡市立劇場', 'リリックホール'],
  //       contents: [
  //         {label: 'ブロックM', music: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]},
  //       ],
  //       data: [
  //         {audio: 0, title: '第1回定期演奏会', composer: 'J.H.ビリック'},
  //         {audio: 1, title: '第2回定期演奏会', composer: 'J.H.ビリック'},
  //         {title: '第3回定期演奏会', composer: 'J.H.ビリック'},
  //         {audio: 2, title: '第4回定期演奏会', composer: 'J.H.ビリック'},
  //         {audio: 3, title: '第5回定期演奏会', composer: 'J.H.ビリック'},
  //         {audio: 4, title: '第6回定期演奏会', composer: 'J.H.ビリック'},
  //         {audio: 5, title: '第7回定期演奏会', composer: 'J.H.ビリック'},
  //         {audio: 6, title: '第8回定期演奏会', composer: 'J.H.ビリック'},
  //         {audio: 7, title: '第9回定期演奏会', composer: 'J.H.ビリック'},
  //         {audio: 8, title: '第10回定期演奏会', composer: 'J.H.ビリック'},
  //         {audio: 9, title: '第11回定期演奏会', composer: 'J.H.ビリック'},
  //         {audio: 10, title: '第12回定期演奏会', composer: 'J.H.ビリック'},
  //         {audio: 11, title: '第13回定期演奏会', composer: 'J.H.ビリック'},
  //         {audio: 12, title: '第14回定期演奏会', composer: 'J.H.ビリック'},
  //         {audio: 13, title: '第15回定期演奏会', composer: 'J.H.ビリック'},
  //         {audio: 14, title: '第16回定期演奏会', composer: 'J.H.ビリック'},
  //         {audio: 15, title: '第17回定期演奏会', composer: 'J.H.ビリック'},
  //         {audio: 16, title: '第18回定期演奏会', composer: 'J.H.ビリック'},
  //         {audio: 17, title: '第19回定期演奏会', composer: 'J.H.ビリック'},
  //         {audio: 18, title: '第20回定期演奏会', composer: 'J.H.ビリック'},
  //         {audio: 19, title: '第21回定期演奏会', composer: 'J.H.ビリック'},
  //         {audio: 20, title: '第22回定期演奏会', composer: 'J.H.ビリック'},
  //         {audio: 21, title: '第23回定期演奏会', composer: 'J.H.ビリック'},
  //         {audio: 22, title: '第24回定期演奏会', composer: 'J.H.ビリック'},
  //         {audio: 23, title: '第25回定期演奏会', composer: 'J.H.ビリック'},
  //         {audio: 24, title: '第26回定期演奏会', composer: 'J.H.ビリック'},
  //         {audio: 25, title: '第27回定期演奏会', composer: 'J.H.ビリック'},
  //         {audio: 26, title: '第28回定期演奏会', composer: 'J.H.ビリック'},
  //         {audio: 27, title: '第29回定期演奏会', composer: 'J.H.ビリック'},
  //         {audio: 28, title: '第30回定期演奏会', composer: 'J.H.ビリック'},
  //       ]
  //       // contents: [
  //       //   {label: '第1回定期演奏会', music: [0]},
  //       //   {label: '第2回定期演奏会', music: [1]},
  //       //   {label: '第3回定期演奏会', music: [2]},
  //       //   {label: '第4回定期演奏会', music: [3]},
  //       //   {label: '第5回定期演奏会', music: [4]},
  //       //   {label: '第6回定期演奏会', music: [5]},
  //       //   {label: '第7回定期演奏会', music: [6]},
  //       //   {label: '第8回定期演奏会', music: [7]},
  //       //   {label: '第9回定期演奏会', music: [8]},
  //       //   {label: '第10回定期演奏会', music: [9]},
  //       //   {label: '第11回定期演奏会', music: [10]},
  //       //   {label: '第12回定期演奏会', music: [11]},
  //       //   {label: '第13回定期演奏会', music: [12]},
  //       //   {label: '第14回定期演奏会', music: [13]},
  //       //   {label: '第15回定期演奏会', music: [14]},
  //       //   {label: '第16回定期演奏会', music: [15]},
  //       //   {label: '第17回定期演奏会', music: [16]},
  //       //   {label: '第18回定期演奏会', music: [17]},
  //       //   {label: '第19回定期演奏会', music: [18]},
  //       //   {label: '第20回定期演奏会', music: [19]},
  //       //   {label: '第21回定期演奏会', music: [20]},
  //       //   {label: '第22回定期演奏会', music: [21]},
  //       //   {label: '第23回定期演奏会', music: [22]},
  //       //   {label: '第24回定期演奏会', music: [23]},
  //       //   {label: '第25回定期演奏会', music: [24]},
  //       //   {label: '第26回定期演奏会', music: [25]},
  //       //   {label: '第27回定期演奏会', music: [26]},
  //       //   {label: '第28回定期演奏会', music: [27]},
  //       //   {label: '第29回定期演奏会', music: [28]},
  //       //   {label: '第30回定期演奏会', music: [29]}
  //       // ],
  //       // data: [
  //       //   {audio: 0, title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {audio: 1, title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {audio: 2, title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {audio: 3, title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {audio: 4, title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {audio: 5, title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {audio: 6, title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {audio: 7, title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {audio: 8, title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {audio: 9, title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {audio: 10, title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {audio: 11, title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {audio: 12, title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {audio: 13, title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {audio: 14, title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {audio: 15, title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {audio: 16, title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {audio: 17, title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {audio: 18, title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {audio: 19, title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {audio: 20, title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {audio: 21, title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {audio: 22, title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {audio: 23, title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {audio: 24, title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {audio: 25, title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {audio: 26, title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {audio: 27, title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {audio: 28, title: 'ブロックM', composer: 'J.H.ビリック'},
  //       //   {audio: 29, title: 'ブロックM', composer: 'J.H.ビリック'}
  //       // ]
  // },
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
  }, {
//////////////////////////////////
////// スプリングコンサート //////
//////////////////////////////////
    id: 'other003',
    type: 'other',
    title: 'スプリングコンサート',
    time: {
      timestamp: 1570942800,
      date: '2020年5月9日(土)',
      time: '16:00',
      label: '開演',
    },
    place: ['長岡リリックホール', 'コンサートホール'],
    conductor: [{name: '河本隆吉'}],
    poster: 'https://winds-n.com/img/poster/other/2020.jpg',
    guide: 'https://winds-n.com/spring2020',
    contents: [
      {label: '第1部', music: [0, 1, 2]},
      {label: '第2部', music: [3, 4]},
      {label: 'アンコール', music: [5, 6]},
    ],
    data: [
      {title: '五月の風', composer: '真島俊夫'},
      {title: '詩的間奏曲', composer: 'J.バーンズ'},
      {title: '祝典のための音楽', composer: 'P.スパーク', movement: ['第1楽章 con brio', '第2楽章 andantino', '第3楽章 vivo']},
      {title: '「スラヴ舞曲」より', composer: 'A.ドヴォルザーク', arranger: '河本隆吉', movement: ['作品46 第2番', '作品72 第2番', '作品46 第8番']},
      {title: '富士山～北斎の版画に触発されて～', composer: '真島俊夫'},
      {title: 'ロマネスク', composer: 'J.スウェアリンジェン'},
      {title: '木陰の散歩道', composer: 'E.F.ゴールドマン'}
    ]
  }
]

module.exports = {
  otherConcert
}