import type { OtherConcert } from '../types/types'

export const otherConcert: OtherConcert[] = [
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
    contents: [{ label: 'プログラム', music: [0] }],
    data: [{ video: 0, title: '情熱大陸', composer: '葉加瀬太郎' }],
  },
  {
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
    conductor: [{ name: '宮口弘明' }],
    contents: [{ label: 'プログラム', music: [0, 1, 2] }],
    data: [
      { audio: 0, video: 0, title: 'ヴィヴァ・ムジカ！', composer: 'A.リード' },
      { audio: 1, video: 1, title: 'ウェールズの歌より第二楽章', composer: 'A.デイヴィス' },
      { audio: 2, video: 2, title: 'スクーティン・オン・ハードロック', composer: 'D.R.ホルジンガー' },
    ],
  },
  {
    ///////////////////////////////
    ////// フラッシュモブ2018 //////
    ///////////////////////////////
    id: 'flashmob2018',
    type: 'other',
    title: 'フラッシュモブ2018',
    time: {
      date: '2018年5月10日(土)',
      timestamp: 1525924800,
    },
    place: ['リリックホール前'],
    contents: [{ label: 'プログラム', music: [0] }],
    data: [{ video: 0, title: 'ドラえもん', composer: '星野源' }],
  },
  {
    ///////////////////////////////
    ////// フラッシュモブ2019 //////
    ///////////////////////////////
    id: 'flashmob2019',
    type: 'other',
    title: 'フラッシュモブ2019',
    time: {
      date: '2019年5月11日(土)',
      timestamp: 1557547200,
    },
    place: ['リリックホール前'],
    contents: [{ label: 'プログラム', music: [0] }],
    data: [{ video: 0, title: 'U.S.A.' }],
  },
  {
    //////////////////////////////////
    ////// スプリングコンサート //////
    //////////////////////////////////
    id: 'other003',
    type: 'other',
    title: 'スプリングコンサート',
    time: {
      timestamp: 1589007600,
      date: '2020年5月9日(土)',
      time: '16:00',
      label: '開演',
    },
    place: ['長岡リリックホール', 'コンサートホール'],
    conductor: [{ name: '河本隆吉' }],
    poster: 'https://winds-n.com/image/poster/other/2020.jpg',
    guide: 'https://winds-n.com/spring2020',
    contents: [
      { label: '第1部', music: [0, 1, 2] },
      { label: '第2部', music: [3, 4] },
      { label: 'アンコール', music: [5, 6] },
    ],
    data: [
      { title: '五月の風', composer: '真島俊夫' },
      { title: '詩的間奏曲', composer: 'J.バーンズ' },
      {
        title: '祝典のための音楽',
        composer: 'P.スパーク',
        movement: ['第1楽章 con brio', '第2楽章 andantino', '第3楽章 vivo'],
      },
      {
        title: '「スラヴ舞曲」より',
        composer: 'A.ドヴォルザーク',
        arranger: '河本隆吉',
        movement: ['作品46 第2番', '作品72 第2番', '作品46 第8番'],
      },
      { title: '富士山～北斎の版画に触発されて～', composer: '真島俊夫' },
      { title: 'ロマネスク', composer: 'J.スウェアリンジェン' },
      { title: '木陰の散歩道', composer: 'E.F.ゴールドマン' },
    ],
  },
]
