const sourceAudio = [
  // {
  //   id: '2019winds_spring',
  //   // source.js 内の sourceStatus の設定が優先
  //   status: true,
  //   directory: 'source_2019winds_spring/',
  //   data: [
  //     {available: true, data: 0, path: 'disney.mp3'},
  //     {available: true, data: 1, path: 'myfavorite.mp3'},
  //     {available: true, data: 2, path: 'odoruponpokorin.mp3'},
  //     {available: true, data: 3, path: 'otokonokunsyo.mp3'},
  //     {available: true, data: 4, path: 'canyou.mp3'},
  //     {available: true, data: 5, path: 'koisuru.mp3'},
  //     {available: true, data: 6, path: 'usa.mp3'},
  //     {available: true, data: 7, path: 'doenka2.mp3'},
  //     {available: true, data: 8, path: 'japagra12.mp3'},
  //     {available: true, data: 9, path: 'omens.mp3'},
  //     {available: true, data: 10, path: 'aidea.mp3'},
  //   ]
  // },
  {
    id: '2019winds',
    status: true,
    directory: 'source_2019winds/',
    data: [
      {available: true, data: 0, path: 'may.mp3'},
      {available: true, data: 1, path: 'poeticintermezzo.mp3'},
      {available: true, data: 2, path: 'musicforafestival-001.mp3', addtitle: '第1楽章 Con brio'},
      {available: true, data: 2, path: 'musicforafestival-002.mp3', addtitle: '第2楽章 Andantino'},
      {available: true, data: 2, path: 'musicforafestival-003.mp3', addtitle: '第3楽章 Vivo'},
      {available: true, data: 3, path: 'slavonic46-2.mp3', addtitle: '作品46 第2番'},
      {available: true, data: 3, path: 'slavonic72-2.mp3', addtitle: '作品72 第2番'},
      {available: true, data: 3, path: 'slavonic46-8.mp3', addtitle: '作品46 第8番'},
      {available: true, data: 4, path: 'fuji.mp3'},
      {available: true, data: 5, path: 'anta.mp3'},
      {available: true, data: 6, path: 'blockm.mp3'},
    ]
  }
]

module.exports = {
  sourceAudio
}