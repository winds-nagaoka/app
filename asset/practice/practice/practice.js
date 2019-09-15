// http://misakikato.xyz/winds/practice/20190316/001.mp3
const practiceList = [
  {
    id: '20190316',
    recordStatus: true,
    time: {
      timestamp: 1552726800,
      date: '2019年3月16日(土)',
      time: '18:00'
    },
    place: ['第5スタジオ'],
    label: '指揮なし'
  },
  {
    id: '20190323',
    recordStatus: true,
    time: {
      timestamp: 1553331600,
      date: '2019年3月23日(土)',
      time: '18:00'
    },
    place: ['第5スタジオ'],
    label: '高橋合奏'
  },
  {
    id: '20190330',
    recordStatus: true,
    time: {
      timestamp: 1553936400,
      date: '2019年3月30日(土)',
      time: '18:00'
    },
    place: ['第5スタジオ'],
    label: '今井合奏'
  },
  {
    id: '20190406',
    recordStatus: true,
    time: {
      timestamp: 1554541200,
      date: '2019年4月6日(土)',
      time: '18:00'
    },
    place: ['第1スタジオ'],
    label: '今井合奏'
  },
  {
    id: '20190413',
    recordStatus: true,
    time: {
      timestamp: 1555146000,
      date: '2019年4月13日(土)',
      time: '18:00'
    },
    place: ['第1スタジオ'],
    label: '今井合奏'
  },
  {
    id: '20190420',
    recordStatus: true,
    time: {
      timestamp: 1555750800,
      date: '2019年4月20日(土)',
      time: '18:00'
    },
    place: ['第1スタジオ'],
    label: '今井合奏'
  },
  {
    id: '20190427',
    recordStatus: true,
    time: {
      timestamp: 1556355600,
      date: '2019年4月27日(土)',
      time: '18:00'
    },
    place: ['第1スタジオ'],
    label: '今井合奏'
  },
  {
    id: '20190504',
    recordStatus: true,
    time: {
      timestamp: 1556960400,
      date: '2019年5月4日(土)',
      time: '18:00'
    },
    place: ['第1スタジオ'],
    label: '今井合奏'
  },
  {
    id: '20190511',
    recordStatus: true,
    time: {
      timestamp: 1557536400,
      date: '2019年5月11日(土)',
      time: '10:00'
    },
    place: ['第1スタジオ'],
    label: '今井合奏'
  },
  {
    id: '20190518',
    recordStatus: true,
    time: {
      timestamp: 1558170000,
      date: '2019年5月18日(土)',
      time: '18:00'
    },
    place: ['第1スタジオ'],
    label: '今井合奏'
  },
  {
    id: '20190525',
    recordStatus: true,
    time: {
      timestamp: 1558774800,
      date: '2019年5月25日(土)',
      time: '18:00'
    },
    place: ['第5スタジオ'],
    label: '今井合奏'
  },
  {
    id: '20190601',
    recordStatus: true,
    time: {
      timestamp: 1559379600,
      date: '2019年6月1日(土)',
      time: '18:00'
    },
    place: ['第2スタジオ'],
    label: '指揮なし'
  },
  {
    id: '20190608',
    recordStatus: true,
    time: {
      timestamp: 1559984400,
      date: '2019年6月8日(土)',
      time: '18:00'
    },
    place: ['第5スタジオ'],
    label: '今井合奏'
  },
  {
    id: '20190615',
    recordStatus: true,
    time: {
      timestamp: 1560589200,
      date: '2019年6月15日(土)',
      time: '18:00'
    },
    place: ['第2スタジオ'],
    label: '今井合奏'
  },
  {
    id: '20190622',
    recordStatus: true,
    time: {
      timestamp: 1561194000,
      date: '2019年6月22日(土)',
      time: '18:00'
    },
    place: ['第2スタジオ'],
    label: '高橋合奏'
  },
  {
    id: '20190629',
    recordStatus: false,
    time: {
      timestamp: 1561798800,
      date: '2019年6月29日(土)',
      time: '18:00'
    },
    place: ['第4スタジオ'],
    // label: '高橋合奏'
  },
  {
    id: '20190706',
    recordStatus: true,
    time: {
      timestamp: 1562403600,
      date: '2019年7月6日(土)',
      time: '18:00'
    },
    place: ['第1スタジオ'],
    label: '今井合奏'
  },
  {
    id: '20190713',
    recordStatus: true,
    time: {
      timestamp: 1563008400,
      date: '2019年7月13日(土)',
      time: '18:00'
    },
    place: ['第5スタジオ'],
    label: '今井合奏'
  },
  {
    id: '20190720',
    recordStatus: true,
    time: {
      timestamp: 1563613200,
      date: '2019年7月20日(土)',
      time: '18:00'
    },
    place: ['第1スタジオ'],
    label: '今井合奏'
  },
  {
    id: '20190728',
    recordStatus: true,
    time: {
      timestamp: 1564304400,
      date: '2019年7月28日(日)',
      time: '18:00'
    },
    place: ['第5スタジオ'],
    label: '高橋合奏'
  },
  {
    id: '20190810',
    recordStatus: true,
    time: {
      timestamp: 1565427600,
      date: '2019年8月10日(日)',
      time: '18:00'
    },
    place: ['第1スタジオ'],
    label: '宮口先生'
  },
  {
    id: '20190817',
    recordStatus: true,
    time: {
      timestamp: 1566032400,
      date: '2019年8月17日(日)',
      time: '18:00'
    },
    place: ['第1スタジオ'],
    label: '今井合奏'
  },
  {
    id: '20190831',
    recordStatus: true,
    time: {
      timestamp: 1567242000,
      date: '2019年8月31日(土)',
      time: '18:00'
    },
    place: ['コンサートホール'],
    label: '河本先生'
  },
  {
    id: '20190907',
    recordStatus: true,
    time: {
      timestamp: 1567846800,
      date: '2019年9月7日(土)',
      time: '18:00'
    },
    place: ['第1スタジオ'],
    label: '河本先生'
  },
  {
    id: '20190914',
    recordStatus: true,
    time: {
      timestamp: 1568451600,
      date: '2019年9月14日(土)',
      time: '18:00'
    },
    place: ['第1スタジオ'],
    label: '河本先生'
  },
]

module.exports = {
  practiceList
}