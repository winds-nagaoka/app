const practiceAudio = [
  {
    id: '20210403',
    directory: '20210403/',
    file: [
      {label: '炎', path: '001.mp3'},
      {label: 'Happiness', path: '002.mp3'},
      {label: 'アフリカン・シンフォニー', path: '003.mp3'},
      {label: 'スペイン', path: '004.mp3'},
      {label: '虹', path: '005.mp3'},
      {label: 'となりのトトロ', path: '006.mp3'},
      {label: '合奏後半', path: '007.mp3'}
    ],
    contents: [
      {
        file: 0,
        list: []
      },
      {
        file: 1,
        list: []
      },
      {
        file: 2,
        list: []
      },
      {
        file: 3,
        list: []
      },
      {
        file: 4,
        list: []
      },
      {
        file: 5,
        list: []
      },
      {
        file: 6,
        list: [
          {time: '12:54', label: 'スペイン'},
          {time: '50:12', label: '虹'},
          {time: '55:00', label: 'となりのトトロ'},
        ]
      },
    ]
  },
  {
    id: '20210410',
    directory: '20210410/',
    file: [
      {label: '録音開始', path: '001.mp3'}
    ],
    contents: [
      {
        file: 0,
        list: [
          {time: '23:45', label: '合奏開始'},
          {time: '27:46', label: '基礎合奏'},
          {time: '34:53', label: 'Make you happy', contents: [
            {time: '38:10', label: '通し'}
          ]},
          {time: '1:01:56', label: '夜に駆ける', contents: [
            {time: '1:03:46', label: '通し'}
          ]},
          {time: '1:22:06', label: '虹', contents: [
            {time: '1:23:06', label: '通し'}
          ]},
          {time: '1:40:06', label: 'コンパス・オブ・ユア・ハート', contents: [
            {time: '2:10:38', label: '通し'}
          ]},
          {time: '2:15:16', label: 'ディズニーヴィランズ・メドレー', contents: [
            {time: '2:49:38', label: '通し'}
          ]},
        ]
      },
    ]
  },
  {
    id: '20210417',
    directory: '20210417/',
    file: [
      {label: '録音開始', path: '001.mp3'}
    ],
    contents: [
      {
        file: 0,
        list: [
          {time: '41:10', label: '合奏開始'},
          {time: '42:45', label: '基礎合奏'},
          {time: '52:25', label: '通し', contents: [
            {time: '52:47', label: 'Happiness'},
            {time: '1:00:43', label: 'スペイン'},
            {time: '1:08:47', label: '炎'},
            {time: '1:14:47', label: 'ディズニーヴィランズ・メドレー'},
            {time: '1:21:35', label: 'コンパス・オブ・ユア・ハート'},
            {time: '1:28:35', label: 'Make you happy'},
            {time: '1:31:48', label: '夜に駆ける'},
            {time: '1:37:40', label: 'となりのトトロ'},
            {time: '1:49:32', label: '虹'},
            {time: '1:55:16', label: 'アフリカン・シンフォニー'},
          ]},
        ]
      },
    ]
  },
]

module.exports = {
  practiceAudio
}